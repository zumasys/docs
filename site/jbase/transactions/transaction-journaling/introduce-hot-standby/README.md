# Introducing a Hot Standby machine into the configuration  

<PageHeader />

Assuming that the database on Nodej is of a consistent state, we may introduce a Hot Standby machine by means of the following procedure.  

The following describes how transactions are logged from system Nodej (the live machine) to a standby system Nodek, (the Failsafe/Hot Standby machine).
Transaction Journaling is started on Nodej; thus producing a transaction log file of updated records.  

A jbackup/jrestore sequence is initiated from Nodej, by means of the script Backup_Restore. This will take a snapshot of the database on Nodej and reproduce it on Nodek. The jbackup option '-s /tmp/jbstart' is used to create a time-stamp file for later use.

```
find /JBASE_APPS /JBASE_SYSFILES /JBASE_ACCOUNTS –print | jbackup –s /tmp/jbstart –v –c | rsh Nodek –l jbasesu jrestore –N
```

Once this sequence completes, the updates which have occurred on Nodej since the start of the sequence, need to be updated onto the database on Nodej. This could be achieved with:

```
jlogdup -u10 input set=eldest start=/tmp/backup.logset0 terminate=wait output set=stdout | rsh Nodek /GLOBALS/JSCRIPTS/logrestore
```

This will start the updates from the oldest logset (set=eldest); the first database update will be at the time the backup stats file was written (start=/tmp/backup.logset0), i.e. the start of the backup; the transfer procedure will wait for further updates (terminate=wait). The method employed to effect the transfer is by means of a pipe. Data from the transaction log is put into the pipe (output set=stdout); this data is taken from the pipe by means of the logrestore command, initiated on Nodek by means of the rsh command (remote shell). The logrestore command sets up a jBASE environment and then initiates a jlogdup command, taking its input from the pipe (input set=stdin) and updating the database on Nodek (output set=database).

```
/GLOBALS/JSCRIPTS/logrestore Script
JBCRELEASEDIR=/usr/jbc
JBCGLOBALDIR=/usr/jbc
PATH=$PATH:$JBCRELEASEDIR/bin
LD_LIBRARY_PATH=$JBCRELEASEDIR/lib:/usr/ccs/lib
JBCOBJECTLIST=/JBASE_APPS/lib: (or whatever it is for your usual users)
export JBCRELEASEDIR JBCGLOBALDIR JBCOBJECTLIST

jlogdup input set=stdin output set=database
```

The status of the jlogdup process can be monitored by running jlogstatus from a dedicated window:  

```
jlogstatus -r5 –a
```

Optionally, jlogstatus can be run on Nodek to ensure the log is being restored correctly.
It is usual to configure more than one set of transaction log files. Initially logging will start to, say, set 1; and at some point logging to logset 2 will be initiated. This will usually be done daily just before each jbackup to tape. Then, typically, on the next day, logging will be switched back to logset 1 (and overwriting the previous transaction log) and the daily jbackup started.
Database update metrics should be established to determine the correct size of the logsets. The jlogstatus display should be monitored to ensure that the logsets don't fill the disk! Transaction Journaling can be configured to perform certain actions when the transaction log disks begin to fill past a configurable watershed.

## Data Validity after a Failure Condition

In the event of a failure on Nodej, the standby machine, Nodek will contain an up-to-date database on which to continue operations. This is not necessarily strictly accurate because of several factors outside the control of this mechanism:
There is a configurable flush rate parameter which may be adjusted for Transaction Journaling. This parameter governs how often transaction log file updates, held in memory are flushed to disk. The minimum period between transaction log file flushes is 5 seconds. This will limit lost transaction log file updates to at maximum the last 5 seconds.
In the event of failure of the disk holding the transaction log file as well as the disk holding the database, the lost data is limited to those transactions which have been logged to disk, but not transferred to the standby machine, plus the logging of those transactions which have still to be flushed to disk. This situation is less quantifiable, but as the transaction log file reflects a sequential record of database updates over time, manual investigation would be required to determine the latest updates which were actually updated on the standby machine. Obviously, the database update transaction rate on the live machine governs the magnitude of this investigation.
Although the majority of database updates can be preserved after a system failure, what is not necessarily preserved is database integrity. The use of and management of transaction boundaries within application code ensures that only complete (multi-file) updates make it to the database. During system recovery (rebuild) only complete database transactions are rolled forward; those transactions which were not complete at the time of system failure are not written to disk. When initiating a transaction through the jBC command TRANSTART, the use of the option SYNC ensures that a memory flush will take place upon a transaction end or abort. This also ensures that the transaction log file is also flushed to disk, thus eliminating any delay in writing to disk. Subsequent to system failure, manual investigation is now targeted at complete application transactions rather than individual database updates, albeit at the possible expense of system performance.

## System Recovery in a Hot Standby Configuration

If the standby machine (Nodek) is to be used as a temporary application machine, while the cause of the failure of Nodej is determined and resolved, then those users who are to continue, require to be “replugged” to Nodek. This could be automatic, whereby those users’ PCs are automatically re-routed to Nodek on the unavailability of Nodej; otherwise a script could be run to re-assign Nodej’s IP address to Nodek. The users in this case, would be requested to log on again to continue their work. This reassignment should only take place when the state of the database is established. The checks required are specific to each installation so cannot be predetermined here.

### Recovery Procedure  

- Wait for the TJ restore process on the standby system (Nodek) to finish. This will be known when the statistics on the number of records read remains constant.  
- Establish the validity of the database on Nodek and the transactions to be re-entered (if necessary).
- Shut down the standby machine.
- Shut down the Nodej machine if it isn’t already completely down.
- Restart Nodek in level 1. This is before the communications daemons are started. Create scripts to switch the IP addresses of the network and VTC cards to become those that Nodej formerly were. Continue the booting of Nodek.
- Disable jBASE logons on Nodek.
- Re-start the logger to a fresh set of transaction log files using the jlogadmin command.
- When Nodej is repaired and first booted, you will need to boot it into level 1 so you can ensure the network and VTC addresses become those previously taken by Nodek.
- Reload the operating system and jBASE on Nodek (if necessary). This can be contained in a system backup tape, held securely. This system backup should contain a skeleton system, including a valid jBASE installation, C++ compiler, peripheral and user logon definitions. Any upgrades the system should be reflected in this system backup.
- Start a backup/restore sequence between Nodek and Nodej; thus:

```
find /JBASE_APPS /JBASE_SYSFILES /JBASE_ACCOUNTS –print | jbackup –s /tmp/jbstart –v –c | rsh Nodej –l jbasesu jrestore –N
```

where :

- The filesystems /JBASE_APPS etc. identified are examples for a jBASE system  
- /tmp/jbstart is the stats file to be dumped (used to timestamp start of save)
rsh Nodej will run a command on the Nodej machine
- -l jbasesu identifies a jBASE user to be used for restores. This is important if indexes are to be rebuilt on restore (the user should have access to files and subroutines).
- -N indicates that indexes should be rebuilt on-the-fly

- Ensure the jBASE demons are started.
- Enable jBASE logons. At this point it is safe for users to start using the system. Any updates since the start of the backup will be logged in the TJ log.
  
Once the backup/restore process has fully completed, the updates which have accrued on Nodek since is start can now be replayed thus:

```
jlogdup input set=current output set=stdout terminate=wait start=/tmp/jbstart | rsh Nodej –l jbasesu /JBASE_SYSFILES/logrestore
```

Once the two machines are in sync again both machines can be brought down, the network and VTC card addresses swapped, and users can be allowed to re-logon to the Nodej machine.

## Other Considerations when running a Hot Standby Configuration  

- Password files must be kept in synchronization on both machines.
- Spooler configurations need to be kept in sync.
- Once the /JBASE_APPS have the developer sources in normal UNIX files, the use of a nightly backup and a RAID configuration will be sufficient.
- When developers BASIC and CATALOG their programs, they will go into their own directories rather than into /JBASE_APPS. At certain points in time, when no users are active, the programs and subroutine libraries will be copied en-bloc to both the Nodej and Nodek machines in /JBASE_APPS. This is the correct way to release new software and it needs to be done on both machines to ensure consistency of applications in the event of failure.
- When an application developer changes an index or trigger definition, it should be done on files in their own environment. At some point you will want to release them into the live community. This again is best done when no users are active. To do this you will need to release the changed application and subroutine libraries (as shown above) and then release the new trigger and/or index definitions and apply the same changes to both the Nodej and Nodek machines. The indexes will need to be rebuilt on both machines.
- All changes to jBASE scripts kept in the /JBASE_SYSFILES will need to be manually duplicated.
- Many of the synchronization requirements should be checked nightly in a cron script and errors reported. Such a script could be made to verify the password file, the jBASE spooler configuration, the UNIX spooler configuration., the scripts in the /JBASE_SYSFILES file system, check that the programs and subroutine libraries are identical on both Nodek and Nodej, and could check the index and trigger definitions are identical on both Nodek and Nodej, check the cron jobs are the same and the scripts they invoke are the same.
- This verification of the two machines could also be run following a rebuild.

Back to [Transaction Journaling](./../README.md)

<PageFooter />
