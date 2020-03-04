# Windows Telnet Customization

**Created At:** 4/19/2018 6:47:25 PM  
**Updated At:** 10/14/2019 3:04:30 PM  
**Original Doc:** [311287-windows-telnet-customization](https://docs.jbase.com/30301-jbase/311287-windows-telnet-customization)  
**Original ID:** 311287  
**Internal:** No  

## Description

You can edit the registry by using Registry Editor (Regedit.exe or Regedt32.exe). If you use Registry Editor incorrectly, you can cause serious problems that may require you to reinstall your operating system. jBASE does not guarantee that problems that you cause by using Registry Editor incorrectly can be resolved. ***Use Registry Editor at your own risk***.

> **Note:**
>
> If you change or create any of the registry entries below, you will need to stop and then restart the jBASE telnetd service with the new or changed values before those entries will take effect.

## Presenting a banner to the remote user after logon

Create a registry entry of type REG\_SZ with the name Banner under registry key:

```
HKEY_LOCAL_MACHINE\Software\Wow6432Node\JAC\jBASE Telnetd Server\CurrentVersion
```

In the "Value data:" string, the sequence "\n" generates an end of line output, to use the '\' characters in the banner string use two '\' characters in a row.

**Example**:

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| Name | Type | Data |
| Banner | REG\_SZ | Welcome to jBASE\nThe Multi-value database of the future\n |

## Presenting a banner to the remote user prior to logon

Create a registry entry of type REG\_SZ with the name PreBanner under registry key:

```
HKEY_LOCAL_MACHINE\Software\Wow6432Node\JAC\jBASE Telnetd Server\CurrentVersion
```

In the "Value data:" string, the sequence "\n" generates an end of line output, to use the '\' characters in the banner string use two '\' characters in a row.

**Example**:

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| Name | Type | Data |
| PreBanner | REG\_SZ | jBASE telnet process\nPlease log into system\n |

## Changing the logon prompt

Create a registry entry of type REG\_SZ with the name LogonPrompt under registry key:

```
HKEY_LOCAL_MACHINE\Software\Wow6432Node\JAC\jBASE Telnetd Server\CurrentVersion
```

**Example**:

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| Name | Type | Data |
| LogonPrompt | REG\_SZ | Windows User Name: |

If this registry value is not present, the default logon prompt is "Account Name: ".

## Changing the password prompt

Create a registry entry of type REG\_SZ with the name PasswordPrompt under registry key:

```
HKEY_LOCAL_MACHINE\Software\Wow6432Node\JAC\jBASE Telnetd Server\CurrentVersion
```

**Example**:

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| Name | Type | Data |
| PasswordPrompt | REG\_SZ | Windows Password: |

If this registry value is not present, the default password prompt is "Password: ".

## **Changing the Failed logon message.**

Create a registry entry of type REG\_SZ with the name FailedLogonMessage under registry key:

```
HKEY_LOCAL_MACHINE\Software\Wow6432Node\JAC\jBASE Telnetd Server\CurrentVersion
```

In the "Value data:" string, the sequence "\n" generates an end of line output, to use the '\' characters in the banner string use two '\' characters in a row.

**Example**:

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| Name | Type | Data |
| FailedLogonMessage | REG\_SZ | \nFailed logon...Valid "WINDOWS" USER/PASSWORD?\n |

If this registry value is not present, the default message  is:

"Logon failed: unknown user name, password or privilege incorrect."

## **Logging user logon/logoff messages in the registry.**

Create a registry entry of type REG\_DWORD with the name LogEventLogon under registry key:

```
HKEY_LOCAL_MACHINE\Software\Wow6432Node\JAC\jBASE Telnetd Server\CurrentVersion
```

If this registry entry is present and set to 0, then normal logon and logoff events will not be logged into the registry.  If this entry is either not present, or it is set to 1, then an entry will be written into the registry whenever a user logs on or off the system.

## Change the Break Key

Create a registry entry of type REG\_DWORD with the name BreakChar under registry key:

```
HKEY_LOCAL_MACHINE\Software\Wow6432Node\JAC\jBASE Telnetd Server\CurrentVersion
```

Enter the numeric value that corresponds to the control character to issue a "break". The default is 3 (i.e. ctrl-C).

## Changing the default command processor

Create a registry entry of type REG\_SZ with the name CommandProcessor under registry key:

```
HKEY_LOCAL_MACHINE\Software\Wow6432Node\JAC\jBASE Telnetd Server\CurrentVersion
```

**Example**:

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| Name | Type | Data |
| CommandProcessor | REG\_SZ | C:\jBASE\CurrentVersion\bin\jsh.exe - |

This will cause the jSHELL to start up and execute the login PROC in your MD if you have one.

By default, all services invoke CMD.EXE as the command processor. By adding the registry value you can override the command processor used by all users.

> **Note**:
>
> If you override the command processor, then the automatic environment setup using the remote.cmd script will no longer be available.

## Bump up priority while logging on

Create a registry entry of type REG\_DWORD with the name IncreaseLogonPriority under registry key:

```
HKEY_LOCAL_MACHINE\Software\Wow6432Node\JAC\jBASE Telnetd Server\CurrentVersion
```

On loaded systems, the logon process can be slow.  You can set this registry value to 1 if you want to increase the priority of the logon, AT THE EXPENSE OF OTHER PROCESSES ON THE SYSTEM.

If this registry entry is present and set to 1 then the priority of the logon process will be increased.

## Changing default exit detection timeout

Create a registry entry of type REG\_DWORD with the name ExitDetectionTimeout under registry key:

```
HKEY_LOCAL_MACHINE\Software\Wow6432Node\JAC\jBASE Telnetd Server\CurrentVersion
```

**Example**:

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| Name | Type | Data |
| ExitDetectionTimeout | REG\_DWORD | 0x000001f4 (500) |

Due to a technical issue related to pipes, the telnetd server must “guess” when a command prompt is about to exit. At those times when it this guess occurs, the telnetd server waits before doing a read of input. If this read timeout is too short, the exit detection doesn’t work, and so users need to type an extra input before the telnetd exit.  (In other words, when the user types “exit” to CMD.EXE, the telnet client will not “hang up” until the user types an extra character.)  Through internal experimentation we have found that a value of 400 milliseconds works well under most circumstances.  However some customers have found this inadequate, so we provide this value.  The value should be set to as small a value as provides the desired behavior.

If this registry value is not present, the default value is 400 milliseconds "0x00000190 (400)".

## Changing the number of logon attempts

Create a registry entry of type REG\_DWORD with the name LogonAttempts under registry key:

```
HKEY_LOCAL_MACHINE\Software\Wow6432Node\JAC\jBASE Telnetd Server\CurrentVersion
```

**Example**:

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| Name | Type | Data |
| LogonAttempts | REG\_DWORD | 0x00000005 (5) |

If this registry value is not present, the default value is 3 attempts "0x00000003 (3)".

## Parsing the “remote.cmd” file

Create a registry entry of type REG\_DWORD with the name ParseProfile under registry key:

```
HKEY_LOCAL_MACHINE\Software\Wow6432Node\JAC\jBASE Telnetd Server\CurrentVersion
```

**Example**:

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| Name | Type | Data |
| ParseProfile | REG\_DWORD | 0x00000000 (0) |

By default the telnet service will read any remote.cmd file that it finds in a user's home directory, and execute the first command it finds. This is efficient and avoids having a command processor for each port, however, the commands that are supported are restricted to setting environment variables (set) and echoing text (echo).  If you want the Windows command processor to parse the file then set the value to 0.

## Changing the jBASE telnet port number

As with all Windows services, the telnet port number used by jBASE telnetd is in the '%SYSTEMROOT%\system32\drivers\etc\services' file.

jBASE will first use the port number designated by a 'jtelnet' entry in this file. If no 'jtelnet' entry exists in the 'services' file then telnetd will use the port number designated by a 'telnet' entry.

The industry standard telnet port is 23 but it can be changed to any port number.

To change the port for jBASE telnetd, so as not to affect port number 23, you must add a 'jtelnet' entry with the desired port number. For example, the following entry in the Windows 'services' file will start the jBASE telnetd service on port 2323:

jtelnet  2323/tcp

If jBASE telnetd is the only telnet server on the system, you could change the original 'telnet' entry to a different port number with:

telnet  2323/tcp

This would eliminate the need for a 'jtelnet' entry.

> **Note:**
>
> The jBASE Telnetd Server must be stopped and restarted in the Windows Services panel for this change to take affect.

Back to [Windows Telnet](./../windows-telnet-%28telnetd.exe%29)
