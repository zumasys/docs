# TAN

**Created At:** 9/28/2017 2:07:37 PM  
**Updated At:** 1/5/2018 6:23:59 PM  
**Original Doc:** [278843-tan](https://docs.jbase.com/36868-jbase-basic/278843-tan)  
**Original ID:** 278843  
**Internal:** No  

## Description

The **TAN** function returns the mathematical tangent of an angle. It takes the general form:

```
TAN(expression)
```

Where:

**expression** must evaluate to a numeric type.

The function calculates the result at the highest precision available on the host system; it truncates the result to the current [PRECISION](./../precision) after calculation.

An example of use is as:

```
PRECISION 2
ADJACENT = 42
ANGLE = 34

CRT "Opposite length = ":TAN(ANGLE)*ADJACENT
```

to display:  Opposite length = 28.14

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
