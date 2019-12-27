# JBC_DESPOOLSLEEP

**Created At:** 7/13/2018 2:22:45 PM  
**Updated At:** 8/8/2018 7:13:03 AM  
**Original Doc:** [326821-jbc_despoolsleep](https://docs.jbase.com/41717-environment-variables/326821-jbc_despoolsleep)  
**Original ID:** 326821  
**Internal:** No  

**Tags:**
<badge text='environment variable' vertical='middle' />
<badge text='spooler' vertical='middle' />
<badge text='despool' vertical='middle' />

## Description

By default, the jBASE despooler processes check for queued jobs every 5 seconds. This environment variable can be used to decrease or increase that interval.

The minimum sleep time this can be set to is 3 seconds.



## Values

Number of seconds.



## Default

5



## Setting

It should be set before form queues are started.

```
set JBC_DESPOOLSLEEP=10     [Windows]
export JBC_DESPOOLSLEEP=10  [Unix]
```
