# MATREAD

**Created At:** 9/15/2017 12:13:44 PM  
**Updated At:** 11/27/2018 9:49:28 AM  
**Original Doc:** [276956-matread](https://docs.jbase.com/36868-jbase-basic/276956-matread)  
**Original ID:** 276956  
**Internal:** No  

**Tags:**
<badge text='dimensioned array' vertical='middle' />
<badge text='record handling' vertical='middle' />

## Description

The **MATREAD** statement allows a record stored in a jBASE file to be read and mapped directly into a dimensioned array. It takes the general form:

```
MATREAD array FROM {variable1,}expression {SETTING setvar}  {ON ERROR statements} {LOCKED statements} {THEN|ELSE statements}
```

Where:

- **array** should be a previously dimensioned array, which will be used to store the record to be read.
- If specified, **variable1** should be a jBASE BASIC variable that has previously been opened to a file using the [OPEN](./../open) statement. If **variable1** is not specified then the default file is assumed. The **expression** should evaluate to a valid record key for the file.
- If no record is found and can be read from the file then it is mapped into the array and executes the **THEN** statements (if any). If the record cannot be read from the file then array is unchanged and executes the **ELSE** statements (if any).
- If the record could not be read because another process already had a lock on the record then one of two actions is taken. If the **LOCKED** clause was specified in the statement then the statements dependent on it are executed. If no **LOCKED** clause was specified then the statement blocks (hangs)
- until the other process releases the lock. If a **LOCKED** clause is used and the read is successful, a lock will be set.
- If the **SETTING** clause is specified, **setvar** will be set to the number of fields in the record on a successful read. If the read fails, setvar will be set to one of [these values](./../incremental-file-errors).

If **ON ERROR** is specified, it executes the statements following the **ON ERROR** clause for any Incremental File Errors except 128.

The record is mapped into the array using a predefined algorithm. The record is expected to consist of a number of Field separated records, which are then assigned one at a time to each successive element of the matrix. If there were more fields in the record than elements in the array, then the final element of the array will be assigned all remaining fields. If there were fewer fields in the record than elements in the array then remaining array elements will be assigned a null value.

Note that if multi-values are read into an array element they will then be referenced individually as:

```
Array(n)<1,m>
```

not

```
Array(n)<m>
```

An example of use is as:

```
OPEN "test_rec" TO file_variable ELSE ABORT 201, "test_rec"
DIM sample_arr(10)

MATREAD sample_arr FROM file_variable , 002 SETTING result_variable ON ERROR
    CRT "Error number ":result_variable:" occurred, preventing record read."
    STOP
END THEN
    CRT 'Record read successfully'
    CRT "Number of attributes in record = ": result_variable
END ELSE
    CRT 'Record not on file'
END
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
