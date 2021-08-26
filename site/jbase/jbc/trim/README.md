# TRIM

<PageHeader />

## Description

The **TRIM** function allows characters to be removed from a string in a number of ways. It takes the general form:

```
TRIM(expression1 {, expression2{, type}})
```

Where:

**expression1** specifies the string from which to trim characters.

**expression2** may optionally specify the character to remove from the string. If not specified then the space character is assumed.

The **type** of the TRIM() function can be one of the following single letters:

| Type | Operation |
| --- | --- |
| L | removes leading characters only |
| T | removes trailing characters only |
| B | removes leading and trailing characters |
| A | removes all occurrences of the character |
| R | removes leading, trailing and redundant characters |
| F | removes leading spaces and tabs |
| E | removes trailing spaces and tabs |
| D | removes leading, trailing and redundant spaces and tabs. |

**Type** is case insensitive (effective as of jBASE 5.8).

An example of use is as:

```
INPUT ANS
ANS = TRIM (ANS," ","D")
```

or:

```
INPUT ANS
ANS = TRIM(ANS)
```

to remove spaces and tabs. Note the second parameter is ignored in the first code sample.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
