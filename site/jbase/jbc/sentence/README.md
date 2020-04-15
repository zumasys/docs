# SENTENCE

<PageHeader />

## Description

The **SENTENCE** function allows a program to locate the command used to invoke it and the arguments it was given. It has the general form:

```
SENTENCE ({expression})
```

Where:

If specified, **expression** should evaluate to a positive integer value. A negative value will return a null string. A value of null will return the entire command line.

An integer value of **expression** will return a specific element of the command line with the command itself being returned by **SENTENCE**(0), the first parameter being returned by **SENTENCE**(1) and so on.

## Note

> It is assumed the command line arguments are space separated and when returning the entire command line, they are returned as such. The [SYSTEM(1000)](./../system-functions) function will return the command line attribute mark delimited.

An example of use is as:

```
DIM Parm(4)
ProgName = SENTENCE (0) ;* program is?
FOR I = 1 TO 4
    Parm(I) = SENTENCE(I) ;* get parameters
NEXT I
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
