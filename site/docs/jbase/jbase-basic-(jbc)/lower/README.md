# LOWER

**Created At:** 9/15/2017 10:07:02 AM  
**Updated At:** 11/27/2018 8:23:32 AM  
**Original Doc:** [276942-lower](https://docs.jbase.com/36868-jbase-basic/276942-lower)  
**Original ID:** 276942  
**Internal:** No  

**Tags:**
<badge text='delimiters' vertical='middle' />

# Description

The **LOWER()** function lowers system delimiters in a string to the next lowest delimiter. It takes the general form:

```
LOWER(expression)
```

Where **expression** is a string containing one or more delimiters, lowered as follows:


| Ascii Character<br> |  Lowered to<br> |
| --- | --- |
| 255<br> | 254<br> |
| 254<br> | 253<br> |
| 253<br> | 252<br> |
| 252<br> | 251<br> |
| 251<br> | 250<br> |
| 250<br> | 249<br> |
| 249<br> | 248<br> |


An example of use would be as:

```
ValuemarkDelimitedVariable = LOWER(AttributeDelimitedVariable)
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
