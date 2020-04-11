# Working with jBASE License Keys

<PageHeader />

**Tags:**
<badge text='jlicenseupgrade' vertical='middle' />
<badge text='jlicense' vertical='middle' />
<badge text='license' vertical='middle' />
<badge text='jlicensinginfo' vertical='middle' />
<badge text='jinsallkey -v' vertical='middle' />

```
Document Scope
```

This document will describe the process of installing a license key over an already existing installation. This may be the case in the event of an upgrade, or change in the type of license desired.

## Description

Two methods will be described;

1. Editing the system.properties file.
2. Using the command line.

Since the key is being installed on a UNIX/LINUX system that already has a jBASE 5.x license installed, the existing shared memory needs to be reinitialized.

If desired, the memory information can be obtained as:

```
C:\Users\10147>jshminfo

Shared Memory Info,  Key 0x4a520064, Id 68
header size         1352,  Max 8192
Initialised         Fri Mar 23 08:33:53 2018
Revision            1
total_size_shm      412344
jdls table size     387768
size_cache_table    16384
jrla active         1,   Pid 2404 (Active)
jdls active         1,   Pid 2404 (Active)
time_stamp_active   0
jdls lock count     3020
jdls lock groups    151
jdls locks/group    20
jdls group size     2568 bytes (hdr 8, lock entry 128)
jdls semcount       32
jdls sem Key        0x4a520064, Id  1246888036, 1246888037
```

If processes are not stopped prior to attempting to install/upgrade a license, the shared memory with the original license configuration will still persist. For this reason, all jBASE processes must be stopped so that the shared memory does not have any attached users.

Once this is done you can install the new license key and restart jBASE.  A reboot will accomplish the same thing.

### Editing the system.properties file

jBASE License information is stored in the 'system.properties' file located in '%JBCRELEASEDIR%\config' on Windows and in '$JBCRELEASEDIR/config' on UNIX/LINUX systems.

Each system will have a 'jruntime.&lt;system name&gt;' key that controls standard jBASE functionality for the components that have been enabled for the system.

If a system has multi-session capability enabled then there will also be a second 'jruntime.multisession' key that controls the activity from client systems which have been enabled for multi-session access.

Both keys must exist in the 'system.properties' file for multi-session connections to be enabled.

It is recommended a copy of the file is kept prior to any alterations.

To install the license keys, insert the key as the last line in the 'system.properties' file, using a standard text editor such as 'Notepad' on Windows or 'vi' on UNIX/LINUX systems. Do not use 'jed or ED'.

Do not make any other changes to the 'system.properties' file. Particularly do not amend or remove the existing 'jruntime.license = whatever' line.

Once the key has been installed the last few lines of the 'system.properties' file should look something like this:

```
#################################################################

jruntime.license = qP2XhdjqbdbiqzvfDBgPisP3ITiDfhyT
jruntime.<system name> = <key information>
jruntime.multisession = <key information>
```

### Using the command line

## InstallKey command

The jInstallKey command will be useful in installing a license and overwriting the existing configuration of the system. A copy of the system.properties file may be kept, renames system.properties.old.

Say an upgrade from an evaluation to a permanent license is desired, the command would be as :

```
jInstallKey <Perm Licence key>
```

An example of use  may be as:

```
C:\Users\jbaseadm>jInstallKey -s  9/ojj9xHmkVw6ki7+tDymNZcn7yLcqtQE4+M1YsYxWg=

This will install a new license and reset any existing settings.
Ensure that ALL other jBASE users are logged off.

Saving C:\jBASE\CurrentVersion\config\system.properties to C:\jBASE\CurrentVersion\config\system.properties.old

Licence Code installed successfully.
```

## jLicenseUpgrade command

The jLicenseUpgrade command, with the -? argument will give the full range of options available for use with  the command.

Say for instance an upgrade from standard to multisession license is desired, the command would be as  :

```
  jLicenseUpgrade -a -m <multisession key>
```

An example of use may be as:

```
C:\Users\jbaseadm>jLicenseUpgrade -a -m 9/ojj9xHmkVw6CJ7+tDymA0hvvHN6D6pMdGxtsEn8xA=
Adding multisession key............

* [jruntime.multisession = 9/ojj9xHmkVw6CJ7+tDymA0hvvHN6D6pMdGxtsEn8xA=]
        Key type      [standard]
        Machine name  [jtest_svr]
        License type  [multi-session licence]
        Products      [unknown]
        Users         [unknown]
        Expiry date   [unknown]
        Change number [unknown]
        System        [unknown]

Resetting jBASE license shared memory....

General information
  License Type                   1 (Standard)
  Total Standard Licenses        2
  Actual free   standard         2
  Actual used   standard         0
  multisession                   0
  websession                     0
  Uname                          jtest_svr
Licensed products
  Runtime       Compiler      JAGENT        JRFS          JDBC          SERVER
  ODBC          JRFILE
Num. multisession licenses      2 (Max 10 connections per session)
  Total 0 license(s) used out of 2
Total of 2 slots found of which
  0 are licensed
  2 are unlicensed
  0 are background (unlicensed)
```

Once a jBASE license has been installed, its usage can be seen with the jlicensinginfo utility:

```
jlicensinginfo -h
Called as
    jlicensinginfo.exe: {-p} {-h} {-v}
Where
    -f   Show Free License Count
    -v   Verbose - show Slot Information detail.
    -V   Verbose - Very verbose
    -p   Verbose - Program readable mode.
    -h   Display Help
```

For example:

```
C:\Users\jbaseadm>jlicensinginfo -v

General information
  License Type                   1 (Standard)
  Total Standard Licenses        10

  Actual free   standard         10
  Actual used   standard         0
  multisession                   1
  websession                     0
  Uname                          jtest_svr

Licensed products
  Runtime       Compiler      JAGENT        TRANSLOG      JRFS          JDBC
  SERVER        ODBC          JRFILE        JRemoteC#     JRemoteJava

Num. multisession licenses      10 (Max 20 connections per session)
          JTEST_SVR                      1 connection(s) in-use
  Total 1 license(s) used out of 10

User Slot Information
  Revision 1, size 2097408, max user 8192, peak slot used 5
  Slot  Port     PID          Time Started           Time Thread            Ages          Lic? Back? Thread Type License Type
  ----  ----     ---          ------------           -----------            ----          ---- ----- ----------- ------------
  0     500      10832        Jun 04 08:44:05 2019   Jun 06 16:43:35 2019   4    201574   Y    Y     Normal      Unlicensed
  1     1        24436        Jun 06 15:06:26 2019   Jun 06 16:43:37 2019   2    5833     Y    N     Normal      MultiSession
**2     2        16416        Jun 06 16:43:39 2019                          0    0        N    N     Normal      Unlicensed

Total of 3 slots found of which
  1 are licensed
  1 are unlicensed
  1 are background (unlicensed)
```

### Info

The effects of the above processes (command line or properties file editing ) are best observed after restarting jBASE, or when shared memory has been reset using "jlicenseupgrade -r".

Back to [Installation Guides](./../README.md).

  
<PageFooter />
