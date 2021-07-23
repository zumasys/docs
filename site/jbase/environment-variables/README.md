# Introduction to Environment Variables

<PageHeader />

## Setting/Getting

## Windows

```
set variable=value
echo %variable%
```

Variables can be configured in the System environment for all users, and/or on a per user basis via the user environment. Additional variables for jBASE can also be added to the current user configuration in the Windows registry.

Windows variables are usually configured in the System Properties panel.

## UNIX

```bash
export variable=value
echo $variable
```

This works for all shells, although some shells (i.e. ksh) allow "export variable=value".

Variables are usually configured in the .profile/.bash\_profile of the user login directory.  Global variables can be added to the "/etc/profile" script.

## jBASE Programs

The jBC functions **PUTENV()** and **GETENV()** can be used to manipulate environment variables. For example:

```
ok = PUTENV(envar=x)
ok = GETENV(envar)
```

## jBASE Initialization

Some environment variables can only be set before jBASE initialization. jBASE initialization occurs when the first jBASE program is executed on a particular **PORT** number.

The jBASE initialization process reads through the environment entries looking for possible variables required by jBASE. This process provides a substantial performance improvement as the state of these environment variables are saved for subsequent jBASE executions. These states continue to be valid as long as the **PORT** number is still attached to a process. Some environment variables can be changed by subsequent program execution. The state of these variables are imported back into the state table after program execution.

Certain jBASE programs expect jBASE initialization to have been previously performed otherwise re-initialization will occur and resources expected by the executing program will have been removed.

For instance:

**T-ATT** requires a **PORT** number against which it saves the tape device assignment.
**SP-ASSIGN** requires a "PORT" with which to save assignment status for print jobs.
**READNEXT** in a program after **SELECT**/**GET-LIST**.

All jBASE programs execute in the same process unless explicitly executed via the **@IM****:"k"** construct.

## Initial Environment Variables

| <!----> | <!----> |
| --- | --- |
| [PATH](./path/README.md) | pathnames of executables |
| HOME | pathname of user home directory. Many defaults rely on this environment variable |
| [LD\_LIBRARY\_PATH](./ld_library_path/README.md) | pathnames of system libraries (Linux) |
| LIBPATH | pathnames of system libraries (AIX) |
| LANG | language type (UNIX only) |
| [JBASE\_LOCALE](./jbase_locale/README.md) | setting to determine collation sequences for internationalization and secondary indexes |
| [JBASE\_TIMEZONE](./jbase_timezone/README.md) | setting to determine the timezone to use for UTF8 timestamp conversion into local time for display |
| [JBASE\_DATE\_FORMAT](./jbase_date_format/README.md) | specifies the format of how dates are converted to/from internal and external date representations |
| TZ | timezone (UNIX) |
| LC\_ALL | will override a specified list of locale settings (UNIX) |
| [TERM](./term-(environment-variable)/README.md) | specifies terminal type as per terminfo database |
| [TERMINFO](./terminfo/README.md) | specifies directory for terminal settings |
| [JBCPORTNO](./jbcportno/README.md) | forced Port number for use by user; automatically allocated unless this is set |
| [JBCLOGNAME](./jbclogname/README.md) | user name to use in-place of login id |
| [JBCGLOBALDIR](./jbcglobaldir/README.md) | pathname of jBASE global configuration directory |
| [JBCRELEASEDIR](./jbcreleasedir/README.md) | pathname of jBASE release directory |
| [JBCDATADIR](./jbcdatadir/README.md) | pathname of any configured databases and default directory for the jBASE spooler |
| [JBCEMULATE](./jbcemulate/README.md) | emulation to be used for this user |
| [JEDIFILEPATH](./jedifilepath/README.md) | directory Paths of application files location |
| [JEDIFILENAME\_MD](./jedifilename_md/README.md) | pathname of file to be used for Master Dictionary entries |
| [JEDIFILENAME\_SYSTEM](./jedifilename_system/README.md) | pathname of file to be used for SYSTEM entries |
| JBASE_DYNAMIC_MULTISESSION | Dynamically allocates multi-session licenses when set to 1 |

## Additional jBASE Environment Variables

### Execution

| <!----> | <!----> |
| --- | --- |
| [JBASE\_ERRMSG\_TRACE](./jbase_errmsg_trace/README.md) | Controls whether or not to log jBASE messages to the $JBCRELEASEDIR/tmp/jbase\_error\_trace file.<br> |
| [JBASE\_ERRMSG\_ZERO\_USED](./jbase_errmsg_zero_used/README.md) | controls the behavior of jBC programs when an uninitialized variable is encountered |
| [JBASE\_ERRMSG\_NON\_NUMERIC](./jbase_errmsg_non_numeric/README.md) | controls the behavior of jBC programs when a numeric operation on a non-numeric variable is encountered |
| [JBASE\_ERRMSG\_DIVIDE\_ZERO](./jbase_errmsg_divide_zero/README.md) | controls the behavior of jBC programs when the divisor of an arithmetic division is zero |
| [JEDIENABLEQ2Q](./jedienableq2q/README.md) | set to 1 to force detection of Qptr to Qptr |
| [JEDI\_DISTRIB\_DEFOPEN](./jedi_distrib_defopen/README.md) | set to 1 to defer OPENs of distributed file parts |
| [JEDI\_SECURE\_LEVEL](./jedi_secure_level/README.md) | set security level for j3 and jPLUS files<br>Level 1. No flush<br>Level 2. Flush on link modification (default)<br>Level 3. Flush after update (network failure) |
| JEDI\_INDEX\_MMAP\_ON | set to force use of memory mapping on indexes when updating memory mapped files |
| [JBC\_TCLRESTART](./jbc_tclrestart/README.md) | set to command to execute instead of shell |
| [JBC\_ENDRESTART](./jbc_endrestart/README.md) | set to command to execute after end from debugger |
| JBCRESTARTPROG | set to command to be executed after off (Linux/AIX) |
| [JBCOBJECTLIST](./jbcobjectlist/README.md) | set to alternate path(s) for user subroutine libraries<br>Windows - %HOME%\lib<br>UNIX - $HOME/lib |
| [JBC\_BLOCK\_SYSTEM14](./jbc_block_system14/README.md) | set to 1 to force a 100 millisecond delay on SYSTEM(14) calls. |
| [JBCCALLDEPTH](./jbccalldepth/README.md) | Set the stack size for a CALL |
| [JBC_LOG_SIZE](./jbc_log_size/README.md) | Set the maximum size of the jBASE error log |

### Development

| <!----> | <!----> |
| --- | --- |
| [JBCDEV\_BIN](./jbcdev_bin/README.md) | set to alternate path to catalog executables.<br>Windows - %home%\bin<br>UNIX - $HOME/bin |
| [JBCDEV\_LIB](./jbcdev_lib/README.md) | set to alternate path to catalog libraries.<br>Windows - %HOME%\lib<br>UNIX - $HOME/bin |
| [JDIAG](./jdiag/README.md) | provides a variable amount of trace information |
| LIB | specify additional paths for linking with libraries. (Windows only) |
| INCLUDE | specify additional paths for header files |
| [JBC\_INCLUDE\_FILE](./jbc_include_file/README.md) | a list of source code files that will automatically be compiled prior to compiling the current program. |
| [JBC\_INCLUDE\_PATH](./jbc_include_path/README.md) | a list of directories the compiler searches through when an INCLUDE statement is seen in a program. |
| [DECATALOG\_DELETE\_OBJECT\_CODE](./decatalog_delete_object_code/README.md) | Delete the intermediate compiled object file when the program (or subroutine) is DECATALOG'd. |
| [JELF](./jelf/README.md) | Enable Single Shared Object builds in jBASE BASIC and other related options |

### Miscellaneous

| <!----> | <!----> |
| --- | --- |
| [JBASEUNIQUE](./jbaseunique/README.md) | specify alternate jBASE work file |
| [JBCERRFILE](./jbcerrfile/README.md) | specify alternate error message file |
| [JBCSPOOLERDIR](./jbcspoolerdir/README.md) | specify alternate spooler directory |
| [JBCSPOOLER\_JOBRESET](./jbcspooler_jobreset/README.md) | controls how the print job counter is reset |
| [JBC\_DESPOOLSLEEP](./jbc_despoolsleep/README.md) | specify the interval for despoolers to check for queued jobs |
| [JBC\_INVERT\_ALPHA\_CHARS](./jbc_invert_alpha_chars/README.md) | set to 1 to invert the case of alphabetic characters entered with [INPUT](./../jbc/input/README.md). |
| [JBC\_OLD\_SP\_EDIT](./jbc_old_sp_edit/README.md) | specifies the alternative SP-EDIT format |
| [JBCLISTFILE](./jbclistfile/README.md) | specify alternate select list file |
| [JBCLISTID](./jbclistid/README.md) | force user account name to be part stored list ids. |
| [JDIAG](./jdiag/README.md) | Turns on internal verbose messaging.  Index detail is an example |
| [JFILESAVE_DEVICE](../../jbase/tools-and-utilities/jfilesave/README.md) | Used with the JFILESAVE command, defines the full path to where system backups are stored. |
| [JFILESAVE_STATFILE](../../jbase/tools-and-utilities/jfilesave/README.md) | Used with the JFILESAVE command, it defines the full path to where backup statistics are stored.|

### Terminal

| <!----> | <!----> |
| --- | --- |
| JBCECHO | set to 1 to force echo on |
| [JBCSCREEN\_DEPTH](./jbcscreen_depth/README.md) | specify alternate terminal depth (valid only on jBASE 3.x) |
| [JBCSCREEN\_WIDTH](./jbcscreen_width/README.md) | specify alternate terminal width (valid only on jBASE 3.x) |
| [JBCPRINTER\_DEPTH](./jbcprinter_depth/README.md) | specify alternate printer depth (valid only on jBASE 3.x) |
| [JBCPRINTER\_WIDTH](./jbcprinter_width/README.md) | specify alternate printer width (valid only on jBASE 3.x) |
| JBCPRISM | set hard coded prism sequences (Windows only) |
| JBC\_STDERR | set to 1 to redirect standard error to standard out. Useful for CAPTUREing output that would normally be sent to the screen. |
| JBCCREATEFLAGS | set to 0, 1, 2 for output redirection. (Windows only)<br>0 Direct to current console (default)<br>1 Direct to new console<br>2 Detached for no console |

### Embedded SQL

| <!----> | <!----> |
| --- | --- |
| JBC\_SQLLIBS | set alternate SQL libraries for embedded SQL |
| JBC\_SQLPREPROC | set alternate SQL pre-compiler command |
| JBC\_SQLFIXEDLEN | set to use fixed length types for char input strings |

### Queries

| <!----> | <!----> |
| --- | --- |
| [JBCDEFDICTS](./jbcdefdicts/README.md) | specify alternate default dictionary files |

### CREATE-FILE

| <!----> | <!----> |
| --- | --- |
| [JEDI\_PREFILEOP](./jedi_prefileop_postfileop/README.md) | parameters take precedence before command line |
| J[EDI\_POSTFILEOP](../jedi_prefileop_postfileop/README.md) | parameters take precedence after command line |

For example, to create all files from a **jbackup** to JP (jPlus) files and as Case Insensitive, set the following environment variable before doing the **jrestore**. Note the use of double-quotes on UNIX when there is more than one setting.

```
export JEDI_PREFILEOP="TYPE=JP CASE=OFF"  (UNIX)
set JEDI_PREFILEOP=TYPE=JP CASE=OFF       (Windows)
```

### jRFS

| <!----> | <!----> |
| --- | --- |
| [JBCNETACCESS](./jbcnetaccess/README.md) | specify the location of the jRFS security access file |
| [JBCNETDIR](./jbcnetdir/README.md) | specify the location of the jRFS configuration files |
| JRFS\_REMOTE\_JQL | set to 1 to allow jQL to be executed remotely |
| JRFS\_LOCALPATH\_JQL | set to 1 to allow remote pointer to have a different name than the remote file |
| JRFS\_SERVERNAME | allows the jRFS client to override the service port |
| JRFS\_HOSTNAME | allows the jRFS client to override the target host |

Back to [Knowledgebase](./../README.md)

<PageFooter />
