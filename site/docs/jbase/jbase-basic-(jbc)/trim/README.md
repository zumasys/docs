# TRIM

**Created At:** 9/29/2017 2:27:09 PM  
**Updated At:** 1/5/2018 6:28:07 PM  
**Original Doc:** [278975-trim](https://docs.jbase.com/36868-jbase-basic/278975-trim)  
**Original ID:** 278975  
**Internal:** No  


# Description

The **TRIM**statement allows characters to be removed from a string in a number of ways. It takes the general form:

```
TRIM(expression1 {, expression2{, type}})
```

Where:

expression1 specifies the string from which to trim characters.

expression2 may optionally specify the character to remove from the string. If not specified then the space character is assumed.

The trim types available are:


| Type<br> | Operation<br> |
| --- | --- |
| L<br> | removes leading characters only<br> |
| T<br> | removes trailing characters only<br> |
| B<br> | removes leading and trailing characters<br> |
| A<br> | removes all occurrences of the character<br> |
| R<br> | removes leading, trailing and redundant characters<br> |
| F<br> | removes leading spaces and tabs<br> |
| E<br> | removes trailing spaces and tabs<br> |
| D<br> | removes leading, trailing and redundant spaces and tabs.<br> |




An example of use is as:

```
INPUT ANS
ANS = TRIM (ANS," ","D")
```

or:

```
INPUT ANS
ANS = TRIM(ANS)
```

to remove spaces and tabs. Note the second parameter has been ignored in the first code sample.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
