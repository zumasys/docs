# JQLGETPROPERTY

<PageHeader />

## Description

Gets the property of a compiled jQL statement. It takes the general form:

```
JQLGETPROPERTY(PropertyValue, Statement, Column, PropertyName)
```

Where:

- **PropertyValue** Receives the requested property value from the system or “” if the property is not set  
- **Statement** The result of a valid [JQLCOMPILE(Statement)](./../jqlcompile)
- **Column** Specifies that you want the value of the property for a specific column (otherwise 0 for the whole statement).
- **PropertyName** These are EQUATED values defined by INCLUDE’ing the file JQLINTERFACE.h.

This function returns -1 if there is a problem with the parameters or the program. These properties answer questions such as “Was LPTR mode asked for,” and “How many columns are there?”

## Note

> Properties are valid after the compile; this is the main reason for separating the compile and execute into two functions. After compiling, it is possible to examine the properties and set properties before executing.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
