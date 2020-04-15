# SMUL

<PageHeader />

## Description

The **SMUL** function performs string multiplication of two base 10-string numbers. It takes the general form:

```
SMUL(expr1, expr2)
```

Where:

**expr1** and **expr2** are strings consisting of numeric characters, with either optionally including a decimal part.

The function can be used with numbers that may exceed a valid range with standard arithmetic operators. The [PRECISION](./../precision) declaration does not affect the value returned by **SMUL**.

An example of use is as:

```
A = 243603310027840922
B = 3760
CRT SMUL (A,B)

CRT SMUL (0.0000000000000475,3.61)
```

to display 915948445704681866720 and 0.0000000000001714 to the screen.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
