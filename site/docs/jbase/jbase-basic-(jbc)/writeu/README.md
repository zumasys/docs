# WRITEU

**Created At:** 10/4/2017 12:18:14 PM  
**Updated At:** 1/5/2018 6:33:14 PM  
**Original Doc:** [279573-writeu](https://docs.jbase.com/36868-jbase-basic/279573-writeu)  


# Description

The **WRITEU**statement allows a program to write a record into a previously opened file. An existing record lock will be preserved. It takes the general form:

```
WRITEU variable1 ON|TO { variable2,} expression {SETTING setvar} 
{ON ERROR statements}
```

Where:

variable1 is the identifier holding the record to be written.

variable2, if specified, should be a jBASE BASIC variable that has previously been opened to a file using the [OPEN](277537-open) statement. If variable2 is not specified then the default file is assumed.

The expression should evaluate to a valid record key for the file.

If the SETTING clause is specified and the write fails, setvar will be set to one of the [these values](277647-increamental-file-errors).

If the statement fails to write the record then any statements associated with the ON ERROR clause is executed.

The lock maintained by the **WRITEU** statement will be released by any of the following events:

- the same program with [WRITE](279568-write), [WRITEV](279574-writev) or [MATWRITE](276964-matwrite) statements writes to the record.
- the record lock is released explicitly using the [RELEASE](278784-release) statement.
- the program stops normally or abnormally.


An example of use is as:

```
OPEN "Customers" ELSE ABORT 201, "Customers"
OPEN "DICT Customers" TO DCusts ELSE ABORT 201, "DICT Customers"

WRITEU Rec FROM DCusts, "Xref" Setting Err ON ERROR
    CRT "I/O Error[":Err:"]"
    ABORT
END
```



See also: [READU](278774-readu), [MATREADU](276959-matreadu), [RELEASE](278784-release)

Go back to [jBASE BASIC.](263498-jbase-basic)
