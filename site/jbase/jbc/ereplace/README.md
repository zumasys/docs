# EREPLACE

<PageHeader />

## Description

The **EREPLACE** function is useful for replacing substring in an expression with another substring. If the occurrence is not specified , the function replaces each occurrence of a substring. The function takes the general form:

```
EREPLACE(expression, substring, replacement [,occurrence [,begin] ] )
```

Where:

**occurrence** specifies the number of occurrences of substring to replace. To replace all occurrences, specify occurrence as a number less than 1.

**begin** specifies the first occurrence to replace. If begin is omitted or less than one, it defaults to one.

If **substring** is an empty string, **replacement** is prefixed to **expression**.

If **replacement** is an empty string, it removes all occurrences of substring.

If **expression** evaluates to null, it returns null.

If **substring**, **replacement**, **occurrence**, or **begin** evaluates to null, the **EREPLACE** function fails and the program terminates with a run-time error message. The **EREPLACE** function behaves like the [CHANGE](./../change) function except when **substring** evaluates to an empty string.

An example of use is as:

```
alphaString = "AAABBBCCCDDDBBB"
CRT EREPLACE (alphaString,"BBB","ZZZ")
CRT EREPLACE (alphaString,"","ZZZ")
CRT EREPLACE (alphaString,"BBB","")
```

to output :

```
AAAZZZCCCDDDZZZ
ZZZAAABBBCCCDDDBBB
AAACCCDDD
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
