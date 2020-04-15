# CRT

<PageHeader />

**Tags:**
<badge text='display' vertical='middle' />
<badge text='output' vertical='middle' />

## Description

This statement sends data directly to the terminal, even if a [PRINTER ON](./../printer) statement is currently active. It takes the general form:

```
CRT|DISPLAY expression {, expression..} {:}
```

**expression** can evaluate to any data type. The **CRT** statement will convert the result to a string type for printing. Expressions separated by commas will be sent to the screen separated by a tab character.

The **CRT** statement will append a newline sequence to the final expression unless it is terminated with a colon ":" character.

## Note

> As **expression** can be any valid expression, it may have output formatting applied to it.

A jBASE BASIC program is normally executed using buffered output mode. This means that data is not flushed to the terminal screen unless a newline sequence is printed or terminal input is requested.

This makes it very efficient. However you can force output to be flushed to the terminal by printing a null character CHAR (0). This has the same effect as a newline sequence but without affecting screen output.

Older versions may use DISPLAY in place of **CRT**.

An example of use is as:

```
FOR position = 1 TO 5
    DISPLAY @(position, 10) : position
NEXT position
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
