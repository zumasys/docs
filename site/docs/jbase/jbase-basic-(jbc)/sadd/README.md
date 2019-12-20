# SADD

**Created At:** 9/28/2017 8:33:09 AM  
**Updated At:** 1/5/2018 6:13:47 PM  
**Original Doc:** [278796-sadd](https://docs.jbase.com/36868-jbase-basic/278796-sadd)  


# Description

The **SADD** function performs string addition of two base 10-string numbers. It takes the general from:

```
SADD(expr1, expr2)
```

Where :

expr1 and expr2 are strings consisting of numeric characters, optionally including a decimal part.

The **SADD**function can be used with numbers that may exceed a valid range with standard arithmetic operators.

The [PRECISION](277629-precision) declaration has no effect on the value returned by **SADD**. Examples of use would be:

```
A = 4000000000000000000000000000000
B = 7
CRT SADD (A,B)
```

to display 4000000000000000000000000000007 to the screen, or

```
CRT SADD (4.33333333333333333,1.8)
```

to display 6.13333333333333333.



Go back to [jBASE BASIC](263498-jbase-basic).
