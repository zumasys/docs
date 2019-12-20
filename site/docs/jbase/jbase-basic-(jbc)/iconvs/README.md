# ICONVS

**Created At:** 9/7/2017 9:12:28 AM  
**Updated At:** 10/30/2018 9:54:42 AM  
**Original Doc:** [276154-iconvs](https://docs.jbase.com/36868-jbase-basic/276154-iconvs)  

**Tags:**
<badge text='output' vertical='middle' />
<badge text='dynamic arrays' vertical='middle' />
<badge text='conversion' vertical='middle' />

# Description

This function converts each element of a dynamic array to a specified internal storage format. It takes the general form:

```
ICONVS(dynamic array, conversion)
```

Where:

- **conversion** is an expression that evaluates to one or more valid conversion codes, separated by value marks (ASCII 253).
- Each element of **dynamic array** is converted to the internal format specified by conversion and is returned in a **dynamic array**. If multiple codes are used, they are applied from left to right. The first conversion code converts the value of each element of **d****ynamic array**. The second conversion code converts the value of each element of the output of the first conversion, and so on. If dynamic.array evaluates to null, it returns null. If an element of **dynamic array**is null, null it returns null for that element. If conversion evaluates to null, the **ICONVS()**function fails and the program terminates with a run-time error message.


The [STATUS](278661-status-function) function reflects the result of the conversion:


| Status<br> | Result<br> |
| --- | --- |
| 0<br> | The conversion is successful.<br> |
| 1<br> | An element of dynamic array is invalid. It returns an empty string, unless dynamic array is null, in which case it returns null.<br> |
| 2<br> | Conversion is invalid.<br> |
| 3<br> | Successful conversion of possibly invalid data.<br> |




An example of use is as:

```
ARR1 = "3 AUGUST 1997" : @AM : "2 MARCH 2017" : @AM :"17 MAY 1987"
INTERN_DATE = ICONVS(ARR1,"D")
CRT CHANGE(INTERN_DATE, @AM, ','):',':STATUS()
```

to output :

```
10808,17959,7077,0.
```

For information about converting elements in a dynamic array to an external format see [OCONVS](277530-oconvs).



Go back to [jBASE BASIC](263498-jbase-basic).
