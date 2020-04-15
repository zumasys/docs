# LOWER

<PageHeader />  

**Tags:**
<badge text='delimiters' vertical='middle' />

## Description

The **LOWER()** function lowers system delimiters in a string to the next lowest delimiter. It takes the general form:

```
LOWER(expression)
```

Where **expression** is a string containing one or more delimiters, lowered as follows:

| Ascii Character |  Lowered to |
| --- | --- |
| 255 | 254 |
| 254 | 253 |
| 253 | 252 |
| 252 | 251 |
| 251 | 250 |
| 250 | 249 |
| 249 | 248 |

An example of use would be as:

```
ValuemarkDelimitedVariable = LOWER(AttributeDelimitedVariable)
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
