# JEDI_SECURE_LEVEL

<PageHeader />

**Tags:**
<badge text='environment variablesa' vertical='middle' />

## Description

Defines the security level for j3 and jPLUS Secure files.

## Values

| Value | Definition  |
| --- | --- |
| 1 | Turns off secure mode; no flushing at all |
| 2 | Flushes data from memory to disk every time the file size increases, i.e. every time a new frame has been added to the file |
| 3 | Flushes data from memory to disk for *every*change to the file, structure or data (a value greater than 3 has the same effect) |

## Default

2

## Setting

This environment variable must be setup before jBASE is invoked.

### UNIX

```
export JEDI_SECURE_LEVEL=3
```

### Windows

```
set JEDI_SECURE_LEVEL=3
```

## Performance Implications

There is a performance penalty to pay for running in secure mode levels 2 and 3.

Level 2 will protect against file corruption by flushing the file from memory to disk when the certain operations occur. However it will not protect against loss of data. Most operating systems will periodically flush this data anyway, usually a system tunable and often a default of every 60 seconds. Therefore if you can withstand a loss of up to 60 seconds of data, and you primary concern is that the files are not corrupted in the event of a system failure, then this is the level for you. Minimal impact on performance is seen so long as your files are properly sized. Even if they go out of the main group, performance is only impacted if the extended group size keeps varying considerably.

Level 3 will protect against almost everything including loss of data. This has the most impact on the system. The actual level of performance impact depends greatly on your application. For example, most of your updates may be to very large files in a pseudo-random manner (e.g. updating stock records, customer details etc.). In this situation, all this does is move the overhead from the operating system flush demon that runs about every 60 seconds (see Level 2 above) to the process doing the update. So it may be a case of "What you lose on the roundabouts you gain on the swings !". On the other hand, you may have a small file regularly being updated with things like current days orders. In this case the impact will be substantial as you will be causing a disk update for each application WRITE, whereas without this you might do many of these WRITEs before the operating system demon does a single write.

## Note

> Flushing will only occur when JEDI\_SECURE\_LEVEL is set to a valid value and the file is created with SECURE=YES or is set via jchmod +S filename

Secure mode can (temporarily) be removed with jchmod -S filename

JEDI\_SECURE\_LEVEL can be switched on and off for crucial processes and/or users, but otherwise applies to all j3 and jPLUS files.

Another way to control flushing of data to disk is to use transaction boundaries. For example, the following jBC code will cause all data to be flushed to disk for all files regardless of the file type or file status

```
TRANSTART ELSE PRINT "Error" ; STOP
WRITE record1 TO filevar1
WRITE record2 TO filevar2
TRANSEND SYNC ELSE PRINT "Error" ; STOP
```

This mechanism guards against data loss but is less effective in protecting against file corruption should the server fail while the TRANSEND is actually in progress.

You should set JEDI\_SECURE\_LEVEL=1 when doing batch updates on a secure mode file. For example, when copying a number of records from a temporary file to a secure mode file called CUSTOMERS:

```
jsh -->export JEDI_SECURE_LEVEL=1
jsh -->COPY TEMPFILE * (O
TO: (CUSTOMERS
1217 Record(s) copied
jsh -->unset JEDI_SECURE_LEVEL
```

In the above example the secure mode is disabled during the COPY command and so will perform much quicker. When the COPY is completed it is normal operating system practice to flush all modified file data to disk anyway.

Go Back to [Environment Variables](./../README.md)

<PageFooter />
