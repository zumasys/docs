# EXIT

**Created At:** 8/30/2018 1:28:20 PM  
**Updated At:** 5/16/2019 6:32:00 PM  
**Original Doc:** [336877-exit](https://docs.jbase.com/48575-jkeyauto/336877-exit)  
**Original ID:** 336877  
**Internal:** No  

**Tags:**
<badge text='program profiling' vertical='middle' />

## Description

This command exits the executing program. It takes the form:

```
exit {expression}
```

where expression is the NUMERIC exit code which will be passed back to the parent process.

An example of use may be:

```
exitcode = 3
exit exitcode
```

to return an exit code of 3 to the parent process.
