# SORT

<PageHeader />

## Description

The **SORT** function sorts all elements of a dynamic array in ascending left-justified order. It generally takes the form:

```
SORT(expression)
```

Where:

**expression** may evaluate to any data type but will only be useful if it evaluates to a dynamic array.

## Note

> The dynamic array can contain any number and combination of system delimiters.
> The **SORT** function will return an attribute-delimited array of the sorted elements.
> All system delimiters in **expression** will be converted to an attribute mark '0xFE' in the sorted result.

## Example

```
MyArray = 'George': @VM : 'Fred' : @AM : 'John' : @SVM : 'Andy'
CRT SORT (MyArray)
```

will return:  Andy^Fred^George^John

where '^' is an attribute mark, '0xFE'. MyArray remains unchanged.

The **SORT** is achieved by the quick sort algorithm, which sorts in situ, and is very fast.

## International Mode

When using the **SORT** function in International Mode, the function will use the currently configured locale to determine the rules by which each string is considered less than or greater than the other for sort purposes.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
