# jstart

<PageHeader />

## Description

The **jstart** utility was originally provided to circumvent a problem with the Win95 CreateProcess API. The API fails to set the standard input handle to the new console if the standard input handle of the parent process is not a console device, i.e. a DATA statement has been used. However, jstart can be used to start up a process in the same window, in a new window or in the background.  
*Not available on UNIX platforms*.

The command is as:

```
jstart -Options Command
```

where:

- command is an executable program
- option may be:

| Option | Description |
| --- | --- |
| -v | verbose |
| -w | initiating process waits for the process launched by jstart to complete |
| -m | run with window minimized |
| -b | run as a background job, i.e. no console |
| -i | inherit current window |
| -t*Title* | specify the window title (not applicable to background jobs) |
| -p*class* | priority class; 0 - Normal; 1 - Idle; 2 - High |

### Examples

```
EXECUTE "jstart jsh -s jsh -"
```

This will start up the jSHELL in a new window, with a different port number.

```
jstart -b jpq C:\CODE\PROCLIB\RUNBATCH
```

Runs the proc RUNBATCH as a background process.

Back to [Background Processing](./../README.md)