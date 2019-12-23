# WEOF

**Created At:** 10/4/2017 10:24:05 AM  
**Updated At:** 1/5/2018 6:30:54 PM  
**Original Doc:** [279559-weof](https://docs.jbase.com/36868-jbase-basic/279559-weof)  


# Description

The **WEOF** statement allows the program to write an EOF mark on an attached tape device. It takes the general form:

```
WEOF {ON expression}
```

Where:

expression specifies the device channel to use and should evaluate to a numeric integer argument in the range 0-9, the default value is zero.

If the **WEOF**fails it then executes the statements associated with any ELSE clause. [SYSTEM(0)](./../system-functions) will return the reason for the failure as follows:


| 1<br> | there is no media attached to the channel<br> |
| --- | --- |
| 2<br> | end of media found<br> |




A "tape" does not refer to magnetic tape devices only but to any device described previously to jBASE.

If the specified channel has no assigned tape device, it enters the jBASE debugger with an appropriate message.

An example of use is as:

```
WEOF ON 5 ELSE
    CRT "No tape device exists for channel 5"
END
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
