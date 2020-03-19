# WRITEV

**Created At:** 10/4/2017 12:22:20 PM  
**Updated At:** 1/5/2018 6:39:38 PM  
**Original Doc:** [279574-writev](https://docs.jbase.com/36868-jbase-basic/279574-writev)  
**Original ID:** 279574  
**Internal:** No  

## Description

The **WRITEV** statement allows a program to write a specific field of a record in a previously opened file. It takes the general form:

```
WRITEV variable1 ON|TO {variable2,} expression1, expression2 {SETTING setvar} {ON ERROR statements}
```

Where:

**variable1** is the identifier holding the record to be written.

**variable2**, if specified, should be a jBASE BASIC variable that has previously been opened to a file using the [OPEN](./../open) statement. If **variable2** is not specified then it assumes the default file.

**expression1** should evaluate to a valid record key for the file.

**expression2** should evaluate to a positive integer number. If the number is greater than the number of fields in the record, it will add null fields to **variable1**. If **expression2** evaluates to a non-numeric argument, it will generate a run time error.

If the **SETTING** clause is specified and the write fails, it sets **setvar** to one of [these values](./../incremental-file-errors).

The **WRITEV** statement will cause the release of any lock held on the record by this program. If you wish to retain a lock on the record, do so explicitly with the [WRITEVU](./../writevu) statement.

An example of use may be as:

```
OPEN "Customers" ELSE ABORT 201, "Customers"
OPEN "DICT Customers" TO DCusts ELSE ABORT 201, "DICT Customers"

WRITEV Rec ON DCusts, "Xref",7 Setting Err ON ERROR
    CRT "I/O Error[":Err:"]"
    ABORT
END
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
