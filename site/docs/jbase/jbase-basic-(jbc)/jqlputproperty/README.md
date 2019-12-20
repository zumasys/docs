# JQLPUTPROPERTY

**Created At:** 9/14/2017 1:29:30 PM  
**Updated At:** 11/27/2018 8:44:06 AM  
**Original Doc:** [276792-jqlputproperty](https://docs.jbase.com/36868-jbase-basic/276792-jqlputproperty)  

**Tags:**
<badge text='record handling' vertical='middle' />
<badge text='query language' vertical='middle' />
<badge text='jql' vertical='middle' />

# Description

**JQLPUTPROPERTY**sets a property in a compiled jQL statement. It takes the general form:

```
JQLPUTPROPERTY(PropertyValue, Statement, Column, PropertyName)
```

Where:

- **PropertyValue** is the value to which you want to set the specified property, such as one or “BLAH”
- **Statement** is the result of valid [JQLCOMPILE](276773-5-jqlcompile) .
- **Column** holds 0 for a general property of the statement, or a column number if it is something that can be set for a specific column.
- **PropertyName**  are **EQUATED** values defined by **INCLUDE**’ing the file JQLINTERFACE.h.


This function returns -1 if it locates a problem in the statement and zero for no problem.

## Note: 


> Properties are valid after the compile; this is the main reason for separating the compile and execute into two functions. After compiling, it is possible to examine the properties and set properties before executing.
> 
> It should also be noted that some properties may require [JQLEXECUTE](276783-jqlexecute) first.


For a practical example of use, see the **jexport.b** program in the **$JBCRELELEASEDIR/****samples/JQLBASIC** directory.

Go back to [jBASE BASIC](263498-jbase-basic).
