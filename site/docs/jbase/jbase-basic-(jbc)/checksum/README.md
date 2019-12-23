# CHECKSUM

**Created At:** 11/6/2017 1:17:51 PM  
**Updated At:** 1/5/2018 6:48:05 PM  
**Original Doc:** [284335-checksum](https://docs.jbase.com/36868-jbase-basic/284335-checksum)  


# Description 

The **CHECKSUM** function returns a simple numeric checksum of a character string. It takes the general form:

```
CHECKSUM(expression)
```

Where:

expression may evaluate to any result but will usually be a string.

The function scans every character in the expression and returns a numeric addition of the characters within the the expression. This is done by calculating the checksum by summing the product of the ASCII value of each character and its position within the string.

An example of use is as:

```
INPUT DataBlock,128:
IF CHECKSUM(DataBlock) = ExpectedChk THEN
    CRT AckChar:
END
ELSE
......
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
