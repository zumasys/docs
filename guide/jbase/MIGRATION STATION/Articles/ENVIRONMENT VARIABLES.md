# ENVIRONMENT VARIABLES

**Created At:** 11/3/2017 1:29:00 PM  
**Updated At:** 4/16/2019 3:45:54 PM  

**Tags:**
<badge text='jedipostfileop' vertical='middle' />
<badge text='jediprefileop' vertical='middle' />
<badge text='variables' vertical='middle' />
<badge text='environment' vertical='middle' />
<badge text='environment variables' vertical='middle' />

jBASE uses a number of environment variables to modify jBASE behavior. Suitable defaults apply to most of them.  Although most environment variables can be set any time, the best place to do so is in the .profile script.

## SETTING/GETTING

### **Windows**

```
set variable=value
echo %variable%
```

Variables can be configured in the System environment for all users, and/or on a per user basis via the user environment.  Additional variables for jBASE can also be added to the current user configuration in the Windows registry.

Windows variables are usually configured in the System Properties panel.

### **UNIX**

```
variable=value
export variable
echo $variable
```

This works for all shells, although some shells (i.e. ksh) allow "export variable=value".

Variables are usually configured in the .profile/.bash\_profile of the user login directory.   Global variables can be added to the "/etc/profile" script.

## jBASE PROGRAMS

The jBC functions <u>PUTENV</u> and <u>GETENV</u> can be used to manipulate environment variables.  For example:

```
SUCCESS = PUTENV(envar=x)
SUCCESS = GETENV(envar)
```

## 
jBASE INITIALIZATION

Some environment variables can only be set before jBASE initialization. jBASE initialization occurs when the first jBASE program is executed on a particular "PORT number".

The jBASE initialization process reads through the environment entries looking for possible variables required by jBASE.  This process provides a substantial performance improvement as the state of these environment variables are saved for subsequent jBASE executions.  These states continue to be valid as long as the "PORT" is still attached to a process.  Some environment variables can be changed by subsequent program execution. The state of these variables are imported back into the state table after program execution.

Certain jBASE programs expect jBASE initialization to have been previously performed otherwise re-initialization will occur and resources expected by the executing program will have been removed.

For instance:

T-ATT requires a "PORT" against which it saves the tape device assignment.
SP-ASSIGN requires a "PORT" with which to save assignment status for print jobs.
READNEXT in a program after SELECT/GET-LIST.

With jBASE 5.x all programs execute in the same process unless explicitly executed via the CHAR(255):'k' construct.



## INITIAL ENVIRONMENT VARIABLES


| [<u>PATH</u>](path)<br> | pathnames of executables<br> |
| --- | --- |
| HOME<br> | pathname of user home directory. Many defaults rely on this environment variable<br> |
| [<u>LD_LIBRARY_PATH</u>](ld_library_path)<br> | pathnames of system libraries (Linux, Solaris only)<br> |
| LIBPATH<br> | pathnames of system libraries (AIX only)<br> |
| LANG<br> | language type (UNIX only)<br> |
| [<u>JBASE_LOCALE</u>](jbase_locale)<br> | setting to determine collation sequences for internationalization and secondary indexes (jBASE 5.2 and above)<br> |
| [<u>JBASE_TIMEZONE</u>](jbase_timezone)<br> | setting to determine the timezone to use for UTF8 timestamp conversion into local time for display (jBASE 5.2 and above)<br> |
| [<u>JBASE_DATE_FORMAT</u>](jbase_date_format)<br> | specifies the format of how dates are converted to/from internal and external date representations<br> |
| TZ<br> | timezone (UNIX only)<br> |
| LC\_ALL<br> | will override a specified list of locale settings (UNIX only)<br> |
| [<u>TERM</u>](term)<br> | specifies terminal type as per terminfo database<br> |
| [<u>TERMINFO</u>](326793-terminfo)<br> | specifies directory for terminal settings<br> |
| [<u>JBCPORTNO</u>](jbcportno)<br> | forced Port number for use by user; automatically allocated unless this is set<br> |
| [<u>JBCLOGNAME</u>](jbclogname)<br> | user name to use in-place of login id<br> |
| [<u>JBCGLOBALDIR</u>](jbcglobaldir)<br> | pathname of jBASE global configuration directory<br> |
| [<u>JBCRELEASEDIR</u>](jbcreleasedir)<br> | pathname of jBASE release directory<br> |
| [<u>JBCDATADIR</u>](jbcdatadir)<br> | pathname of any configured databases and default directory for the jBASE spooler<br> |
| [<u>JBCEMULATE</u>](jbcemulate)<br> | emulation to be used for this user<br> |
| [<u>JEDIFILEPATH</u>](jedifilepath)<br> | directory Paths of application files location<br> |
| [<u>JEDIFILENAME_MD</u>](jedifilename_md)<br> | pathname of file to be used for Master Dictionary entries<br> |
| [<u>JEDIFILENAME_SYSTEM</u>](jedifilename_system)<br> | pathname of file to be used for SYSTEM entries<br> |


## ADDITIONAL jBASE ENVIRONMENT VARIABLES

### EXECUTION


| [<u>JBASE_ERRMSG_TRACE</u>](jbase_errmsg_trace)<br> | Controls whether or not to log jBASE messages to the $JBCRELEASEDIR/tmp/jbase\_error\_trace file.<br> |
| [<u>JBASE_ERRMSG_ZERO_USED</u>](jbase_errmsg_zero_used)  <br> | controls the behavior of jBC programs when an uninitialized variable is encountered<br> |
| [<u>JBASE_ERRMSG_NON_NUMERIC</u>](jbase_errmsg_non_numeric)<br> | controls the behavior of jBC programs when a numeric operation on a non-numeric variable is encountered<br> |
| [<u>JBASE_ERRMSG_DIVIDE_ZERO</u>](jbase_errmsg_divide_zero)<br> | controls the behavior of jBC programs when the divisor of an arithmetic division is zero<br> |
| JBCBACKGROUND<br> | set to 1 to run "PORT" as background task<br> |
| [<u>JEDIENABLEQ2Q</u>](jedienableq2q)<br> | set to 1 to force detection of Qptr to Qptr<br> |
| [<u>JEDI_DISTRIB_DEFOPEN</u>](jedi_distrib_defopen)<br> | set to 1 to defer OPENs of distributed file parts<br> |
| [<u>JEDI_SECURE_LEVEL</u>](jedi_secure_level)<br> | set security level for j3 and jPLUS files<br>Level 1. No flush<br>Level 2. Flush on link modification (default)<br>Level 3. Flush after update (network failure)<br> |
| JEDI\_INDEX\_MMAP\_ON<br> | set to force use of memory mapping on indexes when updating memory mapped files<br> |
| [<u>JBC_TCLRESTART</u>](jbc_tclrestart)<br> | set to command to execute instead of shell<br> |
| [<u>JBC_ENDRESTART</u>](jbc_endrestart)<br> | set to command to execute after end from debugger<br> |
| JBCRESTARTPROG<br> | set to command to be executed after off (UNIX/Linux only)<br> |
| [<u>JBCOBJECTLIST</u>](jbcobjectlist)<br> | set to alternate path(s) for user subroutine libraries<br>Windows - %home%\lib<br>UNIX - $HOME/lib<br> |
| [<u>JBC_BLOCK_SYSTEM14</u>](jbc_block_system14)<br> | set to 1 to force a 100 millisecond delay on SYSTEM(14) calls.<br> |


### DEVELOPMENT


| [<u>JBCDEV_BIN</u>](jbcdev_bin)<br> | set to alternate path to catalog executables.<br>Windows - %home%\bin<br>UNIX - $HOME/bin<br> |
| [<u>JBCDEV_LIB</u>](jbcdev_lib)<br> | set to alternate path to catalog libraries.<br>Windows - %home%\lib<br>UNIX - $HOME/bin<br> |
| [<u>JDIAG</u>](jdiag)<br> | provides a variable amount of trace information<br> |
| LIB<br> | specify additional paths for linking with libraries. (Windows only)<br> |
| INCLUDE<br> | specify additional paths for header files<br> |




### MISCELLANEOUS


| [<u>JBASEUNIQUE</u>](jbaseunique)<br> | specify alternate jBASE work file<br> |
| [<u>JBCERRFILE</u>](jbcerrfile)<br> | specify alternate error message file<br> |
| [<u>JBCSPOOLERDIR</u>](jbcspoolerdir)<br> | specify alternate spooler directory<br> |
| [<u>JBCSPOOLER_JOBRESET</u>](jbcspooler_jobreset)<br> | controls how the print job counter is reset<br> |
| [<u>JBC_DESPOOLSLEEP</u>](326821-jbc_despoolsleep)<br> | specify the interval for despoolers to check for queued jobs<br> |
| [<u>JBC_INVERT_ALPHA_CHARS</u>](jbc_invert_alpha_chars)<br> | set to 1 to invert the case of alphabetic characters entered     with [<u>INPUT</u>](input).<br> |
| [<u>JBC_OLD_SP_EDIT</u>](jbc_old_sp_edit)<br> | specifies the alternative SP-EDIT format<br> |
| [<u>JBCLISTFILE</u>](326531-jbclistfile)<br> | specify alternate select list file<br> |
| [<u>JBCLISTID</u>](jbclistid)<br> | force user account name to be part stored list ids.<br> |




### TERMINAL


| JBCECHO<br> | set to 1 to force echo on<br> |
| [<u>JBCSCREEN_DEPTH</u>](jbcscreen_depth)<br> | specify alternate terminal depth (valid only on jBASE 3.x)<br> |
| [<u>JBCSCREEN_WIDTH</u>](327509-jbcscreen_width)<br> | specify alternate terminal width (valid only on jBASE 3.x)<br> |
| [<u>JBCPRINTER_DEPTH</u>](jbcprinter_depth)<br> | specify alternate printer depth (valid only on jBASE 3.x)<br> |
| [<u>JBCPRINTER_WIDTH</u>](jbcprinter_width)<br> | specify alternate printer width (valid only on jBASE 3.x)<br> |
| JBCPRISM<br> | set hard coded prism sequences (Windows only)<br> |
| JBC\_STDERR<br> | set to 1 to redirect standard error to standard out. Useful for CAPTUREing output that would normally be sent to the screen.<br> |
| JBCCREATEFLAGS<br> | set to 0, 1, 2 for output redirection. (Windows only)<br>0 Direct to current console (default)<br>1 Direct to new console<br>2 Detached for no console<br> |




### EMBEDDED SQL


| JBC\_SQLLIBS<br> | set alternate SQL libraries for embedded SQL<br> |
| JBC\_SQLPREPROC<br> | set alternate SQL pre-compiler command<br> |
| JBC\_SQLFIXEDLEN<br> | set to use fixed length types for char input strings<br> |




### QUERIES


| [<u>JBCDEFDICTS</u>](jbcdefdicts)<br> | specify alternate default dictionary files<br> |




### CREATE-FILE


| JEDI\_PREFILEOP<br> | parameters take precedence before command line<br> |
| JEDI\_POSTFILEOP<br> | parameters take precedence after command line<br> |


e.g. To convert all files on a "jbackup" tape to J4 files set the following environment variable before using jrestore.
export JEDI\_PREFILEOP=TYPE=J4 (UNIX) Can use quotes to surround multiple parameters
set JEDI\_PREFILEOP=TYPE=J4 (NT) Don't use quotes



### JRFS


| [<u>JBCNETACCESS</u>](jbcnetaccess)<br> | specify the location of the jRFS security access file<br> |
| [<u>JBCNETDIR</u>](jbcnetdir)<br> | specify the location of the jRFS configuration files<br> |
| JRFS\_REMOTE\_JQL<br> | set to 1 to allow jQL to be executed remotely<br> |
| JRFS\_LOCALPATH\_JQL<br> | set to 1 to allow remote pointer to have a different name than the remote file<br> |
| JRFS\_SERVERNAME<br> | allows the jRFS client to override the service port<br> |
| JRFS\_HOSTNAME<br> | allows the jRFS client to override the target host<br> |

