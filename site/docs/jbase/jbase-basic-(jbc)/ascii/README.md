# ASCII

**Created At:** 11/3/2017 1:42:22 PM  
**Updated At:** 1/5/2018 6:45:04 PM  
**Original Doc:** [284128-ascii](https://docs.jbase.com/36868-jbase-basic/284128-ascii)  


# Description 

The **ASCII**function converts all the characters in the expression from the [EBCDIC](276030-ebcdic) character set to the ASCII character set. It takes the general form:

```
ASCII(expression) 
```

Where:

expression may return a data string of any form. The function will then assume that the characters are all members of the [EBCDIC](276030-ebcdic) character set and translate them using a character map. The original expression is unchanged while the returned result of the function is now the **ASCII** equivalent.

An example of use is as:

```
READT EbcdicBlock ELSE CRT "Tape failed!"; STOP
AsciiBlock = ASCII (EbcdicBlock) ;* convert to ASCII
```



Go back to [jBASE BASIC](263498-jbase-basic).
