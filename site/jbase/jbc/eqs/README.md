# EQS

**Created At:** 8/23/2017 2:49:08 PM  
**Updated At:** 10/25/2018 7:47:53 AM  
**Original Doc:** [268497-eqs](https://docs.jbase.com/36868-jbase-basic/268497-eqs)  
**Original ID:** 268497  
**Internal:** No  

**Tags:**
<badge text='dynamic array operations' vertical='middle' />

## Description

The function is used to test if elements of one dynamic array are equal to the elements of another dynamic array. The general form is as:

```
EQS(array1, array2)
```

Where **array1** and **array2** are both dynamic arrays.

## Note

> EQS compares each element of the first array with the corresponding element of the second array, returning a one if the two elements are equal in the corresponding element of a dynamic array. It returns a zero if the two elements are not equal. It returns zero if an element of one dynamic array has no corresponding element in the other dynamic array. If either element of a corresponding pair is null, it returns null for that element.

An example of use is as:

```
Arr1 = 1 : @VM :45 : @SM : 3 : @VM : "one"
Arr2 = 0 : @VM :45 : @VM : 1
CRT EQS(Arr1 ,Arr2)
```

The output of this program is: 0]1\0]0

Back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
