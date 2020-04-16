# READVU

<PageHeader />

## Description

The **READVU** statement allows a program to read a specific field in a record in a previously opened file into a variable. It also respects record locking and locks the specified record for update.

It takes the general form:

```
READVU variable1 FROM { variable2,} expression1, expression2 {SETTING setvar}
{ON ERROR statements} {LOCKED statements} {THEN|ELSE statements}
```

Where:

**variable1** is the record id into which the record will be read.

**variable2** if specified, should be a variable that has previously been opened to a file using the [OPEN](./../open) statement. If **variable2** is not specified then the default file variable is assumed.

**expression1** should evaluate to a valid record key for the file.

**expression2** should evaluate to a positive integer number. If the number is invalid or greater than the number of fields in the record, then a NULL string will be assigned to **variable1**. If the number is 0, then the readv0 emulation setting controls the value returned in **variable1**. If a non-numeric argument is evaluated a run time error will occur.

If the **SETTING** clause is specified and the read fails, **setvar** will be set to one of [these values](./../incremental-file-errors).

If **ON ERROR** is specified, the statements following the **ON ERROR** clause will be executed for any Incremental File Error except 128.

If the **READVU** is successful then the statements following **THEN** will be executed. If the **READVU** is unsuccessful, i.e. the record key does not exist in the file, then the statements following **ELSE** are executed. If the **READVU** is unsuccessful and there is no **ELSE** then **expression** is set to "" (null).

If the record could not be read because another process already had a lock on the record then one of two actions is taken. If the **LOCKED** clause was specified in the statement then the statements dependent on it are executed. If no **LOCKED** clause was specified then the statement blocks (hangs) until the other process releases the lock.

The lock taken by the **READVU** statement will be released by any of the following events:

- The same program with [WRITE](./../write), [WRITEV](./../writev), [MATWRITE](./../matwrite) or [DELETE](./../delete) statements writes to the record.
- The record lock is released explicitly using the [RELEASE](./../release) statement.
- The program stops normally or abnormally.

When a file is [OPEN](./../open)ed to a local file variable in a subroutine then the file is closed when the subroutine [RETURN](./../return)s so all locks taken on that file are released, including locks taken in a calling program. Files that are opened to [COMMON](./../common) variables are not closed so the locks remain intact.

An example of use is as:

```
OPEN "Customers" ELSE ABORT 201, "Customers"
OPEN "DICT Customers" TO DCusts ELSE ABORT 201, "DICT Customers"

LOOP
    READVU Rec FROM DCusts, "Xref",7 LOCKED
        CRT "Locked - retrying"
        SLEEP 1; CONTINUE ;* Restart LOOP
    END
    THEN
        READ DataRec FROM Rec ELSE ABORT 202, Rec
        BREAK ;*leave the LOOP
    END
    ELSE
        ABORT 202, "Xref"
    END
REPEAT
```

See also: [WRITE](./../write), [WRITEU](./../writeu), [MATWRITE](./../matwrite), [MATWRITEU](./../matwriteu), [RELEASE](./../release), and [DELETE](./../delete).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
