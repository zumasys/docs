# PH-STATUS

**Created At:** 6/14/2018 2:19:39 PM  
**Updated At:** 7/19/2018 12:06:14 PM  
**Original Doc:** [ph-status](https://docs.jbase.com/46465-background-processing/ph-status)  


## Description 

The jBASE PH-STATUS command displays status and history information for each jBASE background task process. The information is read from the jBTP logfile. The default location of the logfile is /usr/jBTP/logfile. The command takes the general form:

```
PH-STATUS {task-id n} {(Options}
```

where:

- task-id is the name of the jBASE background task process specified in the PH-START procedure. Use an asterisk (\*) to indicate that you want all tasks for port number n.
- n is the port number of the jBASE background task process for which to limit the display.


and options:

- P Redirect output to the spooler.




### Note: 


> The information displayed in the PH-STATUS screen is contained in columns:
> 
> ```
> TASK-ID..LINE ACCOUNT. STARTER-ACC DATE....... TIME.. STATUS OP OUTFL#
> ```



| Column<br> | Description<br> |
| --- | --- |
| TASK-ID<br> | is the name identifier give to the jBASE background task process by the PH-START procedure.<br> |
| LINE<br> | is the port number running the jBASE background task process.<br> |
| ACCOUNT<br> | is the userid/account-name that the jBASE background task process is using for execution.<br> |
| STARTER-ACC<br> | is the name of the userid/account from which the jBASE background task process was started.<br> |
| DATE<br> | is the date the jBASE background task process was started.<br> |
| TIME<br> | is the time the jBASE background task process was started.<br> |
| STATUS<br> | is the current status of the jBASE background task process.(see "Status Codes" below).<br> |
| OP<br> | indicates the options that were assigned to the jBASE background task process.<br> |
| OUTFL#<br> | is the spooler job number where output has been redirected.<br> |


The jBTP log file must be cleared manually, by the PH-CLEAR command.



### Status Codes 


| Code<br> | Description<br> |
| --- | --- |
| A<br> | Process is still active.<br> |
| S<br> | Process terminated by UNIX system command.<br> |
| T<br> | Process terminated normally.<br> |
| X<br> | Process terminated incorrectly. Usually because the executing process requires input but there are no more statements left in the command stack.<br> |
| K<br> | Process terminated by the PH-KILL command.<br> |
| Q<br> | Process queued for port.<br> |




### EXAMPLE

```
LES ~ -->PH-STATUS
jBTP Process status at 06 JAN 1999 17:21:25   06 JAN 1999            Page 1
TASK-ID..LINE. ACCOUNT.... STARTER-ACC DATE....... TIME.... STATUS OP OUTFL#
SALESREP 101  SALES        SALES       06 JAN 1999 09:15:02      A        12
INVUP    103  INV          ACCOUNTS    06 JAN 1999 10:30:55      T  T
ACC3     130  ACCOUNTS     ACCOUNTS    06 JAN 1999 13:00:40      K        42
TEL.LIST 999  ADMIN        ADMIN       06 JAN 1999 15:06:20      A         6
```



Back to [jBPT](jbtp)
