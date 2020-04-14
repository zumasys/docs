# ASCII

<PageHeader />

## Description

The **ASCII**function converts all the characters in the expression from the [EBCDIC](./../ebcdic) character set to the ASCII character set. It takes the general form:

```
ASCII(expression)
```

Where:

**expression** may return a data string of any form. The function will then assume that the characters are all members of the [EBCDIC](./../ebcdic) character set and translate them using a character map. The original expression is unchanged while the returned result of the function is now the **ASCII** equivalent.

An example of use is as:

```
READT EbcdicBlock ELSE CRT "Tape failed!"; STOP
AsciiBlock = ASCII (EbcdicBlock) ;* convert to ASCII
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
