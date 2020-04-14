# CHAR

<PageHeader />

## Description

The **CHAR** function returns the ASCII character of its argument. It may take the general form:

```
CHAR(expression)
```

Where **expression** must evaluate to a numeric argument in the range 0-255, which is the entire ASCII character set.

## International Mode

The **CHAR** function will return Unicode values encoded as UTF-8 byte sequences as follows:

- Expression values 0 – 127 return UTF-8 single byte characters equivalent to ASCII.
- Expression values 127 – 248 return UTF-8 double byte character sequences.
- Expression values 249 – 255 return system delimiters 0xf8 – 0xff
- Expression values &gt; 255 return UTF-8 multi byte character sequences.

When system delimiter values are not specifically required, generate UTF-8 byte sequences using the [UTF8](./../utf8) function. For instance;  X = UTF8(@AM) will generate a UTF-8 byte sequence in variable X for the system delimiter equating to Unicode value 0x000000fe.

## Note

> jBASE BASIC variables can contain any of the ASCII characters 0-255, thus there are no restrictions on this function.

An example of use would be inserting field delimiters within a variable or string; these are commonly equated to AM, VM, SV in a program.

```
     EQUATE AM TO CHAR (254)   ;* field Mark
     EQUATE VM TO CHAR(253)    ;* value Mark
     EQUATE SV TO CHAR(252)    ;* sub Value mark
     CRT CHAR (7):   ;* ring the bell
```

See also: [CHARS](./../chars)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
