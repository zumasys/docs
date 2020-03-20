# Introduction to Audit Logging

**Created At:** 3/10/2017 5:00:10 PM  
**Updated At:** 12/21/2018 10:57:00 PM  
**Original Doc:** [introduction-to-audit-logging](https://docs.jbase.com/30301-jbase/introduction-to-audit-logging)  
**Original ID:** 229894  
**Internal:** No  

## Document Scope

The Introduction to Audit Logging document serves as a starting point for Administrators and Developers that are new to the audit logging feature in jBASE. The following guide is an instructional walkthrough of how to setup and configure audit logging of jBASE files .

## Prerequisites

To configure audit logging for jBASE, you will need an installed and licensed system running jBASE 5.6 or later.

## Audit Logging Synopsis

Audit Logging is a feature that allows an audit log of events on selected jBASE data file(s). It was introduced in jBASE 5.5.

The output format is flexible with the audit logs being written in either Multivalue format, Comma Separated Value format, Tab Separated Format, or as a JSON string.

The output can be directed to a number of different location types. The output location can be a directory, in which case a flat OS file is created, one line being added to the file per audit log entry, one file per day. The output location can be a simple OS file, in which case we write one line to the file per audit log entry, with no limitation. The output location can also be a named pipe, which involves having a user-supplied reader process.

## Audit Logging Configuration

Audit logging is easily configured on jBASE, although some of the more complex options require additional instruction. To enable audit logging, there are 3 simple steps

- Create a file called @AUDIT. This will usually be created along with your other data files so that every user can access it.
- Marking a file for auditing. By default, files are not audited. You now have to execute the jchmod command against each data file that you wish to be audited.
- Configuring the @AUDIT file. The first step creates a default set of action. You can now amend the configuration to support many different options available with audit logging.

These steps are now described in more details.

### Create an @AUDIT file

While the @AUDIT file can be any supported jBASE file type, the new file type of AUDIT will work best. The CREATE-FILE command supports some options for this file type.

**Command Syntax:**

```
CREATE-FILE filename TYPE=AUDIT OUTPUT=directory_name OPTIONS=optionstring
```

**Syntax Elements:**

**OUTPUT= directory\_name** shows where we place the output log files. It can also define a named pipe (see PIPING OUTPUT DIRECTORY). The default is $JBCGLOBALDIR/audit

**OPTIONS=optionstring** shows any additional options (see OUTPUT SPECIFICATIONS OPTIONS).

Create an @AUDIT file

1. Create the @AUDIT file

```
CREATE-FILE @AUDIT TYPE=AUDIT OUTPUT=C:\jBASE\JBASEADM
[ 417 ] File @AUDIT]D created , type = J4
[ 417 ] File @AUDIT created , type = AUDIT
```

The DICT section is created as a regular J4 file, but the DATA section is of the new type AUDIT. Note that the DICT is filled with suitable entries

```
COUNT DICT @AUDIT
24 Records counted
```

### Marking a data file for auditing

**Command Syntax:**

```
JCHMOD +M|-M filename
```

**Syntax Elements:**

+M = Enable audit logging on specified file.

-M = Disable audit logging on specified file.

### Configure an  @AUDIT file

Following the first 2 steps to enable audit logging (create @AUDIT file and marking your data files for auditing), this will provide basic audit logging. Each event that is logged results in a new line being added to the output file.

You can now configure audit logging by editing the item @AUDIT\_CONFIG which is in the file DICT @AUDIT. Note that any changes you made will not be reflected in a running application, you will need to stop and re-start any running applications that you wish to be affected.

The format of the definition record is as follows.

- **Attribute 1 &lt;0001&gt;** is the output directory
- **Attribute 2 &lt;0002&gt;** are the output options as shown in the table below. Each option is delimited by a comma.

This example below shows us creating the @AUDIT file with the +TJSON option, then editing the item @AUDIT\_CONFIG in file DICT @AUDIT immediately after the @AUDIT file is created, with the default options.

```
CREATE-FILE @AUDIT TYPE=AUDIT OUTPUT=`pwd`/audit OPTIONS=+TJSON
[ 417 ] File @AUDIT]D created , type = J4
[ 417 ] File @AUDIT created , type = AUDIT


JED DICT @AUDIT @AUDIT_CONFIG
File DICT @AUDIT , Record '@AUDIT_CONFIG' Insert 14:57:43
Command->
0001 /home/gregc/tmp4/audit
0002 +TJSON
```

Attribute 2 of the item @AUDIT\_CONFIG in file @AUDIT contains the options. Each option is delimited by a comma. The full list of options are given in the table below.

| Option | Description |
| --- | --- |
| +V | Verbose mode for jQL statements. With this option, a JQL Statement such as "SELECTFILENAME" will cause each item read during the select to be logged. The default action is to simply log the jQL statement but not each individual record. |
| -V | Turn off Verbose mode. |
| +G | Copy the Global audit logging definition from @AUDIT\_CONFIG in DICT @AUDIT. Basically then the definition for this file is reset to the default. |
| +Ttype | Change the format of the output to 'type' where 'type' can be JSON, MV, CSV or TAB. |
| +N | New definition -- this clears all existing definitions. |
| +M | Turn on audit logging, equivalent to -R,-D,-W. |
| -M | Turn off audit logging, equivalent to +R,+D.+W. |
| +EEnvName | Add the environment variable EnvName to the audit log record, e.g. +EPATH. |
| -EEnvName | Remove the logging of the environment variable EnvName. |
| -E\* | Remove the logging of all environment variables. |
| +R | A database READ will be logged to the output log. |
| -R | A database READ will NOT be logged to the output log. |
| +R\* | Add-on data: Log all attributes of an item during a READ in addition to the default base information. |
| -R\* | Remove all add-on data for a READ (but still log base information). |
| Rn | During a READ operation, attribute n will be dumped to the audit log. |
| +Rn | Add-on data: Log attributes 'n' to 'm' inclusive during a READ. |
| +Rn-m | Add on data: Log attributes 'n' to 'm' inclusive during a READ. |
| Rn-m | During a READ operation, attributes n-m will be dumped to the audit log. |
| R\* | During a READ operation, all attributes will be dumped to the audit log. |
|     | The above instructions are all for a READ statement. The same syntax is also available for:<ul><li>+W, -W , +W* and so on for WRITE statements .</li><li>+D, -D , +D* and so on for DELETE statements.</li><li>+C, -C , +C* and so on for CHANGES (aka &#39;diff&#39;) in attributes during a WRITE.</li></ul> |
| +X -X | During the READ statement, translate tabs and commas to attribute marks. This means that configurations where the output format is tabs (+TTAB) or comma separated values (+TCSV) can still be processed by jQL with LIST or SELECT etc. |
| +Inn | Set the log file interval to nnn minutes. By default, the output directory has one file created per day. You can change the frequency of this file switch using +Innn. For example, to get a new audit log file every hour you would specify +I60. |
| +K -K | Save the audit log key in the extended information.|

Enabling audit logging on a file

1. Create a file

```
CREATE-FILE AUDITTEST 10 101
[ 417 ] File AUDITTEST]D created , type = J4
[ 417 ] File AUDITTEST created , type = J4
```

2. Enable audit logging on AUDITTEST through the JCHMOD command with option +M

```
JCHMOD +M AUDITTEST
```

3. Open JED and edit a new record called TEST record in AUDITTEST file

```
JED AUDITTEST TEST
```

4. Add TEST01 in attribute 0001

```
*File AUDITTEST , Record 'TEST' Insert 16:49:29
Command->
0001 TEST01
-------------------- End Of Record-----------------------
```

5. Save and Exit

```
Command->FI
Record 'TEST' exited from file 'AUDITTEST'
```

6. List records in @AUDIT file

```
LIST @AUDIT
PAGE 1                                 17:08:45 10 JAN 2017
Event..... File...... Date....... Time.... Port... jBASE.....
           Name                            Number  login
READ      AUDITTEST   10 JAN 2017  13:15:54  2    JBASEADM

1 Record Listed
```

7. View records in @AUDIT file

```
ED @AUDIT *
audit_2017_01_10_00_00_00*101*105
TOP
.p
TOP
001 15
002 2
003 65738_0933EE494
004 1484234091.209622
005 1
006 44
007 65738
008 gregc
009 gregc
010
011 JBASEADM
012 /home/gregc/tmp4/AUDITTEST
013 edit.b
014 239
BOTTOM
.ex
Record 'audit_2017_01_12_00_00_00*101*105' exited from file '@AUDIT'
```

### Audit Record Format

Each time an event is recorded with audit logging, it creates a line of text in the output file of the output directory. Usually this is a multi value delimited line and the meaning of each attribute is shown below.

Using the options +TCSV  will mean that each value in the line of text is delimited by a comma, but the format is the same. The same applies for +TTAB where the values are delimited.

The output format for +TJSON, where each event has one line of JSON, is shown later.

Note: There are entries for each value in the DICT section of @AUDIT. The dictionary name is shown in the second column in the table below. Use 'LIST @AUDIT ALL' to see all the values of events in the @AUDIT file.

| Attr # | Dict Name | Description |
| --- | --- | --- |
| 2 | EVENT | The event command as follows:<br>1 = A record was READ from the file<br>2 = A record was WRITTEN to a file<br>3 = A record was DELETED from a file<br>4 = The file was CLEAR-FILE'd<br>5 = The file was DELETE-FILE'd<br>6 = A jQL or jSQL query was made on the file |
| 3 | UNIQUE | A string that uniquely identifies the process. This allows you to separate updates from other processes that might share the same process ID or Port Number.|
| 4 | UTC | The time of the operation in UTC (Universal Co-ordinated Time) format. You can convert this to a local TIME using OCONV(UTC,"U0FF0") and to a local DATE using OCONV(UTC,"U0FF1").<br>There are also DICT entries for TIME and DATE that do this. |
| 5 | SEQID | An integer that is an incrementing value which defines the relative audit log update for that process. |
| 6 | PORT | The jBASE port number. |
| 7 | PID | The operating system process ID. |
| 8 | OSNAME | The account name that the process is logged on to as supplied by the operating system. |
| 9 | JBNAME | The jBASE account name. |
| 10 | IP | The internet address or host name from where the user has connected. |
| 11 | EVENTOP | The operand to the event. This can be..<br> (a) The item-id of the update in the file that caused the audit log record.<br>(b) The jQL or jSQL query made against the file. |
| 12 | FILEPATH | The full file path of the file where the update occurred.<br>This can be split into its component parts of DIRECTORY using OCONV(FILEPATH,"U0FF2") and FILE using OCONV(FILEPATH,"U0FF3").<br>There are DICT entries for DIRECTORY and FILE that do this. |
| 13 | SOURCE | The name of the jBC source where the update occurred. |
| 14 | LINENO | The line number within the jBC source where the update occurred. |

### Output Directory

### Changing Output Directory

Changing the output directory

1. Open JED and edit the @AUDIT file @AUDIT_CONFIG record

```
JED DICT @AUDIT @AUDIT_CONFIG
```

2. Press &lt;Enter&gt; to enter edit mode in JED

3. Update the output directory in attribute 0001 from C:\JBASE\JBASEADM to C:\JBASE\JBASEADM\AUDIT

```
File DICT @AUDIT , Record '@AUDIT_CONFIG'    Insert 14:30:29
Command->
0001 C:\jBASE\JBASEADM
0002


Command->
0001 C:\jBASE\JBASEADM\AUDIT
0002
---------------------- End Of Record--------------------------
```

4. Press &lt;Esc&gt; followed by FI to save and exit JED

```
Command->FI
Record '@AUDIT_CONFIG' written to file 'DICT @AUDIT'
```

- Changes to the @AUDIT file will not take effect for the running processes. To incorporate the changes, a process needs to exit and re-start.
- The  new Output Directory needs to be previously created in order to successfully adjust.

### Sending Audit Log to Names Pipes (UNIX)

When the @AUDIT file is created of type AUDIT, the default option for OUTPUT is to specify a directory name. In this directory, a series of files will be created, one file per day, containing the audit logs , one line per log.

Instead of providing the name of a directory, you can also provide the name of a FIFO pipe. Under this scheme, the audit log will be written to a named pipe, and a different process will read the information from the pipe.

Using named pipes allows a huge amount of flexibility. The reading process can be third party applications, it could encrypt the data and pipe it elsewhere, it can provide a security layer between the jBASE process and the rest of the system.

With named pipes, jBASE can only write the audit log to the named pipe. You cannot read from the named pipe, so other jBASE commands such as LIST @AUDIT or ED @AUDIT \* will not work.

This is an example of using named pipes on Unix. Note that on some variants of Unix, you need to use the 'mkpipe &lt;filename&gt;' command instead of 'mknod &lt;filename&gt; p'

Creating a named pipe

1. Create a named pipe

```
mknod mypipe p
ls -l
total 0 prw-rw-r-- 1 fb fb 0 Mar 4 15:04 mypipe
```

2. Create the @AUDIT file to reference this pipe. (Alternatively you could edit the DICT @AUDIT @AUDIT_CONFIG attribute 1 to point to the pipe).

```
CREATE-FILE @AUDIT TYPE=AUDIT OUTPUT=`pwd`/mypipe FORMAT=JSON
[ 417 ] File @AUDIT]D created , type = J4
[ 417 ] File @AUDIT created , type = AUDIT
```

3. Start a reading process

```
tail -f mypipe
```

4. From a different shell, create a file with some audit log entries

```
CREATE-FILE DUMMY 1,1 23,1
[ 417 ] File DUMMY]D created , type = J4
[ 417 ] File DUMMY created , type = J4
JCHMOD +M DUMMY
JED DUMMY ITEMID
New record
ITEMID
Record 'ITEMID' written to file 'DUMMY'
```

Going back to the original process where we started the reading process in stage (3), we can see a record has been written to the named pipe and read by the reading process like this.

```
jbase-~/tmp: tail -f mypipe{"EVENT":1,"UNIQUEID":"63675_08BE52A51","UTC":1458340964,"SEQID":1,"PORT":6,"PID":63675,"OSNAME":"jbasedev","JBNAME":"jbasedev","IP":"","EVENTOP":"GREG","FILEPATH":"\/home\/jbasedev\/apps\/ACCOUNTS","SOURCE":"edit.b","LINENO":239}
```

### Output Formats

The default output format is Multivalue (MV), which means the output line has its values delimited by an attribute mark, making it a Multivalue format. Other output formats are shown below.

**MV:**

The output format is multivalue, i.e. each value is separated by an attribute mark. This is the only format that will allow some jBASE commands to understand the format. For example, you can SORT or LIST the file when the output format is MV. If you change the format, then SORT and LIST will only see a single value comprising a single text string.

**CSV**

The output format is Comma Separated Value. Each value is separated by a comma.

**TAB:**

The output format is TAB. Each value is separated by a TAB.

**JSON:**

The output format is JSON. Each log entry will create a JSON string.

For Example:

``` json
{
"EVENT": 1,
"UNIQUEID": "63675_08BE52A51",
"UTC": 1458340964713892,
"SEQID": 1,
"PORT": 6,
"PID": 63675,
"OSNAME": "jbasedev",
"JBNAME": "jbasedev",
"IP": "",
"EVENTOP": "GREG",
"FILEPATH": "\/home\/jbasedev\/apps\/ACCOUNTS",
"SOURCE": "edit.b",
"LINENO": 612
}
```

### Changing Output Formats

You can change the auditing options by editing the item @AUDIT_CONFIG in the DICT @AUDIT file.

Change the output type from MV to CSV

1. Open JED and edit the @AUDIT file @AUDIT_CONFIG record

```
JED DICT @AUDIT @AUDIT_CONFIG
```

2. Update the output directory in attribute 0002 from MV to CSV

```
File DICT @AUDIT , Record '@AUDIT_CONFIG' Â  Â Insert 14:30:29
Command->
0001 C:\jBASE\JBASEADM
0002 +TMV


Command->
0001 C:\jBASE\JBASEADM
0002 +TCSV
---------------------- End Of Record--------------------------
```

4. Press &lt;Esc&gt; to exit edit mode in JED

5. Enter the Save and Exit command

```
Command->FI


Record '@AUDIT_CONFIG' written to file 'DICT @AUDIT'
```

Note:

- Changes to the @AUDIT file will not take effect for the running processes. To incorporate the changes, a process needs to exit and re-start.

### Multiple Audit Logging Configurations

The default global audit log definition remains item id @AUDIT\_CONFIG in file DICT @AUDIT, as shown in previous examples.  Not every data file wants to follow the audit logging options that are the default. With jBASE audit logging, you can customize each data file individually to provide audit logging options unique to that file.

The ability to define audit logging on a per-file basis is achieved through editing an item called @AUDIT\_CONFIG in the DICT of the file you want to modify the behavior of.

Configuring different audit logging options for separate files

1. Open JED and review the @AUDIT file @AUDIT_CONFIG record

```
JED DICT @AUDIT @AUDIT_CONFIG
Command->
0001 C:\jBASE\JBASEADM
0002 +TCSV
```

2.  Open JED to edit the dictionary file for the file that you wish to configure differently from the default audit logging configuration.

3. Add @AUDIT\_CONFIG record to file.

```
JED DICT ACCOUNTS @AUDIT_CONFIG
```

4. If attributes are left blank, the default audit logging configuration will be applied to file.  Whichever attribute is altered, will alter the audit logging configuration for the specified file being edited.  The example below alters the specified file's output format.

```
Command->
0001
0002 +TJSON,+D*
Record '@AUDIT_CONFIG' written to file 'DICT ACCOUNTS'
```

- Changes to the @AUDIT file will not take effect for the running processes. To incorporate the changes, a process needs to exit and re-start.

The mechanism works as though attribute &lt;2&gt; of @AUDIT_CONFIG in this individual file is appended to attribute &lt;2&gt; of @AUDIT_CONFIG in @AUDIT and then parsed as a single definition. As the options allow for clearing the options, and adding and taking away options, you have considerable flexibility.

For example, if attribute &lt;2&gt; in the @AUDIT_CONFIG for the individual file is set to:

+N,+D\*,+EPGP_TTY

This means:

+N   Forget about anything defined so far -- start with a blank canvas, so anything in the default definition is forgotten about

+D\* Output the diff of all attributes during a DELETE

+EPGP_TTY Output the value of the environment variable PGP_TTY

### Programmatically Query and Set Audit Logging Options

Although the @AUDIT file is a special file in that the output is one "record" to a single line in an OS flat file, you can still read it using normal jBASE mechanisms. We've already seen that you can do a LIST on @AUDIT, here is a programmatic way of accessing the data

```
OPEN "@AUDIT" TO FILEVAR ELSE STOP 201,"@AUDIT"
SELECT FILEVAR
LOOP WHILE READNEXT key DO
READ record FROM FILEVAR,key ELSE DEBUG
PRINT "Update type ":record<2>:" at ":OCON (record<4>,"U0FF0":@VM:"MTS")
REPEAT
```

The options for an opened file can be queried and set using IOCTL statements on an individual opened file. You can query the current options like this

```
INCLUDE JBC.h
OPEN "CUSTOMERS" TO FILEVAR ELSE DEBUG
options = "??"
IF IOCTL(FILEVAR , JBC_COMMAND_AUDIT_GET , options) ELSE NULL
PRINT "Options for file CUSTOMERS = " : options
```

You can also set new options using IOCTL. Note that this call will add the options to the existing options rather than replace them. For example if you want to stop logging completely on a file while you call a subroutine

```
INCLUDE JBC.h
IF IOCTL(FILEVAR, JBC_COMMAND_AUDIT_SET , "+M") THEN NULL
CALL SomeSubroutine
IF IOCTL(FILEVAR, JBC_COMMMAND_AUDIT_SET , "-M") THEN NULL
```

### Externded information in the Audit Log record

We have already seen the format of an entry in the audit log for a single event -- usually a attribute delimited record with 14 attributes. This is the default output. However, using some of the options in attribute 2 of the @AUDIT_CONFIG record mean this record gets extended.

This sections details the attributes that extended onto the default record with each option.

Attribute 1 of the log record is changed from being a blank to being the attribute number where these extensions start. At the time of writing, we always start adding at attribute 15, and attribute 1 is set to 15 -- please don't hard-code 15 into your application, as jBASE might extend the default values in the future. Use attribute 1 to determine where to start looking for the extended information.

As an example, given the following definition in @AUDIT_CONFIG

```
File DICT @AUDIT , Record '@AUDIT_CONFIG'        Insert 17:47:36
Command->
0001 /home/gregc/tmp4/audit
0002 +C1,+W1,+R1,+EGPG_TTY
```

This definition is telling us

- +C1    Log any changes to attribute 1 during a WRITE operation
- +W1   Log attribute 1 for each WRITE operation
- +R1   Log attribute 1 for each READ operation
- +EGPG\_TTY   Log the environment variable GPG\_TTY for each operation.

We will now edit a record in AUDITTEST, changing attribute 1 from "Hello" to "World".

```
ED AUDITTEST TEST1
TEST1
TOP
.
001 Hello
BOTTOM
.r/Hello/World
001 World
BOTTOM
.FI
Record 'TEST1' written to file 'AUDITTEST'
```

This produces a couple of records in the audit log like this

```
15
1
86291_098ECC884
1484329371.782505
1
44
86291
gregc
gregc

TEST1
/home/gregc/tmp4/AUDITTEST
edit.b
612
R1
Hello
EGPG_TTY
/dev/pts/8
```

In this record which is the READ that ED performed to initially read the item, the following attributes are noted:

- 0001 **15** - This shows the extended attributes start at attribute &lt;15&gt;
- 0002 **1 -** This shows the operation was a READ
- 0015 **R1 -** The first extended attribute and shows we are defining attribute 1 for a READ
- 0016 **Hello -** This is the data that goes with the previous declaration, in other words, that attribute 1 during the READ had the value Hello
- 0017 **EGPG\_TTY -** This is the second extended attribute and shows we are defining the value of the environment variable GPG\_TTY
- 0018 **/dev/pts/8** - This is the data that goes with the previous declaration, in other words, that the environment variable contained the data /dev/pts/8

The next record is the WRITE that ED performed after we had edited attribute 1 from Hello to World and issued a FI command.

```
15
2
86291_098ECC884
1484329377.667443
2
44
86291
gregc
gregc

TEST1
/home/gregc/tmp4/AUDITTEST
edit.b
239
W1
World
C1
Hello
World
EGPG_TTY
/dev/pts/8
```

- 0001 **15 -** This shows the extended attributes start at attribute &lt;15&gt;
- 0002 **2 -** This shows the operation was a WRITE
- 0015 **W1 -** The first extended attribute and shows we are defining attribute 1 for a WRITE
- 0016 **World -** This is the data that goes with the previous declaration, in other words, that attribute 1 during the WRITE had the value World
- 0017 **C1 -** This extended attribute shows we are going to declare the CHANGE between attribute values for attribute 1.
- 0018 **Hello -** This is the data associated with the previous declaration, and is the BEFORE image of attribute 1.
- 0019 **World -** This is the data associated with the previous declaration, and is the AFTER image of attribute 1.
- 0020 **EGPG\_TTY -** This is the second extended attribute and shows we are defining the value of the environment variable GPG\_TTY.
- 0021 **/dev/pts/8** - This is the data that goes with the previous declaration, in other words, that the environment variable contained the data /dev/pts/8

### Extended Informtion with JSON Output

In the previous example, the output format was multivalue. As an example, if we wanted to do the same thing but with JSON output, then our definition in @AUDIT_CONFIG would simply have the instruction +TJSON added like this

```
File DICT @AUDIT , Record '@AUDIT_CONFIG'       Insert 17:47:36
Command->
0001 /home/gregc/tmp4/audit
0002 +C1,+W1,+R1,+EGPG_TTY,+TJSON
```

The second audit log entry shown above would look like this in JSON (note that the actual output is all on a single line -- we have formatted it here to make it readable).

``` json
{
"RECDATA": 15,
"EVENT": 2,
"UNIQUEID": "86738_0990105E5",
"UTC": 1484330703.080870,
"SEQID": 2,
"PORT": 44,
"PID": 86738,
"OSNAME": "gregc",
"JBNAME": "gregc",
"IP": "",
"EVENTOP": "TEST1",
"FILEPATH": "\/home\/gregc\/tmp4\/AUDITTEST",
"SOURCE": "edit.b",
"LINENO": 239,
"WRITEVALUES": [{
"ATTR": 1,
"VALUE": "World"
}],
"DIFFVALUES": [{
"ATTR": 1,
"BEFORE": "Hello",
"AFTER": "World"
}],
"ENV": [{
"GPG_TTY": "\/dev\/pts\/8"
}]
}
```

[Back to Miscellaneous](./../README.md)
