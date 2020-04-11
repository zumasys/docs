# GETX

**Created At:** 9/6/2017 2:11:59 PM  
**Updated At:** 1/5/2018 1:52:40 PM  
**Original Doc:** [276073-getx](https://docs.jbase.com/36868-jbase-basic/276073-getx)  
**Original ID:** 276073  
**Internal:** No  

## Description

The **GETX** statement reads a block of data (in ASCII hexadecimal format) directly from a device. This can take the general form:

```
GETX Var {,length} {SETTING Count} FROM Device {UNTIL TermChars} {RETURNING TermChar} {WAITING Timeout} THEN | ELSE statements
```

Where:

- **Var** is the variable in which to place the input (from the previously open Device).
- If specifying a **length** it limits the number of characters read from the input device.
- If the optional **Count** is used, it returns the number of characters actually read from the device.
- **Device** is the file variable associated with the result from a successful [OPENSEQ](./../openseq) or [OPENSER](./../openser) command.
- **TermChars** specifies one or more characters that will terminate input.
- **TermChar** The actual character that terminated input
- **Timeout** is the number of seconds to wait for input. If no input is present when the timeout period expires, the ELSE clause (if specified) is executed.

## Note

> The **GETX** statement does no pre or post processing of the input data stream nor does it handle any terminal echo characteristics. It is assumed that if this is desired the application - or device driver – will handle it.

If there are no specified **length** and **Timeout** expressions, the default input length is one (1) character. If there is no **length** specified, but **TermChars** is specified, there is no limit to the number of characters input.

The **GETX** syntax requires a specified **THEN** or **ELSE** clause, or both. The **THEN** clause executes when the data received is error free; the **ELSE** clause executes when the data is unreceiveable (or a timeout occurs).

**GETX** will convert all input into ASCII hexadecimal format after input.

See also: [GET](./../get)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
