# LENDP

**Created At:** 9/15/2017 8:18:22 AM  
**Updated At:** 11/27/2018 10:12:52 AM  
**Original Doc:** [276932-lendp](https://docs.jbase.com/36868-jbase-basic/276932-lendp)  
**Original ID:** 276932  
**Internal:** No  

**Tags:**
<badge text='string handling' vertical='middle' />

## Description

The **LENDP** function returns the display length of an expression. It takes the general form:

```
LENDP(expression)
```

Where **expression** can evaluate to any type. The **LENDP** function will evaluate each character in **expression** and return the calculated display length.

## International Mode

The **LENDP** function when used in International Mode will return the display length for the characters in the specified **expression** rather than the number of bytes.

Note that some characters, usually Japanese, Chinese, etc. will return a display length of greater than one for some characters.

Some characters, for instance control characters or null (char 0), will return a display length of 0.

Go back to [jBASE BASIC](./../README.md)
