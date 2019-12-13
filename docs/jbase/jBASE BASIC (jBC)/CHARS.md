# CHARS

**Created At:** 7/24/2017 1:14:34 PM  
**Updated At:** 10/24/2018 10:59:00 PM  


# Description

The**CHARS** function accepts a dynamic array of numeric expressions as an argument and returns a dynamic array of corresponding ASCII characters. It takes the general form:

```
CHARS(DynArr)
```

Where each element of **DynArr** must evaluate to a numeric argument in the range 0-255. If any of the dynamic array elements are non-numeric, a run-time error will occur. An example of use would be displaying an emoticon using:

```
0001     y = 58 : @AM : 45 : @AM : 41
0002     z = CHARS (y)
0003     FOR i = 1 TO 3
0004         CRT z<i>:
0005     NEXT i
```



See also: [CHAR](/36868-jbase-basic/264327-char).

Go back to [jBASE BASIC](263498-jbase-basic).
