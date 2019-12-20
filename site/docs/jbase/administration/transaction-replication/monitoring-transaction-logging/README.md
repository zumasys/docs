# MONITORING TRANSACTION LOGGING

**Created At:** 3/28/2018 8:55:01 PM  
**Updated At:** 3/30/2018 3:48:18 PM  
**Original Doc:** [305765-monitoring-transaction-logging](https://docs.jbase.com/43995-transactional-journaling/305765-monitoring-transaction-logging)  


## Overview

Transaction logging is done by each process.  There are tools to monitor the overview of what the processes are doing and the ability to directly view transaction logs themselves. There are also individual status logs and a simple event framework for handling errors.

### Monitoring the Transaction Log

The program [jlogstatus](305935-jlogstatus) is your primary monitoring tool.  It gives you a very nice overview of how your system is configured, what transaction log set you are on, error/log counts, etc

```
jbase01 BASH-4.2$jlogstatus
Journal status:              active
Configuration file created:  10:16:22 03 NOV 2017 , by root from port 1
Configuration file modified: 00:00:03 29 MAR 2018 , by root from port 5
Journal file sets switched:  00:00:03 29 MAR 2018 , by root from port 5
Full log warning threshold:  70 percent , thereafter every 1 percent or 300

Journal files synced every:  5 seconds , last sync 12:39:36 29 MAR 2018
Journal checkpointed every:  10 minutes
Background sync demon:       (inactive)
Extended record:             ON
Encrypted records:           OFF
Transaction Sync:            ON
Admin log file:              10662 entries , in file /opt/jbase/CurrentVersonfig/jediLoggerAdminLog
Admin log notify program:    TJWARN '~%1~%2~%3'
Current log file set:        3 , date range 00:00:03 29 MAR 2018 to 12:39:3MAR 2018
/opt/jbase/tjlogs/set3/f01:  32.01% capacity
Total record count:          9,189,086
Total byte count:            6,514,464,555
```

## 


## Viewing the Transaction Log

jBASE has a special jEDI driver that will allow you to view a transaction log set directly as if it was a jBASE hash file. When you do this jBASE will create a stub file (dictionary) that will point to one of your transaction logs (by default it will be the current one).

### Create transaction logs

1. Use the CREATE-FILE command to create the primary transaction logging journal

```
CREATE-FILE TJ1 TYPE=TJLOG 
[ 417 ] File TJ1]D created , type = J4 
[ 417 ] File TJ1 created , type = TJLOG
```

This creates an entry in the TJ1 directory: TJ1 JBC\_\_SOB jBASE\_TJ\_INIT SET: set=current terminate=eos

You can now use normal jBASE jQL commands to look at the log.  It is usually helpful to look at this log and see what is logging.  You often will find items such as tmp directories or the spooler that are generating alot of transactions which don't need to be replicated.

The following record types are used in the transaction journal log (see  dictionary item TYPE).


| TYPE<br> | DESCRIPTION<br> |
| --- | --- |
| EOF<br> | end of file<br> |
| WRITE<br> | record Written<br> |
| DELETE<br> | record Deleted<br> |
| CLEARFILE<br> | file Cleared<br> |
| DELETEFILE<br> | file Deleted<br> |
| CREATEFILE<br> | file Created<br> |
| TRANSTART<br> | transaction Started<br> |
| TRANSEND<br> | transaction Committed<br> |
| TRANSABORT<br> | transaction Aborted<br> |


### Log notify program:

This specifies the program to execute when the warning threshold of the log set is reached. The log notify program is called every time a message is written to jediLoggerAdminLog. The text of the message can be captured by adding arguments to the command line which the notify program can examine using SENTENCE(). For example, possibly define the program as:

```
/usr/admin/bin/switchlogs “%1” “%2” “%3”
```

In addition, when the program is loaded, the following are substituted:

```
%1 == {INFORMATION: | WARNING: | FATAL ERROR:} From user root at Wed Sep 04 12:38:23 2002 
%2 == Process ID 12345 , Port 23 , tty /dev/pts/03
%3 == Depends upon the actual error message e.g. "Error number nnn while reading from file /dev/xxxxx"
```



An example of a log notify program, “switchlogs” may be designed to allow automatic switching of logset when the warning threshold is reached:

```
REASON = FIELD(SENTENCE(1),":",1)
PROCESS = SENTENCE(2)
MESSG = TRIM(SENTENCE(3))
IF REASON # "WARNING" OR MESSG[1,21] # "Journal Log Files now" THEN
    STOP
END ELSE
    EXECUTE "jlogadmin -lnext" CAPTURING OUTPUT
END
```



The program identified by the “log notify program” is called each time that a message is entered into jediLoggerAdminLog. It is the responsibility of the called program to deal with the reason for the message being entered. The function SENTENCE returns information from JediLoggerAdminLog about the latest entry.

NOTE: The message is designated INFORMATION, WARNING or FATAL ERROR. This designation can be used by the log notify program to decide on a course of action. The messages that can be logged are:




| TYPE<br> | MESSAGE<br> | STDOUT<br> |
| --- | --- | --- |
| INFORMATION<br> | Log set changed to *s*<br> | Yes<br> |
| <br> | Log set *s*truncated<br> | Yes<br> |
| <br> | File *f*for log set *s*REMOVED<br> | Yes<br> |
| <br> | File *f*for log set *n*changed to *newfilename*<br> | Yes<br> |
| <br> | *n*files imported to log set *n*(see -i option)<br> | Yes<br> |
| <br> | Status of logger set to *status*(current log set *s*)<br> | Yes<br> |
| <br> | Sync count changed from every *n1*seconds to every  *n2* seconds<br> | Yes<br> |
| <br> | Log file warning threshold set to *p*initial percentage thereafter every additional *q*percent or *n*seconds<br> | Yes<br> |
| <br> | Admin. Log Notify Program now set to *program*<br> | Yes<br> |
| <br> | Admin. Log Notify Program REMOVED<br> | Yes<br> |
| <br> | Extended Record Status now set to *on|off*<br> | Yes<br> |
| <br> | Log set switch detected, was set *n1*, now set *n2*<br> | No<br> |
| <br> | Kill initiated on jlogdup process id *pid*: Process id pid from port *n*<br> | Yes<br> |
| <br> | First record read from set *n*<br> | Yes<br> |
| <br> | Termination  Statistics:   usr   *x*,   sys   *y*,   elapsed *z r*records read from current log set number *n*: *r*records, *b*blocks, *rb*record bytes , *e*errors in *file*<br> | Yes<br> |
| WARNING<br> | Journal Log Files now at *p*% capacity<br> | No<br> |
| FATAL ERROR<br> | Unable to open logger configuration file *filename*<br> | Yes<br> |
| <br> | Sync demon appears to have died prematurely<br> | Yes<br> |
| <br> | Error number *errno*while reading from file *filename*<br> | No<br> |
| <br> | Error number *errno*while writing to log file<br> | No<br> |
| <br> | Error errno while writing to log journal file *filename*"<br> | Yes<br> |
| <br> | Error errno while writing to log journal<br> | Yes<br> |
| <br> | Unable to open logger file *filename*<br> | Yes<br> |
| <br> | Out of memory to log update<br> | Yes<br> |




Back to [Transactional Journaling](introduction-to-transactional-journaling)
