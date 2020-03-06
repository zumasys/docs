# PH-START

**Created At:** 6/14/2018 2:15:59 PM  
**Updated At:** 11/7/2019 1:42:19 PM  
**Original Doc:** [ph-start](https://docs.jbase.com/46465-background-processing/ph-start)  
**Original ID:** 321822  
**Internal:** No  

## Description

The jBASE **PH-START** command starts a jBASE background task process. The command takes the general form:

```
PH-START
```

and the user may be prompted as:

```
ENTER TASKID FOR PH TASK? {task-id}
ENTER LINE# FOR PH TASK? {port-number}
ENTER OPTIONS? {options}
ENTER ACCOUNT FOR PH JOB ? {user-id/account-name}
ENTER COMMAND STREAM <CR TO END>
USE "<" FOR A NULL LINE
> command-stream
```

where:

- task-id is the name to identify the jBASE background task process. The default name is "None". This name is recorded in the jBTP log file and is shown by PH-STATUS.
- port-number is the number of the port on which the jBASE background task process should be run. If you do not specify a port number, the next available port number (starting with the highest number in use) will be chosen.
- options allow you to queue another job for that jBASE background task port, redirect stderr to stdout, or redirect the output from the port to a terminal or a spooler hold file. If used, the spooler hold file will contain all output that would otherwise be displayed on a terminal. If no options are specified, a spooler hold file is created and output is suppressed. options can be one or more of :

| Option | Explanation |
| --- | --- |
| H | Hushes the PH-START message. |
| P | Prints the hold file on the printer assigned to your process after the jBASE background task process is finished. The hold file is not deleted. |
| N | No logging. A hold file is not created and all terminal output is lost. |
| T | Use terminal output. Assumes that a terminal device is associated with the jBASE background task process. No hold file is created.On Windows, the job will run in the foreground on the same port number. |
| Q | Queue this task to a currently active jBASE background process. |
| E | Redirect stderr to stdout. This ensures no loss of output to the hold file. |

- **account-name** is the name under which the jBASE background task process command stream is to be executed.
- **command-stream** is a list of commands and application inputs to be executed. Can be any valid commands except LOGTO. Terminate the command stream by pressing &lt;Enter&gt; on a blank line.

If a userid/account-name other than the current userid/account-name is entered the user will be prompted for the password if it exists.

## Error Messages

If a port number is specified that has not been allocated:

```
NO LINE AVAILABLE
```

If a port number that is not available is specified:

```
NO LINE AVAILABLE
```

If a port number to which another user is already logged on is specified:

```
LINE ALREADY LOGGED ON
```

If an invalid user-id and password or account name and password are supplied , the following message is displayed after the command stream is complete:

```
INCORRECT ACCOUNT OR PASSWORD
```

## Note

> The account-name in the SYSTEM File is used to assign the environment for the background task. Data for any jBC program INPUT statements should be entered as separate lines for each INPUT statement, as part of the command stream.

The "OFF" command is appended automatically to the command stack. If a RETURN only response is required, enter the left chevron character,(&lt;). in the command stream.

It may be more efficient to create a jCL program that contains your list of commands, and then call the program from the command-stream . This will avoid having to enter a lengthy series of commands.

If a jCL program drives the PH-START command, stack a null line in the command stream by using "H&lt;&lt;&lt;"

After entry of the final command-stream command, the following message will be displayed:

```
TASK taskid STARTED ON LINE port FOR ACCOUNT userid
```

If this message does not display, the process was not started. The responses to each prompt are not validated until all prompts are completed.  If an invalid response at any of the PH-START prompts is encountered, a suitable message will be displayed, then the entire procedure has to be repeated.

### Example

This example starts the jBASE background task process named SALESREP.

```
PH-START
ENTER TASKID FOR PH TASK? SALESREP
ENTER PORT NUMBER FOR TIPH TASK? 23
ENTER OPTIONS? HT
ENTER ACCOUNT FOR PH JOB? SALES
ENTER COMMAND STREAM <CR TO END>
USE "<" FOR A NULL LINE 
>SP-ASSIGN HS
>SORT SALES95 (P)
><RETURN>
TASK SALESREP STARTED ON LINE 23 FOR ACCOUNT SALES
```

Back to [Background Processing](./../README.md)
