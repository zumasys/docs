# UNLOCK

**Created At:** 9/29/2017 2:57:18 PM  
**Updated At:** 10/4/2019 2:51:11 PM  
**Original Doc:** [278987-unlock](https://docs.jbase.com/36868-jbase-basic/278987-unlock)  
**Original ID:** 278987  
**Internal:** No  

## Description

The **UNLOCK** statement releases a previously [LOCK](./../lock)ed execution lock. It takes the general form:

```
UNLOCK{expression}
```

If specifying **expression**, it should evaluate to the number of a held execution lock, for release.

If omitting **expression** then it releases all execution locks held by the current program.

There is no action if the program attempts to release an execution lock that it had not taken.

An example of use is as:

```
LOCK 23 ; LOCK 32
......
UNLOCK
```

Locks are in memory only and will not persist across a server reboot or jBASE service restart.

See also: [LOCK](./../lock).

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
