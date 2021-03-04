# jBASE Fundamentals

<PageHeader />

**Where is my stuff?**

jBASE uses Environment Variables extensively. Environment Variables are Operating System global variables for a shell. Very similar to **NAMED COMMON** in that they stay set for the entire time the user is in a shell. Unlike **NAMED COMMON** in PICK, since they are not reset with a **LOGTO**.  

Only valid strings can be saved in Environment Variables, special OS characters must be escaped or enclosed in quotes or single quotes. Application and Operating System (OS) commands use environment variables to aid in their execution.

- **JBCRELEASEDIR** tells the OS where the jBASE release programs, libraries and supporting files are located.
- **JBCGLOBALDIR** tells jBASE where the profiles and configuration files are located.
- **PATH** tells jBASE (actually any OS shell) where the program executables reside.
- **JBCOBJECTLIST** tells jBASE where the shared object (subroutines) reside.
- **JEDIFILENAME\_MD** tells jBASE what file to treat as a traditional PICK MD.
- **JEDIFILENAME\_SYSTEM** tells jBASE what file to treat as a traditional PICK SYSTEM file.
- **JEDIFILEPATH** tells jBASE where to look for files (after looking in the MD).

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

- **JBCOBJECTLIST** -- All jBASE subroutines must be in a directory included in this environment variable.
  - **Triggers** -- The CATALOGed subroutines **lib** directory must be in this list
  - ***jQL dictionary CALL or B-correlative** subroutines. The **lib** directory must be in this list.

**Where is the data?**

```
jshow -f filename
```

- **JEDIFILEPATH** -- If not set, the files are found in the current directory, the simplest version of where the data is located. The first one on the list is returned.
- **JEDIFILENAME\_SYSTEM** -- Stores "Accounts" which each have a VOC or MD known as the
  - **JEDIFILENAME\_MD**
- **JEDIFILENAME\_MD** is the VOC or MD.
- Q-pointer files, F-pointer files would return data before those in JEDIFILEPATH.

```
CUSTOMER

001 F
002 /home/jbase/data/CUSTOMERS
003 /home/jbase/data/CUSTOMERS]D
```

## The VOC or MD is always first

- If CUSTOMER is in the VOC and in the JEDIFILEPATH, jBASE will use the file in the VOC first.
- If DELETE-FILE is a proc in the VOC, it will run it rather than the first one in the PATH.

### jdiag will show important jBASE environment information

- jdiag -v will give verbose information including all environment variables.
- jdiag -vL will put these items into a jdiag.out item in the root of your account.

## View and set jBASE Environment Variables

### Linux

### Environment variables needed for all users can be set in /etc/profile

- This is where UNIX global variables are set
- With jBASE 5, the default environment can be set up here.

### User-specific environment variables are set in the home directory .profile

- Often times they are set in a separate item and sourced into the individual .profile items.

### Assign the variable, then export it in Linux

- JBCRELEASEDIR=/opt/jbase/CurrentVersion (this sets a value and is often used in shell scripts).
- export JBCRELEASEDIR (this exports that value to the Environment, not needed if only used in the shell script).

### Some Linux system shells allow assigning and exporting in one command

- export JBCRELEASEDIR=/opt/jbase/CurrentVersion

### In Linux, env will set the Environment Variable for the extent of a command

- env TZ=PST8PDT date (will display date based on Pacific time zone).
- This is only temporarily the environment for the command.

### In Linux, env can also clear and set the environment

- env -c PATH=/usr/lib date (will clear the environment and only set PATH).

## UNIX

### echo command prefixing the variable with the special shell character $

- echo $JBCRELEASEDIR
- Displays the contents of the JBCRELEASEDIR Environment Variable.

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

## jBASE runtime

The **GETENV()** function will retrieve the value of an environment variable in a jBC program:

- **exec\_path = GETENV("PATH")** will return the **PATH** environment variable value to the variable **exec\_path**

The **PUTENV()** function in jBC will set an environment variable:

- **return\_code = PUTENV("TZ=PST8PDT")**  

The variable **return\_code** will be a boolean to indicate success or failure to set the environment variable.

- ***PUTENV is only valid for the life of the process and any child shells***
- **rc = PUTENV("MYSRC=$TEST")** would set **MYSRC** to **\$TEST**, not the value of TEST
- ***PUTENV "escapes" the shell characters, therefore the literal value is assigned.***

### If needed, environment variables can be changed

- **On the command line**
- These will only be set for this and any child shells
- **In a jBC program**
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
| ---    | --- |
| -t     | tabulate description about the file |
| -B     | remove backup of file using jbackup |
| -C     | remove control file usage flag |
| -L     | remove logging of file |
| -N     | remove the network friendly flag |
| -R     | remove resize specification |
| -S     | remove secure mode updates (j3 only) |
| -T     | remove transaction boundary support |
| +A     | auto-detect if a file is network friendly |
| +B     | add a backup of the file using jbackup |
| +C     | add control file usage flag |
| +L     | add logging of file |
| +N     | add the network-friendly flag |
| +S     | add secure mode updates (j3 only) |
| +T     | add transaction boundary support |
| +Rspec | add restore spec, used during jrestore |

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

Back to [Getting Started](./../../README.md)

<PageFooter />
