# JSP_SCAN

<PageHeader />

## Description

jsp\_scan is a scan and  repair utility for the jBASE spooler. It's main use is to clear jobs that are stuck with a status of *ED*. This can happen when the process [editing](./../sp-edit) the print job is abnormally terminated.

```
jsp_scan {(options)}
```

where:

| Option | Explanation |
| --- | --- |
| -v | Verbose; show all spool records |
| -j | Show Job records; Default is just to show FormQueue info |
| -c | Clear any invalid SP-EDIT jobs (must be admin) (implies -j) |
| -h | Help |

## Example

```
jsp_scan -c
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

  
<PageFooter />
