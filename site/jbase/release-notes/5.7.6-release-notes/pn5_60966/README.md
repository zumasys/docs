# PN5_60966

**Created At:** 1/15/2020 1:55:33 PM  
**Updated At:** 1/15/2020 2:04:05 PM  
**Original Doc:** [pn5_60966](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60966)  
**Original ID:** 517135  
**Internal:** No  


### Description

**CLEAR-BASIC-LOCKS** and **LIST-EXECUTION-LOCKS** were not functioning.



### Previous Release Behavior

Any locks set by the basic **LOCK** statement would not show up on **LIST-EXECUTION-LOCKS** and could not be cleared by **CLEAR-BASIC-LOCKS**.



### Current Release Behavior

Both commands are now working.

Example program:

```
LOCK 10 ELSE STOP
INPUT w
```



```
LIST-EXECUTION-LOCKS
...
LOCK        PID     PORT

  10       7254        1

[973] 1 LOCKS LISTED.
```



```
CLEAR-BASIC-LOCKS

Polling 2 ports ...

1 LOCKS CLEARED.
```
