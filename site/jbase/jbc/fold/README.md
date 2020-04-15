# FOLD

<PageHeader />

## Description

The **FOLD** function segments a text string by replacing spaces with  a delimiter at positions defined by a length parameter. See Notes below for differences between the 2-parameter and 3-parameter versions.

```
FOLD(expression1, expression2{, expression3})
```

Where:

**expression1** evaluates a string to be segmented.

**expression2** evaluates to a positive integer that represents the maximum number of characters between delimiters in the resultant string. If a character string exeeds the length of **expression2** then a delimiter will be inserted after **expression2** characters have been reached.

**expression3** is an optional single character used to delimit the segments. If this parameter is omitted the the delimiter will be an attribute mark. If more than 1 character is specified then only the first character will be used.

The **FOLD** function creates a number of sub-strings such that the length of each sub-string does not exceed the length value in **expression2**. It converts spaces to attribute marks except when enclosed in sub-strings and removes extraneous spaces.

## Examples

Note that "^" represents an Attribute Mark and "]" represents a Value Mark.

```
phrase = "Smoking is one of the leading causes of statistics."
CRT OCONV(FOLD(phrase, 7), "MCP")
```

This displays:

```
Smoking^is one^of the^leading^causes^of^statist^ics.
```

* * *

```
phrase = "Hello world"
CRT OCONV(FOLD(phrase, 5, @VM), "MCP")
```

This displays:

```
Hello]world
```

* * *

```
phrase = "Let this be a reminder to you all that this organization will not tolerate failure."
CRT OCONV(FOLD(phrase, 30), "MCP")
```

This displays:

```
let this be a reminder to you^all that this organization^will not tolerate failure.
```

* * *

```
phrase = "the end"
CRT OCONV(FOLD(phrase, 0), "MCP")
```

This displays:

```
t^h^e^e^n^d
```

* * *

```
sentence = "Space: the final frontier"
folded = FOLD(sentence, 10, "")
CRT OCONV(folded, "mcp")
folded = FOLD(sentence, 10, ";")
CRT folded
```

This displays:

```
Space: the]final]frontier
Space: the;final;frontier
```

## Notes

>The 3-parameter version of FOLD() is new as of jBASE release 5.6.2. The original 2-parameter version of FOLD() has some ideosyncracies, including allowing a field to be generated with the wrong width. The new 3-parameter version of FOLD() fixes these problems, however the original 2-parameter version will continue to work as before for backward compatibility.
>
>The 2-parameter version replaces spaces with attribute marks, CHAR(254).  
>The 3-parameter version replaces spaces with value marks, CHAR(253), if and only if the 3rd parameter is null. See the last example above.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
