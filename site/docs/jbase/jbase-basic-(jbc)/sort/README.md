# SORT

**Created At:** 9/28/2017 9:42:16 AM  
**Updated At:** 1/5/2018 6:18:18 PM  
**Original Doc:** [278811-sort](https://docs.jbase.com/36868-jbase-basic/278811-sort)  
**Original ID:** 278811  
**Internal:** No  


# Description

The **SORT** function sorts all elements of a dynamic array in ascending left-justified order. It generally takes the form:

```
SORT(expression)
```

Where:

expression may evaluate to any data type but will only be useful if it evaluates to a dynamic array.

# Please note:

- The dynamic array can contain any number and combination of system delimiters.
- The **SORT** function will return an attribute-delimited array of the sorted elements.
- All system delimiters in expression will be converted to an attribute mark '0xFE' in the sorted result. For example:


```
MyArray = 'GEORGE':@VM:'FRED':@AM:'JOHN':@SVM:'ANDY'
CRT SORT (MyArray)
```

will return:  ANDY^FRED^GEORGE^JOHN

where '^' is an attribute mark, '0xFE'. MyArray remains unchanged.

The **SORT** is achieved by the quick sort algorithm, which sorts in situ, and is very fast.

# **INTERNATIONAL MODE**

When using the **SORT** function in International Mode, the function will use the currently configured locale to determine the rules by which each string is considered less than or greater than the other for sort purposes.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
