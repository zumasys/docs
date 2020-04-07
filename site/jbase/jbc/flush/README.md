# FLUSH

**Created At:** 9/5/2017 3:01:06 PM  
**Updated At:** 1/5/2018 1:29:16 PM  
**Original Doc:** [275993-flush](https://docs.jbase.com/36868-jbase-basic/275993-flush)  
**Original ID:** 275993  
**Internal:** No  

## Description

Writes all the buffers for a sequential I/O file immediately. Normally, sequential I/O uses buffering for input/output operations, and writes are not immediately flushed. It takes the general form:

```
FLUSH file.variable {THEN statements [ELSE statements] | ELSE statements}
```

Where:

**file variable** specifies a file previously opened for sequential processing. If **file.variable** evaluates to null, the **FLUSH** statement fails and the program enters the debugger. After the buffer is written to the file, it executes the **THEN** statements, ignoring the **ELSE** statements.

If none of the above can be completed, it executes the **ELSE** statements.

An example of use is as:

```
OPENSEQ 'TEST-ENV', 'records_2' TO f.File THEN
    CRT "'TEST-ENV' Opened for sequential processing"
END ELSE STOP
WEOFSEQ f.File
WRITESEQ 'This is a new entry' ON f.File THEN
    FLUSH f.File THEN
        CRT "Buffer flushed"
    END ELSE CRT "Not flushed"
    ELSE ABORT

    CLOSESEQ f.File
END
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
