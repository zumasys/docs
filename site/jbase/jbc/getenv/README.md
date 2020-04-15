# GETENV

<PageHeader />

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
    CRT "CLASSPATH path is " : ClassPath
END ELSE
    CRT "CLASSPATH is not defined"
END
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
