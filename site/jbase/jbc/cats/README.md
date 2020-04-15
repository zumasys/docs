# CATS

<PageHeader />

## Description

The **CATS** function concatenates the corresponding elements in two dynamic arrays. The function usually takes the form:

```
CATS(DynArr1, DynArr2)
```

Where **DynArr1** and **DynArr2** are dynamic arrays.

## Note

> If one dynamic array supplied to the **CATS** function is null then the result of the **CATS** function is the non-null dynamic array.

An example of use is as:

```
one_array = "a" : @SM : "b" : @VM : "c": @VM : "d"
another_array = "x" : @VM : "y" : @SM : "z"
CRT "Result of CATS(one_array, another_array) is " : OCONV(CATS(one_array, another_array), 'MCP')
```

to display:

```
Result of CATS(one_array, another_array) is ax\b]cy\z]d
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
