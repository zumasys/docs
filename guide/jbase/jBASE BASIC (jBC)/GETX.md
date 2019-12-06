# GETX

**Created At:** 9/6/2017 2:11:59 PM  
**Updated At:** 1/5/2018 1:52:40 PM  


# Description

The**GETX**statement reads a block of data (in ASCII hexadecimal format) directly from a device. This can take the general form:

```
GETX Var {,length} {SETTING Count} FROM Device {UNTIL TermChars} {RETURNING TermChar} {WAITING Timeout} THEN | ELSE statements
```

Where:

- Var is the variable in which to place the input (from the previously open Device).
- If specifying a length it limits the number of characters read from the input device.
- If the optional Count option is used, it returns the number of characters actually read from the device.
- Device is the file variable associated with the result from a successful [OPENSEQ](277543-openseq) or [OPENSER](277544-openser) command.
- TermChars specifies one or more characters that will terminate input.
- TermChar The actual character that terminated input
- Timeout is the number of seconds to wait for input. If no input is present when the timeout period expires, the ELSE clause (if specified) is executed.


## Note:


> The **GETX**statement does no pre or post processing of the input data stream nor does it handle any terminal echo characteristics. It is assumed that if this is desired the application - or device driver – will handle it.


If there are no specified length and timeout expressions, the default input length is one (1) character. If there is no length specified, but TermChars is specified, there is no limit to the number of characters input.

The **GETX** syntax requires a specified THEN or ELSE clause, or both. The THEN clause executes when the data received is error free; the ELSE clause executes when the data is unreceiveable (or a timeout occurs).

**GETX** will convert all input into ASCII hexadecimal format after input.



See also: [GET](276055-get)

Go back to [jBASE BASIC](263498-jbase-basic).
