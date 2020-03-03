# LOWER

**Created At:** 9/15/2017 10:07:02 AM  
**Updated At:** 11/27/2018 8:23:32 AM  
**Original Doc:** [276942-lower](https://docs.jbase.com/36868-jbase-basic/276942-lower)  
**Original ID:** 276942  
**Internal:** No  

**Tags:**
<badge text='delimiters' vertical='middle' />

## Description

The **LOWER()** function lowers system delimiters in a string to the next lowest delimiter. It takes the general form:

```
LOWER(expression)
```

Where **expression** is a string containing one or more delimiters, lowered as follows:


| Ascii Character |  Lowered to |
| --- | --- |
| 255 | 254 |
| 254 | 253 |
| 253 | 252 |
| 252 | 251 |
| 251 | 250 |
| 250 | 249 |
| 249 | 248 |


An example of use would be as:

```
ValuemarkDelimitedVariable = LOWER(AttributeDelimitedVariable)
```

Go back to [jBASE BASIC](./../README.md)
