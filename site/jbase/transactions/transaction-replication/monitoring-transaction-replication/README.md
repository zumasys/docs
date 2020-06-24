# Monitoring Transaction Replication

<PageHeader />

**Tags:**
<badge text='tj' vertical='middle' />
<badge text='monitoring' vertical='middle' />
<badge text='transaction replication' vertical='middle' />
<badge text='jlogmonitor' vertical='middle' />
<badge text='jlogstatus' vertical='middle' />

## jLOGSTATUS

The [jlogstatus](./../jlogstatus) program can give an overview of both the transaction logging and replication system.  See also [jlogstatus](./../jlogstatus) documentation for more detail. The command:

```
JLOGSTATUS -a
```

may display something like:

```
Journal status:                         active
Configuration file created:             14:15:35 29 DEC 2016 , by JBASEADM from port 5
Configuration file modified:            12:28:40 12 JAN 2017 , by JBASEADM from port 7
Full log warning threshold:             70 percent , thereafter every 1 percent or 300 secs
Journal files synced every:             10 seconds , last sync 12:28:40 12 JAN 2017
Journal checkpointed every:             10 minutes
Background sync demon:                  (inactive)
Extended record:                        OFF
Encrypted records:                      OFF
Transaction Sync:                       ON
Admin log file:                         12 entries , in file C:\jBASE\CurrentVersion\config\jediLoggerAdminLogAdmin
log notify program:                     (undefined)
Current log file set:                   1 , date range 10:14:56 30 DEC 2016 to 21:15:30 11 JAN 2017
\JBASE\JBASEADM\TJ2:                    46.34% capacity
Total record count:                     207,699
Total byte count:                       46,905,272
jlogdup program status:                 NONE active
Status log set 1 (current):             1 files , 207699 records , 46905272 bytes used
                                        Date range 10:14:56 30 DEC 2016 to 21:15:30 11 JAN 2017 Not Archived
Status log set 2:                       No files defined
Status log set 3:                       No files defined
Status log set 4:                       No files defined
Status log totals:                      1 files , 207699 records , 46905272 bytes used
                                        Date range 10:14:56 30 DEC 2016 to 21:15:30 11 JAN 2017
Committed transactions:                 0
Aborted transactions:                   0
Total transaction time:                 0.00 Secs
Average transaction time:               0.0000 Secs
```

### jLOGMONITOR

The jlogmonitor command can be used to monitor potential problems with the [jlogdup](./../jlogdup) process. It will report errors when specific trigger events occur. jlogmonitor can be run in the foreground but will usually be run as a background process (using the standard –Jb option). The command is invoked as:

```
jlogmonitor {-h|?} {-ccmd} {-Cnn} {-Dnn} {-E} {-Inn) {-Snn}
```

Where option may be:

| Option | Description |
| --- | --- |
| -Nnn | Switch to next log set if file capacity exceeds nn%. |
| -c**cmd**  | The command **cmd** is executed when an error occurs. |
| -C**nn**  | If the file system utilization of the journal log exceeds **nn**% full then an error message is displayed. The error message is repeated for every 1% increase in file system utilization. |
| -D**nn**  | If no records are processed by a jlogdup process (or if there is no jlogdup process active), then after **nn** minutes of inactivity an error message is displayed. The error message is repeated every **nn** minutes the jlogdup process(es) are inactive. |
| -E | If the jlogdup program reports an error, this option causes jlogmonitor to also display an error. The actual nature of the error can only be viewed by either looking at the screen where the jlogdup process is active, or by listing the jlogdup error message file (assuming the –eERRFILE option was used). |
| -h | display help |
| -l**nn**  | The status of the journaler can be ACTIVE , INACTIVE or SUSPENDED. Should the status of the journaler be set to either INACTIVE or SUSPENDED (with jlogadmin) for more than **nn** minutes, then an error message will be displayed. The error message will be repeated every **nn** minutes that the journaler is not active |
| -S**nn**  | This option is used to determine if any updates are being applied to the journal logs. If there are no updates applied to the current journal log set for **nn** minutes then an error message is displayed. The error message is repeated for every **nn** minutes that the system is inactive. |

> ### Note
>
> At least one of the options, -C, -D, -E, -I or -S, must be specified.

### Example

```
jlogmonitor –c"MESSAGE * %"
```

The command "MESSAGE \* %" is executed for every message sent to the screen by jlogdup. The use of % is specially interpreted by the jlogmonitor program and will be replaced with the error message.

Back to [Transactional Journaling](./../introduction-to-transaction-journaling)

<PageFooter />
