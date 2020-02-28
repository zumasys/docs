# Windows Telnet (telnetd.exe)

**Created At:** 4/19/2018 6:43:59 PM  
**Updated At:** 6/28/2019 11:24:35 AM  
**Original Doc:** [311280-windows-telnet-telnetd-exe](https://docs.jbase.com/30301-jbase/311280-windows-telnet-telnetd-exe)  
**Original ID:** 311280  
**Internal:** No  

## Description

After connecting to the telnetd service and giving your password you will be logged into the Windows system in a simple pass-through mode and be sitting at a normal Windows command shell. You may however change the startup program from cmd.exe to any jBASE program including the jsh.exe (jSHELL).

The jBASE telnetd service is supported on all jBASE supported Windows platforms, including Windows 7 Professional, Windows 2008 Server (64-bit), Windows 2012, Windows 2012 R2 (64-bit) and Windows 2016 (64-bit).

## Account Naming Issues

Windows account names can exist in several name spaces.  For example a Windows station in an Advanced Server domain has a local “Administrator” account and also has a corresponding “Administrator” account in its default domain.

jBASE TCP Remote Logon Services use the following rules to disambiguate account names:

- If the account name is qualified (contains a backslash), the name preceding the backslash is first treated as a domain name, if there is no corresponding domain, then it is treated as a machine name. (Example: “MainDomain\Administrator”).
- If the account name is not qualified (does not contain a backslash), the name is first looked up on the local machine.  If the account name is not found, it is then looked up in the default domain of the machine.

## User Environment

When users log on, their environment will contain all system-wide environment variables that are set on the local system.  They will not receive their normal user environment settings at this moment in time (the Win32 API does not provide this ability).  To circumvent this omission in the Win32 API, the jBASE TCP Remote Logon Services automatically set the following environment variables:

| <!----> | <!----> |
| --- | --- |
| USERDOMAIN | The domain name in which the user account is defined. |
| USERNAME | The account name of the user. |
| HOMEPATH | The path name of the home directory of the user. If the user’s home directory is a remote path, then this will contain the Universal Naming Convention (UNC) name of the user’s home directory. |
| HOMESHARE | Always set to NULL. See the comments on remote directories below. |
| HOMEDRIVE | If the user’s home directory is local, this contains the drive letter followed by a colon. If the home directory is remote, this is set to NULL. |
| JBC\_TELNET\_FLAG | This is set so that a user process can determine if it is being run via telnet session or via the console. |

Because the remote user shares the drive map with all other users, it is not possible to automatically mount a remote user’s remotely named directory on its normal drive letter.  However many sites may wish to establish conventions whereby remote users are allowed to use certain drive letters remotely.

Further, other environment variables may need to be set at logon.  Thus the jBASE TCP Remote Logon Services execute the file **remote.cmd** if present in the user’s home directory. If a remote user’s home directory is specified as a remote directory, the user’s initial directory will be “C:\”.  If desired, this can be overridden in **remote.cmd**.

If the user's home directory does not exist or is not defined in the user's Profile, they will go to the default **%JBCRELEASEDIR%\remote.cmd**. If this directory does not exist then an error message will be displayed, and the user will not be allowed to login. If the directory contains a **remote.cmd** file then it will be executed.

By default if the user has a **remote.cmd** file, this will be read by the telnet process, and parsed, the first command it finds will be executed.  This file is intended mainly to allow the user to set up the environment, and so this parsing is primitive, for example only the first command it finds is executed, so a **remote.cmd** created by the jBASE **create-account** command for instance this will be **jsh**.  To disable this feature and have the Windows command proceessor read the file, the registry setting **ParseProfile** should be set to 0. (see below).  You should therefore avoid using commands such as **cd** and **call** which would otherwise be allowed.

If supported by the telnet client, then the TERM variable will also be set.

[Customization](./../windows-telnet-customization)

[Troubleshooting](./../windows-telnet-troubleshooting)
