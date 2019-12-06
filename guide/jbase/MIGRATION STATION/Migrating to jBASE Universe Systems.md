# Migrating to jBASE: Universe Systems

**Created At:** 2/12/2019 4:51:53 PM  
**Updated At:** 5/24/2019 6:38:21 PM  

**Tags:**
<badge text='uvbackup' vertical='middle' />
<badge text='uv' vertical='middle' />
<badge text='universe' vertical='middle' />
<badge text='migration' vertical='middle' />
<badge text='migrating' vertical='middle' />



This article and accompanying video will provide you with a walkthrough of how to prepare your Universe data to be migrated to jBASE.  You will configure your Universe backup, execute the backup and run a restore of your Universe data onto a jBASE system.

## Create a "snapshot" of the Universe files



### Info

Ideally for a Universe conversion, you will update/refresh the data via rsync to a designated space on a shared resource or the jBASE server that you will be converting to.  This allows a "snapshot" of the system to be taken in a relatively short period of time in that the rsync can update only the changes for the files since the last "snapshot".   This may also be necessary if you are moving from AIX or HPUX and need to change the data bits on the Universe files.

### rsync to the snapshot

This command is run assuming your Universe account is in /dbms/account and you have a shared filesystem with sufficient disk space call /snapshot where you want to replicate the account directory.  This command can be run any numbers of times and will after initial process only update those files that have changed.

```
rsync -avz ---exclude '*INDEX0??' /dbms/account /snapshot/account
```

After this command is complete the /snapshot version of your account will be ready to be processed.

### Info

You may need to run a Universe utility called finuxi if your data is coming from a AIX or HPUX machine.  This process will need to be run against the data on the /snapshot directory from a Linux box running the Universe fnuxi utility.  Once this process is complete, you can proceed with the next step

### uvbackup the /snapshot directory

The jBASE can restore a Universe uvbackup file.   This file is created by running uvbackup on the directories containing your universe files.

```
#cd /snapshot
#find . | /usr/uv/bin/uvbackup -f -v -rev7 - > /u/uvbackup.vtf

Backup Date   : Tue Feb 12 16:10:33 2019
Reel Number   : 1
Image Type    : Full Backup (ver2 UNIX)
Block Size    : 8192 bytes
NLS on        : False
Label         :

Current device(s): stdout
 Backing up ./ACCUTERM
 Backing up ./ACCUTERM/&SAVEDLISTS&
 Backing up ./ACCUTERM/&SAVEDLISTS&/.Type1
 Backing up ./ACCUTERM/&SAVEDLISTS&/UV.VOCNAMES
 Backing up ./ACCUTERM/D_FTBP
 Backing up ./ACCUTERM/D_FTBP/.Type1
...
```

### Restore the uvbackup.vtf file

The jBASE resuv command will restore the Universe backup file into the current directory as jBASE files.  In this example we assume /dbms is a file system with plenty of space, ready for the jBASE accounts.  Note that the resuv command ends with a space and dot.

```
#cd /dbms
# . /opt/jbase/CurrentVersion/jbase_env.sh
# jsh
jsh> T-ATT FILE0 DEVICE=/u/uvbackup.vtf
jsh> resuv -c -e -p -s -v .
...
```

The next process will be to setup the jBASE environment for your system and begin your jBASE conversion.

[Data Conversion](368880-creating-migrating-accounts-and-converting-programs)
