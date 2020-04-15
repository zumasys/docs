# MATBUILD

<PageHeader />

**Tags:**
<badge text='dynamic array creation' vertical='middle' />
<badge text='dynamic arrays' vertical='middle' />

## Description

The **MATBUILD** statement creates a dynamic array out of a dimensioned array. It takes the general form:

```
MATBUILD variable FROM array{, expression1{, expression2}} {USING expression3}
```

Where:

- **variable** is the variable into which the created dynamic array will be stored.
- **Array** is a previously dimensioned and assigned matrix from which the **dynamic array** will be created.
- **expression1** and **expression2** should evaluate to numeric integers. **expression1** specifies which element of the array the extraction will start with, **expression2** specifies which element of the array the extraction will end with (inclusive).

By default, each array element is separated in the dynamic array by a field mark. By specifying **expression3**, the separator character can be changed. If **expression3** evaluates to more than a single character, only the first character of the string is used.

## Note

> When specifying start and end positions with multi-dimensional arrays, it is necessary to expand the matrix into its total number of variables to calculate the correct element number. Not doing so will result in errors that suggest the array key is out of bounds.

An example of use is as:

```
DIM arr1(40)
MATBUILD Dynamic FROM arr1,3,7 USING ":"
```

Builds a 5 element string separated by a : character. '**MATBUILD** Dynamic FROM arr1' builds a field mark separated dynamic array from every element contained in the matrix arr1.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
