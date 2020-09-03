# jBC Error Handling

<PageHeader />

## Description

jBASE provides several mechanisms to monitor, control and display runtime errors.

### Environment Variables

The following 3 environment variables control how jBC (BASIC) programs handle specific error conditions. Each variable is assigned a bit-mask to control what actions are performed when the corresponding error is encountered.

| Environment Variable | Error Message |
| --- | --- |
| [JBASE\_ERRMSG\_DIVIDE\_ZERO](../../jbase/environment-variables/jbase_errmsg_divide_zero/README.md) | Divide by zero !!-- ZERO returned |
| [JBASE\_ERRMSG\_NON\_NUMERIC](../../jbase/environment-variables/jbase_errmsg_non_numeric/README.md) | Non-numeric value -- ZERO USED |
| [JBASE\_ERRMSG\_ZERO\_USED](../../jbase/environment-variables/jbase_errmsg_zero_used/README.md) | Invalid or uninitialised variable -- ZERO USED |

[JBASE\_ERRMSG\_TRACE](../../jbase/environment-variables/jbase_errmsg_trace/README.md)
Setting this variable will log all error and runtime messages to the **$JBCRELEASEDIR/tmp/jbase\_error\_trace** file. Be aware that this will cause the **jbase\_error\_trace** file to grow very large if left to its own devices.

JBC\_STDERR
To redirect standard error to standard out in a jBC program set **JBC\_STDERR=1**. This is useful with the [EXECUTE](./../execute) statement for CAPTUREing output that would normally be sent to the screen.

[JBCERRFILE](../../jbase/environment-variables/jbcerrfile/README.md)
This environment variable is used to specify an alternate error message file. See [Advanced Error Message Tracking](#advanced-error-message-tracking).

## Trapping I/O errors

Most jBC (BASIC) I/O statements have built-in syntax to trap errors. This is implemented by specifying the SETTING and ON ERROR clauses. For example:

```
READ record FROM filevar, id SETTING errornumber ON ERROR  
    CRT "READ failed with error number ":errornumber  
    STOP
END ELSE STOP 202,id
END
```

The SYSTEM(0) function can also be used to determine the outcome of I/O options. Operations like [READ](./../jbc/read/README.md) and [WRITE](./../jbc/write/README.md) will return non-zero error numbers if the operation fails in some way. Tape statements, like [READT](./../readt) and [WRITET](./../writet), will store the reason code if an error occurs.

The SYSTEM(0) function does not automatically reset itself; it will hold on to the last error code until some other statement sets it. This can sometimes lead to a wrong conclusion when checking the value. To avoid this situation you can explicitly reset SYSTEM(0) with:

```
ASSIGN 0 TO SYSTEM(0)
```

## Customizing Error Messages

There are two files, **jbcinit.err** and **jbcmesssages**, underneath JBCRELEASEDIR. The **jbcinit.err** file is used to build the **jbcmessages** file. The **jbcinit.err** file contains extensive documentation on how to add new and customize existing messages that display to the user. More details about this [here](./../coding-corner/customizing-the-jbase-error-message-file/README.md).

## Advanced Error Message Tracking

This section details how to track specific error messages.

The [JBASE\_ERRMSG\_TRACE](../../jbase/environment-variables/jbase_errmsg_trace/README.md) environment variable is message-agnostic. When it is set it logs **all** jBASE messages that are 'printable' (i.e. not marked 'NOPRINT') in the **%JBCRELEASEDIR%\jbcmessages** file. This can be problematic when all you want to do is log the occurrences of a few specific error messages. The log produced by **JBASE\_ERRMSG\_TRACE** will also not tell you what process produced the error, what time the error occurred, the port number, the username, etc.

For example, suppose we want to only log BASIC program errors that result from the 3 errors that are controlled by  [JBASE\_ERRMSG\_TRACE](../../jbase/environment-variables/jbase_errmsg_trace/README.md), [JBASE\_ERRMSG\_ZERO\_USED](../../jbase/environment-variables/jbase_errmsg_zero_used/README.md) and  [JBASE\_ERRMSG\_DIVIDE\_ZERO](../../jbase/environment-variables/jbase_errmsg_divide_zero/README.md). We don't want the program to drop to the debugger, nor do we want these error messages to display to the user. Setting **JBASE\_ERRMSG\_TRACE=1** will certainly log these occurrences but they will be intermixed with all other messages making it difficult to determine what happened when.

The solution (details to follow) is to remove (unset) **JBASE\_ERRMSG\_TRACE** and place a POSTREAD trigger on your own version of the **jbcmessages** file. The trigger code will look for, and log, the 3 specific errors. Of course, you can add to this list as long as the error message is in the **jbcmessages** file.

There are two stages, Development and Implementation. The Development stage can be done at any time and will not affect the system in any way. The Implementation, however, must be done when there are no users on the system and no running jBASE processes.

## Development

1) Here is the trigger code:

```
    SUBROUTINE trackerrors(filevar, event, prerc, flags, recordkey, record, userrc)
*
*** Initialization
    INCLUDE JBC.h
    COMMON /trackerrors/ openflag, errorlog, jbcmessages
* This dynamic array contains the IDs of records in the jbcmessages file that we want to log
    error_ids = ''
    error_ids<-1> = 'DIVIDE_ZERO'
    error_ids<-1> = 'NON_NUMERIC'
    error_ids<-1> = 'ZERO_USED'
*
*** Open the ERRORLOG and jbcmessages files, once per session, to named common.
    IF UNASSIGNED(openflag) OR NOT(openflag) THEN
        openflag = @TRUE      ;* Assume successful OPENs
        OPEN 'ERRORLOG' TO errorlog ELSE openflag = @FALSE
        OPEN 'C:\custom\jbcmessages' TO jbcmessages ELSE openflag = @FALSE
        IF openflag = @FALSE THEN
            CRT 'Unable to open  ERRORLOG or jbcmessages.'
            ABORT
        END
    END
*
*** Log only the specific errors in the error_ids array
    IF event = TRIGGER_TYPE_POSTREAD THEN
        LOCATE recordkey IN error_ids SETTING position THEN
            READU rec FROM errorlog, recordkey ELSE rec = ''
            process = SYSTEM(1029)<1,1,4>
            rec<1,-1> = process
            rec<2,-1> = DATE()
            rec<3,-1> = TIME()
            rec<4,-1> = SYSTEM(18)      ;* port number
            rec<5,-1> = SYSTEM(19)      ;* user id
            rec<6,-1> = @PID
            WRITE rec ON errorlog, recordkey
        END
    END
    RETURN
```

It assumes the existence of a file called **ERRORLOG**, in which the errors will be logged, and a different **jbcmessages** file. There are other things that need to be done to allow the trigger to fire and we will get to those shortly.

2) The first task is to create a custom **jbcmessages** file and then modify specific messages in this new file. For this example, we will use a directory named **C:\custom**. We will also assume that **JBCRELEASEDIR** is set to **C:\jbase\CurrentVersion**.

Here are the steps:

a) Copy the following files to the **C:\custom** directory (**DO NOT use the jBASE COPY command**):

```
C:\jbase\CurrentVersion\jbcinit.err
C:\jbase\CurrentVersion\jbcmessages]D
C:\jbase\CurrentVersion\jbcmessa7es
```

b) Open the **C:\custom\jbcinit.err** file with any editor, then locate the line that starts with the string **ZERO\_USED:** and replace the string **WARNING** with the string **NOPRINT** on that line. Note that the **^** characters you see are up-arrows (shift+6 on the keyboard). Make the same change on the lines that start with **DIVIDE\_ZERO:** and **NON\_NUMERIC:**. The final lines must look EXACTLY like this:

```
ZERO_USED:0:Invalid or uninitialised variable -- ZERO USED ,^NEWLINE^Var ^VARNAME^ , Line ^LINENO^ , Source ^SOURCENAME^^NOPRINT^

DIVIDE_ZERO:0:Divide by zero !!-- ZERO returned ,^NEWLINE^Line ^LINENO^ , Source ^SOURCENAME^^NOPRINT^

NON_NUMERIC:0:Non-numeric value -- ZERO USED ,^NEWLINE^Variable '^VARNAME^' , Line ^LINENO^ , Source ^SOURCENAME^^NOPRINT^
```

Be aware that, once this **jbcmessages** file is in use, these 3 errors will NEVER print to the screen, but instead will be captured by the trigger and logged to the **ERRORLOG** file.

c) Build the new **jbcmessages** file:

```
cd C:\custom
jmakeerr jbcinit.err (O
TO: C:\custom\jbcmessages
```

3) Create the **ERRORLOG** file (or whatever name you want to use, but if you change the name then you will then have to also change it in the trigger code). This is the file that the trigger will log the errors to rather than logging them to the **jbase\_error\_trace** file. The trigger code shows what information gets logged but you can, of course, add or remove elements as desired. Since the file is only going to contain 3 records it can be created with:

```
CREATE-FILE ERRORLOG 1 1
```

Feel free to create dictionary items as required.

It is important that the ERRORLOG file be available to your application so make sure that in is in HOME or is visible to JEDIFILEPATH.

## Implementation

First ensure that there are no users on the system and that there are no running jBASE processes before proceeding. Any environment variable changes must be set system-wide. The changes should also be made in all remote.cmd (Windows) or .profile (Unix/Linux) files.

1) Compile the trigger code and catalog it so that it is available to your application. Remember to change the OPENs to reflect the locations and names of the files you are actually using. If the trigger's name is to be changed then remember to also change the name on the SUBROUTINE line.

2) Assign the trigger to your custom **jbcmessages** file:

```
CREATE-TRIGGER C:\custom\jbcmessages POSTREAD trackerrors
```

3) Add (or change) the environment settings for the 3 error scenarios:

```
JBASE_ERRMSG_DIVIDE_ZERO=2
JBASE_ERRMSG_NON_NUMERIC=2
JBASE_ERRMSG_ZERO_USED=2
```

Note: If the setting includes a bit mask value of **1** then the trigger will never fire because the **jbcmessages** file will never be read for that particular error condition.

4) Remove (unset) the **JBASE\_ERRMSG\_TRACE** environment variable.

5) Assign the environment variable that will point to your custom **jbcmessages** file:

```
JBCERRFILE=C:\custom\jbcmessages
```

This setting is what actually activates the whole system. If things don't work at first and you don't have time to debug it, then you can always:

a) remove (unset) **JBCERRFILE**. This will revert to the default **jbcmessages** file.

b) Optional: add **JBASE\_ERRMSG\_TRACE=1** (do this only if it was set prior to Implementation)

c) Optional: change the value the **JBASE\_ERRMSG\_xyz** environment variables back to what they were prior to Implementation.

Here is a simplistic program to test things out. After running it, if everything is working correctly, there will be 3 records in the **ERRORLOG** file, one record for each of the 3 error conditions.

```
PROGRAM testerrors
a = 1234 0003
b = 'xyz'
CRT "Test1: use a non numeric --> " : a + b
CRT "Test2: divide by 0 --> " : a / 0
CRT "Test3: invalid or uninitialised --> ": c  ;* variable c was never assigned
```

[Back to Knowledgebase](./../README.md)
  
<PageFooter />
