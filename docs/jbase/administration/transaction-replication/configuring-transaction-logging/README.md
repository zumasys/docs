# CONFIGURING TRANSACTION LOGGING

**Created At:** 3/21/2018 7:04:53 AM  
**Updated At:** 3/30/2018 12:56:56 PM  


## Configuring Transaction Log Files/Sets

The jlogadmin command is used to configure where jbase writes the transaction logs to.  It is best these logs be put on a seperate drive/partition from the main system.  Do not put the log files inside your normal jbase file structure.  For example, if your jbase application is at /dbms you should not put the logs under /dbms.  It is best to have a separate drive/partition to store the logs.  On unix for example you could mount a new partition under /tjlogs and put the logs there.  On Windows you could mount a new drive on L: and put the logs there.   If you were to put the logs under the /dbms directory your backups would then also include your transaction log files which is usually not desired.

A normal jbase user must have write permissions to where you put the logs as that user will be committing changes to the logs.

## jlogadmin

The jlogadmin command allows for the administration of the jBASE Transaction Journal. The jlogadmin command will enabled for interactive usage when invoked by the super-user/Administrator; execution by other users being restricted to read- only. All administration tasks contained within the jlogadmin utility can also be invoked from the command line, using jlogadmin, with optional parameters.

When the jlogadmin command is executed interactively, navigation to the next field is by using the tab key or cursor-down key and to the previous field by the cursor-up key. Each field can be modified using the same editor type commands as available in jsh. Changes to a particular field are effected by the &lt;Enter&gt; key and CTRL-X is used to exit from interactive mode.

![](./1521064916419-1521064916419.jpg)

**Status**

Specifies the current transaction journal status. The status can be On/Active, Off/InActive or Susp/Suspended.

**Current switch log set**

Specifies the current log set in use.

**Extended records**

Specifies additional information, the application id, the tty name and the login name are to be logged in the jBASE transaction journal.

**Time between log file syncs**

Specifies the number of seconds between each synchronization of the log set with the disk. Synchronization of the log set means that all memory used by the log set is force flushed to disk. This periodic flushing means that should the system crash, the maximum amount of possible data loss is limited to the updates, which occurred since the last log set synchronization.

**Log notify program**

Specifies the program to execute when the warning threshold of the log set is reached.
 The log notify program is called every time a message is written to jediLoggerAdminLog. You can capture the text of the message by adding arguments to the command line which the notify program can examine using SENTENCE().

**Warning threshold**

If the amount of space consumed in the *file system* that the active  logset resides on exceeds the specified threshold, the log notify program is  run.

**File definitions/Log Set**

Specify each file or partition used for the current log set.  A log set is a single transaction log.  If you are on a 32 bit system that is limiting file sizes to 2 gigs you can define multiple files for a log set.  You must have a idea of how large your logs can get.  If you are on a system that allows files larger than 2 gigs then it is recommended to assign a single file.  The different log sets are used to allow you to have multiple logs.  For example you may choose to rotate your logs once a day, therefore each day will have it's own transaction log.  This is important when you restore transaction logs or use transaction replication.  For example, if you have transaction replication enabled and you first turn it on it will replay/commit the entire transaction log it starts with.  Therefore if you rotate logs once a day and near the end of the day you restart the transaction replication service (jlogdupe) it could based on how it is configured replay the entire days transactions.  Therefore if you are restarting the service often you may wish to have a large number of file sets and rotate them hourly for example.



### Configuring the primary logset for Transaction Logging

1. Use the JLOGADMIN command to enter jBASE Transaction Log Configuration Menu

```
JLOGADMIN 
```



2. Press RETURN to enter the Configuration Menu

3. Set the file definition for the primary logset

4. Select file definition #1

5. Enter the file location of the primary logset

6. Move to the "Status" field of jBASE Transaction Journal Configuration

7. Delete the INACTIVE text in the Status field

8. Type the text ACTIVE to initiate Transaction Journaling



9. Press RETURN to execute

```
INFORMATION: From user JBASEADM at Thu Jan 12 12:28:40 2017
Process ID 12380 , Port 7 , tty CONIN$ 
Status of logger set to active (current log set 1)
```



10. Press RETURN to continue

11. Press Ctrl + X to exit jBASE Transaction Journal Configuration



## ADDING A FILE TO TRANSACTION LOGGING

1. Use the JCHMOD command with option +L to add logging for the specified file

```
JCHMOD +L TEST
```



2. Use the JSTAT command with option -v to verify logging is enabled for the specified file

```
JSTAT -v TEST
File C:\jBASE\JBASEADM\TEST
Type=J4 , Hash method = 5
Created at Wed Jan 04 13:20:40 2017
Groups = 3 , Frame size = 4096 bytes , Secondary Record Size = 8192 bytes
Restore re-size parameters : (none)
File size = 16384 bytes , Inode = 223511 , Device = Id 45315
Last Accessed Wed Jan 04 21:20:40 2017 , Last Modified Wed Jan 04 21:20:40 2017
Backup = YES , Log = YES , Rollback = YES , Network = NO
CASE = ON - Case sensitive
Record Count = 5 , Record Bytes = 289
Bytes/Record = 57 , Bytes/Group = 96
Primary   file space:   Total Frames = 3 , Total Bytes = 289
Secondary file space:   Total Frames = 0 , Total Bytes = 0
```



## COMMAND-LINE SYNTAX

In addition to the interactive screen setup facility, there are options which can be added to the jlogadmin command execution. This allows the administrator to create scripts which can be run either at pre-defined times or intervals; or in response to transaction journal events (usually error handling events).  For example log rotation is done by using the -l command.  There is no daemon that is automatically managing the log rotation.  On unix for example you would add a cron job that would execute jlogadmin -l next.

The command is invoked by the following:

**jlogadmin –{options}**

Where {options} are identified as:

##### 



|  OPTION<br> | DESCRIPTION<br> |
| --- | --- |
| -a status<br> | Set status On/Active, Off/Inactive, or Susp/Suspend<br> |
| -c<br> | Create file in log set if does not exist. ( use with -f )<br> |
| -d[1-4]<br> | Delete logset<br> |
| -f set,fileno,file<br> | Change log filename in log set where<br><br>Set:  Logset<br><br>fileno: File number<br><br>File: File name<br> |
| -h<br> | Display help<br> |
| -i[1-4],filename{,filename...}<br> | Import a log set to override one of the 4 standard log sets. The -o argument is optional. If used it suppresses the warning and confirmation message. You can specify  up to 16 filenames to define the imported log set<br> |
| -j pwd<br> | Password protect journal with “pwd”<br> |
| -k pid | \* | ?<br> | Kill jlogdup process ‘pid’ or ‘\*’ all or ‘?’ to list.<br> |
| -l num | next | eldest<br> | Switch to log set where num log set number 1-4 next next sequential log set eldest earliest log set<br> |
| -m<br> | Set to encrypt all records “ON” or “OFF”<br> |
| -n program<br> | Set threshold notify program.<br> |
| -o<br> | Perform operation without checking if the specified log set is empty. Used with -f and -t options.<br> |
| -p<br> | Checkpoint every “nn” minutes<br> |
| -r<br> | Set the sync all transactions to “ON” or “OFF”<br> |
| -s secs<br> | Set synchronization period<br> |
| -t<br> | Truncates log set n. The log set may not be the current switched set. This option ensures that disk space will be freed and is sometimes preferable to "rm" which may not free the disk space if any process still has log files open<br> |
| -w pp, ii, ss<br> | Set threshold where:<br><br>pp -  Initial warning percent,<br><br>ii - Every  percent after initial percent,<br><br>ss - E very  second after initial percent.<br> |
| -x status<br> | Set extended log record ON or OFF<br> |
| -C<br> | Clear transaction journal administration log file jediLoggerAdminLog<br> |
| -I<br> | Display the statistics if a log set using the embedded information<br> |
| -V<br> | View transaction journal administration log file jediLoggerAdminLog<br> |


### 


Back to [Transactional Journaling](introduction-to-transactional-journaling)
