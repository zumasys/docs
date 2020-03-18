# STR

**Created At:** 9/28/2017 1:58:40 PM  
**Updated At:** 1/30/2019 9:52:07 AM  
**Original Doc:** [278839-str](https://docs.jbase.com/36868-jbase-basic/278839-str)  
**Original ID:** 278839  
**Internal:** No  

## Description

The **STR** function allows the duplication of a string a number of times. The function generally takes the form:

```
STR(expression1, expression2)
```

Where:

**expression1** will evaluate to the string to duplicate and may be of any length.

**expression2** should evaluate to a numeric integer, which specifies the number of times the string will be duplicated. If this value is non-numeric then jBASE will enter the debugger. If it is null or negative then the function returns "" (null).

An example of use is:

```
x999 = STR("x", 999)
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
