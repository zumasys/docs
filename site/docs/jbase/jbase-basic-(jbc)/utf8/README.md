# UTF8

**Created At:** 10/4/2017 10:14:08 AM  
**Updated At:** 1/5/2018 6:30:21 PM  
**Original Doc:** [279557-utf8](https://docs.jbase.com/36868-jbase-basic/279557-utf8)  
**Original ID:** 279557  
**Internal:** No  


# Description

The **UTF8** function converts a latin1 or binary string into the UTF-8 equivalent byte sequence. It takes the general form:

```
UTF8(expression)
```

Where:

expression is expected to be a binary/latin1code page string, which converts the binary string into a **UTF-8**encoded byte sequence, used to represent the Unicode values for each byte in the expression.

This function is useful for converting binary or latin1 code page data into internal format when in International Mode.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
