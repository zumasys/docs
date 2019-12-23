# Migrating to jBASE: D3 Systems

**Created At:** 2/8/2019 3:39:22 PM  
**Updated At:** 5/24/2019 6:38:38 PM  
**Original Doc:** [migrating-to-jbase-d3-system](https://docs.jbase.com/34463-mv-migration-station/migrating-to-jbase-d3-system)  

**Tags:**
<badge text='jdevattach' vertical='middle' />
<badge text='t-att' vertical='middle' />
<badge text='list-device' vertical='middle' />
<badge text='set-device' vertical='middle' />
<badge text='sysrestore' vertical='middle' />
<badge text='d3 to jbase restore' vertical='middle' />
<badge text='d3 conversion ' vertical='middle' />
<badge text='d3 backup' vertical='middle' />



This article and accompanying video will provide you with a walkthrough of how to prepare your D3 data to be migrated to jBASE.  You will configure your D3 backup, execute the backup and run a restore of your D3 data onto a jBASE system.

## Create a suitable file for backup

Log on to the DM account and LIST-DEVICE to display current "tape" assignments

```
:LIST-DEVICE
Tape Status           08 Feb 2019  10:46:42
 #   Type             Density           Owner   Device Name
-------------------------------------------------------------------------------
 0 | Floppy         | 3 1/2" 1.44M    |       | /dev/fd0H1440
 1 | Floppy         | 3 1/2" 720K     |       | /dev/fd0H720
 2 | compressed     | 500K            |       | /usr/lib/pick/ab
 3 | compressed     | 500K            |       | /usr/lib/pick/dt
 4 | compressed     | 500K            |       | /mnt/nas/dosdiv/saves/thursday
 5 | compressed     | 500K            |       | /pickdata/pflops/tp2
-------------------------------------------------------------------------------
```

### Info

The "/usr/lib/pick/dt" line.   This is the default data tape for D3 and we can change it (and restore back when done)



Use CHG-DEVICE command to change the name or actually full path to a file on a filesystem with space enough to hold your backup.   The actual file jbasebackup.gz does not need to exist and will be created when the "tape" is used.

```
:CHG-DEVICE 3 name=/data1/jbasebackup.gz
Tape Status           08 Feb 2019  10:46:42
 #   Type             Density           Owner   Device Name
-------------------------------------------------------------------------------
 3 | compressed     | 500K            |       | /data1/jbasebackup.gz
 ------------------------------------------------------------------------------
```



Attach the newly defined "tape" using SET-DEVICE.

```
:SET-DEVICE 3
Block size: 500
[1717] Tape device is assigned to compressed device
```



Backup the system to the file using the SAVE verb, press &lt;Enter&gt; for no label

```
:SAVE (FDST
file-save tape label =
1      2
1    159 mds > sqldemo
1    160 mds > sqldemo > products
1    161 mds > sqldemo > products > products
...
```

When this process is complete, you will have a "tape" file that is compatible with the jBASE sysrestore process



Move the jbasebackup.gz compressed file save to your new jBASE Linux server in a file system with adequate space for it and it uncompressed and begin the restore process.   This snippet assumes the file has been moved to /u and your new jBASE data directory will be /dbms (usually a separate mounted file system)

```
$cd /u
$gunzip jbasebackup.gz
$cd /dbms
$. /opt/jbase/CurrentVersion/jbase_env.sh   <-- this sets up the jBASE environment
$unset JBCEMULATE                           <-- JBCEMULATE needs to not be set for the sysrestore
$jsh
jsh> DELETE-FILE /opt/jbase/CurrentVersion/tmp/jdevattach
jsh> T-ATT FILE1 DEVICE=/u/jbasebackup LABEL=R83,500 SIZE=500
[ 417 ] File /opt/jbase/CurrentVersion/tmp/jdevattach]D created , type = JP
[ 417 ] File /opt/jbase/CurrentVersion/tmp/jdevattach created , type = JP
Device FILE1 attached to channel 0 at blocksize 500
jsh> sysrestore -C -D
```

When this process is complete, you will have a jBASE version of your system in the /dbms directory.

The next process will be to setup the jBASE environment for your system and begin your jBASE conversion.



[Data Conversion](./../data-conversion)
