# IFS

**Created At:** 9/7/2017 9:33:59 AM  
**Updated At:** 10/30/2018 9:45:25 AM  
**Original Doc:** [276157-ifs](https://docs.jbase.com/36868-jbase-basic/276157-ifs)  
**Original ID:** 276157  
**Internal:** No  

**Tags:**
<badge text='dynamic arrays' vertical='middle' />

## Description

The function returns a **dynamic array** whose elements are chosen individually from one of two dynamic arrays based on the contents of a third dynamic array. It takes the general form:

```
IFS(dynamic array, true array, false array)
```

**IFS** evaluates each element of the **dynamic array**. If the element evaluates to true, it returns the corresponding element from **true array** to the same element of a new **dynamic array**.

If the element evaluates to false, it returns the corresponding element from **false array**.

If there is no corresponding element in the correct response array, it returns an empty string for that element. If an element is null, that element evaluates to false.

An example of usage is:

```
dyn_A = 1  : @VM : 0  : @VM : 1  : @VM : 1  : @VM : 1  : @VM : 0
dyn_B = 11 : @VM : 22 : @VM : 33 : @VM : 44 : @VM : 55 : @VM : 66 : @VM : 77
dyn_C = 99 : @VM : 88 : @VM : 77 : @VM : 55 : @VM : 66 : @VM : 44 : @VM : 33

dyn_D = IFS(dyn_A, dyn_B, dyn_C)

CRT OCONV(dyn_D, "MCP")
```

will display the following:

```
11]88]33]44]55]44
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
