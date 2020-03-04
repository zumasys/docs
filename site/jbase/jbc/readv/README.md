# READV

**Created At:** 9/28/2017 6:41:53 AM  
**Updated At:** 11/27/2018 9:35:38 AM  
**Original Doc:** [278772-readv](https://docs.jbase.com/36868-jbase-basic/278772-readv)  
**Original ID:** 278772  
**Internal:** No  

**Tags:**
<badge text='record handling' vertical='middle' />

## Description

The **READV** statement allows a program to read a specific field from a record in a previously opened file into a variable. It takes the general form:

```
READV variable1 FROM { variable2,} expression1, expression2 {SETTING setvar} {ON ERROR statements} {THEN|ELSE statements}
```

Where:

- **variable1** is the identifier into which the record will be read.
- **variable2** if specified, should be a variable that has previously been opened to a file using the [OPEN](./../open) statement. If **variable2** is not specified, the default file variable is assumed.
- **expression1** should evaluate to a valid record key for the file.
- **expression2** should evaluate to a positive integer. If the number is invalid or greater than the number of fields in the record, a NULL string will be assigned to **variable1**. If the number is 0, then the **readv0** emulation setting controls the value returned in **variable1**. If a non-numeric argument is evaluated, a run time error will occur.
- If the **SETTING** clause is specified and the read fails, **setvar** will be set to one of [these values](./../incremental-file-errors). If **ON ERROR** is specified, the statements following the **ON ERROR** clause will be executed for any Incremental File Errors except 128.

If the **READV** is successful then the statements following **THEN** will be executed. If the **READ** is unsuccessful, i.e. the record key does not exist in the file, then the statements following **ELSE** are executed. If the **READV** is unsuccessful and there is no **ELSE** then **expression** is set to "" (null).

If it is desired to set a lock on a record, it should be done explicitly with the [READU](./../readu) or [READVU](./../readvu) statement. To read a field from a previously opened file into a variable and take a read-only shared lock on the field, [READVL](./../readvl) may be used.

An example of use may be as:

```
OPEN "Customers" ELSE ABORT 201, "Customers"
OPEN "DICT Customers" TO DCusts ELSE ABORT 201, "DICT Customers"
READV Rec FROM DCusts, "Xref", 7 THEN
    READ DataRec FROM Rec<7> ELSE ABORT 202, Rec<7>
END ELSE
    ABORT 202, "Xref"
END
```

Go back to [jBASE BASIC](./../README.md)
