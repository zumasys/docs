# MSLEEP

**Created At:** 9/15/2017 1:53:31 PM  
**Updated At:** 11/27/2018 9:47:47 AM  
**Original Doc:** [276984-msleep](https://docs.jbase.com/36868-jbase-basic/276984-msleep)  
**Original ID:** 276984  
**Internal:** No  

**Tags:**
<badge text='program execution' vertical='middle' />

## Description

Allows the program to pause execution for a specified number of **milliseconds**. It takes the general form:

```
MSLEEP {milliseconds}
```

Where **milliseconds** must be an integer, specifying the number of **milliseconds** to sleep. In the absence of parameters, a default time of 1 millisecond will be assumed.

## Note

> If the debugger is invoked while a program is sleeping and then execution continued, the user will be prompted: Continue with SLEEP (Y/N) ?
>
> If "N" is the response, the program will continue at the next statement after the **MSLEEP**.

An example of use is as:

```
*To sleep for 10 seconds
MSLEEP 10000

* 40 winks...
MSLEEP 40000
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
