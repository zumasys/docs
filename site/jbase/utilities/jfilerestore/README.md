# jfilerestore

<PageHeader />  

## Description

**jfilerestore** restores data from a backup created with [jfilesave](../jfilesave/README.md).

## Syntax

```
jfilerestore -d device {options} {account}
```

## Options

| Option | Explanation |
| --- | --- |
| -b | Display output as JSON. |
| -B | Display output as formatted JSON. |
| -c | Full path to the destination account.<br>If this option is omitted then the data is restored in the same account from which it was originally saved.<br>This option can be used to restore an account, a file or a record. |
| -d device | The location of the backup file that was created with **jfilesave**.<br>It can be a full path or just a name in which case it is created in ""JBCDATADIR**. |
| -f filename | Restore a single file within an account.<br>If the -i option is used then this option is required. |
| -i id | Restore a single record from a hashed file or a single file from a directory.<br>Requires the -f option. |
|  -o \| -O| Overwrite the device file. |
| -? | Help page, displays as JSON (overrides all other options except -b or -B) |
| -h \| -H | Help page, displays as text (overrides all other options) |

## Notes

If more that 1 account is specified on the command line then only the first (left most) account is restored.

If an account is not specified on the command line then all accounts are restored.

A log of all output is created in the jBASE tmp directory.
The name of this file is **jfilerestore_log_[portnumber]**, e.g. jfilerestore_log_6

Options are Case Sensitive.

## Examples

```
jfilerestore -d /dbms/backups/daily_24 -O
```

Restore everything from the **daily_24** file in the **/backups** directory. The -O option will overwrite anything that pre-exists.

```
jfilerestore -d /dbms/backups/daily_24 -O -c /tmp/restore
```

Same as the previous example but restores all data to "/tmp/restore".

The next 3 examples assume the backup is called "/home/backups/library".

```
jfilerestore -d /home/backups/library BOOKS
```

Restore the BOOKS account. Anything that does not pre-exist will be restored.

```
jfilerestore -d /home/backups/library BOOKS -f AUTHORS
```

Restore the AUTHORS file in the BOOKS account

```
jfilerestore -d /home/backups/library BOOKS -f AUTHORS -i Plato
```

Restore the record "Plato" in the AUTHORS file in the BOOKS account.

Back to [Utilities](../../utilities/README.md)

<PageFooter />
