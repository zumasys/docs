# SADD

<PageHeader />

## Description

The **SADD** function performs string addition of two base 10-string numbers. It takes the general from:

```
SADD(expr1, expr2)
```

Where :

**expr1** and **expr2** are strings consisting of numeric characters, optionally including a decimal part.

The **SADD** function can be used with numbers that may exceed a valid range with standard arithmetic operators.

The [PRECISION](./../precision) declaration has no effect on the value returned by **SADD**.

Examples of use would be:

```
strA = 4000000000000000000000000000000
strB = 7
CRT SADD (strA, strB)
```

to display 4000000000000000000000000000007 to the screen, or

```
CRT SADD (4.33333333333333333,1.8)
```

to display 6.13333333333333333.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
