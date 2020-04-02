# COUNTS

**Created At:** 8/14/2017 10:08:14 AM  
**Updated At:** 10/25/2018 7:08:20 AM  
**Original Doc:** [266863-counts](https://docs.jbase.com/36868-jbase-basic/266863-counts)  
**Original ID:** 266863  
**Internal:** No  

## Description

This function is useful to count the number of times a substring is repeated in each element of a dynamic array. The result is a new dynamic array whose elements are the counts corresponding to the elements in the dynamic array. It takes the general form:

```
COUNTS (dynamic.array, substring)
```

Where:

- **dynamic.array** specifies the dynamic array whose elements are to be searched.
- **substring** is an expression that evaluates to the substring to be counted. **substring** can be a character string, a constant, or a variable.

## Note

> Each character in an element is matched to substring only once. Therefore, when substring is longer than one character and a match is found, the search continues with the character following the matched substring.

No part of the matched element is recounted toward another match. If substring does not appear in an element, a 0 value is returned. If substring is an empty string, the number of characters in the element is returned. If substring is null, the **COUNTS** function fails and the program terminates with a run-time error message. If any element in dynamic.array is null, null is returned.

An example of use is as:

```
    array = "A" : @VM : "AA" : @SM : "AAAAA"
    CRT OCONV(COUNTS(array, "A"), "MCP")
    CRT OCONV(COUNTS(array, "AA"), "MCP")
```

results in the following output:

```
1]2\5
0]1\4
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
