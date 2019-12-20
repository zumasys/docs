# JBASE_ERRMSG_ZERO_USED

**Created At:** 11/3/2017 5:00:29 PM  
**Updated At:** 10/26/2018 1:18:24 PM  
**Original Doc:** [jbase_errmsg_zero_used](https://docs.jbase.com/41717-environment-variables/jbase_errmsg_zero_used)  

**Tags:**
<badge text='error messages' vertical='middle' />

## Description

Defines behavior when a BASIC program encounters a null variable, i.e. a variable that has never been assigned a value.

The default behavior is to raise an error and drop into the debugger.

## Values


| Value | Definition |
| --- | --- |
| 1 | Don't display an error message<br> |
| 2 | Don't enter the debugger<br> |
| 16 | Caller to place "0" in the target variable after operation<br> |
| 32 | Caller to place "" (null) in the target variable after operation<br> |
| 64 | Caller to leave target variable alone after operation<br> |
| 128 | Caller to place source variable in the target variable after operation<br> |




## Default

0 - Raise an error and drop into the debugger

## 


## Setting

The value stored as a bit mask so different behaviors can be combined by adding them together.

For example, to suppress the error message and avoid going into the debugger, set the variable to 3.

As per normal environment variables, it can be set at any time or in a BASIC program with the jBC [PUTENV](277640-putenv) function.

### Unix

```
export JBASE_ERRMSG_ZERO_USED=3
```

### Windows

```
set JBASE_ERRMSG_ZERO_USED=3
```

## 


Back to [Error Handling](jbc-error-handling)


