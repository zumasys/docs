# NUMS

**Created At:** 9/15/2017 2:53:17 PM  
**Updated At:** 1/5/2018 5:47:56 PM  
**Original Doc:** [277003-nums](https://docs.jbase.com/36868-jbase-basic/277003-nums)  
**Original ID:** 277003  
**Internal:** No  

## Description

The **NUMS** function is used to determine whether the elements of a dynamic array are numeric or non-numeric strings. The function takes the general form:

```
NUMS(dynamic.array)
```

If an element is numeric, a numeric string, or an empty string, it evaluates to true, and returns a value of 1 to the corresponding element in a new dynamic array. If the element is a non-numeric string, it evaluates to false, and returns a value of 0.

The **NUMS** of a numeric element with a decimal point ( . ) evaluates to true; the **NUMS** of a numeric element with a comma ( , ) or dollar sign ( $ ) evaluates to false.

If **dynamic.array** evaluates to null, it returns null. If an element of **dynamic.array** is null, it returns null for that element.

### International Mode

When using the **NUMS** function in International Mode, the statement will use the Unicode Standard to determine whether an expression is numeric.

Go back to [jBASE BASIC](./../README.md)
