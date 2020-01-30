# SENDX

**Created At:** 9/28/2017 9:18:00 AM  
**Updated At:** 1/5/2018 6:16:10 PM  
**Original Doc:** [278804-sendx](https://docs.jbase.com/36868-jbase-basic/278804-sendx)  
**Original ID:** 278804  
**Internal:** No  

## Description

The **SENDX** statement sends a block of data (in hexidecimal) directly to a device. It takes the general form:

```
SENDX output {:} TO FileVar THEN | ELSE statements
```

Where:

The **output** is an expression evaluating to a string that will be sent to the output device (specified by **FileVar**). It is expected that [OPENSER](./../openser) or [OPENSEQ](./../openseq) has already opened the device.

The **SENDX** statement will append a newline sequence to the final output expression unless it is terminated with a colon ":" character.

## Note

> As the expression can be any valid expression, it may have output formatting applied to it.

The **SENDX** syntax requires a specified **THEN** or **ELSE** clause, or both. If the data is send without error, it executes the **THEN** clause. If the data cannot be sent, it executes the **ELSE** clause.

See also: [SEND](./../send).

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
