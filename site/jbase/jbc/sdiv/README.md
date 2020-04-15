# SDIV

<PageHeader />

## Description

The **SDIV** function performs a string division of two base 10-string numbers and rounds the result to 14 decimal places. It generally takes the form:

```
SDIV(expr1, expr2)
```

Where:

**expr1** and **expr2** are strings consisting of numeric characters, with either optionally including a decimal part.

Use the **SDIV** function with numbers that may exceed a valid range with standard arithmetic operators.

The [PRECISION](./../precision) declaration has no effect on the value returned by **SDIV**.

Examples of use may be as:

```
A = 2
B = 3
CRT SDIV (A,B)
```

to display 0.66666666666666 to the screen, or

```
PRECISION 2
CRT SDIV (355,113)
```

to display 3.14159292035398.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
