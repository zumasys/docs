# READ

<PageHeader />

**Tags:**
<badge text='record handling' vertical='middle' />

## Description

The **READ** statement allows a program to read a record from a previously opened file into a variable. It takes the general form:

```
READ variable1 FROM { variable2,} expression {SETTING setvar} {ON ERROR statements} {THEN|ELSE statements}
```

Where:

- **variable1**is the identifier into which the record will be read.
- **variable2**, if specified, should be a file variable that has previously been opened to a file using the [OPEN](./../open) statement. If **variable2** is not specified then the default file variable is assumed.
- The **expression** should evaluate to a valid record key for the file.
- If the **SETTING** clause is specified and the read fails, **setvar** will be set to one of [these values](./../incremental-file-errors).
- If **ON ERROR** is specified, the statements following the **ON ERROR** clause will be executed for any Incremental File Error except 128.
- If the **READ** is successful then the statements following **THEN** will be executed. If the **READ** is unsuccessful, i.e. the record key does not exist in the file, then the statements following **ELSE** are executed. If the **READ** is unsuccessful and there is no **ELSE** then **expression** is set to "" (null).

If a lock is to be set on a record, it should be explicitly stated with the [**READU**](./../readu) statement.

An example of use is as:

```
$option jabba

open "dummy_records" to file_variable else abort 201, "dummy_records"
read rec_variable from file_variable, 7 setting error_variable on error
    crt error_variable
end then
    for rec_index = 1 to dcount(rec_variable, @AM)
        crt rec_variable<rec_index>
    next rec_index
end
```

to show all the contents of record 7 to the terminal. Note that this code is JabbaScript.

Go back to[jBASE BASIC](./../jbase-basic-programmers-reference-guide).

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
