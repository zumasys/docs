# Environment Variables

<PageHeader />

**Tags:**
<badge text='jedipostfileop' vertical='middle' />
<badge text='jediprefileop' vertical='middle' />
<badge text='variables' vertical='middle' />
<badge text='environment' vertical='middle' />
<badge text='environment variables' vertical='middle' />

jBASE uses a number of environment variables to modify jBASE behavior. Suitable defaults apply to most of them.  Although most environment variables can be set any time, the best place to do so is in the .profile script.

## Setting/getting

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

## jBASE Programs

The jBC functions PUTENV and GETENV can be used to manipulate environment variables.  For example:

```
SUCCESS = PUTENV(envar=x)
SUCCESS = GETENV(envar)
```

## jBASE Initialization

Some environment variables can only be set before jBASE initialization. jBASE initialization occurs when the first jBASE program is executed on a particular "PORT number".

The jBASE initialization process reads through the environment entries looking for possible variables required by jBASE.  This process provides a substantial performance improvement as the state of these environment variables are saved for subsequent jBASE executions.  These states continue to be valid as long as the "PORT" is still attached to a process.  Some environment variables can be changed by subsequent program execution. The state of these variables are imported back into the state table after program execution.

Certain jBASE programs expect jBASE initialization to have been previously performed otherwise re-initialization will occur and resources expected by the executing program will have been removed.

For instance:

T-ATT requires a "PORT" against which it saves the tape device assignment.
SP-ASSIGN requires a "PORT" with which to save assignment status for print jobs.
READNEXT in a program after SELECT/GET-LIST.

With jBASE 5.x all programs execute in the same process unless explicitly executed via the CHAR(255):'k' construct.

## Initial Environment Variables

| <!----> | <!----> |
| --- | --- |
| [PATH](./../../../environment-variables/path) | pathnames of executables |
| HOME | pathname of user home directory. Many defaults rely on this environment variable |
| [LD\_LIBRARY\_PATH](./../../../environment-variables/ld_library_path) | pathnames of system libraries (Linux, Solaris only) |
| LIBPATH | pathnames of system libraries (AIX only) |
| LANG | language type (UNIX only) |
| [JBASE\_LOCALE](./../../../environment-variables/jbase_locale) | setting to determine collation sequences for internationalization and secondary indexes (jBASE 5.2 and above) |
| [JBASE\_TIMEZONE](./../../../environment-variables/jbase_timezone) | setting to determine the timezone to use for UTF8 timestamp conversion into local time for display (jBASE 5.2 and above) |
| [JBASE\_DATE\_FORMAT](./../../../environment-variables/jbase_date_format) | specifies the format of how dates are converted to/from internal and external date representations |
| TZ | timezone (UNIX only) |
| LC\_ALL | will override a specified list of locale settings (UNIX only) |
| [TERM](term) | specifies terminal type as per terminfo database |
| [TERMINFO](./../../../environment-variables/terminfo) | specifies directory for terminal settings |
| [JBCPORTNO](./../../../environment-variables/jbcportno) | forced Port number for use by user; automatically allocated unless this is set |
| [JBCLOGNAME](./../../../environment-variables/jbclogname) | user name to use in-place of login id |
| [JBCGLOBALDIR](./../../../environment-variables/jbcglobaldir) | pathname of jBASE global configuration directory |
| [JBCRELEASEDIR](./../../../environment-variables/jbcreleasedir) | pathname of jBASE release directory |
| [JBCDATADIR](./../../../environment-variables/jbcdatadir) | pathname of any configured databases and default directory for the jBASE spooler |
| [JBCEMULATE](./../../../environment-variables/jbcemulate) | emulation to be used for this user |
| [JEDIFILEPATH](./../../../environment-variables/jedifilepath) | directory Paths of application files location |
| [JEDIFILENAME\_MD](./../../../environment-variables/jedifilename_md) | pathname of file to be used for Master Dictionary entries |
| [JEDIFILENAME\_SYSTEM](./../../../environment-variables/jedifilename_system) | pathname of file to be used for SYSTEM entries |

## Additional jBASE Environment Variables

### Execution

| <!----> | <!----> |
| --- | --- |
| [JBASE\_ERRMSG\_TRACE](./../../../environment-variables/jbase_errmsg_trace) | Controls whether or not to log jBASE messages to the $JBCRELEASEDIR/tmp/jbase\_error\_trace file. |
| [JBASE\_ERRMSG\_ZERO\_USED](./../../../environment-variables/jbase_errmsg_zero_used)   | controls the behavior of jBC programs when an uninitialized variable is encountered |
| [JBASE\_ERRMSG\_NON\_NUMERIC](./../../../environment-variables/jbase_errmsg_non_numeric) | controls the behavior of jBC programs when a numeric operation on a non-numeric variable is encountered |
| [JBASE\_ERRMSG\_DIVIDE\_ZERO](./../../../environment-variables/jbase_errmsg_divide_zero) | controls the behavior of jBC programs when the divisor of an arithmetic division is zero |
| JBCBACKGROUND | set to 1 to run "PORT" as background task |
| [JEDIENABLEQ2Q](./../../../environment-variables/jedienableq2q) | set to 1 to force detection of Qptr to Qptr |
| [JEDI\_DISTRIB\_DEFOPEN](./../../../environment-variables/jedi_distrib_defopen) | set to 1 to defer OPENs of distributed file parts |
| [JEDI\_SECURE\_LEVEL](./../../../environment-variables/jedi_secure_level) | set security level for j3 and jPLUS filesLevel 1. No flushLevel 2. Flush on link modification (default)Level 3. Flush after update (network failure) |
| JEDI\_INDEX\_MMAP\_ON | set to force use of memory mapping on indexes when updating memory mapped files |
| [JBC\_TCLRESTART](./../../../environment-variables/jbc_tclrestart) | set to command to execute instead of shell |
| [JBC\_ENDRESTART](./../../../environment-variables/jbc_endrestart) | set to command to execute after end from debugger |
| JBCRESTARTPROG | set to command to be executed after off (UNIX/Linux only) |
| [JBCOBJECTLIST](./../../../environment-variables/jbcobjectlist) | set to alternate path(s) for user subroutine librariesWindows - %home%\libUNIX - $HOME/lib |
| [JBC\_BLOCK\_SYSTEM14](./../../../environment-variables/jbc_block_system14) | set to 1 to force a 100 millisecond delay on SYSTEM(14) calls. |

### Development

| <!----> | <!----> |
| --- | --- |
| [JBCDEV\_BIN](./../../../environment-variables/jbcdev_bin) | set to alternate path to catalog executables.Windows - %home%\binUNIX - $HOME/bin |
| [JBCDEV\_LIB](./../../../environment-variables/jbcdev_lib) | set to alternate path to catalog libraries.Windows - %home%\libUNIX - $HOME/bin |
| [JDIAG](./../../../environment-variables/jdiag) | provides a variable amount of trace information |
| LIB | specify additional paths for linking with libraries. (Windows only) |
| INCLUDE | specify additional paths for header files |

### Miscellaneous

| <!----> | <!----> |
| --- | --- |
| [JBASEUNIQUE](./../../../environment-variables/jbaseunique) | specify alternate jBASE work file |
| [JBCERRFILE](./../../../environment-variables/jbcerrfile) | specify alternate error message file |
| [JBCSPOOLERDIR](./../../../environment-variables/jbcspoolerdir) | specify alternate spooler directory |
| [JBCSPOOLER\_JOBRESET](./../../../environment-variables/jbcspooler_jobreset) | controls how the print job counter is reset |
| [JBC\_DESPOOLSLEEP](./../../../environment-variables/jbc_despoolsleep) | specify the interval for despoolers to check for queued jobs |
| [JBC\_INVERT\_ALPHA\_CHARS](./../../../environment-variables/jbc_invert_alpha_chars) | set to 1 to invert the case of alphabetic characters entered     with [INPUT](./../../../jbase-basic-%28jbc%29/input). |
| [JBC\_OLD\_SP\_EDIT](./../../../environment-variables/jbc_old_sp_edit) | specifies the alternative SP-EDIT format |
| [JBCLISTFILE](./../../../environment-variables/jbclistfile) | specify alternate select list file |
| [JBCLISTID](./../../../environment-variables/jbclistid) | force user account name to be part stored list ids. |
| JBASE\_PIVOT\_YEAR | Set pivot year for full year calculation when doing a MD conversion on a 2 digit year.  Default is 30.  This means if YY &lt; 30 then it is make 19YY, else 20YY.  The 30 will be replaced with this option.   |

### Terminal

| <!----> | <!----> |
| --- | --- |
| JBCECHO | set to 1 to force echo on |
| [JBCSCREEN\_DEPTH](./../../../environment-variables/jbcscreen_depth) | specify alternate terminal depth (valid only on jBASE 3.x) |
| [JBCSCREEN\_WIDTH](./../../../environment-variables/jbcscreen_width) | specify alternate terminal width (valid only on jBASE 3.x) |
| [JBCPRINTER\_DEPTH](./../../../environment-variables/jbcprinter_depth) | specify alternate printer depth (valid only on jBASE 3.x) |
| [JBCPRINTER\_WIDTH](./../../../environment-variables/jbcprinter_width) | specify alternate printer width (valid only on jBASE 3.x) |
| JBCPRISM | set hard coded prism sequences (Windows only) |
| JBC\_STDERR | set to 1 to redirect standard error to standard out. Useful for CAPTUREing output that would normally be sent to the screen. |
| JBCCREATEFLAGS | set to 0, 1, 2 for output redirection. (Windows only)0 Direct to current console (default)1 Direct to new console2 Detached for no console |

### Embedded SQL

| <!----> | <!----> |
| --- | --- |
| JBC\_SQLLIBS | set alternate SQL libraries for embedded SQL |
| JBC\_SQLPREPROC | set alternate SQL pre-compiler command |
| JBC\_SQLFIXEDLEN | set to use fixed length types for char input strings |

### Queries

| <!----> | <!----> |
| --- | --- |
| [JBCDEFDICTS](./../../../environment-variables/jbcdefdicts) | specify alternate default dictionary files |

### CREATE-FILE

| <!----> | <!----> |
| --- | --- |
| JEDI\_PREFILEOP | parameters take precedence before command line |
| JEDI\_POSTFILEOP | parameters take precedence after command line |

e.g. To convert all files on a "jbackup" tape to J4 files set the following environment variable before using jrestore.
export JEDI\_PREFILEOP=TYPE=J4 (UNIX) Can use quotes to surround multiple parameters
set JEDI\_PREFILEOP=TYPE=J4 (NT) Don't use quotes

### jRFS

| <!----> | <!----> |
| --- | --- |
| [JBCNETACCESS](./../../../environment-variables/jbcnetaccess) | specify the location of the jRFS security access file |
| [JBCNETDIR](./../../../environment-variables/jbcnetdir) | specify the location of the jRFS configuration files |
| JRFS\_REMOTE\_JQL | set to 1 to allow jQL to be executed remotely |
| JRFS\_LOCALPATH\_JQL | set to 1 to allow remote pointer to have a different name than the remote file |
| JRFS\_SERVERNAME | allows the jRFS client to override the service port |
| JRFS\_HOSTNAME | allows the jRFS client to override the target host |

[Back to Articles](./../README.md)

  
<PageFooter />
