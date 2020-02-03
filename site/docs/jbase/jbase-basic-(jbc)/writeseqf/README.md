# WRITESEQF

**Created At:** 10/4/2017 12:01:38 PM  
**Updated At:** 1/5/2018 6:39:20 PM  
**Original Doc:** [279571-writeseqf](https://docs.jbase.com/36868-jbase-basic/279571-writeseqf)  
**Original ID:** 279571  
**Internal:** No  

## Descritpion

The **WRITESEQF** statement writes new lines to a file opened for sequential processing, and ensures that data is physically written to disk (that is, not buffered) before the next statement in the program is executed. The sequential file must be open, and the end-of-file marker must be reached before you can write to the file. The [FILEINFO](./../fileinfo) function can be used to determine the number of the line about to be written.

It takes the general form:

```
WRITESEQF expression {ON | TO} file.variable [ON ERROR statements]
{THEN statements [ELSE statements] | ELSE statements}
```

Where:

**file.variable** specifies a file opened for sequential access. If expression or file.variable evaluates to the null value, the **WRITESEQF** statement fails and the program terminates with a run-time error message.

The value of **expression** is written to the file as the next line, and the **THEN** statements are executed. If **THEN** statements are not specified, program execution continues with the next statement; if the specified file cannot be accessed or does not exist, the **ELSE** statements are executed; any **THEN** statements are ignored.

The **ON ERROR** clause is optional in the **WRITESEQF** statement. Its syntax is the same as that of the ELSE clause. The **ON ERROR** clause lets you specify an alternative for program termination when a fatal error is encountered while the **WRITESEQF** statement is being processed.

Normally, when a record is written using the [WRITESEQ](./../writeseq) statement, the record is moved to a buffer that is periodically written to disk. If a system failure occurs, this buffer data can be lost. The **WRITESEQF** statement forces the buffer contents to be written to disk; the program does not execute the statement following the **WRITESEQF** statement until the buffer is successfully written to disk.

A **WRITESEQF** statement following several [WRITESEQ](./../writeseq) statements ensures that all buffered records are written to disk. **WRITESEQF** is intended for logging applications and should not be used for general programming. It increases the disk I/O of a program and therefore degrades performance.

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
