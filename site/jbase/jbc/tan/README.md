# TAN

<PageHeader />

## Description

The **TAN** function returns the mathematical tangent of an angle. It takes the general form:

```
TAN(expression)
```

Where:

**expression** must evaluate to a numeric type.

The function calculates the result at the highest precision available on the host system; it truncates the result to the current [PRECISION](./../precision) after calculation.

An example of use is as:

```
PRECISION 2
ADJACENT = 42
ANGLE = 34

CRT "Opposite length = ":TAN(ANGLE)*ADJACENT
```

to display:  Opposite length = 28.14

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
