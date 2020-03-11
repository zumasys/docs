# CREATE

**Created At:** 8/16/2017 12:54:38 PM  
**Updated At:** 1/20/2020 8:41:33 PM  
**Original Doc:** [267387-create](https://docs.jbase.com/36868-jbase-basic/267387-create)  
**Original ID:** 267387  
**Internal:** No  

## Description

This statement is intended to create files. It can be useful after an [OPENSEQ](./../openseq) statement to create a record in a directory file. **CREATE**creates the record or file if the [OPENSEQ](./../openseq) statement fails.

It takes the general form:

```
CREATE file.variable {THEN statements [ELSE statements] | ELSE statements}
```

If the record or file is created, it executes the THEN statements; if no record or file is created, it executes the ELSE statements.

An [OPENSEQ](./../openseq) statement for the specified file variable must be executed before the **CREATE** statement to associate the pathname or record ID of the file to be created with the file variable. If **file.variable** is null, the **CREATE** statement fails and the program enters the debugger.

## Note

> **CREATE** statement may prove useful for exception handling, when [OPENSEQ](./../openseq) cannot find a record or file to open and the next operation is to be a [READSEQ](./../readseq) or [READBLK](./../readblk). If the first file operation is a [WRITESEQ](./../writeseq), [WRITESEQ](./../writeseq) creates the record or file if it does not exist.

In the following example, **record\_file2** does not yet exist. When [OPENSEQ](./../openseq) fails to open **record\_file2** in the **TESTENV** directory, the **CREATE** statement creates and opens it to the file variable **FILE**, ready to be written to.

```
INCLUDE JBC.h
OPENSEQ 'TESTENV':DIR_DELIM_CH:'record_file2' TO FILE ELSE
    CREATE FILE ELSE ABORT
END

WEOFSEQ FILE
WRITESEQ 'I am a test record' TO FILE ELSE
    CRT 'Failed to write'
END
```

### Warning

**OPENSEQ** will automatically create the target file if **openseq\_creates = true** (in ***Config\_EMULATE***).
You can verify by running **config-strings**.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
