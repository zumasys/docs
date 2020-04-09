# MULS

**Created At:** 9/15/2017 2:01:41 PM  
**Updated At:** 11/27/2018 9:47:36 AM  
**Original Doc:** [276986-muls](https://docs.jbase.com/36868-jbase-basic/276986-muls)  
**Original ID:** 276986  
**Internal:** No  

**Tags:**
<badge text='mathematical operations' vertical='middle' />
<badge text='dynamic arrays' vertical='middle' />

## Description

The function creates a dynamic array of the element-by-element multiplication of two dynamic arrays. It takes the general form:

```
MULS (array1, array2)
```

Each element of **array1** is multiplied by the corresponding element of **array2** with the result being returned in the corresponding element of a new dynamic array. If an element of one dynamic array has no corresponding element in the other dynamic array, 0 is returned. If either of a corresponding pair of elements is null, null is returned for that element.

An example of use is as:

```
arrA = 1 : @VM : 2 : @VM : 3 : @SM : 4
arrB = 4 : @VM : 5 : @VM : 6 : @VM : 9
CRT MULS (arrA, arrB)
```

to display an array containing: 4, 10, 18, 0, 0

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
