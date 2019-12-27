# PN5_60547

**Created At:** 6/12/2017 3:33:41 PM  
**Updated At:** 11/21/2017 10:41:27 AM  
**Original Doc:** [pn5_60547](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60547)  
**Original ID:** 258665  
**Internal:** No  


### Description

When working with string constants and **case\_insensitive\_runtime\_strings = true**, the wrong case could be returned once that constant had been used in a case insensitive fashion.

### Previous Release Behavior

Given the following code

```
CRT CHANGE('xX','x','x')
PRINT 'x'
```

In this code, wherever you see 'x', it is the same string constant.

In the CHANGE() function, the second parameter is the 'From' parameter and is 'x'. This needs a case insensitive version making so we create 'X' as a case insensitive version of 'x'. However the third parameter, which is also 'x', is the same string constant but instead of using 'x' it uses the case insensitive version which is 'X'. The upshot is that the first line prints 'XX' instead of 'xx'.

However, the string constant 'x' retains the case insensitive version 'X'. And when we come to the second line, that makes the mistake of using the case insensitive version 'X' instead of 'x'.

### Current Release Behavior

In the above example, the first line prints 'xx' and the second line prints 'x'.
