# ANDS

**Created At:** 11/3/2017 1:36:51 PM  
**Updated At:** 1/5/2018 6:44:47 PM  
**Original Doc:** [284126-ands](https://docs.jbase.com/36868-jbase-basic/284126-ands)  
**Original ID:** 284126  
**Internal:** No  

## Description

The **ANDS** function creates a dynamic array of the logical AND of corresponding elements of two dynamic arrays. It takes the general form:

```
ANDS (array1, array2)
```

Each element of the new dynamic array is the logical AND of the corresponding elements of array1and array2. If an element of one dynamic array has no corresponding element in the other dynamic array, it returns a false (0) for that element.
If both corresponding elements of **array1** and **array2** are null, it returns null for those elements. If one element is the null value and the other is zero or an empty string, it returns false for those elements.

An example of use is as:

```
array1 = 1 : @SM : 4 : @VM : 4 : @SM : 1
array2 = 1 : @SM : 1 - 1 : @VM : 2
CRT "Result of ANDS (array1, array2) is " : ANDS (array1, array2)
```

to output:

```
1ü0ÿ1ü0
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
