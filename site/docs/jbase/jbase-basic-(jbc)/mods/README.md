# MODS

**Created At:** 9/15/2017 1:15:31 PM  
**Updated At:** 11/27/2018 10:08:21 AM  
**Original Doc:** [276980-mods](https://docs.jbase.com/36868-jbase-basic/276980-mods)  

**Tags:**
<badge text='mathematical operations' vertical='middle' />
<badge text='dynamic arays' vertical='middle' />

# Description

The **MODS** function creates a dynamic array of the remainder after the integer division of corresponding elements of two dynamic arrays. It takes the general form:

```
MODS(array1, array2)
```

The **MODS()** function calculates each element according to the following formula:

```
XY.element = X ?? (INT (X / Y) * Y)
```

**X** is an element of **array1** and **Y** is the corresponding element of **array2**. The resulting element is returned in the corresponding element of a new dynamic array. If an element of one dynamic array has no corresponding element in the other dynamic array, 0 is returned. If an element of **array2** is 0, 0 is returned. If either of a corresponding pair of elements is null, null is returned for that element.

An example of use is as:

```
A=3:@VM:7
B=2:@SM:7:@VM:4
PRINT MODS(A,B)
```

to display an array containing :  1 ,0 , 3.



Go back to [jBASE BASIC](263498-jbase-basic).
