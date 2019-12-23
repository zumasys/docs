# NOT

**Created At:** 9/15/2017 2:20:47 PM  
**Updated At:** 11/27/2018 9:47:05 AM  
**Original Doc:** [276991-not](https://docs.jbase.com/36868-jbase-basic/276991-not)  

**Tags:**
<badge text='program control' vertical='middle' />

# Description

The **NOT**function is used to invert the Boolean value of an expression. It is useful for explicitly testing for a false condition. It takes the general form:

```
NOT(expression)
```

Where **expression** may evaluate to any Boolean result.

The **NOT** function will return Boolean TRUE if the expression returned a Boolean FALSE. It will return Boolean FALSE of the expression returned a Boolean TRUE. The function is useful for explicitly testing for the false condition of some test and can clarify the logic of such a test.

An example of use may be:

```
EQU Sunday TO NOT (MOD (DATE(), 7))
IF Sunday THEN
    CRT "It is Sunday!"
END
```

In this example, the expression [MOD(DATE(),7)](./../mod&rem) will return 0 (FALSE) if the day is Sunday and 1 to 6 (TRUE) for the other days. To explicitly test for the day Sunday we need to invert the result of the expression. BY using the **NOT**function to return a 1 (TRUE) if the day is Sunday and 0 (FALSE) for all other values of the expression.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
