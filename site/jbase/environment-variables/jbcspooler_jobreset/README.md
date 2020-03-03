# JBCSPOOLER_JOBRESET

**Created At:** 7/13/2018 2:03:36 PM  
**Updated At:** 8/20/2018 1:04:58 PM  
**Original Doc:** [jbcspooler_jobreset](https://docs.jbase.com/41717-environment-variables/jbcspooler_jobreset)  
**Original ID:** 326818  
**Internal:** No  

**Tags:**
<badge text='reset' vertical='middle' />
<badge text='job' vertical='middle' />
<badge text='spooler' vertical='middle' />
<badge text='environment variable' vertical='middle' />

## Description

Setting this environment variable changes the way in which the counter for print jobs is reset. By default, it is reset when the first print job generated after midnight is created. Setting JBCSPOOLER\_JOBRESET causes the job number to be reset only when it reaches the value specified by JBCSPOOLER\_JOBRESET. Also see the documentation on [job numbering](https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/spo2_job_numbers.htm).



## Values

Integers greater than 1.



## Default

Not set

## Setting

It must be set before the jShell is invoked.

If the job number reset mechanism is to be used, care should be taken that the environment variable is set globally so that the resetting of the counter is consistent.

**UNIX**

```
export JBCSPOOLER_JOBRESET=100000
```



**Windows**

```
set JBCSPOOLER_JOBRESET=50000
```
