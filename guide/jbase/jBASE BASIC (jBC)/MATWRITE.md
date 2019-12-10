# MATWRITE

**Created At:** 9/15/2017 12:28:29 PM  
**Updated At:** 11/27/2018 10:05:10 AM  

**Tags:**
<badge text='dimensioned arrays' vertical='middle' />
<badge text='record handling' vertical='middle' />

# Description

The **MATWRITE**statement transfers the entire contents of a dimensioned array to a specified record on disc. It takes the general form:

```
MATWRITE array ON { variable,}expression {SETTING setvar} {ON ERROR statements}
```

Where:

- **array** should be a previously dimensioned and initialized array.
- If specified, **variable** should be a previously opened file variable (i.e. the subject of an [OPEN](277537-open) statement). If **variable** is not specified the default file variable is used.
- **expression** should evaluate to the name of the record in the file.
- If the SETTING clause is specified and the write succeeds, **setvar** will be set to the number of attributes read into array. If the SETTING clause is specified and the write fails, **setvar** will be set to one of [these values](277647-increamental-file-errors).
- If ON ERROR is specified, the statements following the ON ERROR clause will be executed for any of [these values](277647-increamental-file-errors) except error 128.


The compiler will check that the variable specified is a dimensioned array before its use in the statement.

An example of use is as:

```
0002     dim sample_arr(20)
0003     mat sample_arr = 99
0004
0005     matwrite sample_arr on "New array" setting response_code on error
0006         crt "Error: ":response_code :" Record could not be written."
0007     end
```



Go back to [jBASE BASIC](263498-jbase-basic).
