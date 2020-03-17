# PN5_60632

**Created At:** 10/3/2017 7:46:13 AM  
**Updated At:** 10/16/2017 9:52:57 PM  
**Original Doc:** [pn5_60632](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60632)  
**Original ID:** 279158  
**Internal:** No  

## Description

Reduce default spooler sleep time

### Previous Release Behavior

The default spooler sleep time was 30 seconds.

### Current Release Behavior

The default spooler sleep time is now 5 seconds but can be overridden with the JBC\_DESPOOLSLEEP environment variable.

The minimum sleep time is 3 seconds.

Back to [5.6.2 release Notes](./../README.md)
