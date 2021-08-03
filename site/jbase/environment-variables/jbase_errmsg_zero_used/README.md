# JBASE_ERRMSG_ZERO_USED

<PageHeader />

**Tags:**
<badge text='error messages' vertical='middle' />

## Description

Defines behavior when a BASIC program encounters a null variable, i.e. a variable that has never been assigned a value.

The default behavior is to raise an error and drop into the debugger.

## Values

| Value | Definition |
| --- | --- |
| 1 | Don't display an error message |
| 2 | Don't enter the debugger |
| 16 | Caller to place "0" in the target variable after operation |
| 32 | Caller to place "" (null) in the target variable after operation |
| 64 | Caller to leave target variable alone after operation |
| 128 | Caller to place source variable in the target variable after operation |

## Default

0 - Raise an error and drop into the debugger

## Setting

The value is stored as a bit mask so different behaviors can be combined by adding them together.

For example, to suppress the error message and avoid going into the debugger, set the variable to 3.

As per normal environment variables, it can be set at any time or in a BASIC program with the jBC [PUTENV](./../../jbc/putenv/README.md) function.

### UNIX

```
export JBASE_ERRMSG_ZERO_USED=3
```

### Windows

```
set JBASE_ERRMSG_ZERO_USED=3
```

Go Back to [Error Handling](./../../jbc-error-handling/README.md)

Go Back to [Environment Variables](./../README.md)

<PageFooter />
