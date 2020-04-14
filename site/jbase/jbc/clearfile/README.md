# CLEARFILE

<PageHeader />

## Description

The **CLEARFILE** statement is used to clear all the data from a file previously opened with the [OPEN](./../open) statement. It takes the general form:

```
CLEARFILE {variable} {SETTING setvar} {ON ERROR statements}
```

Where:

- The **variable** is the subject of an [OPEN](./../open) statement before the execution of **CLEARFILE** upon it.
- If the SETTING clause is specified and the **CLEARFILE** fails, it sets **setvar** to one of [these values](./../incremental-file-errors).

## Note

> If **variable** is omitted from the **CLEARFILE** statement, it assumes the default file variable as per the [OPEN](./../open) statement.

An example of use is as follows:

```
OPEN "record_file" TO fileVar ELSE ABORT 201, "record_file"
CLEARFILE fileVar
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
