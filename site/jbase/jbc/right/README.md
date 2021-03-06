# RIGHT

<PageHeader />

## Description

The **RIGHT** function returns a sub-string composed of the last n characters of a specified string. It takes the general form:

```
RIGHT(expression, length)
```

Where:

**expression** evaluates to the string from, which the sub string is extracted.

**length** is the number of characters that are extracted. If **length** is less than 1, **RIGHT** returns null.

The **RIGHT** function is equivalent to sub-string extraction for the last n characters, i.e. expression[n] .

An example of use is as:

```
STR_VAL =" Today's Brush is Tomorrows Forest.- Bemba Proverb"
CRT LEFT(STR_VAL, 14)
CRT DQUOTE(LEFT(STR_VAL,999))
CRT DQUOTE(LEFT(STR_VAL,0))
```

to display:

```
Today's Brush
" Today's Brush is Tomorrows Forest.- Bemba Proverb"
""
```

See also: [LEFT](./../left)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
