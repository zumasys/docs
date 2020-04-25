# Macros

<PageHeader />

Macros contain predefined or often used elements of a jQL sentence, stored on the system like data definition records and are specified in the command sentence in a similar way.  

When submitting a command containing one or more macros for execution it expands and includes the macro references in the sentence. You can substitute macros for any element of the command sentence except the command itself and the filename.

The search for macro definition records is in the same way as data definition records. Do not use a jQL keyword for a Data Definition record.  

The first field of a macro definition must contain the letter M. The remaining fields are either command elements or comment lines (indicated by a leading asterisk ‘*’ and a space).

You can nest macros - a macro can refer to another macro - but the resulting command sentence must still follow the same rules as a normal jQL sentence. When nesting macros, beware of infinite loops where for example, macro A calls macro B that calls macro A that calls macro B.

## Example

```
SORT SALES BY S.CODE STD.HEADING
```

In this example, STD.HEADING is a macro which contains a standard heading clause:

STD.HEADING  

```
M
* Standard heading for sales reports
Heading “SALES - COMPANY PRIVATE’LL’PAGE ‘PL’”
LPTR
```

When the sentence expands it will look like this:

````
SORT SALES BY S.CODE HEADING “SALES - COMPANY PRIVATE’LL’PAGE ‘” LPTR
````

Back to [jQL Keywords and Connectives](./../README.md)

<PageFooter />
