# EBCDIC

**Created At:** 9/6/2017 8:27:32 AM  
**Updated At:** 10/30/2018 1:23:03 PM  
**Original Doc:** [276030-ebcdic](https://docs.jbase.com/36868-jbase-basic/276030-ebcdic)  
**Original ID:** 276030  
**Internal:** No  

**Tags:**
<badge text='character conversion' vertical='middle' />

## Description

This function converts all the characters in an expression from the ASCII character set to the **EBCDIC** character set. It takes the general form:

```
 EBCDIC(expression)
```

Where **expression** may contain a data string of any form. The function will convert it to a character string, assume that the characters are all members of the ASCII set and translate them using a character map.

The original **expression** is unchanged while the returned result of the function is now the **EBCDIC** equivalent.

An example of use may be as:

```
     ascii_expression = "?m@?&???"
     CRT EBCDIC(ascii_expression)
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
