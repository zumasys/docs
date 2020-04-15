# PAGE

<PageHeader />  

**Tags:**
<badge text='printing' vertical='middle' />
<badge text='output' vertical='middle' />

## Description

Prints any [FOOTING](./../footing) statement, throws a **PAGE** and prints any heading statement on the current output device. It takes the general form:

```
PAGE {expression}
```

Where **expression** if specified should evaluate to a numeric integer, which will cause the page number after the page throw to be set to this value.

An example to illustrate its use is as:

```
HEADING "10 Page Report"

FOR I = 1 TO 10
    PAGE
    GOSUB PrintPage
NEXT I
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
