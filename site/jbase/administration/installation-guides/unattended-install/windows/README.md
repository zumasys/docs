# Unattended jBASE 5.8 install on Windows

<PageHeader />

## What is required

Prior to installing jBASE on Windows, we first need to install a compiler.

At the present time there is no option within the jBASE installer to perform a silent/unattended install of the Visual Studio compiler, so that step has to be performed prior to jBASE being installed:

```bash
# Download the Build Tools bootstrapper,  which may actually download a later version than the one in our example:

https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=BuildTools&rel=16

# Install Build Tools, excluding workloads and com, after having renamed the installer

C:\Temp>vs_buildtools.exe --quiet --wait --nocache --norestart --includeRecommended --add Microsoft.VisualStudio.Workload.MSBuildTools --add Microsoft.VisualStudio.Workload.VCTools --add Microsoft.VisualStudio.Component.VC.Tools.x86.x64
```

On Windows, with a jBASE installer and a jbase_config.json file containing our proposed jBASE configuration, we can now start an unattended install:

```bash
C:\Temp>dir
 Volume in drive C has no label.
 Volume Serial Number is 22F7-D16B

 Directory of C:\Temp

01/Sep/2021  06:29    <DIR>          .
01/Sep/2021  06:29    <DIR>          ..
29/Jun/2021  14:36        54,527,128 jbase_5.8.3_948d8070_64bit.exe
01/Sep/2021  06:28            25,644 jbase_config.json
               2 File(s)     54,552,772 bytes
               2 Dir(s)  41,966,362,624 bytes free
```

```bash
C:\Temp>jbase_5.8.3_948d8070_64bit.exe /SILENT /CONFIG=jbase_config.json /LOG=install.log
```

As the unattended jBASE install does not perform any compiler steps, we then need to use the installer again to update the jBASE system.properties file with the correct PATH, INCLUDE and LIB variables for the BASIC compiler to use:

```bash
set JBCRELEASEDIR=C:\jBASE5\CurrentVersion

jbase_5.8.3_948d8070_64bit.exe /Compiler
```

## Note

>With this option, the installer needs to know where jBASE is currrently installed , so JBCRELEASEDIR needs to be set first.  

## Appendix

Below is a copy of the jbase_config.json file used to drive the unattended install:

```json
{
#
# This is the jBASE configuration file
#
    "environment":[
        #
        # Each item in this 'environment' array defines an environment variable.
        # Each item is a JSON object with "name":"value" or "name":"default" properties.
        # If 'value' is missing and the variable is not set then it is set to the
        # "default" property. If "value" is present then it takes precedence over
        # "default". "value" and "default" can reference other environment variables
        # which have been previously defined, e.g.
        #
        #   {"name": "JBCSPOOLERDIR", "default": "%JBCDATADIR%\\jspooler"}
        #
        ######################################################################################
        # INITIAL ENVIRONMENT VARIABLES
        ######################################################################################
        #
        # JBCRELEASEDIR defines the release directory for the jBASE system
        # executables and libraries. Normally, it is automatically set based on the
        # jBASE installation directory.
        #   {"name": "JBCRELEASEDIR", "value": "<path to release directory>"},
        #
        # JBCGLOBALDIR defines the directory for jBASE global files. Normally, it is
        # set by the initial configuration read from %JBCRELEASEDIR%\config\jbase_config.json.
        {
            "name":"JBCGLOBALDIR",
            "value":"C:\\jBASE5\\global"
        },
        #
        # JBCDATADIR defines the location for jBASE to determine any configured
        # databases. It is the default location for the SYSTEM file and for new
        # accounts created by the CREATE-ACCOUNT command.
        {
            "name":"JBCDATADIR",
            "default":"C:\\jBASE5"
        },
        #
        # PATH contains a list of all directories that contain executable programs.
        # At a minimum, this should contain the shell default values plus the path
        # of the jBASE bin directory.
        {
            "name":"PATH",
            "value":"%JBCRELEASEDIR%\\bin;%PATH%"
        },
        #
        # LD_LIBRARY_PATH is only valid on Linux, and must include the jBASE lib directory.
        #   {"name": "LD_LIBRARY_PATH", "value": "%JBCRELEASEDIR%\\lib;%LD_LIBRARY_PATH%"},
        #
        # LIBPATH is only valid on AIX, and must include the jBASE lib directory.
        #   {"name": "LIBPATH", "value": "%JBCRELEASEDIR%\\lib;%LIBPATH%"},
        #
        # HOME is the path of the user's home directory. Many defaults rely on this variable.
        # NOTE: this variable is normally set by the user's profile and is not in the jBASE
        # system configuration.
        #   {"name": "HOME", "value": "<path to user's home directory>"},
        #
        # TERM sets the terminal type, and should match a definition in the Linux
        # or AIX terminfo database. On Windows, it should match definition found in
        # the %JBCRELEASEDIR%\misc directory (not including the "_jbase" suffix".
        # Most terminal emulators will set this based on the emulator's settings.
        #   {"name": "TERM", "default": "vt100"},
        #
        # JBCPORTNO defines the current port number and is useful when a particular user
        # wishes to keep the same port number whenever they log on.
        #   {"name": "JBCPORTNO", "value": "<number>"},
        #
        # JBCLOGNAME overrides the LOGNAME variable and defines the account name as shown by
        # commands such as WHO, or conversions such as U50BB. 
        #   {"name": "JBCLOGNAME", "value": "<account name>"},
        #
        # JBCEMULATE defines the emulations that jBASE uses when compiling and running
        # applications, and is useful when importing applications from other platforms.
        #   {"name": "JBCEMULATE", "default": "jbase"},
        #
        # JEDIFILEPATH provides a list of directories to search for jBASE data files.
        # If a MD or VOC file is configured (JEDIFILENAME_MD), and contains Q or F pointers,
        # these take precedence over directories in JEDIFILEPATH.
        #   {"name": "JEDIFILEPATH", "default": "<list of directories>"},
        #
        # JEDIFILENAME_MD defines the MD or VOC file location, which is used to
        # hold Q and F pointers, jCL programs, paragraphs or entries for jQL.
        # NOTE: this is normally set by the LOGTO or JLOGIN commands, or by the
        # user's profile, not in the jBASE system configuration.
        #   {"name": "JEDIFILENAME_MD", "default": "<path to MD file>"},
        #
        # JEDIFILENAME_SYSTEM defines the SYSTEM file location, which is used to
        # organize "accounts". Accounts are used by the JLOGIN and LOGTO commands
        # and for Q-pointer resolution.
        {
            "name":"JEDIFILENAME_SYSTEM",
            "value":"C:\\jBASE5\\SYSTEM"
        },
        #
        ######################################################################################
        # EXECUTION ENVIRONMENT VARIABLES
        ######################################################################################
        #
        # JBCOBJECTLIST defines the directories to find user shared object libraries
        # where user subroutines are located.
        #   {"name": "JBCOBJECTLIST", "default": "%HOME%\\lib"},
        #
        # JEDIENABLEQ2Q enables Q-pointer to Q-pointer chaining.
        #   {"name": "JEDIENABLEQ2Q", "value": "1"},
        #
        # JEDI_DISTRIB_DEFOPEN defers opening of component or part files in a distributed
        # file set until the component file is required to be opened by the application program.
        #   {"name": "JEDI_DISTRIB_DEFOPEN", "value": "1"},
        #
        # JEDI_SECURE_LEVEL defines the security level for j3 and jPLUS Secure files.
        # Level 1=disable secure mode, 2=flush when file size increases, 3=flush every time
        # file is modified.
        #   {"name": "JEDI_SECURE_LEVEL", "value": "1"},
        #
        # JEDI_INDEX_MMAP_ON forces memory mapping on indexes when updating memory mapped files.
        #   {"name": "JEDI_INDEX_MMAP_ON", "value": "1"},
        #
        # JBC_TCLRESTART causes jBASE to execute the specified command when the user would
        # otherwise to to a shell prompt.
        #   {"name": "JBC_TCLRESTART", "value": "<command>"},
        #
        # JBC_ENDRESTART causes jBASE to execute the specified command when the user exits
        # the debugger (Break/End).
        #   {"name": "JBC_ENDRESTART", "value": "<command>"},
        #
        # JBCRESTARTPROG specifies a command to execute after the user logs off. This can be
        # used to restart jBASE.
        #   {"name": "JBCRESTARTPROG", "value": "<command>"},
        #
        # JBC_BLOCK_SYSTEM14 adds a 100 millisecond delay when SYSTEM(14) is called.
        #   {"name": "JBC_BLOCK_SYSTEM14", "value": "1"},
        #
        ######################################################################################
        # DEVELOPMENT ENVIRONMENT VARIABLES
        ######################################################################################
        #
        # JBCDEV_BIN defines the directory where user executables will be built when
        # programs are CATALOGed. Default is %HOME%\bin.
        #   {"name": "JBCDEV_BIN", "default", "<path to dev bin>"},
        #
        # JBCDEV_LIB defines the directory where user shared object libraries will be built
        # when programs are CATALOGed. Default is %HOME%\lib.
        #   {"name": "JBCDEV_LIB", "default", "<path to dev lib>"},
        #
        # JBC_INCLUDE_PATH contains a list of directories the compiler searches through
        # when an INCLUDE statement is seen in a program.
        #   {"name": "JBC_INCLUDE_PATH", "value": "%HOME%\\myincludes;C:\\home\globals\\includes"},
        #
        # JBC_INCLUDE_FILE contains a list of source code files that will automatically be
        # compiled prior to compiling the current program.
        #   {"name": "JBC_INCLUDE_FILE", "value": "%HOME%\\BP COMMON;%JBCRELEASEDIR%\\include\\jabba.h"},
        #
        # JELF instructs the CATALOG command to create a separate DLL for each subroutine.
        # Set JELF=1 to enable this functionality. Optionally append other options to the value,
        # separated by commas:
        #  debug=yes|no|true|false       Debug information loading objects
        #  verbose=yes|no|true|false     Verbose debug information (needs debug=true|yes)
        #  source=yes|no|true|false      Add source code to the JELF
        #  key=EncryptionKey             Encrypt source (max key size 63)
        #   {"name": "JELF", "value": "1"},
        #
        # DECATALOG_DELETE_OBJECT_CODE causes 'compiled object' files to be deleted when
        # programs or subroutines are DECATALOG'd. Compiled object files are those starting
        # with '$' or ending with '.o' on unix / '.obj' on Windows.
        #   {"name": "DECATALOG_DELETE_OBJECT_CODE", "value": "1"},
        #
        # GOSUBSTACKDEPTH sets the maximum depth of the GOSUB stack. Default is 512, max is 10,000.
        #   {"name": "GOSUBSTACKDEPTH", "value": "1000"},
        #
        # JDIAG can be set to enable profiling. Profiling is normally done using
        # for a single application execution, rather that a globally. The 'jprof'
        # command can be used to analyze the profile output. Specify the profiling
        # options separated by a colon (:). Available options are:
        #  profile={off|short|long|user|jcover|all}
        #  filename={stdout|stderr|tmp|pathname{,refresh_mins}
        #  memory={off|on|verify}
        #  branch={off|on|verbose}
        #  jimi={database|open|fileio|branch|call|perform|transaction|all|verbose}
        #  trace=env_name{,env_name..}
        #
        #   {"name": "JDIAG", "value": "<options>"},
        #
        # JBC_CORE_DUMP is used to cause a coredump file to be written when a segmentation
        # violation occurs. Note: this is not supported for Windows.
        #
        #   {"name": "JBC_CORE_DUMP", "value": "1"},
        #
        # NOTE: %JBCRELEASEDIR%\config\system.properties contains settings used by the C
        # compiler and linker, and includes PATH, INCLUDE and LIB paths.
        #
        ######################################################################################
        # MISCELLANEOUS ENVIRONMENT VARIABLES
        ######################################################################################
        #
        # JBASEUNIQUE is used to define the directory where jBASE dynamically creates work files
        # based on port number. The work files are created as %JBASEUNIQUE%\jBASEWORK_portno.
        #   {"name": "JBASEUNIQUE", "value": "<path to workfile directory>"},
        #
        # JBCSPOOLERDIR specifies the directory where jBASE spooler entries are located.
        # The default is %JBCDATADIR%\jspooler.
        #   {"name": "JBCSPOOLERDIR", "value": "%JBCDATADIR%\\jspooler"},
        #
        # JBC_SPOOLER_PORT_BASE specifies the base port used by spooler processes jlp and jspprint.
        # The default range is 5000-6000.
        #   {"name": "JBC_SPOOLER_PORT_BASE", "value": "5000"},
        #
        # JBCSPOOLER_JOBRESET changes the way the counter for print jobs is reset. By default,
        # it is reset when the first print job generated after midnight is created. Setting this
        # variable causes the job number to be reset only when it reaches the value specified in
        # this variable.
        #   {"name": "JBCSPOOLER_JOBRESET", "value": "<number>"},
        #
        # JBC_DESPOOLSLEEP sets the interval the jBASE despooler process checks for queued jobs.
        # The default is every 5 seconds. Minimum is 3 seconds.
        #   {"name": "JBC_DESPOOLSLEEP", "value": "5"},
        #
        # JBC_OLD_SP_EDIT causes jBASE to use the alternative SP-EDIT program.
        #   {"name": "JBC_OLD_SP_EDIT", "value": "1"},
        #        
        # JBCLISTFILE defines the file where stored lists are kept. Default is POINTER-FILE, and
        # if not found, %JBCRELEASEDIR%\tmp\jBASEWORK.
        #   {"name": "JBCLISTFILE", "value": "<file name for lists>"},
        #
        # JBCLISTID forces the user account name to be stored as part of the saved list identifier.
        #   {"name": "JBCLISTID", "value": "1"},
        #
        # JBASE_PIVOT_YEAR specifies the 2 digit year at which the century pivots. A 2 digit
        # year less than the pivot year assumes the century is 1900. Otherwise the century
        # is 2000. The default is 30.
        #   {"name": "JBASE_PIVOT_YEAR", "value": "30"},
        #
        # JBCLOGCONFDIR specifies the directory where the transaction log configuration and
        # lock files are located. Default is %JBCGLOBALDIR%\config.
        #   {"name": "JBCLOGCONFDIR", "value": "<transaction logger directory>"},
        #
        # JEDI_PREFILEOP specifies optional CREATE-FILE parameters that override corresponding
        # options found in the CREATE-FILE command line. If a corresponding option is not found,
        # the options in JEDI_PREFILEOP are used as the default for the command.
        #   {"name": "JEDI_PREFILEOP", "value": "TYPE=JP"},
        #
        # JEDI_POSTFILEOP specifies optional CREATE-FILE parameters that are used as the default
        # if the corresponding option is not found in the CREATE-FILE command line.
        #   {"name": "JEDI_POSTFILEOP", "value": "CASE=NO"},
        #        
        # JSH_COMMAND_STACK is used to configure the jShell command history. It can be set in one of 3 ways:
        #   * to a maximum number of stack entries, the stack will be port-based:
        #       {"name": "JSH_COMMAND_STACK", "value": "1000"},
        #   * by username, i.e. the stack is shared when the same user is logged in to more than one port:
        #       {"name": "JSH_COMMAND_STACK", "value": "USERNAME"},
        #   * to both:
        #       {"name": "JSH_COMMAND_STACK", "value": "USERNAME,1000"},
        #
        # JFILESAVE_DEVICE is used with the JFILESAVE command. It defines the full path to
        # where system backups are stored. It can contain Special Character Strings to
        # create unique file names.
        #
        # String  Converted to:
        # ======  =============
        # $EnvVar The value of the specified Environment Variable
        #         Do NOT use the Windows %enviromment_variable% syntax!
        # ~u      Username
        # ~p      Port number
        # ~d      Internal date
        # ~t      Internal time
        # ~k      Creates a unique Key
        # ~m      Month number (1 to 12)
        # ~h      Hostname
        # ~s      Directory separator ("/" or "\" depending on platform)
        # ~~      A literal "~" (a single "~" is ignored)
        # All other characters are taken literally
        #   {"name": "JFILESAVE_DEVICE", "value": "$JBCDATADIR~sBACKUPSs~sDAILY_~d"},
        #
        # JFILESAVE_STATFILE is used with the JFILESAVE command. It defines the full path
        # to where the backup statistics are stored. It can contain Special Character Strings
        # to create unique file names in the same manner as JFILESAVE_DEVICE.
        #   {"name": "JFILESAVE_STATFILE", "value": "$JBCDATADIR~sSTATSs~sDAILY_~d"},
        #
        # Z_DISABLE_QUEUEING allows background tasks started with Z or ZH to run concurrently.
        #   {"name": "Z_DISABLE_QUEUEING", "value": "1"},
        #
        ######################################################################################
        # TERMINAL ENVIRONMENT VARIABLES
        ######################################################################################
        #
        # JBC_INVERT_ALPHA_CHARS can be set to cause the case of characters entered with the jBC
        # INPUT statement to be inverted.
        #   {"name": "JBC_INVERT_CHARS", "value": "1"},
        #
        # JBCECHO set to force echo on
        #   {"name": "JBCECHO", "value": "1"},
        #
        # JBCPRISM set to force hard coded Prism sequences (Windows only)
        #   {"name": "JBCPRISM", "value": "1"},
        #
        # JBC_STDERR set to redirect stderr to stdout when EXECUTE command
        #   {"name": "JBC_STDERR", "value": "1"},
        #
        ######################################################################################
        # QUERY ENVIRONMENT VARIABLES (jQL / jSQL / Embedded SQL
        ######################################################################################
        #
        # JBCDEFDICTS is used by jQL to locate dictionary items not found in the dictionary of
        # the queiried file. If not set, jQL scans the dictionary of the queried file, then the
        # MD or VOC.
        #   {"name": "JBCDEFDICTS", "value": "<list of dictionary paths>"},
        #
        # JSQLFILENAME_CATALOG defines the file used by SQL queries to a jBASE database to
        # expose regular jBASE files/dictionaries as tables/columns for either local or
        # remote (ODBC) SQL queries. The file can be a jBASE hashed file or a directory, as
        # long as it's location is in JEDIFILEPATH.
        #   {"name": "JSQLFILENAME_CATALOG", "value": "<catalog file name>"},
        #
        # JBC_SQLLIBS sets alternate SQL libraries for embedded SQL
        #   {"name": "JBC_SQLLIBS", "value": "<libs>"},
        #
        # JBC_SQLPREPROC sets alternate SQL pre-compiler command
        #   {"name": "JBC_SQLPREPROC", "value": "<command>"},
        #
        # JBC_SQLFIXEDLEN set to use fixed length types for char input strings
        #   {"name": "JBC_SQLFIXEDLEN", "value": "1"},
        #
        # JDLS is used to configure the jBASE Distributed Lock Service. Options are:
        # {SERVER=hostname:port}, {SERVER2=hostname:port}, {VERBOSE}, {WAIT},
        # {TRACE=filename}, {BINARY}, {TIMEOUT=secs}, {LOCK=EXTERNAL|INTERNAL|ALL}
        #   {"name": "JDLS", "value": "<options>"},
        #
        ######################################################################################
        # ERROR HANDLING ENVIRONMENT VARIABLES
        ######################################################################################
        #
        # JBCERRFILE defines the location of the jBASE error message file.
        #   {"name": "JBCERRFILE", "default": "<path to a hashed file>"},
        #
        # JBASE_ERRMSG_TRACE enables logging jBASE messages to the %JBCGLOBALDIR%\tmp\jbase_error_trace
        # file. Errors are appended to this file. Set this variable to 1 to enable this function.
        #   {"name": "JBASE_ERRMSG_TRACE", "value": "1"},
        #
        # JBASE_EMU_ENHANCED_LOGGING enables enhanced runtime error logging to the
        # %JBCGLOBALDIR%\runtime-errors directory. Each error is stored as a text file in this directory.
        # Set this variable to 1 to enable this function. Note: this overrides JBASE_ERRMSG_TRACE.
        #   {"name": "JBASE_EMU_ENHANCED_LOGGING", "value": "1"},
        #
        # JBASE_ERRMSG_XXXX is used to define the behavior when specific runtime errors
        # occur. The runtime errors can be found in %JBCRELEASEDIR%\jbcmessages file. Common
        # runtime errors are shown belose. The value for each of these variables is a bitmask:
        #  1 = don't display an error message
        #  2 = don't enter the debugger
        #  16 = caller to place 0 in the target variable after operation
        #  32 = caller to place "" (null) in the target variable after operation
        #  64 = caller to leave target variable alone after operation
        #  128 = caller to place source variable in target variable after operation
        #
        # JBASE_ERRMSG_DIVIDE_ZERO - issued when a program performs a "divide by zero".
        # The default behavior is to raise an error and drop into the debugger. To suppress
        # the message and avoid entering the debugger, set the value to "3".
        #   {"name": "JBASE_ERRMSG_DIVIDE_ZERO", "value": "3"},
        #
        # JBASE_ERRMSG_NON_NUMERIC - issued when a program performs a numeric operation on
        # a non-numeric value. The default behavior is to raise an error and drop into the
        # debugger. To suppress the message and avoid entering the debugger, set the value to "3".
        #   {"name": "JBASE_ERRMSG_NON_NUMERIC", "value": "3"},
        #
        # JBASE_ERRMSG_ZERO_USED - issued when a program encounters an unassigned variable. The
        # default behavior is to raise an error and drop into the debugger. To suppress the
        # message and avoid entering the debugger, set the value to "3".
        #   {"name": "JBASE_ERRMSG_ZERO_USED", "value": "3"},
        #
        ######################################################################################
        # JRFS ENVIRONMENT VARIABLES
        ######################################################################################
        #
        # JBCNETACCESS specifies the location of the jRFS security access file.
        #   {"name": "JBCNETACCESS", "value": "<security access file>",
        #
        # JBCNETDIR specifies the location of the jRFS configuration files.
        #   {"name": "JBCNETDIR", "value": "<path to jRFS config directory>"},
        #
        # JRFS_REMOTE_JQL set to 1 to allow jQL to be executed remotely.
        #   {"name": "JRFS_REMOTE_JQL", "value": "1"},
        #
        # JRFS_LOCALPATH_JQL set to 1 to allow remote pointer to have a different
        # name than the remote file.
        #   {"name": "JRFS_LOCALPATH_JQL", "value": "1"},
        #
        # JRFS_SERVERNAME allows the jRFS client to override the service port.
        #   {"name": "JRFS_SERVERNAME", "value": "<alternate service name>"},
        #
        # JRFS_HOSTNAME allows the jRFS client to override the target host.
        #   {"name": "JRFS_HOSTNAME", "value": "<target host>"},
        #
        # JRFS_USEBASE_LOCKS (TODO)
        # JRFS_LOCAL_TRANSACTIONS (TODO)
        #
        ######################################################################################
        # INTERNATIONALIZATION ENVIRONMENT VARIABLES
        ######################################################################################
        #
        # LANG specifies the language type (Linux and AIX only).
        #   {"name": "LANG", "value": "<language>"},
        #
        # JBASE_LOCALE sets the locale for UTF8, sorting and data collation sequences. It is
        # required for use with internationalization and should also be set when using jBASE
        # secondary indexes. Set to any valid locale. Use 'jlocales' command for a list of
        # supported locales.
        {
            "name": "JBASE_LOCALE", 
            "value": "en_GB"
        },
        #
        # JBASE_TIMEZONE indicates the timezone for UTF8 timestamp conversion into local
        # time for display. Set to any valid timezone. Use 'jtimezones' command for a list
        # of supported timezone values.
        {
            "name": "JBASE_TIMEZONE", 
            "value": "GB"
        },
        #
        # JBASE_DATE_FORMAT specifies the format of how dates are converted to/from internal
        # and external date representations. Values are 1=international (dd mm yyyy), 2=USA
        # (mm dd yyyy), 3=Japanese (yyyymmdd).
        #   {"name": "JBASE_DATE_FORMAT", "value": "1"},
        #
        # JBASE_I18N set to 1 to enable international mode. In international mode, jBASE expects
        # strings to be UTF-8 and handles character operations like LEN on a character, rather
        # than byte, basis.
        #   {"name": "JBASE_I18N", "value": "1",
        #
        # JBASE_CODEPAGE sets the code page used for conversion to and from UTF-8 on input
        # and output. Use 'jcodepages' command to display a list of available code pages.
        # The JBASE_CODEPAGE variable is only applicable when the JBASE_I18N environment
        # variable is also set.
        #   {"name": "JBASE_CODEPAGE", "value": "<codepage>"},
        #
        ######################################################################################
        #
        {
            "name":"JBCSPOOLERDIR",
            "default":"%JBCDATADIR%\\jspooler"
        }
    ],
    "licenses":{
        #
        ######################################################################################
        #
        # jBASE license keys
        #
        ######################################################################################
        #
        "runtime":"qP2XhdjqbdbiqzvfDBgPisP3ITiDfhyT",
        "eval":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "multisession":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx="
    },
    "installation_options":{
        "installation_path":"C:\\jBASE5\\5.8.3",
        "symlink":"C:\\jBASE5\\CurrentVersion",
        "jdls_options":"port",
        "telnet_options":"true",
        "jrcs_options":"true",
        "create_system_file":"true",
        "spooler_options":"true",
        "create_admin_user":"true",
        "admin_user":"jBASEAdmin",
        "create_admin_account":"true",
        "jbaseadmdir":"C:\\jBASE5\\jBASEAdmin"
    }
}

```

Back to [Unattended Installs](./../README.md)

<PageFooter />
