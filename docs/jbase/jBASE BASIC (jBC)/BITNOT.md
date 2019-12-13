# BITNOT

**Created At:** 11/3/2017 2:14:07 PM  
**Updated At:** 1/5/2018 6:46:36 PM  


# Description

The **BITNOT** function returns the bitwise negation of an integer specified by any numeric expression.

```
BITNOT(expression ,bit#)
```

Where:

bit# is an expression that evaluates to the number of the bit to invert. If bit# is unspecified, **BITNOT**inverts each bit. It changes each bit of 1 to a bit of 0 and each bit of 0 to a bit of 1. This is equivalent to returning a value equal to the following: (expression)1

If expression evaluates to the null value, null is returned. If bit# evaluates to the null value, the **BITNOT** function fails and the program terminates with a run-time error message.

Non integer values are truncated before the operation is performed.

The **BITNOT** operation is performed on a 32-bit twos-complement word.

Note:


> Differences in hardware architecture can make the use of the high-order bit non portable.


An example of use is as:

```
PRINT BITNOT(6),BITNOT(15,0),BITNOT(15,1),BITNOT(15,2)
```

to output:
7 14 13 11



Go back to [jBASE BASIC.](263498-jbase-basic)
