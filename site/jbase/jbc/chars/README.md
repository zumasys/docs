# CHARS

<PageHeader />

## Description

The **CHARS** function accepts a dynamic array of numeric expressions as an argument and returns a dynamic array of corresponding ASCII characters. It takes the general form:

```
CHARS(DynArr)
```

Where each element of **DynArr** must evaluate to a numeric argument in the range 0-255. If any of the dynamic array elements are non-numeric, a run-time error will occur.

```
    dyn1 = 58 : @AM : 45 : @AM : 41
    dyn2 = CHARS (dyn1)
    CRT "Contents of array -> " :
    FOR index = 1 TO 3
        CRT dyn2<index> :
    NEXT index
```

which results in the output of the following emoticon:

```
Contents of array -> :-)
```

See also: [CHAR](./../char).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
