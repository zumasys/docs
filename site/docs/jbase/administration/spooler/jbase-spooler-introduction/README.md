# jBASE Spooler Introduction

**Created At:** 9/20/2018 9:04:42 AM  
**Updated At:** 1/24/2019 8:06:06 AM  
**Original Doc:** [jbase-spooler-introduction](https://docs.jbase.com/44205-spooler/jbase-spooler-introduction)  

**Tags:**
<badge text='spooler' vertical='middle' />

## Description 

The following commands are provided by the jBASE spooler, all menu options are also provided as separate executables for command line execution.


| Command<br> | Description<br> |
| --- | --- |
| SP-ASSIGN =F0<br> | Assign to formqueue name F0<br> |
| SP-ASSIGN F0<br> | Assign to formqueue zero as queuename F0<br> |
| SP-ASSIGN Q0<br> | Assign to formqueue zero as queuename Q0<br> |
| LISTPTR<br> | Display status of all printer numbers/queues.<br> |
| LISTPEQS<br> | Display status of all print jobs<br> |
| SP-JOBS<br> | Display status of all print jobs<br> |
| SP-EDIT<br> | Edit print job for despooling<br> |
| SP-OPEN<br> | Open print job<br> |
| SP-CLOSE<br> | Close print job<br> |
| SP-PURGE<br> | Clear jobs when all else fails<br> |
| SP-STATUS<br> | Display status of all printer queues<br> |




A jspprint despooler dequeues print jobs from each assigned queuename.

The jBASE command jlp can also be used to print files directly or from stdin. e.g.

```
jlp FileName
echo Output | jlp
```



Spooler information can also be obtained directly using the following jspstatus functions :


| jspstatus 1<br> | Display device information. Option (R displays real user ids )<br> |
| jspstatus 2<br> | Display print job information<br> |
| jspstatus 3<br> | Display assignment information<br> |
| jspstatus 4<br> | Display open job information<br> |




**Unix**

```
:SP-NEWTAB - Clear all spooler entries.
:REST-SPOOLER - Restart all spooler queues.
```



**Windows**

```
SP-NEWTAB - Clear all spooler entries.
REST-SPOOLER - Restart all spooler queues.
```



Back to [Spooler](jbase-spooler).
