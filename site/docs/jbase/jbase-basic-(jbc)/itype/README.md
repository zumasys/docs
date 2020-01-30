# ITYPE

**Created At:** 9/14/2017 12:09:10 PM  
**Updated At:** 1/5/2018 5:07:26 PM  
**Original Doc:** [276755-itype](https://docs.jbase.com/36868-jbase-basic/276755-itype)  
**Original ID:** 276755  
**Internal:** No  

## Description

The **ITYPE** function returns the value resulting from the evaluation of an I-type expression in a jBASE file dictionary. It takes the general form:

```
ITYPE (i.type)
```

Where:

**i.type** is an expression evaluating to the contents of the compiled I-descriptor.

[comment]: <> (The Idescriptor must be compiled before the **ITYPE** function uses it; otherwise, a run-time error message results.)

Using several methods set the I.type to the evaluated I-descriptor in several ways. One way is to read the I-descriptor from a file dictionary into a variable, then use the variable as the argument to the **ITYPE** function. If the I-descriptor references a record ID, the current value of the system variable @ID is used. If the I-descriptor, references field values in a data record, the data is taken from the current value of the system variable @RECORD.

To assign field values to @RECORD, read a record from the data file into @RECORD before invoking the ITYPE function.

If **i.type** evaluates to null, the **ITYPE** function fails and the program terminates with a run-time error message.

## Note

> Set the @FILENAME to the name of the file before **ITYPE** execution.

## Example

This is the SLIPPER file content:

```
JIM GREG ALAN
001 8 001 10 001 5
```

This is the DICT SLIPPER content:

```
SIZE
001 D
002 1
003
004
005 10L
006 L
```

This is the program source code:

```
OPEN 'SLIPPERS' TO FILE ELSE STOP
OPEN 'DICT','SLIPPERS' TO D.FILE ELSE STOP
200
*
READ ITYPEDESC FROM D.FILE, 'SIZE' ELSE STOP
*
EXECUTE 'SELECT SLIPPERS'
@FILENAME = “SLIPPERS”
LOOP
READNEXT @ID DO
*
READ @RECORD FROM FILE, @ID THEN
*
CRT @ID: "WEARS SLIPPERS SIZE " ITYPE(ITYPEDESC)
END
REPEAT
```

The output of this program is:

```
3 records selected
JIM WEARS SLIPPERS SIZE 8
GREG WEARS SLIPPERS SIZE 10
ALAN WEARS SLIPPERS SIZE 5
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
