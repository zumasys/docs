# ICONVS

**Created At:** 9/7/2017 9:12:28 AM  
**Updated At:** 10/30/2018 9:54:42 AM  
**Original Doc:** [276154-iconvs](https://docs.jbase.com/36868-jbase-basic/276154-iconvs)  
**Original ID:** 276154  
**Internal:** No  

**Tags:**
<badge text='output' vertical='middle' />
<badge text='dynamic arrays' vertical='middle' />
<badge text='conversion' vertical='middle' />

## Description

This function converts each element of a dynamic array to a specified internal storage format. It takes the general form:

```
ICONVS(dynamic array, conversion)
```

Where:

- **conversion** is an expression that evaluates to one or more valid conversion codes, separated by value marks (ASCII 253).
- Each element of **dynamic array** is converted to the internal format specified by conversion and is returned in a **dynamic array**. If multiple codes are used, they are applied from left to right. The first conversion code converts the value of each element of **dynamic array**. The second conversion code converts the value of each element of the output of the first conversion, and so on. If **dynamic.array** evaluates to null, it returns null. If an element of **dynamic array** is null, null it returns null for that element. If **conversion** evaluates to null, the **ICONVS()** function fails and the program terminates with a run-time error message.

The [STATUS](./../status-function) function reflects the result of the conversion:

| Status | Result |
| --- | --- |
| 0 | The conversion is successful. |
| 1 | An element of dynamic array is invalid. It returns an empty string, unless dynamic array is null, in which case it returns null. |
| 2 | Conversion is invalid. |
| 3 | Successful conversion of possibly invalid data. |

An example of use is as:

```
arr1 = "3 August 1997" : @AM : "2 March 2017" : @AM :"17 May 1987"
intern_Date = ICONVS(arr1,"D")
CRT CHANGE(intern_Date, @AM, ',') : ',' : STATUS()
```

to output :

```
10808,17959,7077,0.
```

For information about converting elements in a dynamic array to an external format see [OCONVS](./../oconvs).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
