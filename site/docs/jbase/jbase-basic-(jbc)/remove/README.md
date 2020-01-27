# REMOVE

**Created At:** 9/28/2017 7:35:54 AM  
**Updated At:** 1/5/2018 6:06:07 PM  
**Original Doc:** [278785-remove](https://docs.jbase.com/36868-jbase-basic/278785-remove)  
**Original ID:** 278785  
**Internal:** No  

## Description

**REMOVE** will successively extract delimited strings from a dynamic array.

```
REMOVE variable FROM array SETTING setvar
```

Where:

**variable** is the variable, which is to receive the extracted string.

**array** is the dynamic array from which the string is to be extracted.

**setvar** is set by the system during the extraction to indicate the type of delimiter found:

| <!----> | <!----> |
| --- | --- |
| 0 | end of the array |
| 1 | xFF ASCII 255 |
| 2 | xFE ASCII 254 Field marker |
| 3 | xFD ASCII 253 Value marker |
| 4 | xFC ASCII 252 Subvalue marker |
| 5 | xFB ASCII 251 |
| 6 | xFA ASCII 250 |
| 7 | xF9 ASCII 249 |

The first time the **REMOVE** statement is used with a particular array, it will extract the first delimited string it finds and set the special "remove pointer" to the start of the next string (if any). The next time **REMOVE** is used on the same array, the pointer will be used to retrieve the next string and so on. The array is not altered.

The variable named in the **SETTING** clause is used to record the type of delimiter that was found - to help determine whether the **REMOVE** statement extracted a field, a value or a subvalue for example.

Delimiters are defined as characters between xF9 and xFF only. Once the end of the array has been reached, the string variable will not be updated and the **SETTING** clause will always return 0. The "remove pointer" may be reset by assigning the variable to itself - for example REC = REC.

An example of use is as:

```
EQU FM TO CHAR (254), VM to CHAR(253), SVM to CHAR(252)
REC = "Field 1":FM:"Value 1":VM:" Value 2":FM:"Field 3"
REMOVE EXSTRING FROM REC SETTING DELIM
REMOVE EXSTRING FROM REC SETTING DELIM
```

The first time **REMOVE** is used, EXSTRING will contain "Field 1" and DELIM will contain xFE. The second time REMOVE is used, EXSTRING will contain "Value 1" and DELIM will contain xFD.

Go back to[jBASE BASIC](./../jbase-basic-programmers-reference-guide).
