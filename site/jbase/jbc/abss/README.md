# ABSS

<PageHeader />

## Description

The **ABSS** function returns the absolute values of all the elements in a dynamic array. If an element in the dynamic array is null, it returns null for that element.

It takes the general form:

```
ABSS (dynamic.array)
```

An example of use is as:

```
subtrahends = 500 : @VM : 400 : @VM : 300 : @SM :200 : @SM : 100
differences = SUBS(REUSE(300), subtrahends)
CRT "differences = " : differences
CRT "Result of ABSS(differences) is " : ABSS (differences)
```

The output of this program is:

```
differences = -200ÿ-100ÿ0ü100ü200
Result of ABSS(differences) is 200ÿ100ÿ0ü100ü200
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
