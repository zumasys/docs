# READDELAY

**Created At:** 8/30/2018 1:35:47 PM  
**Updated At:** 5/16/2019 6:30:52 PM  
**Original Doc:** [readdelay](https://docs.jbase.com/48575-jkeyauto/readdelay)  

**Tags:**
<badge text='program profiling.' vertical='middle' />

## Description

When a [PIPEREAD](piperead) is executed with a FOR or UNTIL clause, data is sought from the pipe every 0.1 seconds. This means the granularity of the timing results will be to only 0.1 of a second. Decreasing this value means the pipe is checked more often, giving better accuracy and less grain, but at the expense of jkeyauto requiring more system resources to run. Increasing this value means the pipe is checked less often, giving less accuracy but also less resources required.

The READDELAY statement changes this delay between reading data from the pipe. However the default of 0.1 seconds should be sufficient for most circumstances.

It's general usage is as:

```
READDELAY expression
```



An example of use is as:

```
READELAY 0.5
```

for jkeyauto generated timings will only be accurate to the nearest half a second. However jkeyauto will require considerably less CPU time to execute all the PIPEREAD commands it has to do.
