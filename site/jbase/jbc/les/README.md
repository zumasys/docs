# LES

**Created At:** 9/15/2017 8:32:41 AM  
**Updated At:** 11/27/2018 8:39:32 AM  
**Original Doc:** [276933-les](https://docs.jbase.com/36868-jbase-basic/276933-les)  
**Original ID:** 276933  
**Internal:** No  

**Tags:**
<badge text='dynamic arrays' vertical='middle' />

## Description

The **LES** function is used to determine whether elements of one dynamic array are less than or equal to the elements of another dynamic array.

```
LES(array1, array2)
```

In operation, the function compares each element of **array1** with the corresponding element of **array2**. If the element from **array1** is less than or equal to the element from **array2**, a one (1) is returned in the corresponding element of a new dynamic array. If the element from **array1** is greater than the element from **array2**, it returns a zero (0).

If an element of one dynamic array has no corresponding element in the other dynamic array, it evaluates the undefined element as empty, and the comparison continues.

If either of a corresponding pair of elements is null, it returns null for that element.

An example of use is as:

```
    val =" "
    FOR inx = 1 TO 3
        INS inx BEFORE val<1>
    NEXT inx

    val2 =" "
    FOR inx = 2 TO 4
        INS inx*3 BEFORE val2<-3>
    NEXT inx

    CRT OCONV(val,"MCP")
    CRT OCONV(val2, "MCP")
    CRT OCONV(LES(val, val2), "MCP")
```

which will display the following result:

```
3^2^1^
 ^6^9^12
0^1^1^1
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
