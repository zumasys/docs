# WRITE

**Created At:** 10/4/2017 11:46:10 AM  
**Updated At:** 4/19/2019 8:14:40 AM  
**Original Doc:** [279568-write](https://docs.jbase.com/36868-jbase-basic/279568-write)  
**Original ID:** 279568  
**Internal:** No  

## Description

The **WRITE** statement allows a program to write a record into a previously opened file.

```
WRITE variable1 ON|TO { variable2,} expression {SETTING setvar} {ON ERROR statements}
```

Where:

- **variable1** is the identifier containing the record to write,
- **variable2**, if specified, should be a previous opened variable to a file using the [OPEN](./../open) statement. If **variable2** is unspecified, the default file variable is assumed.
- the **expression** should evaluate to a valid record key for the file.
- If specifying the SETTING clause and the write fails, it sets **setvar** to one of the [these values](./../incremental-file-errors).

If holding a lock on the record by this process, it is released by the [WRITE](./.). If it is desired to retain a lock on a record, it should be stated explicitly with the [WRITEU](./../writeu) statement.

An example of use would be as:

```
OPEN "DICT Customers" TO DCusts ELSE ABORT 201, "DICT Customers"

WRITE Rec ON DCusts, "Xref" ON ERROR
    CRT "Xref not written to DICT Customers"
END
```

Go back to[jBASE BASIC](./../jbase-basic-programmers-reference-guide).
