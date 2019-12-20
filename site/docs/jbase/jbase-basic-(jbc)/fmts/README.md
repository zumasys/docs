# FMTS

**Created At:** 11/6/2017 1:42:39 PM  
**Updated At:** 1/5/2018 6:49:29 PM  
**Original Doc:** [284338-fmts](https://docs.jbase.com/36868-jbase-basic/284338-fmts)  


# Description

The **FMTS** function may be used to format elements of dynamic.array for output. Each element of the array is independently acted upon and returned as an element in a new dynamic array. The function takes the general form:

```
FMTS(dynamic.array, format)
```

Where:

format is an expression that evaluates to a string of formatting codes. The Syntax of the format expression is:
[width] [background] justification [edit] [mask]

The format expression specifies the width of the output field, the placement of background or fill characters, line justification, editing specifications, and format masking.Complete syntax details, can be found on the [FMT function](276047-fmt).

If dynamic.array evaluates to null, it returns null. If format evaluates to null, the **FMTS** function fails and the program enters the debugger.

- GE OPERATOR SIMILAR TO eq. compares two expressions for greater than or equal
- GT As Above, except Greater than
- GTS Add as per GES, except just greater than for dynamic array expression FMUL/[FDIV](269204-fdiv)/[FADD](269203-fadd)/[FSUB](276053-fsub).




See also: [FMT function](276047-fmt).

Go back to [jBASE BASIC](263498-jbase-basic).
