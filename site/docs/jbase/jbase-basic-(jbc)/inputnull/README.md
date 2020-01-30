# INPUTNULL

**Created At:** 9/8/2017 2:33:01 PM  
**Updated At:** 10/30/2018 1:22:25 PM  
**Original Doc:** [276287-inputnull](https://docs.jbase.com/36868-jbase-basic/276287-inputnull)  
**Original ID:** 276287  
**Internal:** No  

**Tags:**
<badge text='keyboard input' vertical='middle' />

## Description

The **INPUTNULL** statement allows the definition of a character that will allow a null input to be seen by the [INPUT@](./../input) statement. It takes the general form:

```
INPUTNULL expression
```

Where **expression** should evaluate to a single character. Subsequently, any [INPUT@](./../input) statement that sees only this character input before the new-line sequence will NULL the variable in which input is being stored.

If expression evaluates to the empty string '' then the default character of '\_' is used to define a NULL input sequence.

## Note

> The [INPUT](./../input) statement does not default to accepting the '\_' character as a NULL input.

An example of use is as:

```
    INPUTNULL "&"
    INPUT @(10,10):Answer,1
    IF Answer = "" THEN
        CRT "A NULL input was received"
    END
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
