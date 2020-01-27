# ABSS

**Created At:** 11/3/2017 1:21:28 PM  
**Updated At:** 1/5/2018 6:44:14 PM  
**Original Doc:** [284121-abss](https://docs.jbase.com/36868-jbase-basic/284121-abss)  
**Original ID:** 284121  
**Internal:** No  

## Description

The **ABSS**function returns the absolute values of all the elements in a dynamic array. If an element in the dynamic array is null, it returns null for that element. It takes the general form:

```
ABSS (dynamic.array)
```

An example of use is as:

```
Y = REUSE(300)
Z = 500:@VM:400:@VM:300:@SM:200:@SM:100
A = SUBS (Z,Y)
CRT A
CRT ABSS (A)
```

The output of this program is:
200]100]0\-100\-200

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
