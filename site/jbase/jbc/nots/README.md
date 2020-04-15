# NOTS

<PageHeader />

## Description

The function returns a dynamic array of the logical complements of each element of **dynamic.array**. It takes the general form:

```
NOTS(dynamic.array)
```

If the value of the element is true, the **NOTS** function returns a value of false (0) in the corresponding element of the returned array. If the value of the element is false, the **NOTS** function returns a value of true (1) in the corresponding element of the returned array.

A numeric expression that evaluates to 0 has a logical value of false. A numeric expression that evaluates to anything else, other than the null value, is a logical true.

An empty string is logically false. All other string expressions, including strings, which consist of an empty string, spaces, or the number 0 and spaces, are logically true.

If any element in **dynamic.array** is null, it returns null for that element.

```
varX = 5
varY = 5
CRT NOTS (varX - varY : @VM : varX + varY)
```

The above will display 1 and 0.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
