# jBASE Independent Metrics Integration (JIMI)

<PageHeader />  

**Tags:**
<badge text='performance monitoring' vertical='middle' />

There are two sides to JIMI:

1. Event Driven Metrics (EDM) which are produced in real time

2. Source Quality Metrics (SQM which are produced when programs are compiled.

## 1. Event Driven Metrics (EDM)

In jBASE release 4.1 onwards there is new functionality that allows for gathering information about application events in a non-real time manner. These statistics include information such as execution path length, database I/O operations, execution path branches (CALL and PERFORM) and so on. There are three basic ways of enabling EDM:

- Use the API to enable this functionality on the same port or another user’s port.
- From the command line using the ‘jprof’ command you can enable this functionality for your own port or another user’s port.
- Using the JDIAG environment variable

The use of EDM means jBASE will generate a text file describing all sorts of information. However no attempt is made to perform any analysis of this output, it is up to the user to decide what to do with the information.

### EDM calling API

Two functions turn on and turn off the Event Driven Metrics. These functions are called JIMITraceOn and JIMITraceOff and are prototyped in the jBASE supplied file jimiB.h.

```
 JIMITraceOn(PortNumber , FileName , Options )
```

This function calls turns EDM on for a particular port, where:

- **PortNumber**: specifies the port number to turn on or -1 to denote a user defied port.
- **FileName**: The name of a file where the details will be written to. On UNIX systems it can also be the name of a tty device (e.g. “/dev/pts/0”) so you can monitor on a terminal the events occurring in an application. Also “stdout” and “stderr” are valid.
- **Options**: Define here a list of options separated by commas which describe what details to gather. By default i.e. “” , just short details are gathered. The options are:
  - **DATABASE** All OPEN’s and database I/O (such as READ , WRITE) are traced
  - **OPEN** All OPEN’s are traced
  - **FILEIO** All database I/O (such as READ, WRITE) but not including OPEN are traced
  - **BRANCH** All CALL, RETURN and PERFORM/EXECUTE statements are traced
  - **CALL** All CALL and RETURN statements are traced
  - **EXECUTE** All PERFORM/EXECUTE statements are traced
  - **TRANSACTION** Details of committed transactions including before and after images are traced
  - **ALL** All the above options
  - **VERBOSE** By default summaries are displayed at the end of the session. Using verbose gives a detailed output of each option as it happens.
  - **HOLDIO** Holds before and after images in memory during the trace

```
JIMITraceOff(PortNumber)
```

This function call turns EDM off for a particular port, where:

- **PortNumber**: specifies the port number to turn off or -1 to denote a user defined port. Once turned off you can read in this information in a number of ways:
  - using the jBASE jed editor,
  - UNIX editors like vi or
  - read the file programmatically using OPEN and READ. Because the file might be quite substantial perhaps OPENSEQ and READSEQ would be more appropriate.

The return value from these functions are 0 for successful or non-zero for an error. To get the relevant DEFC statements to support calling this function, it is necessary to include jimiB.h in the application. Once EDM is initiated a text oriented output is sent to the file name specified. In a multi-thread environment, only the event details for that port are recorded even if multiple ports are running in different threads inside the same process.

The functions:

```
JIMIBeforeImage()
```

or

```
JIMIAfterImage()
```

provide before and after images respectively of any records which have been updated as part of the current Transaction context. These are only populated if the HOLDIO parameter is specified when starting the JIMI trace. Unless the HOLDIO parameter is specified when the JIMI trace is started, this detail appears in the logfile as a single line; E.g.

```
COMMIT_BEGIN:
WRITE_BEFORE_FILEIO: FILENAME=testfile_1 KEY=1 IMAGE=2
WRITE_AFTER_FILEIO: FILENAME=testfile_1 KEY=1 IMAGE=2
…..
WRITE_BEFORE_FILEIO: FILENAME=testfile_10 KEY=10 IMAGE=11
WRITE_AFTER_FILEIO: FILENAME=testfile_10 KEY=10 IMAGE=11
COMMIT_END:
```

### EDM from the command line

The jprof command may be used to enable or disable this EDM functionality as:

```
jsh-> jprof –j ON nnn filename options
```

Or

```
jsh -> jprof –j OFF nnn filename options
```

Where:

- **nnn** is the port number to turn on or off. You can specify % which means the same port number you are running  jprof from.
- **filename** is the name of the output file as described above in the “FileName” parameter to the JIMITraceOn function.
- **options** is one or more of the strings as described above in the “Options” parameter to the JIMITraceOn function.

### EDM using the JDIAG environment variable

The JDIAG environment variable encompasses a large number of options and the EDM has been added to this. To find a short summary of all the JDIAG options use the command below from a UNIX shell.

```
machinename-~src/jbase4/4.1.3/jbase: JDIAG=HELP WHO
JDIAG=option{:option{:option ...}}
option can be one of ...
profile={off|short|long|user|jcover|all}
filename={stdout|stderr|tmp|pathname{,refresh_mins}
(%p in pathname is substituted with process id)
(%t in pathname is substituted with time stamp)
memory={off|on|verify}
branch={off|on|verbose}
jimi={database|open|fileio|branch|call|perform|transaction|all|verb
ose}
trace=env_name{,env_name..}
help
3 greg
machinename-~src/jbase4/4.1.3/jbase:
```

So to trace all database and transaction information into a file called ‘trace\_nnn\_out’ where ‘nnn’ is the process id (hence a new file for each process). An example which sets JDIAG, runs a command (WHO) and then examines the resultant output file, would be as:

```
machinename-~src/jbase4/4.1.3/jbase: export
JDIAG=jimi=database,transaction,verbose:filename=trace_%p_out
machinename-~src/jbase4/4.1.3/jbase: ls -l trace*
ls: trace*: No such file or directory
Machinename-~src/jbase4/4.1.3/jbase: WHO
3 trace
Machinename-~src/jbase4/4.1.3/jbase: ls -l trace*
-rw-r--r-- 1 trace trace 1045 Mar 2 18:04
trace_7338_out
Machinename-~src/jbase4/4.1.3/jbase: cat greg_7338_out
TIMESTAMP: time 1078250684
OPEN: FILENAME=/home/greg//4.0_rels/jbc4.1.4.3/tmp/jBASEWORK
70
TYPE=HASH4 STACK=1,0 SUCCESS=0SOURCE=jmainfunction.b,0
PATHLENGTH=121 TIME=2535235.970
OPEN: FILENAME=DICT POINTER-FILE STACK=1,0 SUCCESS=2
SOURCE=jmainfunction.b,0 PATHLENGTH=125
TIME=2535235.980
OPEN: FILENAME=POINTER-FILE STACK=1,0 SUCCESS=2
SOURCE=jmainfunction.b,0 PATHLENGTH=125
TIME=2535235.980
RELEASE:
FILENAME=/home/greg//4.0_rels/jbc4.1.4.3/tmp/jBASEWORK
KEY=JBASE_SET_ROOT*3 TRANSACTION=NO STACK=1,0
SUCCESS=0 SOURCE=jmainfunction.b,0 PATHLENGTH=129
TIME=2535235.980
DELETE: FILENAME=/home/greg//4.0_rels/jbc4.1.4.3/tmp/jBASEWORK
TRANSACTION=NO KEY=JBASE_SET_ROOT*3 STACK=1,0 SUCCESS=2
SOURCE=jmainfunction.b,0 PATHLENGTH=129 TIME=2535235.980
*
* JIMI output created by user greg on port 3 at Tue Mar 2 18:04:44
2004
*
READS: 0
WRITES: 0
OPENS: 3
DELETES: 1
CLEARFILES: 0
RELEASES: 0
RELEASEFILES: 0
SELECTS: 0
TRANSENDS: 0
TRANSABORTS: 0
PERFORMS: 0
PATHLENGTHS: 173
CALLS: 2
OPENSEQS: 0
READSEQS: 0
WRITESEQS: 0
SLEEPS: 0
INPUTS: 0
STOPS: 1
Machinename-~src/jbase4/4.1.3/jbase: unset JDIAG
Machinename-~src/jbase4/4.1.3/jbase:
```

### EDM Output

The output generated by calling JIMITraceOn is simple text layout which can be sent either to a genuine operating system file or on Unix systems, to a terminal. Each line is usually a single line with each detail delimited by a tab character to make for easy parsing later. The use of the trace functions means a text file is created at the point specified by the user. Each line of text is usually a single event and consists of a number of fields delimited by a tab character. The output may contain blank lines and also comment lines that start with \* or #

The following is a list of output generated by various options on the call to JIMITraceOn.

- **Standard output with no additional options specified.**

These will all appear as a summary when JIMI is turned OFF by various mechanisms e.g. using the JIMITraceOff API, or the user logging off, or the ‘jprof –j off’ command being executed.

```
READ: nnn
WRITES: nnn
OPENS: nnn
DELETES: nnn
CLEARFILES : nnn
RELEASES: nnn
RELEASEFILES: nnn
SELECTS: nnn
TRANSENDS: nnn
TRANSABORTS: nnn
PERFORMS: nnn
PATHLENGTHS: nnn
CALLS: nnn
OPENSEQS: nnn
READSEQS: nnn
WRITESEQS: nnn
SLEEPS: nnn
INPUTS: nnn
STOPS: nnn
```

- **Optional output with the DATABASE or FILEIO option.**

These will appear as a summary when JIMI is turned OFF by various mechanisms e.g. using the JIMITraceOff API, or the user logging off, or the ‘jprof –j off’ command being executed.

```
TRANSTART: NAME=XXX COUNT=nnn
TRANEND: COUNT=nnn
TRANSABORT: COUNT=nnn
READ: FILENAME=name_of_file COUNT=nnn
READ: FILENAME=name_of_file COUNT=nnn
WRITE: FILENAME=name_of_file COUNT=nnn
DELETE: FILENAME=name_of_file COUNT=nnn
SELECT: FILENAME=name_of_file COUNT=nnn
CLEARFILE: FILENAME=name_of_file COUNT=nnn
RELEASE: COUNT=nnn
RELEASE: FILENAME=name_of_file COUNT=nnn
READSEQ: FILENAME=name_of_file COUNT=nnn
WRITESEQ: FILENAME=name_of_file COUNT=nnn
```

- **Optional output with the DATABASE or OPEN option.**

```
OPEN: FILENAME=name_of_file COUNT=nnn
OPENSEQ: FILENAME=name_of_file COUNT=nnn
```

- **Optional output with either the DATABASE or FILEIO and VERBOSE options.**

These appear before each statement is executed. Note that you should parse each field delimited by TAB, separately and not assume each field will be in any particular order. Each line, as part of the \*\*COMMON\_INFO\*\* as detailed later, has a SUCCESS=nn part and you should always be aware that if the value for nn is not 0, the operation failed and so some of the values might be incorrect e.g. during a READ if SUCCESS=2 then the record didn’t exist and the SIZE=nn part is invalid.

```
TRANSTART: NAME=XXX SYNC=ON|OFF **COMMON_INFO**
TRANEND: **COMMON_INFO**
TRANSABORT: **COMMON_INFO**
READ: FILENAME=name_of_file KEY=item_id LOCK=YES|NO
TRANSACTION=YES|NO SIZE=nnn **COMMON_INFO**
READ: FILENAME=name_of_file KEY=item_id LOCK=YES|NO
TRANSACTION=YES|NO SIZE=nnn FIELD=nnn
**COMMON_INFO**
WRITE: FILENAME=name_of_file KEY=item_id SIZE=nnn
LOCK=YES|NO TRANSACTION=YES|NO **COMMON_INFO**
DELETE: FILENAME=name_of_file KEY=item_id
TRANSACTION=YES|NO **COMMON_INFO**
SELECT: FILENAME=name_of_file **COMMON_INFO**
CLEARFILE: FILENAME=name_of_file **COMMON_INFO**
RELEASE: TRANSACTION=YES|NO **COMMON_INFO**
RELEASE: TRANSACTION=YES|NO FILENAME=name_of_file
**COMMON_INFO**
RELEASE: TRANSACTION=YES|NO FILENAME=name_of_file
KEY=item_id **COMMON_INFO**
READSEQ: FILENAME=name_of_file SIZE=data_size
**COMMON_INFO**
WRITESEQ: FILENAME=name_of_file SIZE=data_size
**COMMON_INFO**
```

- **Optional output with either the DATABASE or OPEN option and VERBOSE option.**

```
OPEN: FILENAME=name_of_file TYPE=DB2|ORACLE|J3|J4
**COMMON_INFO**
OPENSEQ: FILENAME=name_of_file TYPE=SEQUENTIAL
**COMMON_INFO**
```

- **Optional output with the BRANCH or CALL option**

These will appear as a summary when JIMI is turned OFF by various mechanisms e.g. using the JIMITraceOff API, or the user logging off, or the ‘jprof –j off’ command being executed.

```
CALL: SUBNAME=nnn COUNT=nnn
```

- **Optional output with the BRANCH or PERFORM option.**

```
PERFORM: COMMAND=Command Line Details COUNT=nnn
```

- **Optional output with either the BRANCH or CALL option and VERBOSE options.**

These appear after each statement is executed.

```
CALL: SUBNAME=name_of_subroutine **COMMON_INFO**
RETURN: SUBNAME=name_of_subroutine
PATHLENGTH=num_instructions **COMMON_INFO**
```

- **Optional output with either BRANCH or PERFORM option and VERBOSE option.**

```
PERFORM: COMMAND=Command Line Details
**COMMON_INFO**
```

- **Optional output with the TRANSACTION option.**

This output appears irrespective of whether the VERBOSE option was used or not. These appear following successful execution of a TRANSEND statement and detail in chronological order the WRITE’s and DELETE’s that make up the transaction.

COMMIT\_BEGIN: and COMMIT\_END: operations surround the entire transaction so just one set of these per transaction
WRITE\_BEGIN: and WRITE\_END: operations surround a WRITE operation inside a transaction so one set of these per WRITE
DELETE\_BEGIN: and DELETE\_END: operations surround a DELETE operation inside a transaction so one set of these per DELETE
WRITE\_BEFORE\_BEGIN: and WRITE\_BEFORE\_END: operations show any before image information associated with a WRITE
WRITE\_AFTER\_BEGIN: and WRITE\_AFTER\_END: operations show the after image information associated with a WRITE
DELETE\_BEFORE\_BEGIN: and DELETE\_BEFORE\_END: operations show any before image information associated with a DELETE.

Consider the following lines of code and assume the file is empty to start off with.

```
TRANSTART ELSE STOP
WRITE “Blood bank information line 1” ON FILEVAR,”ID1”
WRITE “Overwrite the blood bank information” ON FILEVAR,”ID1”
DELETE FILEVAR,”ID1”
TRANSEND ELSE STOP
```

This would give the following output with the characters in **bold type** showing comments added

COMMIT\_BEGIN: Shows the start of the transaction information

WRITE\_BEGIN: FILENAME=fb1 KEY=ID1 **the start of the first WRITE statement**

WRITE\_AFTER\_BEGIN: The start of the AFTER image of the first WRITE statement

000001: Blood bank information line 1 Line 1 of the AFTER image of the first WRITE statement

WRITE\_AFTER\_END: The end of the AFTER image of the first WRITE statement

WRITE\_END: The end of the first WRITE statement

WRITE\_BEGIN: FILENAME=fb1 KEY=ID1 **the start of the second WRITE statement**

WRITE\_BEFORE\_BEGIN: The start of the BEFORE image of the second WRITE statement

000001: Blood bank information line 1 Line 1 of the BEFORE image of the first WRITE statement

WRITE\_BEFORE\_END: The end of the BEFORE image of the second WRITE statement

WRITE\_AFTER\_BEGIN: The start of the AFTER image of the second WRITE statement

000001: Overwrite the blood bank information Line 1 of the AFTER image of the second WRITE statement

WRITE\_AFTER\_END: The end of the AFTER image of the second WRITE statement

WRITE\_END: The end of the second WRITE statement

DELETE\_BEGIN: FILENAME=fb1 KEY=ID1 the start of the first (and only) DELETE statement

DELETE\_BEFORE\_BEGIN: The start of the BEFORE image of the first (and only) DELETE statement

000001: Overwrite the blood bank information Line 1 of the BEFORE image of the first (and only) DELETE statement

DELETE\_BEFORE\_END: The end of the BEFORE image of the first (and only) DELETE statement

DELETE\_END: The end of the first (and only) DELETE statement

COMMIT\_END: Shows the end of the transaction information

**\*\*COMMON\_INFO\*\***refers to a number of statements that are common to the trace messages …

STACK=3,2 this shows the current PERFORM/EXECUTE level is 3 and that the CALL stack level is 2. In other words this is the 3rd concurrent program executing for the user and in the current running program the subroutine nest is 2 i.e. there is another subroutine below it. Note the main program counts as a subroutine.

SOURCE=sourcename,line,sourcename,line,sourcename,line Shows where the trace message was called from and the stack of subroutines below it. Displayed to a maximum depth of 3 entries

PATHLENGTH=nnn Shows the current number of licensing instructions executed so far.

SUCCESS=nn where 0 is a success for the operation and any other value is the error number for the failure. If a failure, other parts of the event might be incorrect.

TIME=nnnnnn.nnn gives a decimal number in seconds since 1st Jan 1970 and so allows timings

between different statements.

## 2. Source Quality Metrics (SQM)

There are options to both the BASIC command and the jcompile command such that the quality of the source code compiled can be evaluated. On the whole jBASE merely generates the statistics during a compilation. It is up to the caller to then interpret the results as he/she sees fit. Use the (J) option to generate the SQM data to the BASIC command and the -JJ option to the jcompile command. In either case the output will be a simple text file whose name is of the format “sourcename.sqm” where sourcename is the original source name. The text file will be placed in the same file that the original source code was found. The layout of the file is a multi-value file whose attributes are as follows. Use the text name given to each attribute rather than hard-coding an attribute number as the layout might change (found in jimiBh).

- **001 JBASE\_SQM\_VARIABLES**

A multi-value list of all variable names local to the subroutine (or main program). In the case of dimensioned arrays the initial dimensions are given as defined e.g. FILEVAR(10,2)

- **002 JBASE\_SQM\_SUBROUTINES**

A multi-value list of all subroutines called in the format SUBROUTINENAME&lt;vm&gt; Line Number. Note that a call such as “CALL @subname” will have “@subname” as the subroutine name allow you to differentiate between direct and indirect calls.

- **005 JBASE\_SQM\_INSERT:**

A multi-value list of all the INSERT statements seen. The format of this is not accurately defined at the moment but will probably be in the format

```
‘NAME_OF_INSERT_FILE<sv>NUMBER_LINES_EQUATES<sv>NUMBER_LINES_CODE’
```

- **011 JBASE\_SQM\_SELECT:**

A multi-value list of all ‘SELECT’ statements seen where each value is the line number it is seen on.

- **012 JBASE\_SQM\_RELEASE:**

A multi-value list of all line numbers containing a ‘RELEASE’ statement.

- **013 JBASE\_SQM\_RELEASE\_VAR:**

A multi-value list of all ‘RELEASE VARiable’ statements seen where each value is the line number it is seen on.

- **014 JBASE\_SQM\_TRANSACTION**

A multi-value list of all transaction statements where each value is of the format

```
‘TRANSTART|TRANSEND|TRANSABORT<sv>line_number’
```

- **015 JBASE\_SQM\_GOTO**

A list of all line numbers where a GOTO is seen.

- **016 JBASE\_SQM\_RETURNTO:**

A list of all line numbers where a ‘RETURN TO’ statement is seen.

- **019 to 049 RESERVED**

- **050 JBASE\_SQM\_DATE**

The date in internal format this SQM file was created

- **051 JBASE\_SQM\_TIME**

The time in internal format this SQM file was created.

- **052 JBASE\_SQM\_JBASE\_USER**

The jBASE user name who compiled this SQM file.

- **053 JBASE\_SQM\_OS\_USER**

The operating system name of the user who compiled this SQM file

Back to [Tools and Utilities](./../README.md)

<PageFooter />
