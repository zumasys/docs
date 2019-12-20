# INPUTCLEAR

**Created At:** 9/8/2017 2:25:20 PM  
**Updated At:** 10/30/2018 1:22:39 PM  
**Original Doc:** [276286-inputclear](https://docs.jbase.com/36868-jbase-basic/276286-inputclear)  


# Description 

The **INPUTCLEAR** statement clears the type-ahead buffer. It is useful in situations where the user may have pressed the carriage return key several times prior to reaching an [INPUT](input) that requires attention.

It takes the general form:

```
INPUTCLEAR
```

**INPUTCLEAR** only clears the type-ahead buffer. It does not clear data stacked with the [DATA](267389-data) statement. The statement is synonymous with [CLEARINPUT](266854-clearinput).

An example of use is as:

```
0001     CRT "Start year end processing (Yes/No) :"
0002     INPUTCLEAR
0003     INPUT ans
0004     IF ans # "Yes" THEN
0005         CRT "year end processing not started"
0006     END
```



Go back to [jBASE BASIC](263498-jbase-basic).
