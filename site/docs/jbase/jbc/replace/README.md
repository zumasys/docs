# REPLACE

**Created At:** 9/28/2017 7:42:54 AM  
**Updated At:** 5/17/2018 4:34:43 PM  
**Original Doc:** [278786-replace](https://docs.jbase.com/36868-jbase-basic/278786-replace)  
**Original ID:** 278786  
**Internal:** No  

## Description

**REPLACE** is an obsolete way to assign to dynamic arrays via a function. It takes the form:

```
REPLACE(var, expression1{, expression2{, expression3}}; expression4)
```

Where:

- **var** is the dynamic array that the **REPLACE** function will use to assign **expression4**. Unless the same var is assigned the result of the function remains unchanged.
- **expression1** specifies into which field assignment will be made and should evaluate to a numeric.
- **expression2** is only specified when multi-value assignment is to be done and should evaluate to a numeric.
- **expression3** is only specified when sub-value assignment is to be done and should evaluate to a numeric.
- **expression4** can evaluate to any data type and is the actual data that will be assigned to the array.

The function returns a copy of **var** with the specified replacement carried out. This value may be assigned to the original var, in which case the jBASE BASIC compiler will optimize the assignment.

An example of use is as:

```
X = "JBASE":MV:"is Great"
X = REPLACE (X,1,1;"jBASE")
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide)
