# PN5_60615

<PageHeader />

## Description

jBC: Parenthetical expressions misinterpreted as DIMensioned arrays instead of format strings

### Previous Release Behavior

```
val = "xyz"
width = 10
val = (val) ("L#" : width)
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
val = "xyz"
width = 10
format = "L#" : width
val = val format
```

### Current Release Behavior

Complex format expressions can be used freely and will not be interpreted as DIMensioned arrays.

This will only affect the compile where it is already expecting a format specifier, i.e. variable assignments and PRINT/CRT/DISPLAY statements.

It is advisable to place the expression that is being formatted in parenthesis to avoid ambiguities.

Back to [5.6.2 release Notes](./../README.md)
