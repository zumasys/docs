# Scripts

## setup_tj  

``` bash
#! /bin/ksh
export JBCRELEASEDIR=/data/colins/4.0_rels/jbcdevelopment
export JBCGLOBALDIR=/data/colins/4.0_rels/jbcdevelopment
export LD_LIBRARY_PATH=$JBCRELEASEDIR/lib:$LD_LIBRARY_PATH
jlogadmin -cf1,1,[logset1 directory]/logfile1
jlogadmin -cf1,2,[logset1 directory]/logfile2
jlogadmin -cf2,1,[logset2 directory]/logfile1
jlogadmin -cf2,2,[logset2 directory]/logfile2
jlogadmin -cf3,1,[logset3 directory]/logfile3
jlogadmin -cf3,2,[logset3 directory]/logfile3
```

## start_tj  

``` bash
#! /bin/ksh
export JBCRELEASEDIR=/data/colins/4.0_rels/jbcdevelopment
export JBCGLOBALDIR=/data/colins/4.0_rels/jbcdevelopment
export LD_LIBRARY_PATH=$JBCRELEASEDIR/lib:$LD_LIBRARY_PATH
jlogadmin -l 1 -a Active
echo `date` > $JBCRELEASEDIR/logs/jlogdup_to_tape_start
jlogdup input set=current terminate=wait output set=serial device=[Device Spec] &
```

## stop_tj  

``` bash
#! /bin/bash
export JBCRELEASEDIR=/data/colins/4.0_rels/jbcdevelopment
export JBCGLOBALDIR=/data/colins/4.0_rels/jbcdevelopment
export LD_LIBRARY_PATH=$JBCRELEASEDIR/lib:$LD_LIBRARY_PATH
jlogadmin –a Off
```

## start_jlogdup  

``` bash
#! /bin/ksh
export JBCRELEASEDIR=/data/colins/4.0_rels/jbcdevelopment
export JBCGLOBALDIR=/data/colins/4.0_rels/jbcdevelopment
export LD_LIBRARY_PATH=$JBCRELEASEDIR/lib:$LD_LIBRARY_PATH
echo `date` > $JBCRELEASEDIR/logs/jlogdup_to_tape_start
jlogdup input set=current terminate=wait output set=serial device=[Device Spec]&
```

## stop_jlogdup  

``` bash
#! /bin/ksh
export JBCRELEASEDIR=/data/colins/4.0_rels/jbcdevelopment
export JBCGLOBALDIR=/data/colins/4.0_rels/jbcdevelopment
export LD_LIBRARY_PATH=$JBCRELEASEDIR/lib:$LD_LIBRARY_PATH
jlogadmin -k* > discard
```

## backup_jbase  

``` bash
#! /bin/ksh
export JBCRELEASEDIR=/data/colins/4.0_rels/jbcdevelopment
export JBCGLOBALDIR=/data/colins/4.0_rels/jbcdevelopment
export LD_LIBRARY_PATH=$JBCRELEASEDIR/lib:$LD_LIBRARY_PATH
typeset -u TAPEOUT
typeset -u REPLY
typeset -u BACKUPOK
set TAPEOUT = N
print -n "Are you backing up the logfiles to tape? (Y/N) "
while [ "$TAPEOUT" != Y -a "$TAPEOUT" != N ]
do
read TAPEOUT
done
if [ "$TAPEOUT" != N ]
then
print -n Has all logging to tape finished - press any key when it has
read REPLY
jlogadmin -k* >discard
print Logging to tape terminated
fi

if [ "$TAPEOUT" = Y ]
then
print Please remove the tape for logging and replace with the backup tape
set REPLY = N
while [ "$REPLY" != Y ]
do
print -n Enter Y to continue
read REPLY
done
fi
set BACKUPOK = N
while [ "$BACKUPOK" != Y ]
do
print Backup Started `date`
find /data/globus/jbbase13207/mbdemo.data -print | jbackup -v -c -f [Device Spec] -s /tmp/jbstart
print Waiting for tape to rewind
sleep 5
print Verify Started `date`:
jrestore -f [Device Spec] -P
print Verify Finished `date`
print -n "Backup successful <Y/N>"
read BACKUPOK
done
jlogadmin -l next -a Active
print logsets switched and logging to disk restarted
if [ "$TAPEOUT" = Y ]
then
print Mount a new tape for logging
print Enter any key to resume logging to tape
read INPUT
print `date` > $JBCRELEASEDIR/logs/jlogdup_to_tape_start
jlogdup input set=current terminate=wait output set=serial device=[Device Spec] &
print Logging to tape restarted
fi
```

## recover_jbase  

```bash
#!/bin/ksh
if [ -z "$1" ]
then
echo "\nWhat is the nature of the recovery :-\n"
PS3="Option :"
select Sel in "Full Restore Required" "Tape Logging Failure"
do break; done
if [ -z "$REPLY" ]
then
exit
fi
else
REPLY=$1
fi
if [ $REPLY = 1 ]
then
echo Put the first backup tape in the tape drive
echo -n Enter any key when ready
read DONE
jrestore -f [Device Spec] -N
echo -n Is a Transaction Log tape available ?
read REPLY
if [ $REPLY = "y" ]
then
echo Put the first log tape in the tape drive
echo -n Enter any key when ready
read DONE
echo -n "Enter a time to terminate the duplication process (or RETURN for all logs)"
read ENDTIME
if [-z $ENDTIME ]
then
jlogdup input set=serial device=[Device Spec] backup terminate=EOS output set=database
else
jlogdup input set=serial device=[Device Spec] end=$ENDTIME output set=database
fi
fi
else
echo Put a new tape in the tape drive
echo -n Enter any key when ready
read DONE

jlogdup input set=current start=$JBCRELEASEDIR/logs/jlogdup_to_tape_start terminate=wait output set=serial device=[Device Spec] &
fi
```

## remote_journal_startup  

```bash
find /JBASE_APPS /JBASE_SYSFILES /JBASE_ACCOUNTS –print | jbackup –s /tmp/jbstart –v –c | rsh Nodek –l jbasesu jrestore –N
```
