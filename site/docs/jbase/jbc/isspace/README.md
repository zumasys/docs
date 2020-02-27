# ISSPACE

**Created At:** 9/13/2017 1:28:37 PM  
**Updated At:** 11/27/2018 8:07:32 AM  
**Original Doc:** [276615-isspace](https://docs.jbase.com/36868-jbase-basic/276615-isspace)  
**Original ID:** 276615  
**Internal:** No  

**Tags:**
<badge text='string handling' vertical='middle' />

## Description

The **ISSPACE()** function will check that the expression consists of entirely space type characters. The function takes the general form:

```
ISSPACE(expression)
```

Where **expression** can return a result of any type.

The **ISSPACE()** function will then return **TRUE**  (1) if the expression consists of entirely spacing type characters, like **@TAB**. The function will return **FALSE** (0) if the expression contains any characters, which are not space characters.

## International Mode

When the **ISSPACE()** function is used in International Mode, the properties of each character are determined according to the Unicode Standard.

Go back to [jBASE BASIC](./../README.md)
