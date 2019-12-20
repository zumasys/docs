# Introduction to Environment Variables

**Created At:** 9/12/2018 9:05:57 PM  
**Updated At:** 4/19/2019 7:58:01 AM  
**Original Doc:** [introduction-to-environment-variables](https://docs.jbase.com/41717-environment-variables/introduction-to-environment-variables)  


## SETTING/GETTING

**Windows**

```
set variable=value
echo %variable%
```

Variables can be configured in the System environment for all users, and/or on a per user basis via the user environment. Additional variables for jBASE can also be added to the current user configuration in the Windows registry.

Windows variables are usually configured in the System Properties panel.

**UNIX**

```
export variable=value
echo $variable
```

This works for all shells, although some shells (i.e. ksh) allow "export variable=value".

Variables are usually configured in the .profile/.bash\_profile of the user login directory.  Global variables can be added to the "/etc/profile" script.

### jBASE PROGRAMS

The jBC functions **PUTENV()**and **GETENV()** can be used to manipulate environment variables. For example:

```
ok = PUTENV(envar=x)
ok = GETENV(envar)
```

### 
jBASE INITIALIZATION

Some environment variables can only be set before jBASE initialization. jBASE initialization occurs when the first jBASE program is executed on a particular **PORT** number.

The jBASE initialization process reads through the environment entries looking for possible variables required by jBASE. This process provides a substantial performance improvement as the state of these environment variables are saved for subsequent jBASE executions. These states continue to be valid as long as the **PORT** number is still attached to a process. Some environment variables can be changed by subsequent program execution. The state of these variables are imported back into the state table after program execution.

Certain jBASE programs expect jBASE initialization to have been previously performed otherwise re-initialization will occur and resources expected by the executing program will have been removed.

For instance:

**T-ATT** requires a **PORT** number against which it saves the tape device assignment.
**SP-ASSIGN** requires a "PORT" with which to save assignment status for print jobs.
**READNEXT** in a program after **SELECT**/**GET-LIST**.

All jBASE programs execute in the same process unless explicitly executed via the **@IM****:"k"** construct.

### INITIAL ENVIRONMENT VARIABLES


| PATH | pathnames of executables |
| --- | --- |
| HOME | pathname of user home directory. Many defaults rely on this environment variable |
| LD\_LIBRARY\_PATH | pathnames of system libraries (Linux) |
| LIBPATH | pathnames of system libraries (AIX) |
| LANG | language type (UNIX only) |
| JBASE\_LOCALE | setting to determine collation sequences for internationalization and secondary indexes |
| JBASE\_TIMEZONE | setting to determine the timezone to use for UTF8 timestamp conversion into local time for display |
| JBASE\_DATE\_FORMAT | specifies the format of how dates are converted to/from internal and external date representations |
| TZ | timezone (UNIX) |
| LC\_ALL | will override a specified list of locale settings (UNIX) |
| TERM | specifies terminal type as per terminfo database |
| TERMINFO | specifies directory for terminal settings |
| JBCPORTNO | forced Port number for use by user; automatically allocated unless this is set |
| JBCLOGNAME | user name to use in-place of login id |
| JBCGLOBALDIR | pathname of jBASE global configuration directory |
| JBCRELEASEDIR | pathname of jBASE release directory |
| JBCDATADIR | pathname of any configured databases and default directory for the jBASE spooler |
| JBCEMULATE | emulation to be used for this user |
| JEDIFILEPATH | directory Paths of application files location |
| JEDIFILENAME\_MD | pathname of file to be used for Master Dictionary entries |
| JEDIFILENAME\_SYSTEM | pathname of file to be used for SYSTEM entries |




### ADDITIONAL jBASE ENVIRONMENT VARIABLES.

#### EXECUTION


| JBASE\_ERRMSG\_TRACE | Controls whether or not to log jBASE messages to the $JBCRELEASEDIR/tmp/jbase\_error\_trace file.<br> |
| JBASE\_ERRMSG\_ZERO\_USED | controls the behavior of jBC programs when an uninitialized variable is encountered |
| JBASE\_ERRMSG\_NON\_NUMERIC | controls the behavior of jBC programs when a numeric operation on a non-numeric variable is encountered |
| JBASE\_ERRMSG\_DIVIDE\_ZERO | controls the behavior of jBC programs when the divisor of an arithmetic division is zero |
| JEDIENABLEQ2Q | set to 1 to force detection of Qptr to Qptr |
| JEDI\_DISTRIB\_DEFOPEN | set to 1 to defer OPENs of distributed file parts |
| JEDI\_SECURE\_LEVEL | set security level for j3 and jPLUS files<br>Level 1. No flush<br>Level 2. Flush on link modification (default)<br>Level 3. Flush after update (network failure) |
| JEDI\_INDEX\_MMAP\_ON | set to force use of memory mapping on indexes when updating memory mapped files |
| JBC\_TCLRESTART | set to command to execute instead of shell |
| JBC\_ENDRESTART | set to command to execute after end from debugger |
| JBCRESTARTPROG | set to command to be executed after off (Linux/AIX) |
| JBCOBJECTLIST | set to alternate path(s) for user subroutine libraries<br>Windows - %HOME%\lib<br>UNIX - $HOME/lib |
| JBC\_BLOCK\_SYSTEM14 | set to 1 to force a 100 millisecond delay on SYSTEM(14) calls. |




#### DEVELOPMENT


| JBCDEV\_BIN | set to alternate path to catalog executables.<br>Windows - %home%\bin<br>UNIX - $HOME/bin |
| JBCDEV\_LIB | set to alternate path to catalog libraries.<br>Windows - %HOME%\lib<br>UNIX - $HOME/bin |
| JDIAG | provides a variable amount of trace information |
| LIB | specify additional paths for linking with libraries. (Windows only) |
| INCLUDE | specify additional paths for header files |




#### MISCELLANEOUS


| JBASEUNIQUE | specify alternate jBASE work file |
| JBCERRFILE | specify alternate error message file |
| JBCSPOOLERDIR | specify alternate spooler directory |
| JBCSPOOLER\_JOBRESET | controls how the print job counter is reset |
| JBC\_DESPOOLSLEEP | specify the interval for despoolers to check for queued jobs |
| JBC\_INVERT\_ALPHA\_CHARS | set to 1 to invert the case of alphabetic characters entered with [INPUT](http://jbase.com/r99/knowledgebase/manuals/3.0/30manpages/man/jbc2_INPUT.htm). |
| JBC\_OLD\_SP\_EDIT | specifies the alternative SP-EDIT format |
| JBCLISTFILE | specify alternate select list file |
| JBCLISTID | force user account name to be part stored list ids. |




#### TERMINAL


| JBCECHO | set to 1 to force echo on |
| JBCSCREEN\_DEPTH | specify alternate terminal depth (valid only on jBASE 3.x) |
| JBCSCREEN\_WIDTH | specify alternate terminal width (valid only on jBASE 3.x) |
| JBCPRINTER\_DEPTH | specify alternate printer depth (valid only on jBASE 3.x) |
| JBCPRINTER\_WIDTH | specify alternate printer width (valid only on jBASE 3.x) |
| JBCPRISM | set hard coded prism sequences (Windows only) |
| JBC\_STDERR | set to 1 to redirect standard error to standard out. Useful for CAPTUREing output that would normally be sent to the screen. |
| JBCCREATEFLAGS | set to 0, 1, 2 for output redirection. (Windows only)<br>0 Direct to current console (default)<br>1 Direct to new console<br>2 Detached for no console |




#### EMBEDDED SQL


| JBC\_SQLLIBS | set alternate SQL libraries for embedded SQL |
| JBC\_SQLPREPROC | set alternate SQL pre-compiler command |
| JBC\_SQLFIXEDLEN | set to use fixed length types for char input strings |




#### QUERIES


| JBCDEFDICTS | specify alternate default dictionary files |




#### CREATE-FILE


| JEDI\_PREFILEOP | parameters take precedence before command line |
| JEDI\_POSTFILEOP | parameters take precedence after command line |


For example, to create all files from a **jbackup** to JP (jPlus) files and as Case Insensitive, set the following environment variable before doing the **jrestore**. Note the use of double-quotes on Unix when there is more than one setting.

```
export JEDI_PREFILEOP="TYPE=JP CASE=OFF"  (UNIX)
set JEDI_PREFILEOP=TYPE=JP CASE=OFF       (Windows)
```



#### JRFS


| JBCNETACCESS | specify the location of the jRFS security access file |
| JBCNETDIR | specify the location of the jRFS configuration files |
| JRFS\_REMOTE\_JQL | set to 1 to allow jQL to be executed remotely |
| JRFS\_LOCALPATH\_JQL | set to 1 to allow remote pointer to have a different name than the remote file |
| JRFS\_SERVERNAME | allows the jRFS client to override the service port |
| JRFS\_HOSTNAME | allows the jRFS client to override the target host |

