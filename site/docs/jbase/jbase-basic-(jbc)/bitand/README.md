# BITAND

**Created At:** 11/3/2017 1:48:31 PM  
**Updated At:** 1/5/2018 6:45:15 PM  
**Original Doc:** [284129-bitand](https://docs.jbase.com/36868-jbase-basic/284129-bitand)  
**Original ID:** 284129  
**Internal:** No  


# Description 

The **BITAND** function may be used to perform the bitwise AND comparison of two integers specified by numeric expressions. It takes the general form:

```
BITAND(expression1, expression2)
```

The bitwise AND operation compares two integers bit by bit. It returns a bit of 1 if both bits are 1; else, it returns a bit of 0.
If either expression1 or expression2 evaluates to the null value, null is returned.

Non integer values are truncated before the operation is performed.
The BITAND operation is performed on a 32-bit twos-complement word.
It should however be noted that differences in hardware architecture can make the use of the high-order bit non portable.

An example of use would be as:

```
PRINT BITAND(6,12)
* The binary value of 6 = 0110
* The binary value of 12 = 1100
```

This results in 0100, and the following output is displayed: 4



Go back to [jBASE BASIC.](./../jbase-basic-programmers-reference-guide)
