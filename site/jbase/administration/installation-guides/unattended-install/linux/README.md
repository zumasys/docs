# Unattended jBASE 5.8 install on Linux

<PageHeader />

## What is needed

On Linux, with a jBASE installer and a jbase_config.json file containing our proposed jBASE configuration, we can start an unattended install:

```bash
[zumasys@cranfield tmp]$ ls -la
total 57640
drwxrwxrwt. 21 root  root      4096 Sep  1 11:50 .
dr-xr-xr-x. 18 root  root      4096 Sep  1 11:50 ..
drwx------.  2 mikes mikes       19 Sep  1 10:34 .esd-1000
drwxrwxrwt.  2 root  root         6 Aug 21  2020 .font-unix
drwxr-xr-x.  2 root  root        17 Aug 31 15:25 hsperfdata_root
drwxrwxrwt.  2 root  root        83 Sep  1 10:34 .ICE-unix
-rw-r--r--.  1 root  root     25742 Sep  1 11:37 jbase_config.json
-rw-r--r--.  1 root  root  58969139 Aug 31 15:23 Linux_jBASE_5.8.3_948d8070_64bit.bin

..snip..

-r--r--r--.  1 root  root        11 Sep  1 10:34 .X0-lock
drwxrwxrwt.  2 root  root        15 Sep  1 10:34 .X11-unix
drwxrwxrwt.  2 root  root         6 Aug 21  2020 .XIM-unix
```

Change the properties of the jBASE Linux installer to make it executable, and then we can get started:

```bash
[zumasys@cranfield tmp]$ sudo chmod u+x Linux_jBASE_5.8.3_948d8070_64bit.bin
[sudo] password for zumasys:
[zumasys@cranfield tmp]$ sudo ./Linux_jBASE_5.8.3_948d8070_64bit.bin -- unattended config=jbase_config.json log=install.log
```

From here, the jBASE installer will continue on its own, using the parameters set in the jbase_config.json file:

```bash
Verifying archive integrity...  100%   CRC checksums are OK. All good.
Uncompressing jBASE Linux Installer  100%

Checking for required dependencies...

ksh package already installed.

ncurses-devel package already installed.

ncurses-compat-libs package not required.

Installing dependency "OpenSSL"...
Loaded plugins: fastestmirror, langpacks
epel-release-latest-7.noarch.rpm                                                                                                                             |  15 kB  00:00:00
Examining /var/tmp/yum-root-FAFkBA/epel-release-latest-7.noarch.rpm: epel-release-7-13.noarch
Marking /var/tmp/yum-root-FAFkBA/epel-release-latest-7.noarch.rpm to be installed
Resolving Dependencies
--> Running transaction check
---> Package epel-release.noarch 0:7-13 will be installed
--> Finished Dependency Resolution
base/7/x86_64                                                                                                                                                | 3.6 kB  00:00:00
extras/7/x86_64                                                                                                                                              | 2.9 kB  00:00:00
updates/7/x86_64                                                                                                                                             | 2.9 kB  00:00:00
updates/7/x86_64/primary_db                                                                                                                                  |  10 MB  00:00:01

Dependencies Resolved

====================================================================================================================================================================================
 Package                                   Arch                                Version                             Repository                                                  Size
====================================================================================================================================================================================
Installing:
 epel-release                              noarch                              7-13                                /epel-release-latest-7.noarch                               25 k

Transaction Summary
====================================================================================================================================================================================
Install  1 Package

Total size: 25 k
Installed size: 25 k
Downloading packages:
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Installing : epel-release-7-13.noarch                                                                                                                                         1/1
  Verifying  : epel-release-7-13.noarch                                                                                                                                         1/1

Installed:
  epel-release.noarch 0:7-13

Complete!
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
epel/x86_64/metalink                                                                                                                                         |  33 kB  00:00:00
 * base: mirror.freethought-internet.co.uk
 * epel: mirror.freethought-internet.co.uk
 * extras: mirror.freethought-internet.co.uk
 * updates: mirror.cwcs.co.uk
epel                                                                                                                                                         | 4.7 kB  00:00:00
(1/3): epel/x86_64/group_gz                                                                                                                                  |  96 kB  00:00:00
(2/3): epel/x86_64/updateinfo                                                                                                                                | 1.0 MB  00:00:00
(3/3): epel/x86_64/primary_db                                                                                                                                | 6.9 MB  00:00:01
Resolving Dependencies
--> Running transaction check
---> Package openssl11-libs.x86_64 1:1.1.1g-3.el7 will be installed
--> Finished Dependency Resolution

Dependencies Resolved

====================================================================================================================================================================================
 Package                                        Arch                                   Version                                           Repository                            Size
====================================================================================================================================================================================
Installing:
 openssl11-libs                                 x86_64                                 1:1.1.1g-3.el7                                    epel                                 1.5 M

Transaction Summary
====================================================================================================================================================================================
Install  1 Package

Total download size: 1.5 M
Installed size: 3.6 M
Downloading packages:
warning: /var/cache/yum/x86_64/7/epel/packages/openssl11-libs-1.1.1g-3.el7.x86_64.rpm: Header V4 RSA/SHA256 Signature, key ID 352c64e5: NOKEY     ]  0.0 B/s |    0 B  --:--:-- ETA
Public key for openssl11-libs-1.1.1g-3.el7.x86_64.rpm is not installed
openssl11-libs-1.1.1g-3.el7.x86_64.rpm                                                                                                                       | 1.5 MB  00:00:00
Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
Importing GPG key 0x352C64E5:
 Userid     : "Fedora EPEL (7) <epel@fedoraproject.org>"
 Fingerprint: 91e9 7d7c 4a5e 96f1 7f3e 888f 6a2f aea2 352c 64e5
 Package    : epel-release-7-13.noarch (@/epel-release-latest-7.noarch)
 From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Installing : 1:openssl11-libs-1.1.1g-3.el7.x86_64                                                                                                                             1/1
  Verifying  : 1:openssl11-libs-1.1.1g-3.el7.x86_64                                                                                                                             1/1

Installed:
  openssl11-libs.x86_64 1:1.1.1g-3.el7

Complete!
openssl11-libs package installed.

openssl11-libs package already installed.

gcc package already installed.

Initializing the installation environment and checking
for previous jBASE installations...


Shutting down jBASE daemons...


Preparing to install jBASE...


Creating jBASE release directory /opt/jbase5/5.8.3...

Copying jBASE release files into /opt/jbase5/5.8.3...

Finishing jBASE installation...

Installation completed successfully
Remember to set a password for 'jbase'.

Check firewall rules to ensure jRCS port 8236 is open.

SELinux is enabled and may interfere with critical jBASE services.
```

We can then log into the account that has been created and confirm that jBASE is correctly configured and licensed:

```bash
jsh jbaseadmin ~ -->jdiag
        jdiag - jBASE diagnostic '$Revision: 1.15 $'

System Information
==================

System                      : Linux cranfield.jinternal.com 3.10.0-1160.36.2.el7.x86_64.#1 SMP Wed Jul 21 11:57:15 UTC 2021 x86_64
OS Release                  : CentOS Linux release 7.9.2009 (Core)
UNIX User                   : zumasys (uid 1001, euid 1001)
Tty name                    : /dev/pts/2
Time                        : Wed Sep  1 11:52:17 2021

Environment
===========

jBASE configuration file    : '/opt/jbase5/global/config/jbase_config.json'
JBCPORTNO                   : '400-5000'
JBCRELEASEDIR               : '/opt/jbase5/5.8.3'
JBCGLOBALDIR                : '/opt/jbase5/global'
JBCDATADIR                  : '/jbasedata'
HOME                        : '/jbasedata/jbaseadmin'
JEDIFILEPATH                : '/jbasedata/jbaseadmin'
JEDIFILENAME_MD             : '/jbasedata/jbaseadmin/MD'
MD file is (DICT)           : '/jbasedata/jbaseadmin/MD]D'
JEDIFILENAME_SYSTEM         : '/jbasedata/SYSTEM]D'
RELEASE Information         : Major 5.8 , Minor 3 , Tue Jun 29 13:45:13 2021 , Patch 948d8070 (Change 25007)
Spooler dir (JBCSPOOLERDIR) : '/jbasedata/jspooler'
JBCEMULATE                  : 'jbase'
Object path (JBCOBJECTLIST) : '/jbasedata/jbaseadmin/lib'
jBASE Compiler Run-time     : '/opt/jbase5/5.8.3/config/system.properties'
Program dir (JBCDEV_BIN)    : '/jbasedata/jbaseadmin/bin'
Subroutine dir (JBCDEV_LIB) : '/jbasedata/jbaseadmin/lib'
Max open files              : 1024
There are No warnings, jBASE seems to be loaded correctly

jsh jbaseadmin ~ -->jlicensinginfo -V
jBASE: Warning: The JBC_CORE_DUMP variable requests a core dump on error,
   but the value of 'ulimit -c' is zero, meaning no core dump will be produced.
To prevent this warning, change 'ulimit -c' or
   add 'nowarning' to the JBC_CORE_DUMP environment variable

General information
  License Type                   5 (Evaluation)
  Total Standard Licenses        10
  CPU License count              Disabled
  CPUs online (configured)       2 (2)

  Actual free   standard         9
  Actual used   standard         1
  multisession                   0
  websession                     0
  Expiry date                    Fri Aug  5 01:00:01 2022

Num. multisession licenses      10 (Max 10 connections per session)
  Total 0 license(s) used out of 10

User Slot Information
  Revision 1, size 2097408, max user 8192, peak slot used 3
  Slot  Port     PID          Time Started           Time Thread            Ages          Lic? Back? Thread Type License Type  Client Host
  ----  ----     ---          ------------           -----------            ----          ---- ----- ----------- ------------  -----------
  0     400      22537        Sep  1 11:52:12 2021   Sep  1 11:52:50 2021   1    39       Y    N     Normal      Standard      msft-5-0-10-65-30-4b-d9-2f.home
**1     401      22583        Sep  1 11:52:51 2021                          0    0        N    N     Normal      Unlicensed    msft-5-0-10-65-30-4b-d9-2f.home
  2     5000     22413        Sep  1 11:50:35 2021   Sep  1 11:52:50 2021   1    136      Y    Y     Normal      Unlicensed    cranfield.jinternal.com

Total of 3 slots found distributed as follows:
  1 licensed
  1 unlicensed
  1 background (unlicensed)

```

### Appendix

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
        #   {"name": "JBCSPOOLERDIR", "default": "$JBCDATADIR/jspooler"}
        #
        ######################################################################################
        # INITIAL ENVIRONMENT VARIABLES
        ######################################################################################
        #
        # JBCRELEASEDIR defines the release directory for the jBASE system
        # executables and libraries. Normally, it is automatically set based on the
        # jBASE installation directory.
        {
        		"name": "JBCRELEASEDIR", 
        		"value": "/opt/jbase5/5.8.3"},
        #
        # JBCGLOBALDIR defines the directory for jBASE global files. Normally, it is
        # set by the initial configuration read from $JBCRELEASEDIR/config/jbase_config.json.
        {
            "name":"JBCGLOBALDIR",
            "value":"/opt/jbase5/global"
        },
        #
        # JBCDATADIR defines the location for jBASE to determine any configured
        # databases. It is the default location for the SYSTEM file and for new
        # accounts created by the CREATE-ACCOUNT command.
        {
            "name":"JBCDATADIR",
            "value":"/jbasedata"
        },
        #
        # PATH contains a list of all directories that contain executable programs.
        # At a minimum, this should contain the shell default values plus the path
        # of the jBASE bin directory.
        {
            "name":"PATH",
            "value":"$JBCRELEASEDIR/bin:$PATH"
        },
        #
        # LD_LIBRARY_PATH is only valid on Linux, and must include the jBASE lib directory.
        {
            "name":"LD_LIBRARY_PATH",
            "value":"$JBCRELEASEDIR/lib:$LD_LIBRARY_PATH"
        },
        #
        # LIBPATH is only valid on AIX, and must include the jBASE lib directory.
        {
            "name":"LIBPATH",
            "value":"$JBCRELEASEDIR/lib:$LIBPATH"
        },
        #
        # HOME is the path of the user's home directory. Many defaults rely on this variable.
        # NOTE: this variable is normally set by the user's profile and is not in the jBASE
        # system configuration.
        #   {"name": "HOME", "value": "<path to user's home directory>"},
        #
        # TERM sets the terminal type, and should match a definition in the Linux
        # or AIX terminfo database. On Windows, it should match definition found in
        # the $JBCRELEASEDIR/misc directory (not including the "_jbase" suffix".
        # Most terminal emulators will set this based on the emulator's settings.
        #   {"name": "TERM", "default": "vt100"},
        #
        # JBCPORTNO defines the current port number and is useful when a particular user
        # wishes to keep the same port number whenever they log on.
        {
            "name":"JBCPORTNO",
            "value":"400-5000"
        },
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
            "default":"$JBCDATADIR/SYSTEM]D"
        },
        #
        ######################################################################################
        # EXECUTION ENVIRONMENT VARIABLES
        ######################################################################################
        #
        # JBCOBJECTLIST defines the directories to find user shared object libraries
        # where user subroutines are located.
        #   {"name": "JBCOBJECTLIST", "default": "$HOME/lib"},
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
        # programs are CATALOGed. Default is $HOME/bin.
        #   {"name": "JBCDEV_BIN", "default", "<path to dev bin>"},
        #
        # JBCDEV_LIB defines the directory where user shared object libraries will be built
        # when programs are CATALOGed. Default is $HOME/lib.
        #   {"name": "JBCDEV_LIB", "default", "<path to dev lib>"},
        #
        # JBC_INCLUDE_PATH contains a list of directories the compiler searches through
        # when an INCLUDE statement is seen in a program.
        #   {"name": "JBC_INCLUDE_PATH", "value": "$HOME/myincludes:/home/globals/includes"},
        #
        # JBC_INCLUDE_FILE contains a list of source code files that will automatically be
        # compiled prior to compiling the current program.
        #   {"name": "JBC_INCLUDE_FILE", "value": "$HOME/BP COMMON:$JBCRELEASEDIR/include/jabba.h"},
        #
        # JELF instructs the CATALOG command to create a separate shared object (.so) for each
        # subroutine. Set JELF=1 to enable this functionality. Optionally append other options to
        # the value, separated by commas:
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
        {
        		"name": "JBC_CORE_DUMP", 
        		"value": "all"
        },
        #
        # NOTE: $JBCRELEASEDIR/config/system.properties contains settings used by the C
        # compiler and linker, and includes PATH, INCLUDE and LIB paths.
        #
        ######################################################################################
        # MISCELLANEOUS ENVIRONMENT VARIABLES
        ######################################################################################
        #
        # JBASEUNIQUE is used to define the directory where jBASE dynamically creates work files
        # based on port number. The work files are created as $JBASEUNIQUE/jBASEWORK_portno.
        #   {"name": "JBASEUNIQUE", "value": "<path to workfile directory>"},
        #
        # JBCSPOOLERDIR specifies the directory where jBASE spooler entries are located.
        # The default is $JBCDATADIR/jspooler.
        #   {"name": "JBCSPOOLERDIR", "value": "$JBCDATADIR/jspooler"},
        #
        # JBC_SPOOLER_PORT_BASE specifies the base port used by spooler processes jlp and jspprint.
        # The default range is 5000-6000.
        {
            "name":"JBC_SPOOLER_PORT_BASE",
            "value":"5000"
        },
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
        # if not found, $JBCRELEASEDIR/tmp/jBASEWORK.
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
        # lock files are located. Default is $JBCGLOBALDIR/config.
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
        # JBASE_ERRMSG_TRACE enables logging jBASE messages to the $JBCGLOBALDIR/tmp/jbase_error_trace
        # file. Errors are appended to this file. Set this variable to 1 to enable this function.
        #   {"name": "JBASE_ERRMSG_TRACE", "value": "1"},
        #
        # JBASE_EMU_ENHANCED_LOGGING enables enhanced runtime error logging to the
        # $JBCGLOBALDIR/runtime-errors directory. Each error is stored as a text file in this directory.
        # Set this variable to 1 to enable this function. Note: this overrides JBASE_ERRMSG_TRACE.
        #   {"name": "JBASE_EMU_ENHANCED_LOGGING", "value": "1"},
        #
        # JBASE_ERRMSG_XXXX is used to define the behavior when specific runtime errors
        # occur. The runtime errors can be found in $JBCRELEASEDIR/jbcmessages file. Common
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
        # JBCNETDIR	specifies the location of the jRFS configuration files.
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
            "name":"JBASE_LOCALE",
            "value":"en_GB"
        },
        #
        # JBASE_TIMEZONE indicates the timezone for UTF8 timestamp conversion into local
        # time for display. Set to any valid timezone. Use 'jtimezones' command for a list
        # of supported timezone values.
        {
            "name":"JBASE_TIMEZONE",
            "value":"GB"
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
            "default":"$JBCDATADIR/jspooler"
        }
    ],
    #
    ######################################################################################
    #
    # Setting 'umask' when loading jBASE is optional. Set this to the same (octal) value
    # as used in the Linux umask command.
    "umask":"0002",
    #
    ######################################################################################
    #    
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
    "installation_options" :
    {
      "installation_path":"/opt/jbase5/5.8.3",
      "symlink":"/opt/jbase5/CurrentVersion",
      "jdls_options":"port",
      "telnet_options":"true",
      "jrcs_options":"true",
      "create_system_file":"true",
      "spooler_options":"true",
      "create_admin_user":"true",
      "admin_user":"jbase",
      "admin_group":"jbase",
      "create_admin_account":"true",
      "jbaseadmdir":"/jbasedata/jbaseadmin"
    }
}
```

## Note

>Conventional jBASE license keys can be installed in this manner  
>In this example, we have changed some additional installer defaults to suit our preferences.

See [Installation Options](./../installation-options/README.md)

## Log files

Here is an example of the log file which is created by the unattended install:

```bash
[zumasys@cranfield tmp]$ cat install.log
ksh package already installed.
ncurses-devel package already installed.
ncurses-compat-libs package not required.
Installing dependency "OpenSSL"...
openssl11-libs package installed.
openssl11-libs package already installed.
gcc package already installed.
Initializing the installation environment and checking
for previous jBASE installations...
jbasesetup: phase=init target= xit=0
initial setup defaults:
DFLT_RELEASEDIR=/opt/jbase5/5.8.3
RELEASE=5.8.3
MAINDIR=/opt/jbase5
DFLT_GLOBALDIR=/opt/jbase5/global
DFLT_DATADIR=/jbasedata
DFLT_SYSTEM=/jbasedata/SYSTEM]D
DFLT_SPOOLERDIR=/jbasedata/jspooler
DFLT_ADMINDIR=/jbasedata/jbaseadmin
DFLT_SYMLINK=/opt/jbase5/CurrentVersion
PREV_JDLS_OPTIONS=port
DFLT_JDLS_OPTIONS=port
PREV_TELNET_OPTIONS=true
DFLT_TELNET_OPTIONS=true
PREV_JRCS_OPTIONS=8236
DFLT_JRCS_OPTIONS=8236
PREV_SPOOLER_OPTIONS=true
DFLT_SPOOLER_OPTIONS=true
PREV_CREATE_ADMIN_USER=true
DFLT_CREATE_ADMIN_USER=true
PREV_CREATE_ADMIN_ACCOUNT=true
DFLT_CREATE_ADMIN_ACCOUNT=true
PREV_CREATE_SYSTEM_FILE=true
DFLT_CREATE_SYSTEM_FILE=true
PREV_ADMIN_USER=jbase
DFLT_ADMIN_USER=jbase
PREV_ADMIN_GROUP=jbase
DFLT_ADMIN_GROUP=jbase
Shutting down jBASE daemons...
jbasesetup: phase=stop target= xit=0
environment reset prefix: export HOME="/root";unset JBASE_DATABASE;unset JBASE_DISABLE_DEVELOPER_LICENSE_WARNING;unset JBASE_LOCALE;unset JBCBASETMP;unset JBCDATADIR;unset JBCDEV_B
IN;unset JBCDEV_LIB;unset JBCEMULATE;unset JBCERRFILE;unset JBCGLOBALDIR;unset JBCLKFILE;unset JBCLOGNAME;unset JBCOBJECTLIST;unset JBCPAUSEFILE;unset JBCPORTNO;unset JBCRELEASEDIR
;unset JBCSPOOLERDIR;unset JEDIENABLEQ2Q;unset JEDIFILENAME_MD;unset JEDIFILENAME_SYSTEM;unset JEDIFILEPATH;unset JEDI_POSTFILEOP;unset JEDI_PREFILEOP;unset LD_LIBRARY_PATH;unset L
IBPATH;unset MINIJBASE;export PATH="/sbin:/bin:/usr/sbin:/usr/bin";export SHLVL="2";export TERM="vt220";unset A__z;export _INSTALL_RELEASE="5.8.3";export _INSTALL_CHANGE="25007";ex
port _INSTALL_LOG="/tmp/install.log";export _INSTALL_CONFIG="/tmp/jbase_config.json";
Preparing to install jBASE...
jbasesetup: phase=pre target= xit=0
Finished preparing for install
Creating jBASE release directory /opt/jbase5/5.8.3...
Copying jBASE release files into /opt/jbase5/5.8.3...
Finishing jBASE installation...
Group 'jbase' already exists.
Ready to create directories using:
{
    "DFLT_RELEASEDIR":"/opt/jbase5/5.8.3",
    "RELEASE":"5.8.3",
    "MAINDIR":"/opt/jbase5",
    "DFLT_GLOBALDIR":"/opt/jbase5/global",
    "DFLT_DATADIR":"/jbasedata",
    "DFLT_SYSTEM":"/jbasedata/SYSTEM]D",
    "DFLT_SPOOLERDIR":"/jbasedata/jspooler",
    "DFLT_ADMINDIR":"/jbasedata/jbaseadmin",
    "DFLT_SYMLINK":"/opt/jbase5/CurrentVersion",
    "PREV_JDLS_OPTIONS":"port",
    "DFLT_JDLS_OPTIONS":"port",
    "PREV_TELNET_OPTIONS":"true",
    "DFLT_TELNET_OPTIONS":"true",
    "PREV_JRCS_OPTIONS":8236,
    "DFLT_JRCS_OPTIONS":8236,
    "PREV_SPOOLER_OPTIONS":"true",
    "DFLT_SPOOLER_OPTIONS":"true",
    "PREV_CREATE_ADMIN_USER":"true",
    "DFLT_CREATE_ADMIN_USER":"true",
    "PREV_CREATE_ADMIN_ACCOUNT":"true",
    "DFLT_CREATE_ADMIN_ACCOUNT":"true",
    "PREV_CREATE_SYSTEM_FILE":"true",
    "DFLT_CREATE_SYSTEM_FILE":"true",
    "PREV_ADMIN_USER":"jbase",
    "DFLT_ADMIN_USER":"jbase",
    "PREV_ADMIN_GROUP":"jbase",
    "DFLT_ADMIN_GROUP":"jbase",
    "INSTALL_TYPE":"unattended",
    "JBCRELEASEDIR":"/opt/jbase5/5.8.3",
    "JBCGLOBALDIR":"/opt/jbase5/global",
    "JBCDATADIR":"/jbasedata",
    "SYMLINK":"/opt/jbase5/CurrentVersion",
    "CREATE_ADMIN_USER":"True",
    "ADMIN_USER":"jbase",
    "ADMIN_PSWD":"",
    "ADMIN_GROUP":"jbase",
    "CREATE_ADMIN_ACCOUNT":"True",
    "CREATE_SYSTEM_FILE":"True",
    "SPOOLER_OPTIONS":"True",
    "JRCS_OPTIONS":"8236",
    "JDLS_OPTIONS":"port",
    "INSTALL_MODE":0,
    "USING_GLOBAL_DIR":1,
    "JBCSPOOLERDIR":"/jbasedata/jspooler",
    "COPY_PREV_SPOOLER_CONFIG":0,
    "JEDIFILENAME_SYSTEM":"/jbasedata/SYSTEM]D",
    "COPY_PREV_SYSTEM_FILE":0,
    "JBASEADMDIR":"/jbasedata/jbaseadmin"
}
Created symbolic link '/opt/jbase5/CurrentVersion'
Installed jBASE services target (jBASE.target)
Installed jDLS service (jDLS.service)
Installed jRCS service (jRCS.service)
Added jrcsd PAM configuration to pam.d
Installed jSPOOL service (jSPOOL.service)
Installed jRFS service (jRFS.service)
Installed jAgent service (jAgent.service)
systemctl daemon-reload: OK
systemctl enable jDLS.service: OK
systemctl enable jRCS.service: OK
systemctl enable jSPOOL.service: OK
systemctl start jBASE.target OK
systemctl enable jBASE.target OK
environment reset prefix: export HOME="/root";unset JBASE_DATABASE;unset JBASE_DISABLE_DEVELOPER_LICENSE_WARNING;unset JBASE_LOCALE;unset JBCBASETMP;unset JBCDATADIR;unset JBCDEV_B
IN;unset JBCDEV_LIB;unset JBCEMULATE;unset JBCERRFILE;unset JBCGLOBALDIR;unset JBCLKFILE;unset JBCLOGNAME;unset JBCOBJECTLIST;unset JBCPAUSEFILE;unset JBCPORTNO;unset JBCRELEASEDIR
;unset JBCSPOOLERDIR;unset JEDIENABLEQ2Q;unset JEDIFILENAME_MD;unset JEDIFILENAME_SYSTEM;unset JEDIFILEPATH;unset JEDI_POSTFILEOP;unset JEDI_PREFILEOP;unset LD_LIBRARY_PATH;unset L
IBPATH;unset MINIJBASE;export PATH="/sbin:/bin:/usr/sbin:/usr/bin";export SHLVL="2";export TERM="vt220";unset A__z;export _INSTALL_RELEASE="5.8.3";export _INSTALL_CHANGE="25007";ex
port _INSTALL_LOG="/tmp/install.log";export _INSTALL_CONFIG="/tmp/jbase_config.json";
jBASE is functional
Successfully registered this jBASE installation
Successfully created SYSTEM file.
jbasesetup: phase=post target= xit=0
Spooler initialized.
Installation completed successfully
Remember to set a password for 'jbase'.

Check firewall rules to ensure jRCS port 8236 is open.

SELinux is enabled and may interfere with critical jBASE services.
[zumasys@cranfield tmp]$
```

Back to [Unattended Installs](./../README.md)

<PageFooter />
