# FMTS

<PageHeader />

## Description

The **FMTS** function may be used to format elements of dynamic.array for output. Each element of the array is independently acted upon and returned as an element in a new dynamic array. The function takes the general form:

```
FMTS(dynamic.array, format)
```

Where:

**format** is an expression that evaluates to a string of formatting codes. The Syntax of the format expression is:<br><br>
[width] [background] justification [edit] [mask]

The **format** expression specifies the width of the output field, the placement of background or fill characters, line justification, editing specifications, and format masking.  
Complete syntax details, can be found on the [FMT function](./../fmt).

If **dynamic.array** evaluates to null, it returns null. If format evaluates to null, the **FMTS** function fails and the program enters the debugger.

- GE Operator, similar to eq., compares two expressions for greater than or equal
- GT As Above, except Greater than
- GTS Add as per GES, except just greater than for dynamic array expression [FMUL](./../fmul)/[FDIV](./../fdiv)/[FADD](./../fadd)/[FSUB](./../fsub).

An example of use is as:

```
    sales.ytd = 105632 : @VM : 231571 : @VM : 2057913 : @VM : 3156789
    CRT OCONV( FMTS(sales.ytd, "MR22#11"), "MCP")
```

which displays the following output to the screen:

```
    1056.32]    2315.71]   20579.13]   31567.89
```

See also: [FMT function](./../fmt).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
