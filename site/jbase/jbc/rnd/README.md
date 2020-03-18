# RND

**Created At:** 9/28/2017 8:03:48 AM  
**Updated At:** 1/5/2018 6:13:03 PM  
**Original Doc:** [278793-rnd](https://docs.jbase.com/36868-jbase-basic/278793-rnd)  
**Original ID:** 278793  
**Internal:** No  

## Description

The **RND** function allows the generation of random numbers by a program. It takes the general form:

```
RND(expression)
```

Where:

**expression** should evaluate to a numeric integer value or a runtime error will occur. The absolute value of **expression** is used by the function.

The highest number **expression** can be on Windows is [PWR](./../pwr)(2,15) - 1. The highest number on UNIX is [PWR](./../pwr)(2,31) - 1.

The function will return a random integer number between 0 and the value of **expression**-1.

An example of use is as:

```
FOR I=1 TO 20
    CRT RND (100):", ":
NEXT I
```

to display 20 random numbers in the inclusive range 0 to 99.

See also: [ABS](./../abs).

Go back to  [jBASE BASIC](./../jbase-basic-programmers-reference-guide).

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
