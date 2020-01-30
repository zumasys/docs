# INPUTCLEAR

**Created At:** 9/8/2017 2:25:20 PM  
**Updated At:** 10/30/2018 1:22:39 PM  
**Original Doc:** [276286-inputclear](https://docs.jbase.com/36868-jbase-basic/276286-inputclear)  
**Original ID:** 276286  
**Internal:** No  

## Description

The **INPUTCLEAR** statement clears the type-ahead buffer. It is useful in situations where the user may have pressed the carriage return key several times prior to reaching an [INPUT](./../input) that requires attention.

It takes the general form:

```
INPUTCLEAR
```

**INPUTCLEAR** only clears the type-ahead buffer. It does not clear data stacked with the [DATA](./../data) statement. The statement is synonymous with [CLEARINPUT](./../clearinput).

An example of use is as:

```
    CRT "Start year end processing (Yes/No) :"
    INPUTCLEAR
    INPUT ans
    IF ans # "Yes" THEN
        CRT "Year end processing not started"
    END
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
