# jlogdup

<PageHeader /> 

## Description

The **jLOGDUP** program will process transaction logs and replicate those transactions to a number of sources.

| Option | Description |
| --- | --- |
| -e file | error file for database update errors |
| -f | used with the -v or -V option; shows information for the next (future) update; by default information for past updates is displayed |
| -h | display help |
| -l file | log file to write all status and errors information |
| -m nn | maximum number of errors (default 10000) |
| -u nn | display '\*' every nn input records |
| -v | verbose mode, 1 line per record |
| -x | exclusive use of the database, no group locks taken |
| -H | display verbose help screen |
| -V | very verbose output, also 1 line per record |

**INPUT** - This keyword is used to specify the input parameters for the transaction replication process. Parameters that follow this keyword comprise the "input specification". The end of the input parameters is signaled by the OUTPUT keyword, or the end of the command line.

**OUTPUT** - This keyword is used to specify the output parameters for the transaction replication process. Parameters that follow this keyword comprise the "output specification". The end of the output parameters is signaled by the INPUT keyword, or the end of the command line.

Both **INPUT** and **OUTPUT** specifications are required, as the jlogdup command "reads" transactions according to the input specification and "writes" transactions according to the output specification.

The following table describes each of the parameters used for input and output specifications. The Type column specifies if the parameter may be used for input (I), output (O), log set (L), database (D), serial device (S) or terminal (T).

| Parameter | Type | Description
| --- | --- | --- |
| blockmax=nnn | S | the maximum size, in blocks, of a serial device. |
| blocksize=nnn | S | the block size to read/write to TTY/SERIAL device or file. |
| device=dev | S | the file name for SERIAL device. Can be more than one. |
| device=file | S | the file name input/output. Can be more than one. |
| end=timespec | I | time in log set at which to stop restore/duplication. |
| hostname=host | S | for set=socket, name of host for network connection. |
| milestone=true \* | I | periodically send progress information to sender. This is set on the Receiver system Input seciton. Requires 'set=socket'. |
| milestone=file \* | O | update milestone file with progress information from receiver. This is set on the input section of the sender. Requires 'set=socket'. |
| noflush=true | O | suppress flush of output at end of transaction. (default false) |
| notrans=true | O | ignore transaction boundaries. (default false) |
| port=nn | S | for set=socket, TCP port number for network connection. |
| prompt=true | O | prompt when switching serial devices or files. |
| rename=from,to | | convert path name directories 'from' to 'to' on restore.|
| renamefile=file | O | use rename file list of format 'from,to' to rename files on restore. |
| retry=nn | I | specifies the interval between retries, when 'terminate=wait'.|
| set=auto \* | I,L | begin restore/duplication using the log set that includes start time. This uses the milestone features. The file must already exist. Requires 'start='. |
| set=current | I,L | begin restore/duplication using the current log set as input. |
| set=database | O,D | output is to the database, i.e. restore mode. |
| set=eldest | I,L | begin restore/duplication using the eldest log set. |
| set=logset | O,L | the output is directed to the current log set as an update. |
| set=n | I,L,N | begin restore/duplication using log set number n. |
| set=null | O | output is to be discarded. |
| set=serial | I,O | input/output is to a serial device or file. Requires 'device='. |
| set=socket | I,O | use network connection for input/output. Requires 'hostname=' & 'port='. |
| set=stdin | I,T | the input data comes from the terminal stdin. |
| set=stdout | O,T | the output data is directed to the terminal stdout. |
| set=tty | T | the input is from stdin or the output is to stdout. |
| skiprec=true | I | if an error is encountered reading from the log set, attempt to skip past the problem record.
| start=timespec | I | time in log set at which to start restore/duplication. |
| terminate=eof | I | terminate restore/duplication at eof of eldest log set. |
| terminate=eos | I | terminate restore/duplication at end of current log set. |
| terminate=wait | I | switch to elder log sets as required and wait for new updates. |
| verbose=true | | display to stderr a summary of the specification. |

\* Note: set=auto and milestone=xxx require jBASE release 5.7.5 or greater.

The time specification, used in the 'start=' and 'end=' specification can be  one of the following formats:

| Timspec | Description |
| --- | --- |
| hh:mm:ss | time of day (todays date assumed) |
| DD-MMM-YYYY | date (midnight assumed), Any date convention accepted |
| hh:mm:ss,DD-MM-YYYY | both time and date specified either way around |
| jbackup file | use with 'jbackup -sfilename' option, reads time from file content |
| milestone file | reads time from file content (last timestamp reported by the receiving system) |
| filename | regular file, use the time the file was last modified |

### Log notify program

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

| Type | Message | STDOUT |
| --- | --- | --- |
| INFORMATION | Log set changed to *s* | Yes |
|  | Log set *s*truncated | Yes |
|  | File *f*for log set *s*REMOVED | Yes |
|  | File *f*for log set *n*changed to *newfilename* | Yes |
|  | *n*files imported to log set *n*(see -i option) | Yes |
|  | Status of logger set to *status*(current log set *s*) | Yes |
|  | Sync count changed from every *n1*seconds to every  *n2* seconds | Yes |
|  | Log file warning threshold set to *p*initial percentage thereafter every additional *q*percent or *n*seconds | Yes |
|  | Admin. Log Notify Program now set to *program* | Yes |
|  | Admin. Log Notify Program REMOVED | Yes |
|  | Extended Record Status now set to *on|off* | Yes |
|  | Log set switch detected, was set *n1*, now set *n2* | No |
|  | Kill initiated on jlogdup process id *pid*: Process id pid from port *n* | Yes |
|  | First record read from set *n* | Yes |
|  | Termination  Statistics:   usr   *x*,   sys   *y*,   elapsed *z r*records read from current log set number *n*: *r*records, *b*blocks, *rb*record bytes , *e*errors in *file* | Yes |
| WARNING | Journal Log Files now at *p*% capacity | No |
| FATAL ERROR | Unable to open logger configuration file *filename* | Yes |
|  | Sync demon appears to have died prematurely | Yes |
|  | Error number *errno*while reading from file *filename* | No |
|  | Error number *errno*while writing to log file | No |
|  | Error errno while writing to log journal file *filename*" | Yes |
|  | Error errno while writing to log journal | Yes |
|  | Unable to open logger file *filename* | Yes |
|  | Out of memory to log update | Yes |

### Milestone Feature

The milestone feature when replicating between two systems will create a milestone record on the sender system that can then be used to restart transaction replication where it stopped.  The milestone parameter is used on both the sender and receiver systems with different parameters.

```
# Sender System
jlogdup -v input set=auto start=/tmp/tjstatus.txt terminate=wait output set=socket hostname=172.17.0.4 port=6767 milestone=/tmp/tjstatus.txt

# Receiver System
jlogdup -v -e /tmp/tjgeterrs -l /tmp/tjgetlog input set=socket hostname=172.17.0.4 port=6767 terminate=wait milestone=true output set=database
```

Special note:  The milestone file must already exist.  If one does not exist then you must run the sender jlogdup without the set=auto and start=<file> to get the milestone file created.

Example
```
jlogdup -v input set=<set to use> start=<where to start in journal> terminate=wait output set=socket hostname=172.17.0.4 port=6767 milestone=/tmp/tjstatus.txt
```
Let this run, catch up, and sync for a few minutes.  Check your milestone file and make sure the stamps are caught up.  The milestone is updated once per minute as long as there is activity.  If there is no activity the file will not be updated.  If you wish for this file to constantly update you can setup a phantom that writes a update to a file every minute to trigger activity.

### Warning threshold

If the amount of space consumed in the file system, which the active logset resides upon, exceeds the specified threshold, it runs the log notify program. This threshold alarm is only checking total free space of the volume/disk where the logset resides.  Note: If you are on a system with a 2GB file limitation you need to factor this in when generating your LOGSETS.  This warning alarm will not let you know you are reaching a 2GB limit for a file.

### Sync Transactions

An option “SYNC” exists for the [TRANSTART](../../../jbase-basic-(jbc)/transtart/README.md) command which will force-flush the database and journal following a transaction commit. The option in jlogadmin allows for this option to be invoked globally. If “Sync Transactions” is set to “on” then all committed transactions will cause the force-flush. If set to “off” then committed will not automatically force-flush the database and journal unless the “SYNC” option is present in individual [TRANSTART](../../../jbase-basic-(jbc)/transtart/README.md) commands.

### Encrypt Records

The transaction journal is not normally encrypted. This option will allow the data content of each record to be encrypted on disk. The data content of each record will be encrypted with an (internally-specified) industry-standard encryption scheme, using an internal key. The record headers remain unencrypted so that all utilities accessing the journal will be unaffected.

Back to [Transactional Journaling](./../introduction-to-transaction-journaling)

<PageFooter />
