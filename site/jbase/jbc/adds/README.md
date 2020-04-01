# ADDS

**Created At:** 11/3/2017 1:27:55 PM  
**Updated At:** 1/5/2018 6:44:38 PM  
**Original Doc:** [284122-adds](https://docs.jbase.com/36868-jbase-basic/284122-adds)  
**Original ID:** 284122  
**Internal:** No  

## Description

The **ADDS** function creates a dynamic array of the element-by-element addition of two dynamic arrays. It takes the general form:

```
ADDS(array1, array2)
```

Added to each element of **array1** is the corresponding element of **array2**, which returns the result in the corresponding element of a new dynamic array. If an element of one array has no corresponding
element in the other array, it returns the existing element. If an element of one array is the null value, it returns null for the sum of the corresponding elements.

An example of use is as:

```
addend1 = 2 : @VM : 4 : @VM : 6 : @SM : 10
addend2 = 1 : @VM : 2 : @VM : 3 : @VM : 4

CRT "Result of ADDS(addend1,addend2) is " : ADDS(addend1,addend2)
```

to output:

```
Result of ADDS(addend1,addend2) is 3]6]9\10]4
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
