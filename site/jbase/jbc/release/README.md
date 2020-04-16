# RELEASE

<PageHeader />

## Description

The **RELEASE** statement enables a program to explicitly release record locks without updating the records using [WRITE](./../write). It takes the general form:

```
RELEASE {{variable,} expression}
```

Where:

If **variable** is specified, it should be a valid file descriptor variable (i.e. It should have been the subject of an [OPEN](./../open) statement)

If **expression** is supplied, it should evaluate to the record key of a record whose lock the program wishes to free.

If **variable** was specified, the record lock in the file described by it is released. If **variable** was not specified the record lock in it releases the file described by the default file variable If **RELEASE** is issued without arguments then all record locks in all files that were set by the current program will be released.

## Note

> Where possible the program should avoid the use of **RELEASE** without arguments; this is less efficient and can be dangerous - especially in subroutines.

An example of use is as:

```
READU Rec FROM File, "Record" ELSE ABORT 203, "Record"
IF Rec<1> = "X" THEN
    RELEASE File, "Record"
END
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
