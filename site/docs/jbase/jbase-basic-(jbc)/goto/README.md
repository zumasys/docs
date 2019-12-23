# GOTO

**Created At:** 9/6/2017 2:17:53 PM  
**Updated At:** 10/30/2018 9:58:12 AM  
**Original Doc:** [goto](https://docs.jbase.com/36868-jbase-basic/goto)  

**Tags:**
<badge text='program control' vertical='middle' />
<badge text='program execution' vertical='middle' />

## Description

The **GOTO** statement causes program execution to jump to the code at a specified label.

```
GO{TO} label{:}
```

Where **label**refers to an existing location within the current source code. The location must be the same name as the label.

Labels can be numeric or alphanumeric but alphanumeric labels must be terminated with a colon. Numeric labels can be terminated with a colon but it is not mandatory. The use of the colon in the **GOTO** statement is optional.

## Note: 


> Using the **GOTO** command obscures the readability of the code and may be a hindrance to maintainability. All programs written using the **GOTO**construct can be written using structured statements such as [LOOP](./../loop) and [FOR](./../for). There are various opinions on this issue but the consensus is, avoid **GOTO**.


One possibly acceptable use of the **GOTO** statement is to transfer execution to an error handler upon detection of a fatal error that will cause the program to terminate as follows:

```
GOTO Exception;* jump to the exception handler
.....
Exception:* exception handler
....STOP
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
