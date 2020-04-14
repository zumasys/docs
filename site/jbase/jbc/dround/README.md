# DROUND

<PageHeader />

## Description

The **DROUND** function performs double-precision rounding on a value. Double-precision rounding uses two words to store a number, accommodating a larger number than in single-precision rounding, which stores each number in a single word.

```
DROUND(val.expr [,precision.expr])
```

Where:

- **val.expr** specifies the value to round.
- **precision.expr** specifies the precision for the rounding. The valid range is 0 to 14. Default precision is four places.

## Note

> **DROUND** affects the internal representation of the numeric value. It performs the rounding without conversion to and from string variables. This increases the speed of calculation.

An example of use is as:

```
    pi = 3.14159265358979
    radius = 3
    area = DROUND(pi * ( radius^2 ), 4)
    CRT "The area of a circle with radius of " : radius : " is : " : area
```

The above results in the following being displayed:

```
The area of a circle with radius of 3 is : 28.2744
```

The equation is resolved, and the result is rounded to four decimal places.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
