# jlogdup

**Created At:** 3/29/2018 6:37:12 PM  
**Updated At:** 4/18/2018 8:14:51 PM  
**Original Doc:** [305930-jlogdup](https://docs.jbase.com/43995-transactional-journaling/305930-jlogdup)  


## Description

The jLOGDUP program will process transaction logs and replicate those transactions to a number of sources.




| Option<br> | Description<br> |
| --- | --- |
| -e file<br> | error file for database update errors<br> |
| -f<br> | used with the -v or -V option; shows information for the next (future) update; by default information for past updates is displayed<br> |
| -h<br> | display help<br> |
| -l file<br> | log file to write all status and errors information<br> |
| -m nn<br> | maximum number of errors (default 10000)<br> |
| -u nn<br> | display '\*' every nn input records<br> |
| -v<br> | verbose mode, 1 line per record<br> |
| -x<br> | exclusive use of the database, no group locks taken<br> |
| -H<br> | display verbose help screen<br> |
| -V<br> | very verbose output, also 1 line per record<br> |




**INPUT-** This is an optional keyword to specify data section creation only. Leave this keyword out to create both dictionary and data file.



**OUTPUT** - This is the name to be used for the created file. The name can include absolute or relative path information.




| Parameter<br> | Description <br> |
| --- | --- |
| blockmax=nnn (S)<br> | the maximum size, in blocks, of a serial device<br> |
| blocksize=nnn<br> | the block size to read/write to TTY/SERIAL device or file<br> |
| device=file%dev (S)<br> | the file name for SERIAL device. Can be more than one<br> |
| end=timespec (I)<br> | time in log set at which to stop restore/duplication<br> |
| noflush=true (O)<br> | suppress flush of output at end of transaction. (default false)<br> |
| notrans=true (O)<br> | ignore transaction boundaries. (default false)<br> |
| prompt=true<br> | prompt when switching serial devices or files<br> |
| rename=from,to<br> | convert path name directories ‘from’ to ‘to’ on restore<br> |
| renamefile=file (O)<br> | use rename file list of format ‘from,to’ to rename files<br> |
| retry=nn (I)<br> | specifies the interval between retries, when 'terminate=wait'<br> |
| set=current (IL)<br> | begin restore/duplication using the current log set as input<br> |
| set=database (OD)<br> | output is to the database, i.e. Restore mode<br> |
| set=eldest (IL)<br> | begin restore/duplication using the eldest log set<br> |
| set=n (ILN)<br> | begin restore/duplication using log set number n<br> |
| set=null (O)<br> | output is to be discarded<br> |
| set=serial (S)<br> | input/output is to a serial device or file. Requires ‘device=’<br> |
| set=stdin (IT)<br> | the input data comes from the terminal stdin<br> |
| set=stdout (OT)<br> | the output data is directed to the terminal stdout<br> |
| set=tty (T)<br> | the input is from stdin or the output is to stdout<br> |
| set=logset (OL)<br> | the output is directed to the current log set as an update<br> |
| start=timespec (I)<br> | time in log set at which to start restore/duplication<br> |
| terminate=eof (I)<br> | terminate restore/duplication at eof of eldest log set<br> |
| terminate=eos (I)<br> | terminate restore/duplication at end of current log set<br> |
| terminate=wait (I)<br> | switch to elder log sets as required and wait for new updates<br> |
| timeout=nnn (I)<br> | timeout period in seconds for ‘terminate=wait'<br> |
| verbose=true<br> | display to stderr a summary of the specification<br> |




The indicators in brackets denote:


| Indicator<br> | Meaning<br> |
| --- | --- |
| D<br> | specification valid for type database<br> |
| I<br> | specification valid for type input<br> |
| O<br> | specification valid for type output<br> |
| L<br> | specification valid for log set<br> |
| N<br> | specification valid for type of null<br> |
| S<br> | specification valid for type serial<br> |
| T<br> | specification valid for type terminal<br> |




The time specification, used in the ‘start=’ and ‘end=’ specification can be  one of the following formats:


| Timspec<br> | Description<br> |
| --- | --- |
| hh:mm:ss<br> | time of day (todays date assumed)<br> |
| DD-MMM-YYYY<br> | date (midnight assumed), Any date convention accepted<br> |
| hh:mm:ss,DD-MM-YYYY<br> | both time and date specified either way around<br> |
| jbackup\_file<br> | time of file created. Use with 'jbackup -sfilename' option<br> |
| filename<br> | regular file, use the time the file was last modified<br> |


#### 


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




| Type<br> | Message<br> | STDOUT<br> |
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




### Warning threshold:

If the amount of space consumed in the file system, which the active logset resides upon, exceeds the specified threshold, it runs the log notify program. This threshold alarm is only checking total free space of the volume/disk where the logset resides.  Note: If you are on a system with a 2GB file limitation you need to factor this in when generating your LOGSETS.  This warning alarm will not let you know you are reaching a 2GB limit for a file.



### Sync Transactions

An option “SYNC” exists for the TRANSTART command which will force-flush the database and journal following a transaction commit. The option in jlogadmin allows for this option to be invoked globally. If “Sync Transactions” is set to “on” then all committed transactions will cause the force-flush. If set to “off” then committed will not automatically force-flush the database and journal unless the “SYNC” option is present in individual TRANSTART commands.



### Encrypt Records

The transaction journal is not normally encrypted. This option will allow the data content of each record to be encrypted on disk. The data content of each record will be encrypted with an (internally-specified) industry-standard encryption scheme, using an internal key. The record headers remain unencrypted so that all utilities accessing the journal will be unaffected.

##### 


Back to [Transactional Journaling](./../introduction-to-transaction-journaling)
