# GETENV

**Created At:** 9/6/2017 12:46:09 PM  
**Updated At:** 10/30/2018 9:58:03 AM  
**Original Doc:** [276057-getenv](https://docs.jbase.com/36868-jbase-basic/276057-getenv)  
**Original ID:** 276057  
**Internal:** No  

**Tags:**
<badge text='jbase environment  setup' vertical='middle' />

## Description

All processes have an environment associated with them that contains a number of variables indicating the state of various parameters. The **GETENV** function allows a program to determine the value of any of the environment variables associated with it. It takes the general form:

```
 GETENV(expression, variable)
```

Where:

- **expression** should evaluate to the name of the environment variable whose value is to be returned.
- The function will then assign the value of the environment variable to **variable.**

The function itself returns a boolean TRUE or FALSE value indicating the success or failure of the function.

An example of use is as:

```
IF GETENV("CLASSPATH", ClassPath) THEN
    CRT "CLASSPATH path is ":ClassPath
END ELSE
    CRT "CLASSPATH is not set up"
END
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
