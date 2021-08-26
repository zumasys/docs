# jdiag

<PageHeader />  

## Description

The **jdiag** utility is used to display information about your jBASE installation. It is useful in pin-pointing problem areas of the setup.

## Command Syntax

```
jdiag -options
```

## Options

### Explanation

| <!----> | <!----> |
| ---   | --- |
| -e    | display emulation settings (config-strings) |
| -d    | display disk drive information (Windows only). |
| -k    | display license key information. |
| -l    | copy output to log file jdiag.out. |
| -L    | output only to log file jdiag.out. |
| -m    | memory allocation test (4MB default). |
| -Mmem | use mem MV for the memory test. |
| -s    | display jBASE services information (Windows only). |
| -v    | verbose output. |  
| -w    | terse output (warnings only). |  

### Example

```
jsh SandBox ~ -->jdiag
        jdiag - jBASE diagnostic '$Revision: 1.15 $'

System Information
==================

System                      : Linux victoria.jinternal.com 4.18.0-240.10.1.el8_3.x86_64.#1 SMP Wed Dec 16 03:30:52 EST 2020 x86_64
OS Release                  : Red Hat Enterprise Linux release 8.3 (Ootpa)
UNIX User                   : zumasys (uid 1002, euid 1002)
Tty name                    : /dev/pts/3
jBASE User (JBCLOGNAME)     : SYSPROG
Time                        : Thu Jan 21 14:56:26 2021

Environment
===========

jBASE configuration file    : '/opt/jbase5/global/config/jbase_config.json'
JBCPORTNO                   : '400-5000'
JBCRELEASEDIR               : '/opt/jbase5/CurrentVersion'
JBCGLOBALDIR                : '/opt/jbase5/global'
JBCDATADIR                  : '/var/opt/jbase'
HOME                        : '/var/opt/jbase/SandBox'
JEDIFILEPATH                : '/var/opt/jbase/SandBox'
JEDIFILENAME_MD             : '/var/opt/jbase/SandBox/MD'
MD file is (DICT)           : '/var/opt/jbase/SandBox/MD]D'
JEDIFILENAME_SYSTEM         : '/var/opt/jbase/SYSTEM]D'
RELEASE Information         : Major 5.8 , Minor devel , Patch fa7f994e (Change 25001)
Spooler dir (JBCSPOOLERDIR) : '/var/opt/jbase/jspooler'
JBCEMULATE                  : 'jbase'
Object path (JBCOBJECTLIST) : '/var/opt/jbase/SandBox/lib'
jBASE Compiler Run-time     : '/opt/jbase5/CurrentVersion/config/system.properties'
Program dir (JBCDEV_BIN)    : '/var/opt/jbase/SandBox/bin'
Subroutine dir (JBCDEV_LIB) : '/var/opt/jbase/SandBox/lib'
Max open files              : 1024
There are No warnings, jBASE seems to be loaded correctly
```

Back to [Tools and Utilities](./../README.md)

<PageFooter />
