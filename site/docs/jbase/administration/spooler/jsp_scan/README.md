# JSP_SCAN

**Created At:** 9/18/2018 9:59:49 AM  
**Updated At:** 1/24/2019 8:59:14 AM  
**Original Doc:** [jsp_scan](https://docs.jbase.com/44205-spooler/jsp_scan)  
**Original ID:** 339626  
**Internal:** No  


## Description 

jsp\_scan is a scan and  repair utility for the jBASE spooler. It's main use is to clear jobs that are stuck with a status of *ED*. This can happen when the process [editing](./../sp-edit) the print job is abnormally terminated.

```
jsp_scan {(options)}
```

where:


| Option<br> | Explanation<br> |
| --- | --- |
| v<br> | Verbose; show all spool records<br> |
| j<br> | Show Job records; Default is just to show FormQueue info<br> |
| c<br> | Clear any invalid SP-EDIT jobs (must be admin) (implies -j)<br> |




## Note: 


> Use the -h option to display a list of valid options.




### EXAMPLE



```
#jsp_scan -c
```

```
Job Number :48
Queue :FARQ (1)
Status :EDIT by port 29 (pid 5050)*** pid is not running *** (6)
Size :16140
Copies :1
Options :HS
Created :walter 0 27 JAN 2003 17:35:02
SP-EDIT process 5050 is not running; Clear job (y/N) :y
JOB Cleared
```



Back to [Spooler](./../jbase-spooler).
