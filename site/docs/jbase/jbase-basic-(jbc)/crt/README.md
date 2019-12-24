# CRT

**Created At:** 8/30/2018 1:14:09 PM  
**Updated At:** 10/1/2018 3:59:55 PM  
**Original Doc:** [336874-crt](https://docs.jbase.com/36868-jbase-basic/336874-crt)  

**Tags:**
<badge text='program performance' vertical='middle' />
<badge text='program profiling' vertical='middle' />
# CRT

**Created At:** 8/14/2017 10:25:30 AM  
**Updated At:** 10/25/2018 7:08:26 AM  
**Original Doc:** [266868-crt](https://docs.jbase.com/36868-jbase-basic/266868-crt)  

**Tags:**
<badge text='display' vertical='middle' />
<badge text='output' vertical='middle' />

## Description

This statement sends data directly to the terminal, even if a [PRINTER ON](./../printer) statement is currently active. It takes the general form:

```
CRT|DISPLAY expression {, expression..} {:}
```

An **expression** can evaluate to any data type. The **CRT** statement will convert the result to a string type for printing. Expressions separated by commas will be sent to the screen separated by a tab character.

The**CRT**statement will append a newline sequence to the final expression unless it is terminated with a colon ":" character.

# Note:


> As the expression can be any valid expression, it may have output formatting applied to it.


A jBASE BASIC program is normally executed using buffered output mode. This means that data is not flushed to the terminal screen unless a newline sequence is printed or terminal input is requested.

This makes it very efficient. However you can force output to be flushed to the terminal by printing a null character CHAR (0). This has the same effect as a newline sequence but without affecting screen output.

Older versions may use DISPLAY in place of **CRT**.

An example of use is as:

```
FOR I = 1 TO 5
    DISPLAY @(I, 10):I
NEXT I
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).

## Description

Print messages to either stdout or stderr. The PRINT and CRT statement will display to stdout whereas the PRINTERR statement will display to stderr. The CRT statement will also translate all non-printable characters as the sequence ~nnn where nnn is a 3 digit decimal representation of the non-printable character.

It's use is as:

```
CRT {expression} {:}
```

or

```
PRINT {expression} {:}
```

or

```
PRINTERR {expression} {:}
```

where:

- **:** specifies no trailing new line will be printed. Without the : modifier then a new line will always be printed at the end of the "expression" string.
- **expression** is the string to print. If not specified, no message is displayed, just a new line (unless of course the +:modifier was used).


An example of use may be as:

```
printerr "Fatal error " : $? : " when loading program MODUSER"
```


