# DROUND

**Created At:** 8/23/2017 2:23:43 PM  
**Updated At:** 10/25/2018 7:48:12 AM  


# Description

The **DROUND** function performs double-precision rounding on a value. Double-precision rounding uses two words to store a number, accommodating a larger number than in single-precision rounding, which stores each number in a single word.

```
DROUND(val.expr [,precision.expr])
```

Where:

- **val.expr** specifies the value to round.
- **precision.expr** specifies the precision for the rounding. The valid range is 0 to 14. Default precision is four places.


## Note:


> **DROUND** affects the internal representation of the numeric value. It performs the rounding without conversion to and from string variables. This increases the speed of calculation.


An example of use is as:

```
0001     A= DROUND((3.14159265999*2*3),4 )
0002     PRINT A
```

The above results in 18.8496 being printed out. The equation is resolved, and rounds the result to four decimal places.



Go back to [jBASE BASIC](263498-jbase-basic).
