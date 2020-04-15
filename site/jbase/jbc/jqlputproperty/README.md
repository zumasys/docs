# JQLPUTPROPERTY

<PageHeader />
 
**Tags:**
<badge text='record handling' vertical='middle' />
<badge text='query language' vertical='middle' />
<badge text='jql' vertical='middle' />

## Description

**JQLPUTPROPERTY**sets a property in a compiled jQL statement. It takes the general form:

```
JQLPUTPROPERTY(PropertyValue, Statement, Column, PropertyName)
```

Where:

- **PropertyValue** is the value to which you want to set the specified property, such as one or “BLAH”
- **Statement** is the result of valid [JQLCOMPILE](./../jqlcompile) .
- **Column** holds 0 for a general property of the statement, or a column number if it is something that can be set for a specific column.
- **PropertyName**  are **EQUATED** values defined by **INCLUDE**’ing the file JQLINTERFACE.h.

This function returns -1 if it locates a problem in the statement and zero for no problem.

## Note

> Properties are valid after the compile; this is the main reason for separating the compile and execute into two functions. After compiling, it is possible to examine the properties and set properties before executing.
>
> It should also be noted that some properties may require [JQLEXECUTE](./../jqlexecute) first.

For a practical example of use, see the **jexport.b** program in the **$JBCRELELEASEDIR**/samples/JQLBASIC directory.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
  
<PageFooter />
