# COMPARE

**Created At:** 8/14/2017 9:24:42 AM  
**Updated At:** 10/24/2018 10:59:11 PM  
**Original Doc:** [266851-compare](https://docs.jbase.com/36868-jbase-basic/266851-compare)  
**Original ID:** 266851  
**Internal:** No  


# Description

The **COMPARE** function compares two strings and returns a value indicating whether or not they are equal. The function takes the form:

```
COMPARE (expression1, expression2 {, justification})
```

Where:

- **expression1**is the first string for comparison
- **expression2**is the second string for comparison
- **justification**specifies how the strings are to be compared. 
    - "L" indicates a left justified comparison.
    - "R" indicates a right justified comparison.


The default is left justification.

The function returns one of the following values:

- -1 The first string is less than the second
- 0 The strings are equal
- 1 The first string is greater than the second




An example of use would be as:

```
0001     A = "XY999"
0002     B = "XY1000"
0003     R1 = COMPARE(A,B,"L")
0004     R2 = COMPARE(A,B,"R")
0005     CRT R1,R2
```

The code above displays 1 -1, which indicates that XY999 is greater than XY1000 in a left justified comparison and XY999 is less than XY1000 in a right justified comparison.

Go back to [JBASE BASIC.](./../jbase-basic-programmers-reference-guide)


