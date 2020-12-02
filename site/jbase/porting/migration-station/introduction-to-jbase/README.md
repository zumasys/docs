# Introduction to jBASE

<PageHeader />

**Tags:**
<badge text='new to jbase' vertical='middle' />
<badge text='basics' vertical='middle' />
<badge text='fundamentals' vertical='middle' />
<badge text='learning' vertical='middle' />
<badge text='understand' vertical='middle' />
<badge text='introductory' vertical='middle' />
<badge text='learn' vertical='middle' />
<badge text='new' vertical='middle' />
<badge text='guide' vertical='middle' />
<badge text='beginners ' vertical='middle' />
<badge text='beginner' vertical='middle' />
<badge text='introduction' vertical='middle' />

## Document Scope

The Introduction to jBASE document serves as a starting point for Administrators and Developers that are new to jBASE. The following guide is an instructional walkthrough of fundamental system administration tasks and how to begin programming in the jBASE database.

## Prerequisites

To perform this introduction of jBASE, you will need an installed and licensed system running a version of **jBASE 5.x**.  If you need to complete this task, please review the jBASE Installation Guide for Windows or Linux.

## jBASE Synopsis

**Where is jBASE information?**

jBASE uses Environment Variables extensively. Environment Variables are Operating System global variables for a shell. Very similar to **NAMED COMMON** in that they stay set for the entire time the user is in a shell. Unlike **NAMED COMMON** in PICK since, they are not reset with a **LOGTO**. Only valid strings can be saved in Environment Variables, special OS characters must be escaped or enclosed in quotes or single quotes. Application and Operating System (OS) commands use environment variables to aid in their execution.

- **JBCRELEASEDIR** tells the OS where the jBASE release programs, libraries and supporting files are located
- **JBCGLOBALDIR** tells jBASE where the configuration files are located
- **PATH** tells jBASE (actually any OS shell) where the program executables reside
- **JBCOBJECTLIST** tells jBASE where the shared object (subroutines) reside
- **JEDIFILENAME\_MD** tells jBASE what file to treat as a traditional PICK MD
- **JEDIFILENAME\_SYSTEM** tells jBASE what file to treat as a traditional PICK SYSTEM file
- **JEDIFILEPATH** tells jBASE where to look for files (after looking in the MD)

**Where are the programs?**

```
jshow -c programname
```

- **PATH** -- UNIX (and jBASE) binaries and all of your applications need to be in the PATH in order to run.
- **JBCRELEASEDIR/bin** must be in the **PATH** list for jBASE to run.

**Where are the subroutines?**

```
jshow -c subroutinename
```

- **JBCOBJECTLIST** -- All jBASE subroutines must be in a directory included in this environment variable
- **Triggers** -- The CATALOGed subroutines **lib** directory must be in this list, jQL dictionary CALL or B-correlative subroutines. The **lib** directory must be in this list

**Where is the data?**

```
jshow -f filename
```

- **JEDIFILEPATH** -- If not set, the files are found in the current directory, the simplest version of where the data is located. The first one on the list is returned.
- **JEDIFILENAME\_SYSTEM** -- Stores "Accounts" which each have a VOC or MD known as the
  - **JEDIFILENAME\_MD**
- **JEDIFILENAME\_MD** is the VOC or MD.
- Q-pointer files, F-pointer files would return data before those in JEDIFILEPATH

```
CUSTOMER

001 F

002 /home/jbase/data/CUSTOMERS

003 /home/jbase/data/CUSTOMERS]D
```

### The VOC or MD is always first

- If CUSTOMER is in the VOC and in the JEDIFILEPATH, it will use the file in the VOC first.
- If DELETE-FILE is a proc in the VOC, it will run it rather than the first one in the PATH

### jdiag will show important jBASE environment information

- jdiag -v will give verbose information including all environment variables
- jdiag -vL will put these items into a jdiag.out item

## View and set jBASE Environmant Variables

### Linux

### Environment variables needed for all users can be set in /etc/profile

- This is where UNIX global variables are set
- With jBASE 5, the default environment can be set up here.

### User-specific environment variables are set in the home directory .profile

- Often times they are set in a separate item and sourced into the individual .profile items

### Assign the variable, then export it in Linux

- JBCRELEASEDIR=/opt/jbase/CurrentVersion (this sets a value and is often used in shell scripts)
- export JBCRELEASEDIR (this exports that value to the Environment, not needed if only used in the shell script)

### Some Linux system shells allow assigning and exporting in one command

- export JBCRELEASEDIR=/opt/jbase/CurrentVersion

### In Linux, env will set the Environment Variable for the extent of a command

- env TZ=PST8PDT date (will display date based on Pacific time zone)
- This is only temporarily the environment for the command

### In Linux, env can also clear and set the environment

- env -c PATH=/usr/lib date (will clear the environment and only set PATH)

## UNIX

### echo command prefixing the variable with the special shell character $

- echo $JBCRELEASEDIR
- Displays the contents of the JBCRELEASEDIR Environment Variable

### env command

- env
- Displays the contents of all Environment Variables
- Env JBCRELEASEDIR
- Displays the contents of the JBCRELEASEDIR Environment Variable

### Windows

### Variables are set in the remote.cmd or in the registry

Variable hierarchy is System variables in the registry, the user variables in the registry, then remote.cmd SET commands  
**echo** command prefixing the variable with the special shell character %

- echo %JBCRELEASEDIR%
- Displays the contents of the JBCRELEASEDIR Environment Variable

### set command

- set
- Displays the contents of all Environment Variables

### Environment variables are SET in Windows

- set JBCRELEASEDIR=/opt/jbase/CurrentVersion

## jBASE

### The GETENV() function will retrieve the value of en environment varaible in a jBC program

- **exec\_path = GETENV("PATH")** will return the **PATH** environment variable value to the variable **exec\_path**

### The PUTENV() function in jBC will set an environment variable

- **return\_code = PUTENV("TZ=PST8PDT")**  

The variable **return\_code** will be a boolean to indicate success or failure to set the environment variable.

- ***PUTENV is only valid for the life of the process and any child shells***
- **rc = PUTENV("MYSRC=$TEST")** would set **MYSRC** to **\$TEST**, not the value of TEST
- ***PUTENV "escapes" the shell characters, therefore the literal value is assigned.***

### If needed, environment variables can be changed

- **On the command line**
- These will only be set for this and any child shells
- **In a JBC program**
- These will only be set for the extent of the program or child shells spawned

## Get to know your commands

### jSHELL (jSH) - Accessing jBASE

The jsh command invokes jSHELL - the jBASE shell. It can be invoked as your login shell by using the normal system administration software supplied with the platform. Either via .bat files (Windows) or .profiles (UNIX ).

jSHELL has been designed to ease migration from older systems and to overcome some of the differences between various platform command-line environments. The more primitive features seen on some older platforms (such as the "dot" command stacker) have been replaced with easier to use and more functional equivalents.

The most noticeable difference between jSHELL and other command-line shells, such as the UNIX Korn shell (ksh), is that command line arguments such as "\*" and "?" are not expanded by the shell but passed directly to the command that has been invoked. In the same manner, quoted strings(such as "quoted-string") are passed directly to the command with quotes intact. This enables query language statements such as:

```
SSELECT <filename> = "[SPROUT]" BY *A1
```

to be issued directly from jSHELL. If the same command was issued from the ksh prompt, it would have to be issued as:

```
SSELECT <filename> = \"[SPROUT]\" BY \*A1
```

to avoid the quotes being removed and the "\*" is expanded by the Korn shell.

Beyond this convenient feature, jSHELL also offers many significant advantages over traditional shells and is easier to use. Some of the main features of the jsh are:

- Customizable prompt
- Alternate shell/command line invocation
- Command search and recall
- Active select list prompt
- Proc detection and execution
- Type-ahead is supported

## jSH Command Syntax

```
jsh - -c command -s shell -p prompt
```

| Option | Description |
| --- | --- |
| -         | Execute proc from MD/VOC file with the same name as user login. (on UNIX the .profile and .jshrc files are processed) |
| -c        | Specifies that a jsh process should be spawned to execute the command. When the command terminates, the jsh process will also terminate |
| -s shell  | Specifies which shell emulation to use when executing jsh. The jsh will default to the previous emulation used by the current port |
| -p prompt | Specifies the prompt to be used while executing js. |
| -t        | Opens the tty device and accepts commands from the keyboard when the jSHELL has been invoked to process a command input file. The default action is to exit the shell once the processing of the input file has been completed |
| -z        | Select foreground and background screen colors (e.g. jsh -z foreground, **foreground**, background). Colors can be WHITE, YELLOW, MAGENTA, RED, CYAN, GREEN, **background** BLUE or BLACK.<br>On Windows, colors can be globally set using the Console setup from the Control Panel or by selecting the Properties of a jShell shortcut |

If the jsh command is issued without arguments, a jsh process is spawned and this process becomes your command shell. The jsh process will replace the current shell if it is invoked through the UNIX exec command.

To use this tutorial you will need to be logged in to your system and positioned at the shell prompt. If your user account has not been configured to run jSHELL by default, execute it now like this:

**UNIX/Linux:** exec jsh -

**Windows:** jsh.exe-

## jSHOW - Finding files or programs

The jshow command can be used to find jBASE files or programs

**Command Syntax:**

```
jshow -Options <programname/filename>
```

| Option | Description |
| --- | --- |
| -a  | display subroutine names in dll/shared object (note: under UNIX, this must be the complete path to the shared object) |
| -c  | display compile-time and source file |
| -f  | file name only search |
| -h  | display this help screen |
| -p  | program name only search |
| -s  | subroutine name only search |
| -v  | verbose mode |

## CREATE-ACCOUNT - Creating a jBASE Account

The CREATE-ACCOUNT command enables the user to create a new account for use within the jBASE system.

**Command Syntax:**

```
CREATE-ACCOUNT -Options <accountdirectory> <accountname>
```

**SYNTAX ELEMENTS:**

- **Account Directory** - the full path or a name relative to the current directory
- **Account Name** - the name of the account record in the SYSTEM file. If Account Name is not specified, the last element in Account Directory is used as the account name.
- **Options** -

| Option | Description |
| --- | --- |
| -m md\_path | full path to existing MD (implies -n) |
| -n          | do not create an MD for the account |
| -r          | generate remote.cmd for Telnet (Windows only) |
| -b dirs     | include additional bin directories |
| -l dirs     | include additional lib directories |
| -h or -?    | show help (ignored if there are other options) |

### Creating your demo account for this walkthrough

1. Create the jBASE account JBASEDEMO

```
JBASEADM ~ -->CREATE-ACCOUNT JBASEDEMO
Account 'JBASEDEMO' created.jsh
JBASEADM ~ -->LOGTO JBASEDEMO
jsh JBASEDEMO ~ -->PWD
C:\jBASE\JBASEDEMO
jsh JBASEDEMO
```

## CREATE-FILE - Creating a Data File

The CREATE-FILE command enables the user to create a new file for use within the jBASE system.

**Command Syntax:**

```
CREATE-FILE {DICT|DATA} FileName {DICT NumBuckets} {DATANumBuckets}

CREATE-FILE DATA SAMPLE 11 101
```

**Syntax Elements:**

- **DICT** - This is an optional keyword to specify dictionary section creation only. Leave this keyword out to create both dictionary and data file.
- **DATA** - This is an optional keyword to specify data section creation only. Leave this keyword out to create both dictionary and data file.
- **FileName** - This is the name to be used for the created file. The name can include absolute or relative path information.
- **NumBuckets** - NumBuckets specifies the number of hashing buckets to allocate to the file.

### Note

Since the introduction of dynamic files in jBASE 5.7, the default file created in jBASE is a dynamic file and does not require the size of the file to be set.  Dynamic files do not require resizing.  Additional information about dynamic files can be found [here](./../../../files/dynamic-files/README.md).  

#### Options

|  Option | Description |
| --- | --- |
| TJLOG       | Creates a stub file in the current directory that points to the current transaction log set. |
| DISTRIB     | Creates a stub file in the current directory that references a distributed file. |
| PERM        | The PERM parameters are used to set the permissions of the file as per the chmod command. |
| LOG=YES|NO  | The LOG parameters set or clear the flag which allows the file to be included or excluded when utilizing the item or transaction logging mechanism if licensed on your system. The value is set to YES by default. |
| TRANS=YES|NO | The TRANS parameters set or clear the flag which allows the file to be included or excluded from within any transaction boundaries defined by an executing program. The value is set to YES by default. |
| BACKUP=YES|NO | The BACKUP parameters set or clear the flag which allows the file to be included automatically by the jBASE jbackup utility. The value is set to YES by default. |
| NETWORK=YES|NO | The NETWORK parameters disable or enable the file for use over a network. Only applicable to HASH4 and HASH5 file types. The value is set to AUTO by default to use jDLS when enabled. |
| SECURE=YES|NO | The SECURE parameters disable or enable secure file updates. Only applicable to HASH3 and jPLUS file types. The value is set to NO by default. |

### Create a file

1. Create file (data only):

```
CREATE-FILE DATA SAMPLE
[ 417 ] File SAMPLE created , type = JD
```

2. Create file (dictionary only):

```
CREATE-FILE DICT SAMPLE
[ 417 ] File SAMPLE]D created , type = JD
```

**If the file already exists, the following message appears:**

```
[ 413 ] File name DICT SAMPLE already exists
```

3. Delete hashed file (both data and dictionary)

```
DELETE-FILE SAMPLE
[ 417 ] File SAMPLE created , type = JD
```

4. Create both data and dictionary file:

```
CREATE-FILE SAMPLE
[ 417 ] File SAMPLE]D created , type = JD
[ 417 ] File SAMPLE created , type = JD
```

## jBASE Editor (jED) -Add and edit data

jBASE is supplied with its own fully-featured screen editor, which can be used for creating, modifying, or deleting records. The jED editor has been designed for ease of use, easy personal configuration and is especially suited to the editing of jBC programs. The jED editor is used in two different modes; command mode and edit mode, with edit being the default mode and the current mode displayed at the top of the screen.

**Command mode** - For entering editor commands.

**Edit mode** - For entering or modifying data.

**Command Syntax:**

```
jed <filename> <record-list>
```

**Syntax Elements:**

- **Filename** - This is the name of the "file" containing the records.
- **Record-list** - It is possible to furnish a list of records to be successively edited. This can be a list of records separated by a space, or "\\*" to indicate all records in the file. Note that the \ is the shell escape character to stop the \* being treated as a wild card that would otherwise be expanded. Additionally, the record-list can be fed to this Command by preceding the jed Command with a jBASE list generating Command such as SELECT or SSELECT. In this case, the record-list is ignored.
- **Enter Edit Mode** - press the &lt;Esc&gt; key or one that has been reconfigured to perform the same action.
- **Exit and Update** - FI writes the updated version of the file or record back to disk and releases any lock set. The edit session then terminates or continues with the next record, if this choice is in effect.
- **Exit and Discard** - EX leaves the file or record as it was at the start of the session, and releases any lock set. If updates have been made you will be prompted for confirmation before the updates are discarded. The edit session then terminates or continues with the next record, if this choice is in effect.

### Add data to file

1. Enter the following command to create the REC1 record in SAMPLE and open in jEditor.

```
JED SAMPLE REC1
```

2. Add the following data into the corresponding row.

```
File SAMPLE , Record 'REC1'                 Insert 14:23:43
Command->FI
0001 JBASE
0002 IRVINE
0003 CA
End Of Record
```

3. Press Esc to exit edit mode; then type FI to save and exit the record.
4. List contents of SAMPLE file.

```
LIST SAMPLE
SAMPLE......
REC1
1 Records Listed
```

5. List contents of SAMPLE file and specify the header.

```
LIST SAMPLE ∗A1 ∗A2 ∗A3
SAMPLE......   ∗A1...........   ∗A2...........  ∗A3.......... REC1
                JBASE              IRVINE          CA
```

### Create a dictionary

1. Enter the following command to create the dictionary COMPANY for SAMPLE and open in jEditor.

```
JED DICT SAMPLE COMPANY
```

2. Add the following data into the corresponding rows.

```
File SAMPLE , Record 'COMPANY' Insert 14:23:43
Command->
0001 A
0002 1
0003
0004
0005
0006
0007
0008
0009 L
0010 15
End Of Record
```

Attribute 0009 - Is specifying the text justification as left

Attribute 0010 - Is specifying the text length as 15 characters

### [Dictionary Data Structure](./../../jql/data-definition-records---dictionary-structure)

| Field | Description |
| --- | --- |
| 001 | D/CODE |
| 002   | FMC (field-mark count) |
| 003 | Column heading |
| 004 | Controlling/Dependent Attributes |
| 005 - 006 | Not used |
| 007 | Input/Output Conversion Codes |
| 008 | Pre-process Conversion Codes |
| 009 | Format |
| 010 | Width |

3. Press Esc to exit edit mode; then type FI to save and exit the record.
4. Repeat step #2, adding the dictionaries CITY and STATE as the headers for A2 and A3, update attribute 0002 as follows:

```
Dictionary CITY - Attribute 0002 = 2  
Dictionary STATE- Attribute 0002 = 3
```

5. List contents of SAMPLE file.

```
LIST SAMPLE COMPANY CITY STATE
```

```
PAGE 1        14:25:31 19 NOV 2016
SAMPLE.... COMPANY...... CITY...... STATE
REC1 JBASE IRVINE CA
1 Records Listed
```

## jSTAT - View file size, format and properties

The jstat utilities provide statistical information about jBASE Hash files.

**Command Syntax:**

```
jstat -Options <filename>
```

| Option | Description |
| --- | --- |
| -DChr  | specify the alternate delimiter for -m option (default is tab) |
| -f     | free space display |
| -m     | machine mode output |
| -r     | record Display mode |
| -s     | short summary display |
| -v     | Verbose display |
| -w     | Do not wait on locked objects (use caution) |

### See file statistics

1. Enter jstat command with verbose display and filename.

```
jstat -v SAMPLE
File C:\jBASE\JBASEDEMO\SAMPLE
Type=JD , Created Wed Apr 10 14:25:21 2019
Frame size = 8192 bytes , Secondary Record Size = 2040 bytes
Hash Index Table: Fid 1, Frames 1, Groups 1, Mask Bits 0
File size = 24576 bytes , Inode = 246089 , Device = Id 25884
Last Accessed Wed Apr 10 22:25:21 2019 , Last Modified Wed Apr 10 22:25:21 2019
Backup = YES , Log = YES , Rollback = YES , Network = NO , Secure updates = NO
Case = ON - Case sensitive , Encrypted = NO , Lock = MUTEX

Record Count = 0 , Record Bytes = 0
Bytes/Record = 0 , Bytes/Group = 32
Primary file space: Total Frames = 1 , Total Bytes = 0
Secondary file space:   Total Frames = 0 , Total Bytes = 0
```

## jCHMOD - Change File Parameters

The jchmod utility provides a mechanism to modify Hash file parameters.

**Command Syntax:**

```
jchmod -Options <filename>
```

| Option | Description |
| --- | --- |
| -t       | tabulate description about the file |
| -B           | remove backup of file using jbackup |
| -C           | remove control file usage flag |
| -L           | remove logging of file |
| -N           | remove the network friendly flag |
| -R           | remove resize specification |
| -S           | remove secure mode updates (j3 only) |
| -T       | remove transaction boundary support |
| +A           | auto-detect if a file is network friendly |
| +B           | add a backup of the file using jbackup |
| +C           | add control file usage flag |
| +L           | add logging of file |
| +N           | add the network-friendly flag |
| +S           | add secure mode updates (j3 only) |
| +T           | add transaction boundary support |
| +Rspec           | add restore spec, used during jrestore |

### Remove Backup Flag of SAMPLE

1. Enter jchmod command with the option to remove backup of a file using jbackup.

```
jchmod -B SAMPLE
```

2. Check the result with the jstat command.

```
jstat -v SAMPLE
...
Backup = NO, Log = NO, Rollback = YES, Secure updates = YES
...
```

3. Enter jchmod command with the option to add a backup of a file using jbackup.

```
jchmod +B SAMPLE
```

4. Check the result with the jstat command.

```
jstat -v SAMPLE
...
Backup = YES, Log = NO, Rollback = YES, Secure updates = YES
...
```

## jRF - Change file size, Format and Properties

The **jrf** utility provides automated facilities to resize and convert from one Hash file type to another. In order to resize the file enough disk space must be available to create a second temporary version of the file, as the resize process creates a temporary file and then copies the data from the original file to the temporary file. Once copied then the temporary file is renamed to the original file.

**Command Syntax:**

```
jrf {-options} {{DICT} filename1 {{DICT} filename2 ...}}
jrf {-options} *
```

| Option | Description |
| --- | --- |
|    \* |  Process all files in the current directory (ignored if a list of files is supplied) |
| H3     | Force to HASH3 file type |
| H4     | Force to HASH4 file type |
| H5 | Force to HASHP (jPlus) file type |
| H7 | Force to HASHD (Dynamic) file type (default) |
| C     | Only the restore specification will be set, so that the file is resized automatically when the file is restored. To resize files to a lower modulo requires that the 'D' option also be invoked along with the 'C' option. |
| D     | allow downsize of file |
| E     | Resize empty files |
| I     | Ignore empty files |
| L     | Do not transaction log the temporary file created during the process |
| Mn     | Allow the hash method to be overridden when resizing the file. In normal operation the default hash method for the file should be used, however, the -M option allows experimentation with different hash methods, which may have a small benefit dependent upon the nature of the record key, 'n' specifies the hash method, 1,2,3,4 or 5. |
| N | Decrypt the file |
| O | Encrypt the file |
| R     | Reporting only (do not actually resize). Displays suggested resize parameters |
| T | Convert to Case Sensitive |
| U | Convert to Case Insensitive |
| V     | Verbose display |
| V1     | Very verbose display |
| Sm{,s{,i}} | Size to a parameter, where n is modulom - modulo,  s - separation,  i - ingroupmaxsz |
| h or ? | displays syntax and options |

### Change file properties

1. Enter **jrf** command with options verbose display and to allow downsize of file.

```
jrf -VD SAMPLE
SAMPLE (C:\jBASE\JBASEDEMO\SAMPLE) Type J4, 1 records at size 53, Downsizing from modulo 101 to 3.
Using temp file(s) :    "C:\jBASE\JBASEDEMO\14tmp.jrf"
"C:\jBASE\JBASEDEMO\14tmp.jrf]D"
=======================================
1 files were resized....
```

2. Enter **jstat** command with options verbose display to see the SAMPLE's new size.

```
jstat -v SAMPLE
File C:\jBASE\JBASEDEMO\SAMPLE
Type=J4 , Hash method = 5
Created at Tue Nov 20 19:38:25 2016
Groups = 3, Frame size = 4096 bytes , Secondary Record Size = 8192 bytes
Restore re-size parameters : (none)
File size = 16384 bytes , Inode = 209064, Device = Id 45315
Last Accessed Wed Jan 04 20:07:41 2017 , Last Modified Wed Jan 04 20:07:41 2017
Backup = YES , Log = NO , Rollback = YES , Network = NO
Record Count = 1 , Record Bytes = 53
Bytes/Record = 53 , Bytes/Group = 17
Primary file space: Total Frames = 3, Total Bytes = 53
Secondary file space: Total Frames = 0 , Total Bytes = 0
```

## Creating a Program

### Create the program file

This file is created as 2 folders (directories) as illustrated below. The first directory is where you place your source code. When a program is compiled, the object code is placed in the second directory, which is simply a data section.

1. Create the program file using the **CREATE-FILE** command with **TYPE** of **JBC**.

```
C:\home>CREATE-FILE TEST.BP TYPE=JBC
[ 417 ] File TEST.BP created , type = UD
[ 417 ] File TEST.BP]MOBJECT created , type = UD
```

2. Edit a program using the JED editor and add the data below.

```
JED TEST.BP PROG1
0001 CRT "HELLO WORLD"
0002 CRT "jBASE is Great!"
```

3. Compile the program.

```
BASIC TEST.BP PROG1
PROG1
BASIC_3.c
Source file PROG1 compiled successfully
```

4. Catalog the program.

```
CATALOG TEST.BP PROG1
PROG1
Object PROG1 cataloged successfully
```

5. Run the program.

```
PROG1
HELLO WORLD
jBASE RULES
```

Note that steps 2 through 5 can be conveniently achieved with a few key strokes in the jED editor by pressing the **Esc**ape key and entering **FIBCR** (**FI**le, **B**asic, **C**atalog, **R**un) at the **Command-&gt;** prompt.

## Compiling a Program

The **BASIC** command is provided as a front end program to the jBASE jBC compiler. The **jBC** compiler converts the BASIC code into "C" and invokes the native "C" compiler to convert the "C" source code into a machine native object file.

The **BASIC** command creates the object record as $PROGRAM1 in file BP. The BP file can be any file type supported by jBASE, whether it is a hashed file, directory and so on.

The steps used by **BASIC** command are as follows:

- Any supplied record keys with a dollar/pound prefix or a .o or .obj suffix are ignored.
- The source is moved to the current working directory as a temporary file called **BASIC\_nn.c**, where **nn** is the users port number.
- The source is compiled using the **jcompile** command.
- The **.** **o** or **.obj** file is then moved back to the original source file with a dollar/pound prefix and the **.o** or **.obj** suffix removed.
- The command then cleans up any scratch files it created.

**COMMAND SYNTAX:**

```
BASIC {-Options} <filename> <programname> {(Option}
```

| Option | Description |
| --- | --- |
| v           | verbose mode     |
| -wn         | set the warning level to 0, 1, 2 or 3. See later |
| -Ipath       | path for include files |
| (On         | optimize the code, see below |
| (En         | optimize the code. As the (O) option |
| (Wn         | set warning level to 0, 1, 2 or 3, see below |
| (Ipath       | path for include files |
| (V           | allow persistent variables in subroutines |
| (Qq         | specifies that the source code contains embedded SQL statements |

In order to compile and catalog programs and subroutines in jBASE, a 'C' compiler must be installed on the system under the same folder where jBASE is installed. After completing the jBASE installation, one of the optional tasks you can select is to install and configure the compiler. Please refer to the jBASE Installation Guide and rerun the jBASE installer for the option to install the compiler.

## Cataloging a Program

The **CATALOG** command is provided as a front end program to convert object files generated by the BASIC command into main program executables and shared libraries/DLLs of subroutines.

Main program executables by default are copied in the home directory "bin" directory.

Subroutine object files are collated into evenly sized shared libraries and then by default placed in the home directory "lib" directory.

In order to be able to rebuild a shared library, the object file is retained in the "objdir" subdirectory of the "lib" directory. These object files are no longer required once all the shared libraries have been debugged and ready to release.

The **CATALOG** command invokes the jBASE jBuildSLib command with the subroutine object file to construct the shared libraries. The jBuildSLib command then links several object files together with relevant references to other required libraries and creates a shared library/DD.

It should be noted that every time a subroutine is cataloged, jBuildSLib is invoked to rebuild the shared library/DLL. However, when the **CATALOG** command is issued with an active select list of program names, the rebuilding is deferred until the list has been fully processed. This means that each shared object/DLL is only rebuilt once, as opposed to once for each subroutine. So when cataloging subroutines, it is much faster to work from an active select list. The same is true when decataloging subroutines.

**Command Syntax:**

```
CATALOG {-Options} <filename> <programname>
```

| Option | Description |
| --- | --- |
| v           | verbose mode     |
| Llib         | alternative lib directory to use for shared libraries |
| obin         | alternative bin directory to use for executables |
| cExternalLibs | external C library functions |

## Backup & Restore

## Creating a Backup (jBACKUP)

The jbackup utility provides fast on-line backup facilities and can also be used to check file integrity. Specify the directories you want to backup and then pipe the directory into the jbackup command.

**Command Syntax:**

```
jbackup -Options <filepath>
```

| Option | Description |
| --- | --- |
| -v       | verbose mode     |
| -e EncMode  | encryption mode (-E extended). EncMode can be: RC2, BASE64, DES, 3DES, BLOWFISH, AES, sha256 |
| -f           | specify where the backup is stored |

- Both the jBACKUP and jRESTORE commands must be run from an OS prompt or standard shell, because the jShell does not understand meta-characters like pipe (|) and redirect symbols (&lt;).
- Windows does not have a 'find' command so jBASE provides a 'jfind' command; the syntax is essentially the same, so you would have something like this:

### Create a backup for our account

1. From jSHELL, enter standard shell by pressing F2 key (notice the j is removed from jsh)

```
jsh JBASEDEMO ~ -->
sh JBASEDEMO ~ -->
```

2. From the standard shell we will enter the following syntax:

```
jfind <ACCOUNT LOCATION>  - print | jbackup -v -f <BACKUP LOCATION & NAME>  
```

- **ACCOUNT LOCATION** - The account we are looking to backup.  The account's location will be located and piped to jbackup.  In our example below, we will be using C:\JBASE\JBASEDEMO.
- **BACKUP LOCATION & NAME** - The directory that you wish to store your backup in and the name you wish to call your backup.  In our example below, we will be using C:\JBASE\BACKUPS\MYBACKUP.  \*\*Directory is case sensitive and must be created prior to jbackup being run\*\*
- **OPTIONS** - We will enable verbose backup (-v) and specify where the backup will be stored (-f).

```
sh JBASEDEMO ~ -->jfind C:\JBASE\JBASEDEMO -print | jbackup -v -f C:\JBASE\BACKUPS\MYBACKUP
C:\JBASE\JBASEDEMO
C:\JBASE\JBASEDEMO\bin
C:\JBASE\JBASEDEMO\bin\PROG1.dll
C:\JBASE\JBASEDEMO\bin\PROG1.exe
C:\JBASE\JBASEDEMO\SAMPLE
C:\JBASE\JBASEDEMO\SAMPLE]D
C:\JBASE\JBASEDEMO\lib
C:\JBASE\JBASEDEMO\lib\.jbase_lock_file
C:\JBASE\JBASEDEMO\lib\jLibDefinition
C:\JBASE\JBASEDEMO\lib\objdir
C:\JBASE\JBASEDEMO\lib\objdir\.jbase_header
C:\JBASE\JBASEDEMO\MD]D
C:\JBASE\JBASEDEMO\TEST.BP
C:\JBASE\JBASEDEMO\TEST.BP\$PROG1
C:\JBASE\JBASEDEMO\TEST.BP\.jbase_header
C:\JBASE\JBASEDEMO\TEST.BP\PROG1
Scanned Files : 16
Written Blocks : 5  
Reels : 1
Saved Directories : 5  
Regular files : 8  
Linked files : 0  
Other files : 0  
Hash files : 3  
Hash records : 245  
Control files : 0 .0.0781 MB processed
```

## Restoring a Backup (jRESTORE)

The jrestore utility provides fast on-line restores from the saves produced by the jbackup utility. The jrestore can be controlled to restore from any file type on the backup, from single records to multiple directories.

**Command Syntax:**

```
jrestore -Options <filepath>
```

| Option | Description |
| --- | --- |
| -a           | restore from current media position |
| -bn         | set number of read buffers to n (default is 8, minimum is 1) |
| -c"old new" | restore old directory path as new directory path |
| -d"DirRE"   | restore directory files matching regular expression |
| -f Device   | restore from device file, default stdin |
| -h"HashRE"   | restore hash files matching regular expression |
| -H FileList  | restore files using only file names from FileList file |
| -i"ItemRE   | restore hash file items matching regular expression |
| -I ItemList  | restore hash file items using only item ids from ItemList file |
| -l"LnkdRE"   | restore links matching regular expression |
| -n           | control info files not restored |
| -N           | control info files restored and indexes rebuilt |
| -o"OfileRE" | restore other files matching regular expression |
| -pn         | set priority, nice value of parent process |
| -u"UfileRE" | restore normal file matching regular expression |
| -v           | verbose mode |
| -F           | use fixed block device. Use for QIC tapes |
| -B           | force block size to 128k, default 16k |
| -Cn         | force block size to n bytes, rounded to nearest k |
| -P           | print and scan files only, no restore |
| -O           | overwrite existing files and records |
| -R           | suppress rewind last reel |
| -T type     | restore hash files as specified file type; the original modulo and separation will be retained rather than use the 'resize' parameters. |
| -U           | update only does not overwrite existing files or records |
| -V           | verbose dot mode, displays a "." for each file |

## Here are the most common restore scenarios

1. Restore the **whole account** (note the use of the -v, -O and -f options):

```
jrestore -v -O -f C:\JBASE\BACKUP
```

2. Restore the **whole account to another location** (note the use of the -c and -d options):

```
jrestore -f C:\JBASE\BACKUP -c "C:\JBASE\JBASEDEMO C:\JBASE\TEMP" -d"^C:\JBA
```

*-c "&lt;target account&gt; &lt;new location&gt;" -d "^target account" -v*

3. Restore a **hashed file** set, e.g. the dict and data, overwriting the existing one (note the use ofthe -h option):

```
jrestore -f C:\JBASE\BACKUP -h "^C:\JBASE\JBASEDEMO" -v -O
```

4. Restore a **single record** from a hashed file (most commonly requested scenario). Thisexample is restoring record 'REC1' in the F.SAMPLE file (note the use of the -i option):

```
jrestore -f C:\JBASE\BACKUP -c "C:\JBASE\JBASEDEMO C:\JBASE\temp" -h"^C:\JBASE\JBASEDEMO\SAMPLE$" -i"^REC1$" -v -O
```

## Create a backup for our jBASE account

1.  From jSHELL, enter standard shell by pressing F2 key (notice the j is removed from jsh)

```
jsh JBASEDEMO ~ -->
sh JBASEDEMO ~ -->
```

2. From the standard shell we will enter the jrestore command to initiate the backup using the following syntax:

```
jrestore <OPTIONS> <BACKUP LOCATION & NAME>
```

- **BACKUP LOCATION & NAME** - The directory that you wish to restore your backup from and the name of your backup.  In our example below we will be using C:\JBASE\BACKUPS\MYBACKUP.  \*\*Directory is case sensitive\*\*
- **OPTIONS** - We will enable verbose restore (-v), overwrite the existing account (-O) and specify where the backup will be stored (-f).

Running the below jrestore command will overwrite the existing account with your account backup.  Please make sure this is your intention.

```
sh JBASEDEMO ~ -->jrestore -v -O -f C:\JBASE\BACKUPS\MYBACKUP
Label = Wed Feb 08 13:11:06 2017
Format = 2, Reel = 1, Blocksize = 16384
Native directory C:\JBASE\JBASEDEMO
Native directory C:\JBASE\JBASEDEMO\bin
Native file C:\JBASE\JBASEDEMO\bin\PROG1.dll
Native file C:\JBASE\JBASEDEMO\bin\PROG1.exe
Hash file C:\JBASE\JBASEDEMO\SAMPLE
Hash file C:\JBASE\JBASEDEMO\SAMPLE]D
Native directory C:\JBASE\JBASEDEMO\lib
Native file C:\JBASE\JBASEDEMO\lib\.jbase_lock_file
Native file C:\JBASE\JBASEDEMO\lib\jLibDefinition
Native directory C:\JBASE\JBASEDEMO\lib\objdir
Native file C:\JBASE\JBASEDEMO\lib\objdir\.jbase_header
Native file 'C:\JBASE\JBASEDEMO\MD]D'
Native directory C:\JBASE\JBASEDEMO\TEST.BP
Native file C:\JBASE\JBASEDEMO\TEST.BP\$PROG1
Native file C:\JBASE\JBASEDEMO\TEST.BP\.jbase_header
Native file C:\JBASE\JBASEDEMO\TEST.BP\PROG1
Scanned Files : 16
Blocks : 4
Reels : 1
Restored Directories : 0
Regular files : 8
  Linked files : 0
  Other files : 0
  Hash files : 2
  Hash records : 0
  Control files : 0
0.0625 MB processed
```

[Back to Articles](./../README.md)

<PageFooter />
