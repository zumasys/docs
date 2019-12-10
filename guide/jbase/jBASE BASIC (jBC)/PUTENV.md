# PUTENV

**Created At:** 9/22/2017 2:32:07 PM  
**Updated At:** 11/27/2018 9:18:10 AM  

**Tags:**
<badge text='setting environment variables' vertical='middle' />
<badge text='environment variables' vertical='middle' />

# Description

**PUTENV()**function is used to set environment variables for the current process. It takes the general form:

```
PUTENV(expression)
```

**expression** should evaluate to a string of the form:

```
EnvVarName=value
```

Where **EnvVarName** is the name of a valid environment variable and **value** is any string that makes sense tothe variable being set.

If the **PUTENV()** function succeeds it returns a boolean TRUE value, if it fails it will return a boolean FALSE value.

## Note:


> **PUTENV** only sets environment variables for the current process and processes spawned (say by [EXECUTE](269198-execute)) by this process. These variables are known as export only variables.


An example of use is as:

```
IF PUTENV("JBASICLOGNAME=":UserName) THEN
    CRT "Environment configured"
END
```



See also: [GETENV](276057-getenv)

Go back to [jBASE BASIC](263498-jbase-basic).
