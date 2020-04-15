# SSUB

<PageHeader />

## Description

The **SSUB** function performs string subtraction of two base 10-string numbers. It takes the general form:

```
SSUB(expr1, expr2)
```

Where:

**expr1** and **expr2** are strings consisting of numeric characters, optionally including a decimal part.

The **SSUB** function may be used with numbers that could exceed a valid range with standard arithmetic operators. The [PRECISION](./../precision) declaration has no effect on the value returned by **SSUB**.

An example of use would be:

```
PRECISION 2
A = 2.3000000123456789
B = 5.0000000000000001

CRT SSUB (A,B)
```

to display -2.6999999876543212 to the screen, despite the setting of precision to 2 decimal places.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
