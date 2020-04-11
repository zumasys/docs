# MATCHFIELD

**Created At:** 9/15/2017 12:03:23 PM  
**Updated At:** 11/27/2018 10:03:03 AM  
**Original Doc:** [276950-matchfield](https://docs.jbase.com/36868-jbase-basic/276950-matchfield)  
**Original ID:** 276950  
**Internal:** No  

**Tags:**
<badge text='string handling' vertical='middle' />

## Description

The function checks a **string** against a match **pattern**, as does the [MATCH](./../matches) operator, and returns the portion of **string** that matches the specified **field** in **pattern**.

It takes the general form:

```
MATCHFIELD(string, pattern, field)
```

Where:

- **field** is an expression that evaluates to the portion of the match string to be returned.
- If **string** matches pattern, the **MATCHFIELD** function returns 1.  If **string** does not match **pattern**, or if **string** or **pattern** evaluates to a null value, the **MATCHFIELD** function returns an empty string. If **field** evaluates to the null value, the **MATCHFIELD** function fails and the program terminates with a run-time error.
- **pattern** must contain specifiers to cover all characters contained in **string**. For example, the following statement returns an empty string because not all parts of **string** are specified in **pattern**:

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
part = MATCHFIELD("AA123BBB9", "2A0N3A0N", 3)
CRT "Q = ", part ; * to display: Q = BBB

addr = '20 Green St. Natick, MA.,01234'
zip = MATCHFIELD(addr, "0N0X5N", 3)
CRT "ZIP = ", zip ; * to display: ZIP = 01234

inv = 'PART12345 BLUE AU'
col = MATCHFIELD(INV,"10X4A3X",2)
CRT "COL = ", col ; * to display: COL = BLUE
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
