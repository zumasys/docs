# MATWRITEU

**Created At:** 9/15/2017 12:33:46 PM  
**Updated At:** 11/27/2018 9:50:48 AM  
**Original Doc:** [276970-matwriteu](https://docs.jbase.com/36868-jbase-basic/276970-matwriteu)  
**Original ID:** 276970  
**Internal:** No  

**Tags:**
<badge text='dimensioned arrays' vertical='middle' />
<badge text='record locking' vertical='middle' />
<badge text='record handling' vertical='middle' />

## Description

The **MATWRITEU** statement transfers the entire contents of a dimensioned array to a specified record on file, in the same manner as the [MATWRITE](./../matwrite) statement. An existing record lock will be preserved. It takes the general form:

```
MATWRITEU array ON { variable,}expression {SETTING setvar} {ON ERROR statements}
```

Where:

- **array** should be a previously dimensioned and initialized array. If specified, variable should be a previously opened file variable (i.e. the subject of an [OPEN](./../open) statement). If variable is not specified the default file variable is used.
- **expression** should evaluate to the name of the record in the file.
- If the **SETTING** clause is specified and the write succeeds, **setvar** will be set to the number of attributes read into array. If the **SETTING** clause is specified and the write fails, **setvar** will be set to one of [these values](./../incremental-file-errors).

If **ON ERROR** is specified, the statements following the **ON ERROR** clause will be executed for any of [these values](./../incremental-file-errors) except error 128.

The compiler will check that the variable specified is indeed a dimensioned array before its use in the statement.

An example of use is as:

```
DIM A(8)
MAT A = 99
....
MATWRITEU A ON "NewArray"
```

Go back to [jBASE BASIC](./../README.md)
