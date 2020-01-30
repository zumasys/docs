# PUTENV

**Created At:** 9/22/2017 2:32:07 PM  
**Updated At:** 11/27/2018 9:18:10 AM  
**Original Doc:** [putenv](https://docs.jbase.com/36868-jbase-basic/putenv)  
**Original ID:** 277640  
**Internal:** No  

**Tags:**
<badge text='setting environment variables' vertical='middle' />
<badge text='environment variables' vertical='middle' />

## Description

The **PUTENV** function is used to set environment variables for the current process. It takes the general form:

```
PUTENV(expression)
```

**expression** should evaluate to a string of the form:

```
EnvVarName = value
```

Where **EnvVarName** is the name of a valid environment variable and **value** is any string that makes sense for the variable being set.

If the **PUTENV** function succeeds it returns a boolean TRUE value, if it fails it will return a boolean FALSE value.

## Note

> **PUTENV** only sets environment variables for the current process and processes spawned (say by [EXECUTE](./../execute)) by this process. These variables are known as export only variables.

An example of use is as:

```
IF PUTENV("JBASICLOGNAME = " : UserName) THEN
    CRT "Environment configured"
END
```

See also: [GETENV](./../getenv)

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
