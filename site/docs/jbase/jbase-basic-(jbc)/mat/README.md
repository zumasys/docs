# MAT

**Created At:** 9/15/2017 10:15:39 AM  
**Updated At:** 11/27/2018 9:49:56 AM  
**Original Doc:** [276944-mat](https://docs.jbase.com/36868-jbase-basic/276944-mat)  
**Original ID:** 276944  
**Internal:** No  

**Tags:**
<badge text='array operations' vertical='middle' />

# Description

The **MAT**command is used to either assign every element in a specified array to a single value or to assign the entire contents of one array to another. It takes the general form:

```
MAT Array = expression
```

or

```
MAT Array1 = MAT Array2
```

Where:

- **Array, Array1**and**Array2** are pre-dimensioned previously declared arrays,
- **expression** can evaluate to any data type.


## Note: 


> If any element of the array Array2 has not been assigned a value then a runtime error message will occur. This can be avoided by coding the statement "**MAT**Array2 = " after the [DIM](./../dimension-%28dim%29) statement.


An example would be as:

```
DIM ARR1(45), ARR2(45)
MAT ARR2 = "Array value"
MAT ARR1 = MAT ARR2

CRT DQUOTE(ARR1(45))
```

to display "Array value", even though it was initially assigned to A



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
