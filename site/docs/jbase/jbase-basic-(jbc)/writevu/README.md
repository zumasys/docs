# WRITEVU

**Created At:** 10/4/2017 12:32:21 PM  
**Updated At:** 1/5/2018 6:40:14 PM  
**Original Doc:** [279576-writevu](https://docs.jbase.com/36868-jbase-basic/279576-writevu)  
**Original ID:** 279576  
**Internal:** No  

## Description

The **WRITEVU** statement allows a program to write a specific field on a record in a previously opened file. An existing record lock will be preserved. The statement takes the general form:

```
WRITEVU variable1 ON|TO { variable2,} expression1, expression2 {SETTING setvar} {ON ERROR statements}
```

Where:

**variable1** is the identifier holding the record to be written.

**variable2**, if specified, should be a jBASE BASIC variable that has previously been opened to a file using the [OPEN](./../open) statement. If **variable2** is not specified then the default file is assumed.

**expression1** should evaluate to a valid record key for the file.

**expression2** should evaluate to a positive integer number; if the number is greater than the number of fields in the record, null fields will be added to **variable1**. If **expression2** evaluates to a non-numeric argument, a run time error will be generated.

If the **SETTING** clause is specified and the write fails, it sets **setvar** to one of [these values](./../incremental-file-errors).

If the statement fails to write the record, it executes any statements associated with the **ON ERROR** clause.

Any of the following events will release the lock taken by the **WRITEVU** statement:

- The same program with [WRITE](./../write), [WRITEV](./../writev) or [MATWRITE](./../matwrite) statements writes to the record.
- By explicitly using the [RELEASE](./../release) statement, it releases the record lock.
- The program stops normally or abnormally.

An example of use is as:

```
OPEN "Customers" ELSE ABORT 201, "Customers" 
OPEN "DICT Customers" TO DCusts ELSE ABORT 201, "DICT Customers" 
WRITEVU Rec ON DCusts, 'Xref', 1 SETTING Err ON ERROR 
    CRT "I/O Error[" :Err: "]" ABORT 
END
```

See also: [MATWRITEU](./../matwriteu), [RELEASE](./../release), [WRITE](./../write), [WRITEU](./../writeu).

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
