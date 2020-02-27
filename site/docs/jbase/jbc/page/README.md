# PAGE

**Created At:** 9/22/2017 12:04:11 PM  
**Updated At:** 11/27/2018 9:42:11 AM  
**Original Doc:** [277626-page](https://docs.jbase.com/36868-jbase-basic/277626-page)  
**Original ID:** 277626  
**Internal:** No  

**Tags:**
<badge text='printing' vertical='middle' />
<badge text='output' vertical='middle' />

## Description

Prints any [FOOTING](./../footing) statement, throws a **PAGE** and prints any heading statement on the current output device. It takes the general form:

```
PAGE {expression}
```

Where **expression** if specified should evaluate to a numeric integer, which will cause the page number after the page throw to be set to this value.

An example to illustrate its use is as:

```
HEADING "10 Page Report"

FOR I = 1 TO 10
    PAGE
    GOSUB PrintPage
NEXT I
```

Go back to [jBASE BASIC](./../README.md)
