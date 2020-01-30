# STRS

**Created At:** 9/28/2017 2:03:36 PM  
**Updated At:** 1/5/2018 6:23:44 PM  
**Original Doc:** [278842-strs](https://docs.jbase.com/36868-jbase-basic/278842-strs)  
**Original ID:** 278842  
**Internal:** No  

## Description

The **STRS** function to produces a dynamic array containing the specified number of repetitions of each element of dynamic.array. It takes the form:

```
STRS(dynamic.array, repeat)
```

Where:

**dynamic.array** is an expression that evaluates to the strings to be generated.

**repeat** is an expression that evaluates to the number of times the elements are to be repeated. If it does not evaluate to a value that can be truncated to a positive integer, an empty string is returned.

If **dynamic.array** evaluates to null, it returns null. If any element of **dynamic.array** is null, null is returned for that element. If **repeat** evaluates to null, the **STRS** function fails and the program enters the debugger.

An example of use is as:

```
ARR1 = "A" : @VM : "B" : @VM : "C"
CRT STRS (ARR1,3)
```

to output:

```
AAA]BBB]CCC
```

on screen.

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
