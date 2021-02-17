# PN1061

<PageHeader />

## Description

A group lock could hang an entire system

## Previous Release Behavior

If the circumstances were right, then a group lock on a dynamic file on Windows could be set permanently, causing the entire system to hang. The way this worked was as follows:

jBASE would take a group lock on a dynamic file.

The process would terminate. Maybe a window closed. Or the process was killed. Or there was a segmentation violation.

A second process was waiting on that same group lock. When the first process closes, the second process continues. However, the return code from the .net locking function called WaitForSingleObject is not 0 but WAIT_ABANDONED. This causes the second jBASE process to think the group lock failed, and so the debugger is entered. However, the group lock actually worked and the return code WAIT_ABANDONED is still a success, but an advisory that the lock was closed in unusual circumstances i.e. by the OS when the first process terminated.

The second process now enters the debugger or some other error. At this point it has the group lock set, but because it thought it was NOT set (return code of WAIT_ABANDONED) then there is no status information as to who has the lock.

## Current Release Behavior

The return code of WAIT_ABANDONED is now handled correctly.

The SHOW-ITEM-LOCKS now correctly shows if a lock is set or not, but the process id information might be misleading.

There is no way to forcibly unset the lock from another process.

The advice for a customer experiencing this is to re-start jBASE. Log off all users, and shut down all phantom jobs, background processes, printer despoilers, jbase_agent, and so on. This is the only reliable action. We cannot see what user has retained the lock.

If this happens, we could try finding the process that has retained the lock. This would be a process whose status during a "WHERE (V)" command would NOT be "Waiting on GROUP lock". You could log off all users who aren't stuck on the group lock. This would then release the group lock. The problem is this -- all those processes that were waiting on a lock with the WaitForSIngleObject() function would now themselves get a return code of WAIT_ABANDONED, which in turn sends them into the debugger and causes them to retain the lock, just like the first process. This chain continues until you have to now log off or kill all processes that were waiting on the group lock. In other words, you end up logging off everybody anyway. 

Back to [5.7.11 Release Notes](./../README.md)
  
<PageFooter />
