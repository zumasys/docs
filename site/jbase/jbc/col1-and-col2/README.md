# COL1 and COL2

<PageHeader />

## Description

These functions can be used in conjunction with the [FIELD](./../field/README.md) function to determine the character positions one position before and one position after the location of the last field. It takes the general form:

```
COL1() / COL2()
```

When a field has been located in a string, it is sometimes useful to know its exact position within the string to manipulate either it, or the rest of the string. **COL1()** will return the position of the character immediately before the last field located. **COL2()** will return the position of the character immediately after the end of the last field located. Use them to manipulate the string.

An example of use is as:

```
array1 = "A,B,C,D,E"
Fld = FIELD(array1, ",", 2)
CRT "COL1() = " : COL1()
CRT "COL2() = " : COL2()
```

Displays the following result:

```
COL1() = 2
COL2() = 4
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
