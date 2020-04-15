# ALPHA

<PageHeader />

## Description

This function will check that an expression consists entirely of alphabetic characters. It is used as:

```
ALPHA(expression)
```

Where **expression** can return a result of any type.

The **ALPHA** function will then return TRUE (1) if **expression** consists entirely of alphabetic characters else returns FALSE (0) if any character in **expression** is non alphabetic.

For example:

```
Abc = "ABC"
IF ALPHA(Abc) THEN
    CRT "alphabetic"
END ELSE CRT "non alphabetic"
```

## Note

> Alphabetic characters are in the set a-z and A-Z, and any characters which do note fall in that set will be evaluated according to the Unicode standard if the ALPHA function is in international mode.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
