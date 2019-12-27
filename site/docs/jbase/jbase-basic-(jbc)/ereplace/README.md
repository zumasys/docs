# EREPLACE

**Created At:** 11/6/2017 1:26:14 PM  
**Updated At:** 1/5/2018 6:48:24 PM  
**Original Doc:** [284336-ereplace](https://docs.jbase.com/36868-jbase-basic/284336-ereplace)  
**Original ID:** 284336  
**Internal:** No  


# Description

The **EREPLACE**function is useful for replacing substring in an expression with another substring. If the occurrence is not specified , the function replaces each occurrence of a substring. The function takes the general form:

```
EREPLACE(expression, substring, replacement [,occurrence [,begin] ] )
```

Where:

occurrence specifies the number of occurrences of substring to replace. To replace all occurrences, specify occurrence as a number less than 1.

begin specifies the first occurrence to replace. If begin is

omitted or less than one, it defaults to one.

If substring is an empty string, replacement is prefixed to

expression.

If replacement is an empty string, it removes all occurrences of substring.

If expression evaluates to null, it returns null.

If substring, replacement, occurrence, or begin evaluates to null, the **EREPLACE** function fails and the program terminates with a run-time error message. The **EREPLACE**function behaves like the [CHANGE](./../change) function except when substring evaluates to an empty string.

An example of use is as:

```
A = "AAABBBCCCDDDBBB"
PRINT EREPLACE (A,"BBB","ZZZ")
PRINT EREPLACE (A,"","ZZZ")
PRINT EREPLACE (A,"BBB","")
```

to output :

```
AAAZZZCCCDDDZZZ
ZZZAAABBBCCCDDDBBB
AAACCCDDD
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
