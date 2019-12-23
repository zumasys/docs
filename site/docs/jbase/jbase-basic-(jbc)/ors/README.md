# ORS

**Created At:** 9/21/2017 2:00:15 PM  
**Updated At:** 11/27/2018 9:45:10 AM  
**Original Doc:** [277545-ors](https://docs.jbase.com/36868-jbase-basic/277545-ors)  

**Tags:**
<badge text='logical operators' vertical='middle' />
<badge text='dynamic arrays' vertical='middle' />

# Description

The **ORS** function is used to create a dynamic array of the logical OR of corresponding elements of two dynamic arrays. It takes the general form:

```
ORS(array1, array2)
```

Each element of the new dynamic array is the logical OR of the corresponding elements of **array1** and **array2.** If an element of one dynamic array has no corresponding element in the other dynamic array, it assumes a false for the missing element.

If both corresponding elements of array1 and array2 are null, it returns null for those elements. If one element is the null value and the other is 0 or an empty string, it returns null. If one element is the null value and the other is any value other than 0 or an empty string, it returns true.

An example of use is as:

```
A="A":@SM:0:@VM:4:@SM:1
B=0:@SM:1-1:@VM:2
PRINT ORS (A,B)
```

to output:

```
1\0]1\1 
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
