# PN5_60615

**Created At:** 10/2/2017 2:12:54 PM  
**Updated At:** 11/21/2017 1:45:25 PM  
**Original Doc:** [pn5_60615](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60615)  


### Description

jBC: Parenthetical expressions misinterpreted as DIMensioned arrays instead of format strings



### Previous Release Behavior

```
0001     val = "xyz"
0002     width = 10
0003     val = (val) ("L#":width)
```

Attempting to compile this program would error out with:

```
Variable val was assumed to be a DIMensioned array but no DIM statement was found
jbccom -f -d -abp BASIC_2.b failed , command returned a code of 1
jcompile: BASIC_2.j deleted
jcompile: BASIC_2.c deleted
jcompile: Returned an error code of 8
 ** Unable to compile source mtest.b **
Return code = BASIC_ERROR
```

because the compiler assumed that the variable **val** was a DIMensioned array.

The program would have had to be restructured as:

```
0001     val = "xyz"
0002     width = 10
0003     format = "L#":width
0004     val = val format
```



### Current Release Behavior

Complex format expressions can be used freely and will not be interpreted as DIMensioned arrays.

This  will only affect the compile where it is already expecting a format  specifier, i.e. variable assignments and PRINT/CRT/DISPLAY statements.

It is advisable to place the expression that is being formatted in parenthesis to avoid ambiguities.
