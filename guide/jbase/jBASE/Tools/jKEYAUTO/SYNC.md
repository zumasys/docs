# SYNC

**Created At:** 8/30/2018 1:37:47 PM  
**Updated At:** 5/16/2019 6:30:35 PM  

**Tags:**
<badge text='program profiling' vertical='middle' />

## Description

This provides some synchronization between multiple copies of jkeyauto. For example, a hundred versions of jkeyauto to simulate 100 users may be run. Once the initial part of the application run, suspending jkeyauto may be desired until all instances are ready to continue. This means all instances of the application will start at the same point - there won't be any timing issues because some are running the application, others are still at the login prompt, others in the login program and so on.

Similar functionality can be executed using the [-S option](options) to jkeyauto. Therefore, scripts can be configured so that they wait on a sync. signal and then an operator starts them all off from the command line.

The sync can be called as:

```
SYNC LOCK|UNLOCK|TEST|WAIT expression {FOR expression_for} {SETTING variable_setting}
```

where:

- **LOCK** shows that lock number "expression" will be locked. No check is made on whether it is already locked or not, or if by the same instance of jkeyauto or not. The lock always works.
- **UNLOCK** shows to unlock the lock number given by "expression". No check is made that the lock is already locked or that this instance of jkeyauto is the lock owner.
- **TEST** allows for checking if the lock number expression is set or not.
- **WAIT** allows for waiting until lock number expression becomes unlocked.
- **expression\_for** allows for the addition of a timeout clause when the "SYNC WAIT" is used. Without this, then the SYNC will wait forever until the lock is unlocked. A value of 0 shows to return immediately.
- **variable\_setting** can be used to show why the SYNC statement returned. It is most useful in association with the WAIT operand but can be used to check for fatal errors in the other statements. It is set differently according to the type of lock.



| LOCK<br> | 0 shows the lock was taken. Any other value is the error number of a fatal error.<br> |
| --- | --- |
| UNLOCK<br> | 0 shows the lock was unlocked. Any other value is the error number of a fatal error.<br> |
| TEST<br> | 0 shows the requested lock is currently unlocked. 1 shows the requested lock is currently locked.<br> |
| WAIT<br> | 0 shows the lock is unlocked or became unlocked. 1 shows the operation timed out. Any other value is the error number of a fatal error.<br> |




An  example of use may be as:

```
SYNC LOCK 0 ;* Ensure lock 0 is locked
again: SYNC WAIT 0 FOR 2 SETTING rc
IF rc EQ 1 THEN PRINT "Waiting for sync . . ." ; goto again
IF rc NE 0 THEN PRINT "Fatal error" ; STOP
PRINT "Benchmark now begins !!!!"
```
