# PRINTERR

**Created At:** 9/22/2017 2:09:19 PM  
**Updated At:** 11/27/2018 10:04:39 AM  

**Tags:**
<badge text='printing' vertical='middle' />
<badge text='output' vertical='middle' />

# Description

This function is used to print standard jBASE error messages. It takes the general form:

```
PRINTERR expression
```

Where **expression** should evaluate to the numeric or string name of a valid error message in the jBASE error message file. If the error message requires parameters then these can be passed to the message as subsequent fields of the expression.

# **INTERNATIONAL MODE**

When the **PRINTERR** statement is used in International Mode, the error message file to be used, i.e. the default “jBASICmessages” or other as configured via the error message environment variable, will be suffixed with the current locale. For example, if the currently configured locale is “fr\_FR” then the statement will attempt to find the specified error message record id in the “jBASICmessages\_fr\_FR” error message file. If the file cannot be found then the country code will be discarded and just the language code used. i.e. the file  jBASICmessages\_fr” will be used. If this file is also not found then the error message file “jBASICmessages” will be used.

## Note:


> - The **PRINTERR** statement is most useful for user-defined messages that have been added to the standard set, with care being taken to not type the [PRINTER](277632-printer) statement instead.
> - Although this is not ideal, the **PRINTERR** statement must be supported for compatibility with older systems.


An example of use is as:

```
PRINTERR 201:@AM:"CUSTOMERS"
```



Go back to [jBASE BASIC](263498-jbase-basic).
