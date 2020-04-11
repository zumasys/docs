# jlogadmin

**Created At:** 4/3/2018 9:29:26 PM  
**Updated At:** 4/19/2018 12:41:12 AM  
**Original Doc:** [306207-jlogadmin](https://docs.jbase.com/43995-transactional-journaling/306207-jlogadmin)  
**Original ID:** 306207  
**Internal:** No  

## Description

The command may be used as:

```
 jlogadmin –{options}
```

Where {options} are identified as:

|  Option | Description |
| --- | --- |
| -R | Run even though you are not root or administrator |
| -a status | Set status On/Active, Off/Inactive, or Susp/Suspend |
| -c | Create file in log set if does not exist. ( use with -f ) |
| -d[1-4] | Delete logset |
| -e | Archive files from logset n to destination folder/path |
| -f set,fileno,file | Change log filename in log set where<br><br>Set:  Logset<br><br>fileno: File number<br><br>File: File name |
| -h | -? | Display help |
| -i[1-4],filename{,filename...} | Import a log set to override one of the 4 standard log sets. The -o argument is optional. If used it suppresses the warning and confirmation message. You can specify  up to 16 filenames to define the imported log set |
| -j pwd | Password protect journal with “pwd”.  To turn password feature off set password to OFF. |
| -k pid | \* | ? | Kill jlogdup process ‘pid’ or ‘\*’ all or ‘?’ to list.  If the sender is connected and you request for the receiver to stop it will continue to run until the sender is also stopped/killed. |
| -l num | next | eldest | Switch to log set where<br>   **num    =** log set number 1-4<br>   **next    =** next sequential log set<br>   **eldest =** earliest log set |
| -m | Set to encrypt all records “ON” or “OFF” |
| -n program | Set threshold notify program. |
| -o | Perform operation without checking if the specified log set is empty. Used with -f and -t options. |
| -p | Checkpoint every “nn” minutes |
| -r | Set the sync all transactions to “ON” or “OFF” |
| -s secs | Set synchronization period |
| -t | Truncates log set n. The log set may not be the current switched set. This option ensures that disk space will be freed and is sometimes preferable to "rm" which may not free the disk space if any process still has log files open |
| -w pp, ii, ss | Set threshold where:<br><br>pp -  Initial warning percent,<br><br>ii - Every  percent after initial percent,<br><br>ss - E very  second after initial percent. |
| -x status | Set extended log record ON or OFF.  This will make the transaction log send extended information on a record if it exists, such as application ID, logon name, etc. |
| -C | Clear transaction journal administration log file jediLoggerAdminLog |
| -I | Display the statistics if a log set using the embedded information |
| -V | View transaction journal administration log file jediLoggerAdminLog |

Config entries are saved to $JBASERELEASEDIR:/config/jediLoggerConfig.  When upgrading make sure you copy this file over to your new config directory.

> ### Note
>
> By default the command must be used as root or administrator.  One can override this with the -R (must be upper case) switch. The command can be restricted with normal operating system controls.

Back to [Transaction Journaling](./../introduction-to-transaction-journaling)

  
<PageFooter />
