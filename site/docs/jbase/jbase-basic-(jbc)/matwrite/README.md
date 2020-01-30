# MATWRITE

**Created At:** 9/15/2017 12:28:29 PM  
**Updated At:** 11/27/2018 10:05:10 AM  
**Original Doc:** [276964-matwrite](https://docs.jbase.com/36868-jbase-basic/276964-matwrite)  
**Original ID:** 276964  
**Internal:** No  

**Tags:**
<badge text='dimensioned arrays' vertical='middle' />
<badge text='record handling' vertical='middle' />

## Description

The **MATWRITE** statement transfers the entire contents of a dimensioned array to a specified record on disc. It takes the general form:

```
MATWRITE array ON { variable,}expression {SETTING setvar} {ON ERROR statements}
```

Where:

- **array** should be a previously dimensioned and initialized array.
- If specified, **variable** should be a previously opened file variable (i.e. the subject of an [OPEN](./../open) statement). If **variable** is not specified the default file variable is used.
- **expression** should evaluate to the name of the record in the file.
- If the **SETTING** clause is specified and the write succeeds, **setvar** will be set to the number of attributes read into array. If the **SETTING** clause is specified and the write fails, **setvar** will be set to one of [these values](./../incremental-file-errors).
- If **ON ERROR** is specified, the statements following the **ON ERROR** clause will be executed for any of [these values](./../incremental-file-errors) except error 128.

The compiler will check that the variable specified is a dimensioned array before its use in the statement.

An example of use is as:

```
dim sample_arr(20)
mat sample_arr = 99

matwrite sample_arr on "New array" setting response_code on error
    crt "Error: ":response_code :" Record could not be written."
end
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
