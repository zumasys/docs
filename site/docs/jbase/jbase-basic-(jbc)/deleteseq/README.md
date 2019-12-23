# DELETESEQ

**Created At:** 8/23/2017 1:42:21 PM  
**Updated At:** 10/24/2018 11:00:33 PM  
**Original Doc:** [268481-deleteseq](https://docs.jbase.com/36868-jbase-basic/268481-deleteseq)  

**Tags:**
<badge text='sequential files' vertical='middle' />

# Description

The **DELETESEQ** statement deletes a sequential file. It takes the general form:

```
DELETESEQ Expression {SETTING setvar} {ON ERROR statements} {LOCKED Statements} THEN | ELSE Statements
```

or

```
DELETESEQ Expression, FileVar{SETTING setvar} {ON ERROR Statements} {LOCKED Statements} THEN | ELSE Statements
```

Where:

- **Expression** specifies the variable to contain next record from sequential file.
- **FileVar** specifies the file descriptor of the file opened for sequential access.
- **Statements** are conditional jBASE BASIC statements.




Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
