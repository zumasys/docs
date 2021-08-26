# jfind

<PageHeader />

**Tags:**
<badge text='search program' vertical='middle' />
<badge text='tools' vertical='middle' />

## Description  

The Windows platform does not provide a command line search program like the UNIX **find** command. This is a limited form of the Unix **find** command for the Windows platform. The format of the command is as:

```
jfind pathlist options
```

where option may be:

| Option  | Description  |
| --- | --- |
| -name pattern | finds files whose name matches pattern |
| -print | prints the pathname for files found |
| -type d|f | find directories or files |

## Example

```
jfind C:\MYDIR -name ".*AUSTIN.*" -print
```

This command is useful when used to pipe data to the **jbackup** command, e.g.

```
jfind C:\accounts -print | jbackup -f C:\my_backups\my_accounts.bak
```

Back to [Tools and Utilities](./../README.md)

<PageFooter />
