# CLEARFILE

**Created At:** 8/14/2017 9:25:12 AM  
**Updated At:** 10/24/2018 10:55:44 PM  
**Original Doc:** [266853-clearfile](https://docs.jbase.com/36868-jbase-basic/266853-clearfile)  


# Description

The **CLEARFILE** statement is used to clear all the data from a file previously opened with the [OPEN](./../open) statement. It takes the general form:

```
CLEARFILE {variable} {SETTING setvar} {ON ERROR statements}
```

Where:

- The **variable** is the subject of an [OPEN](./../open) statement before the execution of **CLEARFILE** upon it.
- If the SETTING clause is specified and the **CLEARFILE** fails, it sets **setvar** to one of [these values](./../incremental-file-errors).




# Note:


> If the variable is omitted from the **CLEARFILE** statement, it assumes the default file variable as per the [OPEN](./../open) statement.


An example of use is as follows:

```
OPEN "record_file" TO FILEVAR ELSE ABORT 201, "record_file"
CLEARFILE FILEVAR
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
