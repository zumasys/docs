# MAXIMUM

**Created At:** 9/15/2017 12:38:53 PM  
**Updated At:** 11/27/2018 9:50:57 AM  
**Original Doc:** [276975-maximum](https://docs.jbase.com/36868-jbase-basic/276975-maximum)  

**Tags:**
<badge text='dynamic arrays' vertical='middle' />

# Description

The function returns the element of a dynamic array with the highest numerical value. It takes the general form:

```
MAXIMUM(DynArr)
```

Where **DynArr** should evaluate to a dynamic array. Null dynamic array elements are treated as zero. Non-numeric dynamic array elements are ignored.

An example of use is as:

```
     VAR_ARR =" "
     FOR I = 2 TO 4
         INS I*3 BEFORE VAR_ARR<-3>
     NEXT I
     CRT MAXIMUM(VAR_ARR)
```

to display the number 12.



See also: [MINIMUM](./../minimum).

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
