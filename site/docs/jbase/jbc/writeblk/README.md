# WRITEBLK

**Created At:** 9/27/2017 2:52:44 PM  
**Updated At:** 1/5/2018 6:12:12 PM  
**Original Doc:** [278663-writeblk](https://docs.jbase.com/36868-jbase-basic/278663-writeblk)  
**Original ID:** 278663  
**Internal:** No  

## Description

The **WRITEBLK** statement writes a block of data to a file opened for sequential processing. It takes the general form:

```
WRITEBLK expression ON file.variable {THEN statements [ELSE statements] | ELSE statements}
```

Where:

**file.variable** specifies a file opened for sequential processing.

The value of **expression** is written to the file, and the **THEN** statements are executed.

If no **THEN** statements are specified, program execution continues with the next statement. If the file is neither accessible or does not exist, it executes the **ELSE** statements; and ignores any **THEN** statements.

If either **expression** or **file.variable** evaluates to null, the **WRITEBLK** statement fails and the program enters the debugger with a run-time error message.

Each **WRITEBLK** statement writes the value of expression starting at the current position in the file.

The current position is incremented to beyond the last byte written. **WRITEBLK** does not add a new line at the end of the data.

## International Mode

When using the **WRITEBLK** statement in International Mode, care must be taken to ensure that the write variable is handled properly before the **WRITEBLK** statement. The **WRITEBLK** statement expects the output variable to be in “bytes”, however when manipulating variables in International Mode character length rather than byte lengths are usually used and hence possible confusion or program malfunction can occur.

If requiring byte count data the output variable can be converted from the UTF-8 byte sequence to ‘binary/latin1’ via the [LATIN1](./../latin1) function.

It is not recommended that the [READBLK](./../readblk)\/**WRITEBLK** statements be used when executing in International Mode. Similar functionality may be obtained via the [READSEQ](./../readseq)/[WRITESEQ](./../writeseq) statement, which can be used to read/write characters a line at a time from a file.

Go back to [jBASE BASIC](./../README.md)
