# ISCNTRL

**Created At:** 9/13/2017 1:17:13 PM  
**Updated At:** 10/30/2018 9:42:32 AM  
**Original Doc:** [276610-iscntrl](https://docs.jbase.com/36868-jbase-basic/276610-iscntrl)  
**Original ID:** 276610  
**Internal:** No  

**Tags:**
<badge text='string manipulation' vertical='middle' />

## Description

The **ISCNTRL()** function will check that the expression consists entirely of control characters. It takes the general form:

```
ISCNTRL(expression)
```

The **expression** can return a result from any type. The **ISCNTRL()** function will then return **TRUE** (1) if the expression consists of entirely control characters. The function will return **FALSE** (0) if the expression contains any characters, which are not control characters.

## International Mode

When the **ISCNTRL()** function is used in International Mode, the properties of each character are determined according to the Unicode Standard.

Go back to [jBASE BASIC](./../README.md)
