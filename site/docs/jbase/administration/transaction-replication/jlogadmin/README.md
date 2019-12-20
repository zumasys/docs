# jlogadmin

**Created At:** 4/3/2018 9:29:26 PM  
**Updated At:** 4/19/2018 12:41:12 AM  
**Original Doc:** [306207-jlogadmin](https://docs.jbase.com/43995-transactional-journaling/306207-jlogadmin)  


## Description 

The command may be used as:

```
 jlogadmin –{options}
```

Where {options} are identified as:

##### 



|  Option<br> | Description<br> |
| --- | --- |
| -R<br> | Run even though you are not root or administrator<br> |
| -a status<br> | Set status On/Active, Off/Inactive, or Susp/Suspend<br> |
| -c<br> | Create file in log set if does not exist. ( use with -f )<br> |
| -d[1-4]<br> | Delete logset<br> |
| -e<br> | Archive files from logset n to destination folder/path<br> |
| -f set,fileno,file<br> | Change log filename in log set where<br><br>Set:  Logset<br><br>fileno: File number<br><br>File: File name<br> |
| -h | -?<br> | Display help<br> |
| -i[1-4],filename{,filename...}<br> | Import a log set to override one of the 4 standard log sets. The -o argument is optional. If used it suppresses the warning and confirmation message. You can specify  up to 16 filenames to define the imported log set<br> |
| -j pwd<br> | Password protect journal with “pwd”.  To turn password feature off set password to OFF.<br> |
| -k pid | \* | ?<br> | Kill jlogdup process ‘pid’ or ‘\*’ all or ‘?’ to list.  If the sender is connected and you request for the receiver to stop it will continue to run until the sender is also stopped/killed.<br> |
| -l num | next | eldest<br> | Switch to log set where<br>   **num    =** log set number 1-4<br>   **next    =** next sequential log set<br>   **eldest =** earliest log set<br> |
| -m<br> | Set to encrypt all records “ON” or “OFF”<br> |
| -n program<br> | Set threshold notify program.<br> |
| -o<br> | Perform operation without checking if the specified log set is empty. Used with -f and -t options.<br> |
| -p<br> | Checkpoint every “nn” minutes<br> |
| -r<br> | Set the sync all transactions to “ON” or “OFF”<br> |
| -s secs<br> | Set synchronization period<br> |
| -t<br> | Truncates log set n. The log set may not be the current switched set. This option ensures that disk space will be freed and is sometimes preferable to "rm" which may not free the disk space if any process still has log files open<br> |
| -w pp, ii, ss<br> | Set threshold where:<br><br>pp -  Initial warning percent,<br><br>ii - Every  percent after initial percent,<br><br>ss - E very  second after initial percent.<br> |
| -x status<br> | Set extended log record ON or OFF.  This will make the transaction log send extended information on a record if it exists, such as application ID, logon name, etc.<br> |
| -C<br> | Clear transaction journal administration log file jediLoggerAdminLog<br> |
| -I<br> | Display the statistics if a log set using the embedded information<br> |
| -V<br> | View transaction journal administration log file jediLoggerAdminLog<br> |




Config entries are saved to $JBASERELEASEDIR:/config/jediLoggerConfig.  When upgrading make sure you copy this file over to your new config directory.




> ### Note:
> 
> By default the command must be used as root or administrator.  One can override this with the -R (must be upper case) switch. The command can be restricted with normal operating system controls.






Back to [Transaction Journaling](introduction-to-transactional-journaling)
