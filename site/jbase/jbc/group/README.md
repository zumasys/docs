# GROUP

**Created At:** 9/6/2017 7:42:19 AM  
**Updated At:** 10/30/2018 1:23:25 PM  
**Original Doc:** [276026-group](https://docs.jbase.com/36868-jbase-basic/276026-group)  
**Original ID:** 276026  
**Internal:** No  

**Tags:**
<badge text='grouping' vertical='middle' />

## Description

The **GROUP** function is equivalent to the [FIELD](./../field) function. It takes the general form:

```
GROUP(Expression1, Expression2, Expression3, Expression4)
```

Where:

- **Expression1** evaluates to the string containing fields to be extracted,
- **Expression2** evaluates to the character(s) delimiting each field within **Expression1,**
- **Expression3** should evaluate to a numeric value specifying the number of the first field to extract from **Expression1,**
- **Expression4** evaluates to a numeric value specifying the number of fields to extract as a group.

## Note

> **Expression2** may evaluate to more than a single character allowing fields to be delimited with complex expressions.

An example of use is as:

```
A = "123:-456:-789:-987:-"
CRT GROUP(A, ":-", 2, 2)
```

to display:

```
-456:-789
```

on the terminal being the second and third fields and their delimiter within variable A .

Go back to [jBASE BASIC](./../README.md)
