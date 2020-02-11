# JBASE_ERRMSG_DIVIDE_ZERO

**Created At:** 11/3/2017 5:05:34 PM  
**Updated At:** 10/26/2018 1:09:01 PM  
**Original Doc:** [jbase_errmsg_divide_zero](https://docs.jbase.com/41717-environment-variables/jbase_errmsg_divide_zero)  
**Original ID:** 284181  
**Internal:** No  

## Description

Defines behavior in a BASIC program when the divisor of an arithmetic division results to a value of '0' (zero). The default behavior is to raise an error and drop into the debugger.

## Values

| Value | Definition  |
| --- | --- |
| 1 | Don't display an error message |
| 2 | Don't enter the debugger |
| 16 | Caller to place "0" in the target variable after operation |
| 32 | Caller to place "" (null) in the target variable after operation |
| 64 | Caller to leave target variable alone after operation |
| 124 | Caller to place source variable in the target variable after operation |

## Default

0 - Raise an error and drop into the debugger

## Setting

The value stored is a bit mask so different behaviors can be combined by adding them together.

For example, to suppress the error message and avoid going into the debugger, set the variable to 3.

As per normal environment variables, it can be set at any time or in a BASIC program with the jBC [PUTENV](./../../jbase-basic-%28jbc%29/putenv) function.

### UNIX

```
export JBASE_ERRMSG_DIVIDE_ZERO=3
```

### Windows

```
set JBASE_ERRMSG_DIVIDE_ZERO=3
```

Go Back to  [Error Handling](./../../jbase-basic-%28jbc%29/jbc-error-handling)
