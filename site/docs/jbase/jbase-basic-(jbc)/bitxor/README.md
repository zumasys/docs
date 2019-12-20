# BITXOR

**Created At:** 11/3/2017 2:56:10 PM  
**Updated At:** 1/5/2018 6:47:50 PM  
**Original Doc:** [284144-bitxor](https://docs.jbase.com/36868-jbase-basic/284144-bitxor)  


# Description

The **BITXOR** function performs the bitwise XOR comparison of two integers specified by numeric expressions. The bitwise XOR operation compares two integers bit by bit, returning a bit 1 if only one of the two bits is 1; else, it returns a bit 0.

It takes the general form:

```
BITXOR(expression1, expression2) 
```

If either expression1 or expression2 evaluates to the null value, null is returned.
Non integer values are truncated before the operation is performed.
The **BITXOR**operation is performed on a 32-bit twos-complement word. It should be noted that differences in hardware architecture can make the use of the high-order bit nonportable.

An example of use is as:

```
 PRINT BITXOR(6,12)
* Binary value of 6 = 0110
* Binary value of 12 = 1100
```

This results in 1010, and the following output is displayed:
10



Go back to [jBASE BASIC](263498-jbase-basic).
