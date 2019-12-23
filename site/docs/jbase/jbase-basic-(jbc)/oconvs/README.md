# OCONVS

**Created At:** 9/21/2017 10:24:36 AM  
**Updated At:** 11/27/2018 7:54:48 AM  
**Original Doc:** [277530-oconvs](https://docs.jbase.com/36868-jbase-basic/277530-oconvs)  

**Tags:**
<badge text='dynamic arrays' vertical='middle' />

# Description

The **OCONVS** function converts the elements of a dynamic.array to a specified format for external output. It takes the general form:

```
OCONVS(dynamic.array, conversion)
```

Where the c**onversion**specifies the output format specified.**conversion** must evaluate to one or more conversion codes separated by value marks (ASCII 253).

If multiple codes are used, they are applied from left to right as follows: the left-most conversion code is applied to the element, the next conversion code to the right is then applied to the result of the first conversion, and so on.

The output is returned in a dynamic array. If **dynamic.array** evaluates to null, it returns null. If any element of dynamic.array is null, it returns null for that element. If conversion evaluates to null, the **OCONVS()** function fails and the program terminates with a run-time error message.

The [STATUS function](./../status-function) reflects the result of the conversion:


| Status | Description |
| --- | --- |
| 1<br> | The conversion is successful.<br> |
| 1<br> | Passes an invalid element to the **OCONVS()** function; the original element is returned. If the invalid element is null, it returns null for that element.<br> |
| 2<br> | The conversion code is invalid.<br> |


# **INTERNATIONAL MODE**

Description of date, time, number and currency conversions when used in [ICONV](./../iconv) and International Mode.

For information about converting elements in a dynamic array to an internal format see the [ICONVS](./../iconvs) function.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
