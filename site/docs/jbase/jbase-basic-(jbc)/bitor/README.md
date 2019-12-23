# BITOR

**Created At:** 11/3/2017 2:27:41 PM  
**Updated At:** 1/5/2018 6:55:12 PM  
**Original Doc:** [284139-bitor](https://docs.jbase.com/36868-jbase-basic/284139-bitor)  


# Description 

The **BITOR** function is used to perform the bitwise OR comparison of two integers specified by numeric expressions. It takes the general form :

```
BITOR(expression1, expression2)
```

If either expression1 or expression2 evaluates to the null value, null is returned.

The bitwise OR operation compares two integers bit by bit. It returns the bit 1 if the bit in either or both numbers is 1; else, it returns the bit 0.
Non integer values are truncated before the operation is performed.
The**BITOR** operation is performed on a 32-bit twos-complement word. It should be noted that differences in hardware architecture can make the use of the high-order bit non portable.

An example of use is as :

```
PRINT BITOR(6,12)
* Binary value of 6 = 0110
* Binary value of 12 = 1100
```

This results in 1110, and the following output is displayed: 14



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
