# CHAR

**Created At:** 7/24/2017 1:12:28 PM  
**Updated At:** 10/24/2018 10:58:50 PM  


# Description

The **CHAR** function returns the ASCII character of its argument. It may take the general form:

```
CHAR(expression)
```

Where the expression must evaluate to a numeric argument in the range 0-255, which is the entire ASCII character set.

# INTERNATIONAL MODE

The **CHAR** function will return Unicode values encoded as UTF-8 byte sequences as follows:

- Expression values 0 – 127 return UTF-8 single byte characters equivalent to ASCII.
- Expression values 127 – 248 return UTF-8 double byte character sequences.
- Expression values 249 – 255 return system delimiters 0xf8 – 0xff
- Expression values &gt; 255 return UTF-8 multi byte character sequences.


When system delimiter values are not specifically required, generate UTF-8 byte sequences using the [UTF8](279557-utf8) function. For instance;  X = UTF8(@AM) will generate a UTF-8 byte sequence in variable X for the system delimiter equating to Unicode value 0x000000fe.

## Note:


> jBASE BASIC variables can contain any of the ASCII characters 0-255, thus there are no restrictions on this function.


An example of use would be inserting field delimiters within a variable or string; these are commonly equated to AM, VM, SV in a program.

```
0001     EQUATE AM TO CHAR (254)   ;* field Mark
0002     EQUATE VM TO CHAR(253)    ;* value Mark
0003     EQUATE SV TO CHAR(252)    ;* sub Value mark
0004     CRT CHAR (7):   ;* ring the bell
```



See also: [CHARS](/36868-jbase-basic/264329-chars)

Go back to [jBASE BASIC](263498-jbase-basic).
