#  MATCHFIELD

**Created At:** 9/15/2017 12:03:23 PM  
**Updated At:** 11/27/2018 10:03:03 AM  

**Tags:**
<badge text='string handling' vertical='middle' />

# Description

The function checks a string against a match pattern, as does the [MATCH](276946-matches) operator, and returns the portion of string that matches the specified field in pattern.

It takes the general form:

```
MATCHFIELD(string, pattern, field)
```

Where:

- **field** is an expression that evaluates to the portion of the match string to be returned.
- If **string** matches pattern, the **MATCHFIELD**function returns 1.  If string does not match pattern, or if string or pattern evaluates to a null value, the **MATCHFIELD** function returns an empty string. If field evaluates to the null value, the **MATCHFIELD** function fails and the program terminates with a run-time error.
- **pattern** must contain specifiers to cover all characters contained in string. For example, the following statement returns an empty string because not all parts of string are specified in the pattern:


```
MATCHFIELD ("XYZ123AB", "3X3N", 1)
```

To achieve a positive pattern match on the string above, use the following statement:

```
MATCHFIELD ("XYZ123AB", "3X3N0X", 1)
```

to return "XYZ".

Other examples of use include:

```
Q=MATCHFIELD("AA123BBB9","2A0N3A0N",3)
PRINT "Q= ",Q ; * to print: Q= BBB

ADDR='20 GREEN ST. NATICK, MA.,01234'
ZIP=MATCHFIELD(ADDR,"0N0X5N",3)
PRINT "ZIP= ",ZIP ; * to print: ZIP= 01234

INV='PART12345 BLUE AU' COL=MATCHFIELD(INV,"10X4A3X",2)
PRINT "COL= ",COL ; * to print: COL= BLUE
```



Go back to [jBASE BASIC](263498-jbase-basic).
