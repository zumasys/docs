# SEND

**Created At:** 10/4/2017 1:36:57 PM  
**Updated At:** 1/5/2018 6:43:03 PM  
**Original Doc:** [279584-send](https://docs.jbase.com/36868-jbase-basic/279584-send)  


# Description 

The **SEND** statement sends a block of data directly to a device. This takes the general form:

```
SEND output {:} TO FileVar THEN | ELSE statements
```

Where:

output is an expression evaluating to a string that will be sent to the output device (specified by FileVar). It is expected that the device has already been opened with [OPENSER](277544-openser) or [OPENSEQ](277543-openseq).
The **SEND**statement will append a newline sequence to the final output expression unless it is terminated with a colon ":" character.

## Note: 


> As the expression can be any valid expression, it may have output formatting applied to it.
> The **SEND**syntax requires you specify either a THEN or ELSE clause, or both. It executes the THEN clause if the data is without error. Else executes, the ELSE clause if the data cannot be sent.
> View other sequential file operations for examples of use.


See also: [SENDX](278804-sendx) .

Go back to [jBASE BASIC](263498-jbase-basic).
