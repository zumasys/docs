# jfilesave

<PageHeader />  

## Description

**jfilesave** is a front-end to [jbackup](../jbackup/README.md) that simplifies backing up accounts defined in the [SYSTEM](../../accounts/system-file/README.md) file.

All backups done with **jfilesave** are 100% compatible with [jrestore](../jrestore/README.md).

## Syntax

```
jfilesave {options} {account1 {account2 {account3}} ...})
```

## Options

| Option | Explanation |
| --- | --- |
| -a \| -A | Save ALL accounts including DX'd accounts.<br>Overrides accounts specified on the command line. |
| -b \| -B | Display output as JSON. |
| -d device | The file where the backup is to be created.<br>It can be a full path or just a name in which case it is created in the current directory.<br><br>The **JFILESAVE_DEVICE** environment variable can be used to define the device.<br>Refer to the **Special Character Handling** section below. |
| -o \| -O| Overwrite the device file. |
| -s statfile | This is a full path or relative path for the backup statistics.<br>The file is created if it does not already exist.<br>The file is cleared for each backup.<br><br>The **JFILESAVE_DEVICE** environment variable can be used to define the device.Refer to the **Special Character Handling** section below. |
| -h \| -H \| -? | Help page (overrides all other options) |

## Notes

If no **account** is specified then all directories and files under the account (path) defined in field 2 of the **SYSTEM** file entries are saved.

If field 1 of an account record in the **SYSTEM** file has a value of **DX** then the account is skipped unless the **-a** option is used.

Backups cannot be created under an account that is being backed up. This prevents accounts from growing incrementally.

Command line options override environment variable settings.

A log of all output is created in the jBASE logs directory.<br>
The name of this file is **jfilesave_log_[portnumber]**

Options override environment variable settings.

Options are Case Sensitive.

The [jchmod](../jchmod/README.md) command can be used to determine whether or not a hashed file is to be backed up.

## Special Character Handling

These Special Character strings can be used to create unique file names.

```
String  Converted to:
======  =============
$EnvVar The value of the specified Environment Variable
        Do NOT use the Windows %enviromment_variable% syntax!
~u      Username
~p      Port number
~d      Internal date
~t      Internal time
~k      Creates a unique Key
~m      Month number (1 to 12)
~h      Hostname
~s      Directory separator ("/" or "\" depending on platform)
~~      A literal "~" (a single "~" is ignored)
```

All other characters are taken literally

Spaces (and strings of spaces) are converted to a single underscore "_".

Special Character Strings are case insensitive (~D is the same as ~d).

## Examples

```
jfilesave
```

Save all accounts defined in the SYSTEM file. The account is skipped if it has a value of **DX** in field 1 of the SYSTEM file entry.  
Assumes the **JFILESAVE_DEVICE** environment variable is assigned.  
If the **JFILESAVE_STATFILE** environment variable is defined then a statistics file will be created and populated.

```
jfilesave -d /backups/daily_~d
```

All accounts (without a **DX** in field 1) defined in the SYSTEM file are saved to the /backups directory with a filename of daily_~d, where ~d is the current internal date, e.g. daily_18752.  

The **JFILESAVE_DEVICE** environment variable, if defined, is ignored.

```
jfilesave AP AR
```
The AP and AR accounts are backed up, assumes **JFILESAVE_DEVICE** is defined.<br>
No backup statistics are created unless **JFILESAVE_STATFILE** is defined.

```
jfilesave -a -s /tmp/statfile_~d_~t
```

Save all accounts defined in the SYSTEM file, including accounts with a value of **DX** in attribute 1.<br>Assumes the JFILESAVE_DEVICE environment variable is assigned.  

The -s option creates statistics in the **/tmp** directory with a filename that incorporates the internal date and internal time, e.g.  
/tmp/statfile_18858_20962]D  
/tmp/statfile_18858_20962

```
set/export JFILESAVE_DEVICE=$JBCRELEASEDIR~stmp~sbackup_~m
```

Setting this environment variable will cause the **jfilesave** command to backup to the jBASE **tmp** directory with a filename of **backup_** contatenated with the month number, e.g. **backup_3** for the month of March.

---

See also [jfilerestore](../jrestore/README.md)

Back to [Utilities](./../../utilities/README.md)

<PageFooter />
