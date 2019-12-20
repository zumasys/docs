# OPENINDEX

**Created At:** 9/21/2017 12:59:17 PM  
**Updated At:** 11/27/2018 9:46:28 AM  
**Original Doc:** [277541-openindex](https://docs.jbase.com/36868-jbase-basic/277541-openindex)  

**Tags:**
<badge text='file handling' vertical='middle' />
<badge text='file indexing' vertical='middle' />
<badge text='records handling' vertical='middle' />

# Description

The **OPENINDEX** statement is used to open a particular index definition for a particular file. This index file variable can later be used with the [SELECT](278801-select) statement. It takes the general form:

```
OPENINDEX filename,indexname TO indexvar {SETTING setvar} THEN|ELSE statements
```

Where:

- **filename** should correspond to a valid file which has at least one index,
- **indexname** should correspond to an index created for the filename,
- **indexvar** is the variable that holds the descriptor for the index.


If the [OPEN](277537-open) statement fails it will execute any statements associated with an ELSE clause. If the [OPEN](277537-open) is successful it will execute any statements associated with a THEN clause. Note that the syntax requires either one or both of the THEN and ELSE clauses.

If the SETTING clause is specified and the open fails, setvar will be set to one of the following values:


| Code<br> | Description<br> |
| --- | --- |
| 128<br> | No such file or directory<br> |
| 4096<br> | Network error<br> |
| 24576<br> | Permission denied<br> |
| 32768<br> | Physical I/O error or unknown error<br> |




An example of use is as:

```
OPENINDEX "CUSTOMER","IXLASTNAME" TO custlastname.ix SETTING errval ELSE
    CRT "OPENINDEX failed for file CUSTOMER, index IXLASTNAME"
    ABORT
END
```



Go back to [jBASE BASIC](263498-jbase-basic).
