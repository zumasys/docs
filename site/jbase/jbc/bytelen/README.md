# BYTELEN

<PageHeader />

## Description

The **BYTELEN** function returns the length of the expression as the number of bytes rather than the number of characters. It is used as:

```
BYTELEN(expression)
```

Where **expression** can return a result of any type. The **BYTELEN** function will then return the byte count of the expression.

## Note

> The **BYTELEN** function will always return the actual byte count for the expression; irrespective of the whether International Mode is in operation at the time.  This compares with the [LEN](./../len) function, which will return a character count. The character count may differ from the byte count when processing in International Mode.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
