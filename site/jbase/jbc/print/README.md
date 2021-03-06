# PRINT

<PageHeader />

**Tags:**
<badge text='printing' vertical='middle' />
<badge text='outpput' vertical='middle' />

## Description

The **PRINT** statement sends data directly to the current output device, which will be either the terminal or the printer. It takes the general form:

```
PRINT {ON Channel} expression {, expression...} {:}
```

**Channel** is the report channel number in the range 0 to 127.

An **expression** can evaluate to any data type. The **PRINT** statement will convert the result to a string type for printing. Expressions separated by commas will be sent to the output device separated by a tab character.

The **PRINT** statement will append a newline sequence to the final **expression** unless it is terminated with a colon ":" character.

## Note

> - As the **expression** can be any valid expression, it may have [output formatting](./../output-formatting/README.md) applied to it.
> - If a [PRINTER ON](./../printer/README.md) statement is currently active then output will be sent to the currently assigned printer form queue, (see also [SP-ASSIGN](./../../spooler/sp-assign/README.md) command.

An example of use is as:

```
PRINT A "L#5"
PRINT @(8,20):"Como esta?":
```

See also:  [CRT](./../crt).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
