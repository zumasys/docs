# SUM

**Created At:** 9/28/2017 2:16:30 PM  
**Updated At:** 1/5/2018 6:24:49 PM  
**Original Doc:** [278848-sum](https://docs.jbase.com/36868-jbase-basic/278848-sum)  
**Original ID:** 278848  
**Internal:** No  

## Description

The **SUM** function sums numeric elements in a dynamic array. It takes the general form:

```
SUM(expr)
```

Where:

**expr** is a dynamic array. Non-numeric sub-values, values and attributes are ignored.

An example of use is as:

```
a0 = 1 : @SVM : 2 : @VM : 3 : @AM : 4 : @SVM : 5 : @VM : 6 : @AM : 7 : @SVM : 8 : @VM :'NINE'

a1 = SUM (a0)
a2 = SUM(a1)
a3 = SUM(a2)

CRT a0
CRT a1
CRT a2
CRT a3
```

to display:

```
1³2²3�4³5²6�7³8²NINE
3²3�9²6�15²0
6�15�15
36
```

Go back to [jBASE BASIC](./../README.md)
