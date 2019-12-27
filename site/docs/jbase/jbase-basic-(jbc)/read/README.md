# READ

**Created At:** 9/22/2017 2:53:04 PM  
**Updated At:** 11/27/2018 9:20:41 AM  
**Original Doc:** [277646-read](https://docs.jbase.com/36868-jbase-basic/277646-read)  
**Original ID:** 277646  
**Internal:** No  

**Tags:**
<badge text='record handling' vertical='middle' />

# Description

The **READ** statement allows a program to read a record from a previously opened file into a variable. It takes the general form:

```
READ variable1 FROM { variable2,} expression {SETTING setvar} {ON ERROR statements} {THEN|ELSE statements}
```

Where:

- **variable1**is the identifier into which the record will be read.
- **variable2**, if specified, should be a file variable that has previously been opened to a file using the [OPEN](./../open) statement. If **variable2**is not specified then the default file variable is assumed.
- The **expression**should evaluate to a valid record key for the file.
- If the **SETTING**clause is specified and the read fails, **setvar**will be set to one of [these values](./../incremental-file-errors).
- If **ON ERROR** is specified, the statements following the **ON ERROR** clause will be executed for any of the above Incremental File Errors except error 128.
- If the **READ** is successful then the statements following **THEN**will be executed. If the **READ** is unsuccessful, i.e. the record key does not exist in the file, then the statements following **ELSE**are executed. If the **READ** is unsuccessful and there is no **ELSE**then **expression** is set to "" (null).


If a lock is to be set on a record, it should be explicitly stated with the [**READU**](./../readu) statement.

An example of use is as:

```
0001     $option jabba
0002
0003     open "dummy_records" to file_variable else abort 201, "dummy_records"
0004     read rec_variable from file_variable, 7 setting error_variable on error
0005         crt error_variable
0006     end then
0007         for rec_index = 1 to dcount(rec_variable, @AM)
0008             crt rec_variable<rec_index>
0009         next rec_index
0010     end
```

to show all the contents of record 7 to the terminal. Note that this code is JabbaScript.

Go back to[jBASE BASIC](./../jbase-basic-programmers-reference-guide).
