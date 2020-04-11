# SEEK

**Created At:** 9/28/2017 9:05:38 AM  
**Updated At:** 1/5/2018 6:14:36 PM  
**Original Doc:** [278799-seek](https://docs.jbase.com/36868-jbase-basic/278799-seek)  
**Original ID:** 278799  
**Internal:** No  

## Description

The **SEEK** statement is used to move the file pointer by an offset specified in bytes, relative to the current position, the beginning of the file, or the end of the file.

The statement takes the general form:

```
SEEK file.variable [ , offset [ , relto] ]
{THEN statements [ELSE statements] | ELSE statements}
```

Where:

**file.variable** specifies a file previously opened for sequential access.

**offset** is the number of bytes before or after the reference position. A negative **offset** results in the pointer being moved before the position specified by **relto**. If **offset** is not specified, 0 is assumed.

On Windows NT systems, line endings in files are denoted by the character sequence RETURN + LINEFEED rather than the single LINEFEED used in UNIX files. The value of **offset** should take into account this extra byte on each line in Windows NT file systems.

If **relto** is not specified, 0 is assumed.

If the pointer is moved, the **THEN** statements are executed and the ELSE statements are ignored. If the **THEN** statements are not specified, program execution continues with the next statement.

If the file cannot be accessed or does not exist the **ELSE** statements are executed; any **THEN** statements are ignored.

If **file.variable**, **offset**, or **relto** evaluates to null, the **SEEK** statement fails and the program terminates with a run-time error message.

## Note

> Seeking beyond the end of the file and then writing creates a gap, or hole, in the file. This hole occupies no physical space, and reads from this part of the file return as ASCII CHAR 0 (neither the number nor the character 0).

The following example reads and prints the first line of record 4. Then the **SEEK** statement moves the pointer five bytes from the front of the file, then reads and prints the rest of the current line.

```
OPENSEQ '.', 'MYSEQFILE' TO FILE ELSE ABORT
READSEQ B FROM FILE THEN PRINT B
SEEK FILE,5, 0 THEN
    READSEQ A FROM FILE THEN PRINT A ELSE ABORT
END
```

See also: [OPENSEQ](./../openseq), [READSEQ](./../readseq), and [WRITESEQ](./../writeseq) statements.

Go back to[jBASE BASIC](./../jbase-basic-programmers-reference-guide).

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
