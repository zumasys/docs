# PRINT

**Created At:** 9/22/2017 1:51:46 PM  
**Updated At:** 11/27/2018 9:42:51 AM  
**Original Doc:** [277631-print](https://docs.jbase.com/36868-jbase-basic/277631-print)  
**Original ID:** 277631  
**Internal:** No  

**Tags:**
<badge text='printing' vertical='middle' />
<badge text='outpput' vertical='middle' />

## Description

The **PRINT** statement sends data directly to the current output device, which will be either the terminal or the printer. It takes the general form:

```
PRINT expression {, expression...} {:}
```

An **expression** can evaluate to any data type. The **PRINT** statement will convert the result to a string type for printing. Expressions separated by commas will be sent to the output device separated by a tab character.

The **PRINT** statement will append a newline sequence to the final **expression** unless it is terminated with a colon ":" character.

## Note

> - As the **expression** can be any valid expression, it may have output formatting applied to it.
> - If a [PRINTER ON](./../printer) statement is currently active then output will be sent to the currently assigned printer form queue.

An example of use is as:

```
PRINT @(8,20):"Como esta?":
```

See also:  [CRT](./../crt).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
