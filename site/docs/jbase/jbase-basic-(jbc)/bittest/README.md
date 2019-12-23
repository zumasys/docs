# BITTEST

**Created At:** 11/3/2017 2:49:17 PM  
**Updated At:** 1/5/2018 6:47:41 PM  
**Original Doc:** [284143-bittest](https://docs.jbase.com/36868-jbase-basic/284143-bittest)  


# Description

The **BITTEST** function may be used to test the bit number of the integer specified by expression. It takes the general from:

```
BITTEST(expression, bit#) 
```

Where:

expression must evaluate to an integer. If expression evaluates to the null value, null is returned.

If bit# evaluates to null, the **BITTEST** function fails and the program terminates with a run-time error message.

The function returns 1 if the bit is set; it returns 0 if it is not; Bits are counted from right to left. The number of the rightmost bit is 0. Non integer values are truncated before the operation is performed.

An example of use is as:

```
PRINT BITTEST(11,0),BITTEST(11,1),BITTEST(11,2),BITTEST(11,3)
* The binary value of 11 = 1011
```

to output:
1 1 0 1



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
