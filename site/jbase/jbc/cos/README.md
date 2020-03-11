# COS

**Created At:** 8/14/2017 9:56:51 AM  
**Updated At:** 10/25/2018 7:07:40 AM  
**Original Doc:** [266860-cos](https://docs.jbase.com/36868-jbase-basic/266860-cos)  
**Original ID:** 266860  
**Internal:** No  

## Description

The function calculates the cosine of any angle using floating point arithmetic, then rounds to the [PRECISION](./../precision) implied by the jBASE BASIC program, which makes it very accurate. The function takes the general form:

```
 COS(expression)
```

Where **expression** must evaluate to a numeric result or a runtime error will occur.

## Note

> The function assumes the value returned by expression to be in degrees.

An example of use is as:

```
FOR I = 1 TO 360
    CRT COS(I)  ;* print cos i for 1 to 360 degrees
NEXT I
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

