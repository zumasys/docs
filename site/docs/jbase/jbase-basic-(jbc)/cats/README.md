# CATS

**Created At:** 7/24/2017 1:02:35 PM  
**Updated At:** 10/25/2018 7:06:35 AM  
**Original Doc:** [264322-cats](https://docs.jbase.com/36868-jbase-basic/264322-cats)  
**Original ID:** 264322  
**Internal:** No  


# Description

The **CATS** function concatenates the corresponding elements in two dynamic arrays. The function usually takes the form:

```
CATS(DynArr1, DynArr2)
```

Where **DynArr1** and **DynArr2** are dynamic arrays.



## Note:


> If one dynamic array supplied to the **CATS** function is null then the result of the **CATS** function is the non-null dynamic array.


An example of use is as:

```
     A = "a" : @SM : "b" : @VM : "c": @VM : "d"
     B = "x" : @VM : "y" : @SM : "z"
     CRT  CATS(A, B)
```

to display:

```
ax : @SM : b : @VM : cy : @SM : z : @VM : d
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
