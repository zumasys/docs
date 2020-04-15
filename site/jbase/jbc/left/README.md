# LEFT

<PageHeader />  

**Tags:**
<badge text='string handling' vertical='middle' />

## Description

The **LEFT()** function extracts a sub-string of a specified length from the beginning of a string.

```
LEFT(expression, length)
```

Where:

- **expression** evaluates to the string from which the sub string is extracted.
- **length** is the number of extracted characters if length is less than 1, **LEFT()** returns null.

## Note

> The **LEFT** function is equivalent to sub-string extraction starting from the first character position, i.e. expression[1,length]

An example of use is as:

```
str_Val = " Today's Brush is Tomorrows Forest.- Bemba Proverb"
CRT LEFT(str_Val, 14)
CRT DQUOTE(LEFT(str_Val, 999))
CRT DQUOTE(LEFT(str_Val, 0))
```

to display:

```
Today's Brush
" Today's Brush is Tomorrows Forest.- Bemba Proverb"
""
```

to the screen.

See also: [RIGHT](./../right)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
