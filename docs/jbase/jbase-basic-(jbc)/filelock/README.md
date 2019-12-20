# FILELOCK

**Created At:** 8/31/2017 7:17:10 AM  
**Updated At:** 12/11/2019 9:55:17 AM  


## Description

The **FILELOCK** statement is used to acquire a lock on an entire file. This prevents other users from updating the file until the program releases it. It takes the general form:

```
FILELOCK filevar {LOCKED statements} {ON ERROR statements}
```

A **FILELOCK** statement that does not specify lock type is equivalent to obtaining an update record lock on every record of the file. An open file is specified by file variable (in the above context, ***filevar***). If no file variable is specified, the default file is assumed; if the file is neither accessible nor open, the program enters the debugger.

When the **FILELOCK** statement is executed, it will attempt to take an exclusive lock on the entire file. If there are any locks currently outstanding on the file, then the statement will block until there are no more locks on the file. The use of the **LOCKED** clause allows the application to perform an unblocked operation.

When the **FILELOCK** statement is blocked waiting for a lock, other processes may continue to perform database operations on that file, including the removal of record locks and the taking of record locks. Once the **FILELOCK**is taken, it will block ALL database accesses to the file whether or not the access involves record locks. i.e. a [READ](277646-read) will block once it has been executed, as will, [CLEARFILE](266853-clearfile) etc,. The lock continues until the file is closed, the program terminates, or a [FILEUNLOCK](271549-fileunlock) statement is executed.

## Note:


> The **FILELOCK** statement might differ to those found on other vendors systems. It should also be noted that the use of these statements for other than administration work, for example, within batch jobs, is not recommended. The replacement of such with more judicious use of item locks is advised.


The **FILELOCK** command is implemented using the native locking mechanism of the operating system and is entirely at its mercy. Because of this, some slight implementation differences between operating systems might be noticed.

The uses of the native (UNIX) locking mechanism means the file in question ***must not/can not***use the jBASE locking mechanism (jDLS). A file can be set to use the native locking mechanism by using the **jchmod** command:

```
jchmod +N filename {filename ...}
```

Alternatively, at file creation:

```
CREATE-FILE filename 1,1 23,1 NETWORK=TRUE
```

If the file continues to use the jBASE record locking, then the ON ERROR clause will be taken and the [SYSTEM(0)](282982-system-functions) and [STATUS](278661-status-function) functions will set to 22 to indicate the error.

An example of use is as:

```
 OPEN "filename" TO FILE_VAR ELSE ABORT 201, "this file"
 FILELOCK FILE_VAR LOCKED STOP 'FILE IS ALREADY LOCKED'
 PRINT "The file is locked."
```



Go back to [jBASE BASIC](263498-jbase-basic).


