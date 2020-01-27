# NOBUF

**Created At:** 9/15/2017 2:17:18 PM  
**Updated At:** 1/5/2018 5:46:39 PM  
**Original Doc:** [276990-nobuf](https://docs.jbase.com/36868-jbase-basic/276990-nobuf)  
**Original ID:** 276990  
**Internal:** No  


# DESCRIPTION

jBASE can buffer for sequential input and output operations. The **NOBUF** statement turns off this behavior and causes all writes to the file to be performed immediately. The **NOBUF** statement should be used in conjunction with a successful [OPENSEQ](./../openseq) statement and before any input or output is performed on the record.

It takes the general form:

```
NOBUF file.variable {THEN statements [ELSE statements] | ELSE statements}
```

If the **NOBUF** operation is successful, it executes the THEN statements otherwise, executes the ELSE statements. If file.variable is not a valid file descriptor then **NOBUF** statement fails and the program enters the debugger.

In the following example, if RECORD in DIRFILE can be opened, output buffering is turned off:

```
OPENSEQ 'DIRFILE', 'RECORD' TO DATA THEN NOBUF DATA
ELSE ABORT
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
