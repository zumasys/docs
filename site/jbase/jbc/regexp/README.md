# REGEXP

**Created At:** 9/28/2017 7:32:35 AM  
**Updated At:** 4/24/2019 4:25:45 PM  
**Original Doc:** [278783-regexp](https://docs.jbase.com/36868-jbase-basic/278783-regexp)  
**Original ID:** 278783  
**Internal:** No  

**Tags:**
<badge text='extended pattern matching' vertical='middle' />
<badge text='unix' vertical='middle' />
<badge text='string handling' vertical='middle' />

## Description

The **REGEXP** function is a powerful function that allows pattern matching using UNIX regular expressions.

**REGEXP** is not supported on Windows.

It takes the general form:

```
REGEXP(variable, expression)
```

Where:

- **variable** can be any type of jBASE BASIC variable and is the variable upon which pattern matching will be performed.
- **expression** should evaluate to a standard UNIX regular expression as defined in the UNIX documentation.

The function returns a numeric integer value being the first character in **variable** that failed to match the specified regular **expression**. If a match is not found or the regular **expression** was invalid then the function returns 0.

An example of use would be:

```
String = "jBASE Software Inc."
CRT REGEXP(String, "S[^t]*")
```

to display the value 4, being the position of the character "t" in the word Software

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
