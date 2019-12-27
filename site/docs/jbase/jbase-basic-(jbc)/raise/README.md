# RAISE

**Created At:** 11/6/2017 2:43:39 PM  
**Updated At:** 1/5/2018 6:51:04 PM  
**Original Doc:** [284366-raise](https://docs.jbase.com/36868-jbase-basic/284366-raise)  
**Original ID:** 284366  
**Internal:** No  


# Description 

The **RAISE** function raises system delimiters in a string to the next highest delimiter. It takes the general form:

```
RAISE(expression)
```

Where:

expression is a string containing one or more delimiters, which are raised as follows:


| ASCII Character<br> | Raised To<br> |
| --- | --- |
| 248<br> | 249<br> |
| 249<br> | 250<br> |
| 250<br> | 251<br> |
| 251<br> | 252<br> |
| 252<br> | 253<br> |
| 253<br> | 254<br> |
| 254<br> | 255<br> |


An example of use is as:

```
AttributeDelimitedVariable = RAISE(ValuemarkDelimitedVariable)
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
