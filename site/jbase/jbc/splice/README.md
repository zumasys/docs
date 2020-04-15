# SPLICE

<PageHeader />

## Description

The **SPLICE** function creates a dynamic array of the element-by-element concatenation of two dynamic arrays, separating concatenated elements by a specified value. It takes the general form:

```
SPLICE(array1, expression, array2)
```

Where:

Each element of **array1** is concatenated with expression and with the corresponding element of **array2**. The result is returned in the corresponding element of a new dynamic array.

If an element of one dynamic array has no corresponding element in the other dynamic array, the element is returned properly concatenated with expression. If either element of a corresponding pair is null, null is returned for that element. If expression evaluates to null, null is returned for the entire dynamic array.

An example of use is:

```
A = "A" : @VM : "B" : @SM : "C"
B = "D" : @SM : "E" : @VM : "F"
C = '-'
CRT SPLICE(A,C,B)
```

to display  "A-D\-E]B-F\C".

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
