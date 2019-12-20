# FILEUNLOCK

**Created At:** 8/31/2017 7:31:10 AM  
**Updated At:** 1/5/2018 1:24:28 PM  
**Original Doc:** [271549-fileunlock](https://docs.jbase.com/36868-jbase-basic/271549-fileunlock)  


# Description

This statement is used to release a file lock set by the [FILELOCK](271547-filelock) statement. It takes the general form:

```
FILEUNLOCK [file.variable] [ON ERROR statements]
```

where

- *file.variable* specifies a file previously locked with a [FILELOCK](271547-filelock) statement. If *file.variable* is not specified, the default file with the [FILELOCK](271547-filelock) statement is assumed. If *file.variable* is not a valid file variable then the **FILEUNLOCK** statement will enter the debugger.
- The ON ERROR clause is optional in the **FILEUNLOCK**statement. The ON ERROR clause allows the programmer to specify an alternative for program termination when encountering a fatal error during processing of the **FILEUNLOCK** statement. If a fatal error occurs, with no ON ERROR clause specified, the program enters the debugger.


If the ON ERROR clause is used, the value returned by the [STATUS](278661-status-function)  function is the error number.

In the following example, the first **FILEUNLOCK** statement unlocks the default file. The second **FILEUNLOCK**statement unlocks the file variable FILE.

```
OPEN '','file_one' ELSE STOP "Can't open file_one"
FILELOCK
FILEUNLOCK

OPEN 'file_two' TO FILEVAR ELSE STOP
FILELOCK FILEVAR
FILEUNLOCK FILEVAR
```



Go back to [jBASE BASIC](263498-jbase-basic).
