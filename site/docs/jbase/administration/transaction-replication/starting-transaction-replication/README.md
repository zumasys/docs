# STARTING TRANSACTION REPLICATION

**Created At:** 3/21/2018 6:45:06 AM  
**Updated At:** 6/28/2018 1:46:47 PM  
**Original Doc:** [configuring-transaction-replication](https://docs.jbase.com/43995-transactional-journaling/configuring-transaction-replication)  
**Original ID:** 304802  
**Internal:** No  


## Overview

Transaction Replication is handled by the [jlogdup](./../jlogdup) program. This program needs to be run on both the sender and receiver systems with the appropriate switches.  The sender will take a existing transaction journal and send it to the receiver system which will commit the changes.

## Quick Start

Prerequisites

1. Machines must be able to ping each other.
2. You must start up Receiving system first.
3. Transaction Journaling license must exist on both machines.
4. Receiving system must allow connections to port 6767.  If you have a firewall you must allow this access.
5. The receiver system must have a cloned copy of the production system.
6. Verify user to run processes can open enough file handles.




## Clone System

The receiving system must have a licensed copy of jBASE with transaction journaling enabled.  You must then copy over the existing system to the receiver system.  Here are a few options to do this.

### 


### Straight copy

1. Shut down sending system.  You can only use this process if you can stop the existing system. The safest way to do this is to use DB-PAUSE. The system must not be doing any activity.  If you cannot do this then utilize the jBackup process.
2. Copy your entire jBASE application to the second system.  You do not need to copy over the actual jBASE release directory but you do need your SYSTEM account.  Options to do this are 
    - linux - scp
    - linux - rsync
    - linux - samba shares
    - linux - zip or tar the account and move it over
    - Windows - zip the file and copy over and unzip
    - Windows - Windows sharing.
3. Verify Transaction Logging is turned on sender system.  You now have a cloned system and you want to make sure all updates are captured on the sender system moving forward.
4. DB-RESUME production system.


## 


### jbackup/jrestore

1. This option will allow you to do this with a system that is active.  You should not be running backups although during business hours when the system is busy as it can slow it down.
2. Verify transaction logging is turned on sender system.  As we run the jbackup process we want to make sure all updates to the sender system are logged.
3. Run jbackup of your primary system.  Verify you have enough disk space.  The backup is not compressed therefore make sure where you are saving the backup to has as much space as your jBASE application.
    - linux - find /&lt;your jBASE applicaiton directory&gt; -print | jbackup -f /tmp/jbasebackup -v
    - windows - jfind /&lt;your application directory&gt; -print | jbackup -f c:\tmp\jbackup -v
4. copy file over to the second system
5. Run jrestore to restore system. 
    - cd to same directory you ran jfind/find from above.
    - jrestore -f &lt;path to backup file&gt; -P -v   (This is a test and you can see what is in your backup.  Verify the path that jrestore wants to restore to.  The directory structures must match what the sending system)
    - jrestore -f &lt;path to backup file&gt; -v


### 


### Cloning

1. With this option you use tools you have to make a clone/duplicate of your production box.  Cloning is a advanced feature and it is expected that you have knowledge on how to do this correctly.  This process you should be doing with the sender box shut down.  You cannot clone a active box because the actual jBASE files may be corrupted due to them being in use.
2. Update the cloned box to be a new box.  
    - New IP
    - Change host name
    - Update jBASE License


### 


### Common Steps for either process

1. Verify all permissions are setup correctly.  If this is a new system you must create all your users and groups to match the sender system.
2. Manually copy over your SYSTEM account if it is not in your application directory.  Often the SYSTEM account is located in the jBASE release directories.  Manually copy this over and store it at the same location as your sender system.
3. Log into jBASE on secondary system and verify it is working.  It should now match the sending system.  If it does not work then re-review your permissions/paths/user setup scripts




## Receiving System

You have to startup jlogdup on the receiving system first.  Below is a sample command to do this.  In this example we are going to run the program directly on our line with verbosity turned on.  This allows you to see exactly what it is doing. This process requires you have a full jBASE environment setup and working.  You do not need to be root but you must be using a user with permissions to work with jBASE.  For testing it often works to log into jBASE with a working user and then shell out to jBASE to run the command. On windows do this from the console as shelling out to a cmd prompt from a telnet session usually hangs.

```
jsh NW ~ -->bash
bash-4.2$  jlogdup -v -e /tmp/tjgeterrs -l /tmp/tjgetlog input set=socket hostname=10.10.17.152 port=6767 terminate=wait output set=database
10:11:04 05 APR 2018 : STATUS:
Begin jlogdup process: From set 'set=socket hostname=10.10.17.152 port=6767 terminate=wait' to  set 'set=database'
```




| Option<br> | Description<br> |
| --- | --- |
| -m<br> | This is the number of errors at which time jlogdup will actually stop.  How you wish to handle errors influences what you set this to.  If you want to immediately chase a replication issue you can set this very low.  If you want to allow it to run and evaluate error logs set this number very high.  Important note is jBASE will transaction log anything jBASE touches.  Therefore if you are writing items to a directory on the sender machine that does not exist on the remote machine and do not mark the file/directory to not log you will get errors.  A good example may be a temporary file that may only exist on the production system.<br> |
| -e<br> | Error file to send database errors to.  This file can be a hash file and is a pick multivalue.  It has diagnostics information and contains the original update.  This file or directory must already exist.<br> |
| -l<br> | Information log.  This log is a normal log file (not a hash file).<br> |
| input<br> | Input options for the receiver<br> |
| set<br> | As we are the receiver the set is socket.  <br> |
| hostname<br> | Since we are the receiver this is set to us.  This must be a valid dns name that you can ping.  You can also use a IP address.<br> |
| port<br> | The port we are listening on.  This should be the same as the sender.  If you have a firewall you must add an exception for this port.<br> |
| terminate<br> | Setting this to wait will make jlogdup not stop once the transaction log is caught up.  It will wait for more transactions.<br><br> |
| output<br> | This is the output options.  <br> |
| set<br> | Since we are the receiver we set this to database.  This means jlogdup will attempt to write updates to exactly where they are on Sender machine.  You can override this with options.<br> |


## 


## Sending System

```
jsh NW ~ -->bash
bash-4.2$ jlogdup -v input set=current terminate=wait output set=socket hostname=10.10.17.152 port=6767
10:11:04 05 APR 2018 : STATUS:
Begin jlogdup process: From set 'set=current terminate=wait' to  set 'set=socket hostname=10.10.17.152 port=6767'
```




| Option<br> | Description<br> |
| --- | --- |
| -v<br> | Verbose.  This is for demo purposes.  You should first set this up to run directly on a line to test out.  The -v option will produce lots of output allowing you to see what it is doing.<br> |
| -l<br> | Log file<br> |
| input<br> | All items after this until you "output"  are options related to the transaction log source.<br> |
| set<br> | What transaction log to process.  There are multiple options, in this case we are telling it to use the current transaction log.  It is important to note that when jlogdup is started it will replay the entire transaction log.  Therefore if your transaction log is rotated nightly and jlogdup on the sender machine is restarted later in the day it will replay the entire day's log.  If you had this option set to eldest and had 5 days of transaction logs jlogdup will replay all 5 days of logs.  At the same time if jlogdup was not running for 2 days and you restated it with the option set to current you would loose items updated the prior day.  It is very important to remember jlogdup is just replaying the log.  jLogdup once it is caught up will send transactions as it sees them.  There are more advanced configurations around this such as the start setting which will tell jlogdup to advance thru a transaction journal and start at a certain date/time.<br> |
| terminate<br> | By setting this to wait jlogdup will wait for new updates when it reaches the end of the sender transaction log.  <br> |
| output<br> | Options for output<br> |
| set<br> | Socket - This means we are sending the logs over a tcp socket.<br> |
| hostname<br> | The remote machine dns name or IP address.  If a dns name it must resolve to a ip address.<br> |
| port<br> | The port on the receiving system to connect to.  This should match the same port used on the receiving jlogdup command<br> |


## 


## Verify it is working

Log into your sending system and do some activity and verify it is being logged and replicated to the secondary system.

New jBASE session on production

```
jsh NW ~ -->CREATE-FILE TEST.TJ.FILE 1 11
[ 417 ] File TEST.TJ.FILE]D created , type = JP
[ 417 ] File TEST.TJ.FILE created , type = JP
jsh NW ~ -->ED TEST.TJ.FILE TEST.ITEM
New record
TEST.ITEM
TOP
.I
001+XXXX
002+
BOTTOM
.FI
Record 'TEST.ITEM' written to file 'TEST.TJ.FILE'
jsh NW ~ -->DELETE TEST.TJ.FILE TEST.ITEM
1 record(s) deleted.
jsh NW ~ -->DELETE-FILE TEST.TJ.FILE
jsh NW ~ -->
```



Output from sending jlogdup:

```
jsh NW ~ -->bash
bash-4.2$ jlogdup -v input set=current terminate=wait output set=socket hostname=10.10.17.152 port=6767
10:11:04 05 APR 2018 : STATUS:
Begin jlogdup process: From set 'set=current terminate=wait' to  set 'set=socket hostname=10.10.17.152 port=6767'
0*1*3676*1522948402   CREATEFILE  /jbase/nw/TEST.TJ.FILE]D
0*1*3855*1522948402   CREATEFILE  /jbase/nw/TEST.TJ.FILE
0*1*4033*1522948417   WRITE   /jbase/nw/TEST.TJ.FILE          TEST.ITEM
0*1*4214*1522948430   DELETE  /jbase/nw/TEST.TJ.FILE          TEST.ITEM
0*1*4351*1522948437   DELETEFILE  /jbase/nw/TEST.TJ.FILE
0*1*4484*1522948437   DELETEFILE  /jbase/nw/TEST.TJ.FILE]D
```



Output from receiving jlogdup:

```
jsh NW ~ -->bash
bash-4.2$  jlogdup -v -e /tmp/tjgeterrs -l /tmp/tjgetlog input set=socket hostname=10.10.17.152 port=6767 terminate=wait output set=database
10:11:04 05 APR 2018 : STATUS:
Begin jlogdup process: From set 'set=socket hostname=10.10.17.152 port=6767 terminate=wait' to  set 'set=database'
0*1*3676*1522948402   CREATEFILE  /jbase/nw/TEST.TJ.FILE]D
0*1*3855*1522948402   CREATEFILE  /jbase/nw/TEST.TJ.FILE
0*1*4033*1522948417   WRITE   /jbase/nw/TEST.TJ.FILE          TEST.ITEM
0*1*4214*1522948430   DELETE  /jbase/nw/TEST.TJ.FILE          TEST.ITEM
0*1*4351*1522948437   DELETEFILE  /jbase/nw/TEST.TJ.FILE
0*1*4484*1522948437   DELETEFILE  /jbase/nw/TEST.TJ.FILE]D
```

## 


## Summary

You now have transaction logging and replication setup.  A few items to remember

1. Index modifications/creation is not logged.
2. Compiled code is not logged.  Source code as long as it is modified inside jBASE is logged but the actual compiled bin and libs are not.
3. Any directory files create/used outside jBASE are not logged.  This includes creating a directory.


You can at any time redo the above process to re-sync your secondary system.  The recommended process is the jbackup/jrestore process.

# 


## Next Steps

### Service Configuration

Add service to automatically start and run in the background.  This is specific to each environment. You must setup the background process to the exact same permissions your test above had.

### 


### Log Rotation

Establishing rotation process for your logs

### Milestones

Beginning with jBASE release 5.7.5, when using a network connection (set=socket) for jlogdup, the receiving system can send periodic progress information (milestones) to the sender, and the sender will save this information in the specified milestone file. To use this, the sender must specify milestone=filename in the output specification, and the receiver must specify milestone=true in the input specification.

When restarting transaction replication after a failure, you can use the milestone file from the previous jlogdup command as the timespec in the start parameter in the input specification:

`input set=auto start=milestone_file ...`



# 


## Additional Information

### Stopping logging

jlogadmin with the -k command will stop transaction journaling.  You must stop this on both systems.  The receiving system even if requested to stop will continue to run until the sending system is also stopped.

```
#jlogadmin -R -k*
```



### Firewalls

If you have a firewall running you must add an exception.  Here is the error you will usually see if the remote system is either not running or has a firewall setup.

```
bash-4.2$ jlogdup -v input set=current terminate=wait output set=socket hostname=10.10.17.152 port=6767
Unable to connect to host 10.10.17.152 , error 111
connect: Connection refused
07:55:14 05 APR 2018 : ERROR:
```



If you are running Redhat or Centos here is the command to add an exception

```
#sudo firewall-cmd --zone=public --add-port=6767/tcp
```



For other platforms please contact your system administrator for instructions on how to add firewall exceptions





Back to [Transactional Journaling](./../introduction-to-transaction-journaling)
