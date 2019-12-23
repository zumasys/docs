# SPACE

**Created At:** 9/28/2017 9:57:01 AM  
**Updated At:** 1/5/2018 6:19:22 PM  
**Original Doc:** [278814-space](https://docs.jbase.com/36868-jbase-basic/278814-space)  


# Description

The **SPACE** function generates a specific number of ASCII space characters. It takes the general form:

```
SPACE(expression)
```

Where:

expression should evaluate to a positive integer value.

The **SPACE** function will return the specified number of ASCII space characters and is useful for padding strings. It should not be used to position output on the terminal screen as this is inefficient, accomplish this by using the [@ function](./../the-'@'-function).

An example of use is as:

```
TenSpaces = SPACE(10)
```



Go back to[jBASE BASIC](./../jbase-basic-programmers-reference-guide).
