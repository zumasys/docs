# PN5_60517

<PageHeader />

## Description

Enhance jBASE error logging, includes the addition of the new **list-runtime-errors** command

## Previous Release Behavior

The existing method of logging runtime errors to the **jbase\_error\_trace** file was insufficient for reporting and administrative use.

## Current Release Behavior

We now provide a new command, **list-runtime-errors**, which can be used to query runtime errors like:

```
Invalid or uninitialised
variable -- ZERO USED , ZERO USED
```

To enable error logging, add the following option to the **Config\_EMULATE** file under the emulation section as given by the **JBCEMULATE** enviromment variable:

```
log_runtime_errors = true
```

Note: This is enabled by default for the D3 emulation.

When this option is set, jBASE will log certain messages that are taken from the jBASE error message file, **jbcmessages**. We don't log all error messages, only under the following 2 conditions:

1. The error message in the **jbcmessages** file has the text string:

```
** Error
```

This helps to differentiate real errors from simple information messages.

An example of this is the **SUBROUTINE\_CALL\_FAIL** record:

```
** Error [ SUBROUTINE_CALL_FAIL ] ** ^NEWLINE^^DEBUGCONTINUE^Unable to perform CALL to subroutine %s , Line ^LINENO^ , Source ^SOURCENAME^^NEWLINE^Press C to continue or Q to quit
```

2. The error message in the **jbcmessages** file has the text string:

```
^LOGERROR^
```

An example of this is the **ZERO\_USED** record:

```
Invalid or uninitialised variable -- ZERO USED ,^NEWLINE^Var ^VARNAME^ , Line ^LINENO^ , Source ^SOURCENAME^^WARNING^^LOGERROR^
```

Note: If you ever decide that one of the messages supplied by jBASE does not need to be logged, add **^NOLOGERROR^** to the error message to inhibit logging then message, however, it will still be displayed to the screen as intended.

With these conditions enabled, errors will be logged to the file **$JBCGLOBALDIR/runtime-errors**, or on Windows the equivalent **%JBCGLOBALDIR%\runtime-errors**

This file, **runtime-errors**, is now provided in the jBASE installation. It can be viewed with the new **list-runtime-errors** command. For example:

```
jsh gregc ~ -->list-runtime-errors

PAGE    1                                            11:54:46  26 JAN 2017

Date.......  Time....  Error Message.................  Call Stack..........

26 JAN 2017  11:53:34  Invalid or uninitialised        SUB2.b:3
                       variable -- ZERO USED ,
                       Var B , Line     3 , Source     SUB1.b:6
                       SUB2.b
                                                       test2.b:2


 1 Records Listed
```

Note that other DICT items exist, such as port number, process id, OS user name and jBASE user name...

```
DICT PATH : DICT runtime-errors                                                                    Page   1 09:32:02  07 MAR 2017

*A0.................    D/CODE...    A/AMC....    S/NAME...    V/CONV...    V/CORR...    V/TYPE...    V/MAX

DATE                    A            1            Date         D4           U0ff1        R               11
TIME                    A            1            Time         MTS          U0ff0        R                8
UTC                     A            1            UTC                                    R               11
PID                     A            2            Process                                R                7
                                                  ID
PORT                    A            3            Port                                   R                7
                                                  Number
ERRMSG                  A            4            Error Mes                              T               30
                                                  sage
OSNAME                  A            5            OS                                     L               10
                                                  login
JBNAME                  A            6            jBASE                                  L               10
                                                  login
CALLSTACK               A            7            Call Stac                              T               20
                                                  k

 9 Records Listed
```

You can programatically examine the **runtime-errors** file like this:

```
INCLUDE JBC.h
globaldir = SYSTEM(1012)  ;* The equivalent of $JBCGLOBALDIR
filename = globaldir : DIR_DELIM_CH : "runtime-errors"
OPEN filename TO FILEVAR ELSE STOP 201,filename         ;* Open the error log file
SELECT FILEVAR  ;* Select the error log
LOOP WHILE READNEXT key DO          ;* Read each item id from the error log
    READ rec FROM FILEVAR,key ELSE DEBUG      ;* Read the actual error item
*
* Display details from this error log
*
    CRT "Error occurred at ":
    CRT OCONV(rec<1>,"U0ff0" : @VM : "MTS") : " " :          ;* Display the time of the error
    CRT OCONV(rec<1>,"U0ff1" : @VM : "D4") : " " :          ;* Display the date of the error
    CRT "By user " : rec<6> : " " :
    CRT "Messag = " : rec<4> : " " :
    CRT
REPEAT
```

***It is highly recommended to keep your customized error message file outside of the jBASE directory, $JBCRELEASEDIR. This can be accomplished with the [JBCERRFILE](./../../../environment-variables/jbcerrfile/README.md) environment variable***

* * *

The original method of logging errors to the **jbase\_error\_trace** file, by setting the environment variable **JBASE\_ERRMSG\_TRACE=1**, can still be used. However, if **log\_runtime\_errors** is set in the Config\_EMULATE file then it will override this behavior.

Back to [5.6.1 Release Notes](./../README.md)

  
<PageFooter />
