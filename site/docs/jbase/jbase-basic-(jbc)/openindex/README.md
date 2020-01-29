# OPENINDEX

**Created At:** 9/21/2017 12:59:17 PM  
**Updated At:** 11/27/2018 9:46:28 AM  
**Original Doc:** [277541-openindex](https://docs.jbase.com/36868-jbase-basic/277541-openindex)  
**Original ID:** 277541  
**Internal:** No  

**Tags:**
<badge text='file handling' vertical='middle' />
<badge text='file indexing' vertical='middle' />
<badge text='record handling' vertical='middle' />

## Description

The **OPENINDEX** statement is used to open a particular index definition for a particular file. This index file variable can later be used with the [SELECT](./../select) statement. It takes the general form:

```
OPENINDEX filename,indexname TO indexvar {SETTING setvar} THEN|ELSE statements
```

Where:

- **filename** should correspond to a valid file which has at least one index,
- **indexname** should correspond to an index created for the filename,
- **indexvar** is the variable that holds the descriptor for the index.

If the [OPEN](./../open) statement fails it will execute any statements associated with an **ELSE** clause. If the [OPEN](./../open) is successful it will execute any statements associated with a **THEN** clause. Note that the syntax requires either one or both of the **THEN** and **ELSE** clauses.

If the **SETTING** clause is specified and the open fails, setvar will be set to one of be set to one of [these values](./../incremental-file-errors).

An example of use is as:

```
OPENINDEX "CUSTOMER","IXLASTNAME" TO custlastname.ix SETTING errval ELSE
    CRT "OPENINDEX failed for file CUSTOMER, index IXLASTNAME"
    ABORT
END
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
