# COL1 and COL2

**Created At:** 9/6/2017 6:34:06 AM  
**Updated At:** 10/25/2018 7:23:25 AM  
**Original Doc:** [col1-and-col2](https://docs.jbase.com/36868-jbase-basic/col1-and-col2)  
**Original ID:** 276022  
**Internal:** No  


# **Description**

These functions can be used in conjunction with the **FIELD** function to determine the character positions one position before and one position after the location of the last field. It takes the general form:

```
COL1() / COL2()
```



When a field has been located in a string, it is sometimes useful to know its exact position within the string to manipulate either it, or the rest of the string. **COL1()** will return the position of the character immediately before the last field located. **COL2()** will return the position of the character immediately after the end of the last field located. Use them to manipulate the string.

An example of use is as:

```
A = "A,B,C,D,E"
Fld = FIELD(A, ",", 2)
CRT COL1()
CRT COL2()
```



Displays the values 2 and 4



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
