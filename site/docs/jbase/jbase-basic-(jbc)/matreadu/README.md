# MATREADU

**Created At:** 9/15/2017 12:21:38 PM  
**Updated At:** 11/27/2018 10:02:48 AM  
**Original Doc:** [276959-matreadu](https://docs.jbase.com/36868-jbase-basic/276959-matreadu)  
**Original ID:** 276959  
**Internal:** No  

**Tags:**
<badge text='dimensioned array' vertical='middle' />
<badge text='record handling' vertical='middle' />

# Description

This statement allows a record stored in a jBASE file to be read and mapped directly into a dimensioned array. The record will also be locked for update by the program. It takes the general form:

```
MATREADU array FROM { variable1,}expression {SETTING setvar}  {ON ERROR statements} {LOCKED statements} {THEN|ELSE statements}
```

Where:

- **array** should be a previously dimensioned array, which will be used to store the record to be read.
- If specified, **variable1** should be a jBASE BASIC variable that has previously been opened to a file using the [OPEN](./../open) statement. If **variable1** is not specified then the default file is assumed.
- **expression** should evaluate to a valid record key for the file.
- If found, the record can be read from the file then it is mapped into array and executes the THEN statements (if any). If the record cannot be read from the file for some reason then array is unchanged and executes the ELSE statements (if any).
- If the record could not be read because another process already had a lock on the record then one of two actions is taken.
    - If the **LOCKED** clause was specified in the statement then the statements dependent on it are executed.
    - If no **LOCKED** clause was specified then the statement blocks (hangs) until the other process releases the lock.
- If the **SETTING** clause is specified, setvar will be set to the number of fields in the record on a successful read. If the read fails, setvar will be set to one of [these values](./../incremental-file-errors).
- If **ON ERROR** is specified, the statements following the **ON ERROR** clause will be executed for any of the Incremental File Errors, except error 128.


The record is mapped into the array using a predefined algorithm. The record is expected to consist of a number of Field separated records, which are then assigned one at a time to each successive element of the matrix. If there were more fields in the record than elements in the array, then the final element of the array will be assigned all remaining fields. If there were fewer fields in the record than elements in the array then remaining array elements will be assigned a null value.

## Note:


> If multi-values are read into an array element they will then be referenced individually as:
> 
> ```
> Array(n)<1,m>
> ```
> 
> not
> 
> ```
> Array(n)<m>
> ```


An example of use is as:

```
     OPEN "test_rec" TO file_variable ELSE ABORT 201, "test_rec"
     DIM sample_arr(10)

     MATREADU sample_arr FROM file_variable , 002 LOCKED
        GOSUB InformUserLock ;* Say it is locked
         
     END THEN
         GOSUB InformUserOk ;* Say we got it
         
     END ELSE
        MAT sample_arr = 0 ;* It was not there
     END

```

or:

```
     OPEN "test_rec" TO file_variable ELSE ABORT 201, "test_rec"
     DIM sample_arr(10)

     MATREADU sample_arr FROM file_variable , 002 SETTING result_variable ON ERROR
         PRINT "Error number ":result_variable:" occurred, preventing record read."
         STOP
     END THEN
         PRINT 'Record read successfully'
         PRINT "Number of attributes in record = ": result_variable
     END ELSE
         PRINT 'Record not on file'
     END

```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).


