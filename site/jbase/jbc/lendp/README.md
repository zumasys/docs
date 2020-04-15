# LENDP

<PageHeader />

**Tags:**
<badge text='string handling' vertical='middle' />

## Description

The **LENDP** function returns the display length of an expression. It takes the general form:

```
LENDP(expression)
```

Where **expression** can evaluate to any type. The **LENDP** function will evaluate each character in **expression** and return the calculated display length.

## International Mode

The **LENDP** function when used in International Mode will return the display length for the characters in the specified **expression** rather than the number of bytes.

## Note

>Some characters, usually Japanese, Chinese, etc. will return a display length of greater than one for certain characters.
>
>Some characters, for instance control characters or null (char 0), will return a display length of 0.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
