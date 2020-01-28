# GES

**Created At:** 9/6/2017 12:41:22 PM  
**Updated At:** 10/30/2018 9:57:11 AM  
**Original Doc:** [276054-ges](https://docs.jbase.com/36868-jbase-basic/276054-ges)  
**Original ID:** 276054  
**Internal:** No  

**Tags:**
<badge text='dynamic array comparison' vertical='middle' />
<badge text='dynamic arrays' vertical='middle' />

## Description

The function is used to test if elements of one dynamic array are greater than or equal to corresponding elements of another dynamic array. It takes the general form:

```
GES(array1, array2)
```

Where both arguments must evaluate to arrays.

Each element of **array1** is compared with the corresponding element of **array2**, if the element from **array1** is greater than or equal to the element from **array2**, it returns a one in the corresponding element of a new dynamic array. If the element from **array1** is less than the element from **array2,** it returns a zero (0).

If an element of one dynamic array has no corresponding element in the other dynamic array, it evaluates the undefined element as empty, and the comparison continues.

If either element of a corresponding pair is null, it returns null for that element.

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
