# PH-STATUS

**Created At:** 6/14/2018 2:19:39 PM  
**Updated At:** 1/21/2020 12:09:08 AM  
**Original Doc:** [ph-status](https://docs.jbase.com/46465-background-processing/ph-status)  
**Original ID:** 321824  
**Internal:** No  

## Description

The jBASE **PH-STATUS** command displays status and history information for each jBASE background task process. The information is read from the **$JBCRELEASEDIR/tmp/PH-HISTORY** file.

Output is sorted **BY STATUS-ALPHA BY-DSND START-DATE BY-DSND START-TIME**

The command takes the general form:

```
PH-STATUS {-L1 | -L2} {task-id port} {(Options}
```

Where:

- **-L1** is the default display format
- -**L2** is an alternate display format
- **task-id** is the name of the jBASE background task process specified in the [**PH-START**](./../ph-start) procedure. Use an asterisk (\*) to indicate that you want all tasks for **port** which is the port number of the jBASE background task process for which to limit the display.
- **-h** Help page
- **-?** Help page

and options:

- **P** Redirect output to the spooler.
- **N** No paging

The output can be restricted by specifying one or more valid status codes as options (See example below).

### Note

> The information displayed in the PH-STATUS screen is contained in columns:
>
> ```
> TASK-ID..LINE ACCOUNT. STARTER-ACC DATE....... TIME.. STATUS OP OUTFL#
> ```

| Column | Description |
| --- | --- |
| **TASK-ID** | is the name identifier give to the jBASE background task process by the PH-START procedure. |
| **LINE** | is the port number running the jBASE background task process. |
| **ACCOUNT** | is the userid/account-name that the jBASE background task process is using for execution. |
| **STARTER-ACC** | is the name of the userid/account from which the jBASE background task process was started. |
| **DATE** | is the date the jBASE background task process was started. |
| **TIME** | is the time the jBASE background task process was started. |
| **STATUS** | is the current status of the jBASE background task process.(see "Status Codes" below). |
| **OP** | indicates the options that were assigned to the jBASE background task process. |
| **OUTFL#** | is the spooler job number where output has been redirected. |

The PH-HISTORY file must be cleared manually, by the [**PH-CLEAR**](./../ph-clear) command.

### Status Codes

| Code | Description |
| --- | --- |
| **A** | Process is still active. |
| **S** | Process terminated by the operating system. |
| **T** | Process terminated normally. |
| **X** | Process terminated incorrectly. Usually because the executing process requires input but there are no more statements left in the command stack. |
| **K** | Process terminated by the [PH-KILL](./../ph-kill) command. |
| **Q** | Process queued for port. |

### Example

```
LES ~ -->PH-STATUS
jBTP Process status at 06 JAN 1999 17:21:25   06 JAN 1999            Page 1
TASK-ID..LINE. ACCOUNT.... STARTER-ACC DATE....... TIME.... STATUS OP OUTFL#
SALESREP 101  SALES        SALES       06 JAN 1999 09:15:02      A        12
INVUP    103  INV          ACCOUNTS    06 JAN 1999 10:30:55      T  T
ACC3     130  ACCOUNTS     ACCOUNTS    06 JAN 1999 13:00:40      K        42
TEL.LIST 999  ADMIN        ADMIN       06 JAN 1999 15:06:20      A         6
```

**ph-status (at**   Display only Active and Terminated tasks.

Back to [Background Processing](./../README.md)
