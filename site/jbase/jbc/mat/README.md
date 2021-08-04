# MAT

<PageHeader />

**Tags:**
<badge text='array operations' vertical='middle' />

## Description

The **MAT** command is used to either assign every element in a specified array to a single value or to assign the entire contents of one array to another. It takes the general form:

```
MAT Array = expression
```

or

```
MAT Array1 = MAT Array2
```

Where:

- **Array, Array1** and **Array2** are pre-dimensioned previously declared arrays,
- **expression** can evaluate to any data type.

## Note

> If any element of the array Array2 has not been assigned a value then a runtime error message will occur. This can be avoided by coding the statement '**MAT** Array2 = "" ' after the [DIM](./../dimension-dim) statement.

An example would be as:

```
DIM arr1(45), arr2(45)
MAT arr2 = "Array value"
MAT arr1 = MAT arr2

CRT DQUOTE(arr1(45))
```

to display "Array value", even though it was initially assigned to arr2

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
