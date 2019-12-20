# Environment Variables

**Created At:** 7/13/2018 7:58:41 AM  
**Updated At:** 6/10/2019 9:21:46 AM  
**Original Doc:** [326787-environment-variables](https://docs.jbase.com/41717-environment-variables/326787-environment-variables)  


## Description

jBASE uses a number of environment variables to modify jBASE behavior. Suitable defaults apply to most of them. Although most environment variables can be set any time, the best place to do so is in the .profile script.

## Setting / Getting 

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

Variables are usually configured in the .profile/.bash\_profile of the user login directory.  Global variables can be added to the "/etc/profile" script.

### jBASE PROGRAMS

The jBC functions PUTENV and GETENV can be used to manipulate environment variables. For example:

```
SUCCESS = PUTENV(envar=x)
SUCCESS = GETENV(envar)
```

### 
jBASE INITIALIZATION

Some environment variables can only be set before jBASE initialization. jBASE initialization occurs when the first jBASE program is executed on a particular "PORT number".

The jBASE initialization process reads through the environment entries looking for possible variables required by jBASE. This process provides a substantial performance improvement as the state of these environment variables are saved for subsequent jBASE executions. These states continue to be valid as long as the "PORT" is still attached to a process. Some environment variables can be changed by subsequent program execution. The state of these variables are imported back into the state table after program execution.

Certain jBASE programs expect jBASE initialization to have been previously performed otherwise re-initialization will occur and resources expected by the executing program will have been removed.

For instance:

- T-ATT requires a "PORT" against which it saves the tape device assignment.
- SP-ASSIGN requires a "PORT" with which to save assignment status for print jobs.
- READNEXT in a program after SELECT/GET-LIST.


With jBASE 5.x all programs execute in the same process unless explicitly executed via the CHAR(255):'k' construct.

### INITIAL ENVIRONMENT VARIABLES


| [PATH](path)<br> | pathnames of executables<br> |
| --- | --- |
| HOME<br> | pathname of user home directory. Many defaults rely on this environment variable<br> |
| [LD\_LIBRARY\_PATH](ld_library_path)<br> | pathnames of system libraries (Linux, Solaris only)<br> |
| LIBPATH<br> | pathnames of system libraries (AIX only)<br> |
| LANG<br> | language type (UNIX only)<br> |
| [JBASE\_LOCALE](jbase_locale)<br> | setting to determine collation sequences for internationalization and secondary indexes (jBASE 5.2 and above)<br> |
| [JBASE\_TIMEZONE](jbase_timezone)<br> | setting to determine the timezone to use for UTF8 timestamp conversion into local time for display (jBASE 5.2 and above)<br> |
| [JBASE\_DATE\_FORMAT](jbase_date_format)<br> | specifies the format of how dates are converted to/from internal and external date representations<br> |
| TZ<br> | timezone (UNIX only)<br> |
| LC\_ALL<br> | will override a specified list of locale settings (UNIX only)<br> |
| [TERM](term-environment-variable)<br> | specifies terminal type as per terminfo database<br> |
| [TERMINFO](326793-terminfo)<br> | specifies directory for terminal settings<br> |
| [JBCPORTNO](jbcportno)<br> | forced Port number for use by user; automatically allocated unless this is set<br> |
| [JBCLOGNAME](jbclogname)<br> | user name to use in-place of login id<br> |
| [JBCGLOBALDIR](jbcglobaldir)<br> | pathname of jBASE global configuration directory<br> |
| [JBCRELEASEDIR](jbcreleasedir)<br> | pathname of jBASE release directory<br> |
| [JBCDATADIR](jbcdatadir)<br> | pathname of any configured databases and default directory for the jBASE spooler<br> |
| [JBCEMULATE](jbcemulate)<br> | emulation to be used for this user<br> |
| [JEDIFILEPATH](jedifilepath)<br> | directory Paths of application files location<br> |
| [JEDIFILENAME\_MD](jedifilename_md)<br> | pathname of file to be used for Master Dictionary entries<br> |
| [JEDIFILENAME\_SYSTEM](jedifilename_system)<br> | pathname of file to be used for SYSTEM entries<br> |




### ADDITIONAL jBASE ENVIRONMENT VARIABLES.

#### EXECUTION


| [JBASE\_ERRMSG\_TRACE](jbase_errmsg_trace)<br> | Controls whether or not to log jBASE messages to the $JBCRELEASEDIR/tmp/jbase\_error\_trace file.<br> |
| [JBASE\_ERRMSG\_ZERO\_USED](jbase_errmsg_zero_used)<br> | controls the behavior of jBC programs when an uninitialized variable is encountered<br> |
| [JBASE\_ERRMSG\_NON\_NUMERIC](jbase_errmsg_non_numeric)<br> | controls the behavior of jBC programs when a numeric operation on a non-numeric variable is encountered<br> |
| [JBASE\_ERRMSG\_DIVIDE\_ZERO](jbase_errmsg_divide_zero)<br> | controls the behavior of jBC programs when the divisor of an arithmetic division is zero<br> |
| JBCBACKGROUND<br> | set to 1 to run "PORT" as background task<br> |
| [JEDIENABLEQ2Q](jedienableq2q)<br> | set to 1 to force detection of Qptr to Qptr<br> |
| [JEDI\_DISTRIB\_DEFOPEN](jedi_distrib_defopen)<br> | set to 1 to defer OPENs of distributed file parts<br> |
| [JEDI\_SECURE\_LEVEL](jedi_secure_level)<br> | set security level for j3 and jPLUS files<ul><li>Level 1. No flush</li><li>Level 2. Flush on link modification (default)</li><li>Level 3. Flush after update (network failure)</li></ul> |
| JEDI\_INDEX\_MMAP\_ON<br> | set to force use of memory mapping on indexes when updating memory mapped files<br> |
| [JBC\_TCLRESTART](jbc_tclrestart)<br> | set to command to execute instead of shell<br> |
| [JBC\_ENDRESTART](jbc_endrestart)<br> | set to command to execute after end from debugger<br> |
| JBCRESTARTPROG<br> | set to command to be executed after off (UNIX/Linux only)<br> |
| [JBCOBJECTLIST](jbcobjectlist)<br> | set to alternate path(s) for user subroutine libraries<br>Windows - %home%\lib<br>UNIX - $HOME/lib<br> |
| [JBC\_BLOCK\_SYSTEM14](jbc_block_system14)<br> | set to 1 to force a 100 millisecond delay on SYSTEM(14) calls.<br> |




#### DEVELOPMENT


| [JBCDEV\_BIN](jbcdev_bin)<br> | set to alternate path to catalog executables.<br>Windows - %home%\bin<br>UNIX - $HOME/bin<br> |
| [JBCDEV\_LIB](jbcdev_lib)<br> | set to alternate path to catalog libraries.<br>Windows - %home%\lib<br>UNIX - $HOME/bin<br> |
| [JDIAG](jdiag)<br> | provides a variable amount of trace information<br> |
| LIB<br> | specify additional paths for linking with libraries. (Windows only)<br> |
| INCLUDE<br> | specify additional paths for header files<br> |




#### MISCELLANEOUS


| [JBASEUNIQUE](jbaseunique)<br> | specify alternate jBASE work file<br> |
| [JBCERRFILE](jbcerrfile)<br> | specify alternate error message file<br> |
| [JBCSPOOLERDIR](jbcspoolerdir)<br> | specify alternate spooler directory<br> |
| [JBCSPOOLER\_JOBRESET](jbcspooler_jobreset)<br> | controls how the print job counter is reset<br> |
| [JBC\_DESPOOLSLEEP](326821-jbc_despoolsleep)<br> | specify the interval for despoolers to check for queued jobs<br> |
| [JBC\_INVERT\_ALPHA\_CHARS](jbc_invert_alpha_chars)<br> | set to 1 to invert the case of alphabetic characters entered with [INPUT](input).<br> |
| [JBC\_OLD\_SP\_EDIT](jbc_old_sp_edit)<br> | specifies the alternative SP-EDIT format<br> |
| [JBCLISTFILE](jbclistfile)<br> | specify alternate select list file<br> |
| [JBCLISTID](jbclistid)<br> | force user account name to be part stored list ids.<br> |
| JBCHOLDPATH | Defines alternate location of the &HOLD& for SETPTR commands<br> |




#### TERMINAL


| JBCECHO<br> | set to 1 to force echo on<br> |
| [JBCSCREEN\_DEPTH](jbcscreen_depth)<br> | specify alternate terminal depth (valid only on jBASE 3.x)<br> |
| [JBCSCREEN\_WIDTH](327509-jbcscreen_width)<br> | specify alternate terminal width (valid only on jBASE 3.x)<br> |
| [JBCPRINTER\_DEPTH](jbcprinter_depth)<br> | specify alternate printer depth (valid only on jBASE 3.x)<br> |
| [JBCPRINTER\_WIDTH](jbcprinter_width)<br> | specify alternate printer width (valid only on jBASE 3.x)<br> |
| JBCPRISM<br> | set hard coded prism sequences (Windows only)<br> |
| JBC\_STDERR<br> | set to 1 to redirect standard error to standard out. Useful for CAPTUREing output that would normally be sent to the screen.<br> |
| JBCCREATEFLAGS<br> | set to 0, 1, 2 for output redirection. (Windows only)<br>0 Direct to current console (default)<br>1 Direct to new console<br>2 Detached for no console<br> |




#### EMBEDDED SQL


| JBC\_SQLLIBS<br> | set alternate SQL libraries for embedded SQL<br> |
| JBC\_SQLPREPROC<br> | set alternate SQL pre-compiler command<br> |
| JBC\_SQLFIXEDLEN<br> | set to use fixed length types for char input strings<br> |




#### QUERIES


| [JBCDEFDICTS](321281-jbcdefdicts)<br> | specify alternate default dictionary files<br> |




#### CREATE-FILE


| JEDI\_PREFILEOP<br> | parameters take precedence before command line<br> |
| JEDI\_POSTFILEOP<br> | parameters take precedence after command line<br> |


e.g. To convert all files on a "jbackup" tape to J4 files set the following environment variable before using jrestore.

**Unix** - Can use quotes to surround multiple parameters

```
export JEDI_PREFILEOP=TYPE=J4 
```

**Windows** - Don't use quotes

```
set JEDI_PREFILEOP=TYPE=J4 
```



#### JRFS


| [JBCNETACCESS](jbcnetaccess)<br> | specify the location of the jRFS security access file<br> |
| [JBCNETDIR](jbcnetdir)<br> | specify the location of the jRFS configuration files<br> |
| JRFS\_REMOTE\_JQL<br> | set to 1 to allow jQL to be executed remotely<br> |
| JRFS\_LOCALPATH\_JQL<br> | set to 1 to allow remote pointer to have a different name than the remote file<br> |
| JRFS\_SERVERNAME<br> | allows the jRFS client to override the service port<br> |
| JRFS\_HOSTNAME<br> | allows the jRFS client to override the target host<br> |

