# READBLK

<PageHeader />

**Tags:**
<badge text='record handling' vertical='middle' />
<badge text='data processing' vertical='middle' />

## Description

The **READBLK** statement is used to read a block of data, of a specified length from a file opened for sequential processing and assigns it to **variable**.

The **READBLK** statement reads a block of data beginning at the current position in the file and continuing for blocksize bytes and assigns it to **variable**. The current position is reset to just beyond the last readable byte.

It takes the general form:

```
READBLK variable FROM filevariable, blocksize { THEN statements [ELSE statements] | ELSE statements }
```

Where:

- **filevariable** specifies a file previously opened for sequential processing.
- **blocksize** specifies the size of the data block to be handled.
- If the data can be read from the file, the **THEN** statements are executed; any **ELSE** statements are ignored. If the file is not readable or if the end of file is encountered, the **ELSE** statements are executed and the **THEN** statements are ignored. If the **ELSE** statements are executed, **variable** is set to an empty string. If either **filevariable** or **blocksize** evaluates to null, the **READBLK** statement fails and the program enters the debugger.

## Note

> A new line in UNIX files is one byte long, whereas in Windows NT it is two bytes long. This means that for a file with newlines, the same **READBLK** statement may return a different set of data depending on the operating system the file is stored under.

The difference between the [READSEQ](./../readseq) statement and the **READBLK** statement is that the **READBLK** statement reads a block of data of a specified length, whereas the [READSEQ](./../readseq) statement reads a single line of data.

An example of use is as:

```
OPENSEQ 'MYSLIPPERS', 'PINK' TO FILE ELSE ABORT
READBLK VAR1 FROM FILE, 50 THEN PRINT VAR1
CRT
READBLK VAR2 FROM FILE, 100 THEN PRINT VAR2
```

### International Mode

When using the **READBLK** statement in International Mode, care must be taken to ensure that the input variable is handled properly subsequent to the **READBLK** statement. The **READBLK** statement requires that a “bytecount” be specified, however when manipulating variables in International Mode character length rather than byte lengths are usually used and hence possible confusion or program malfunction can occur.

If requiring character data convert the input variable from ‘binary/latin1’ to UTF-8 byte sequence via the UTF8 function.

It is recommended that the **READBLK**/[WRITEBLK](./../writeblk) statements not be used when executing in International Mode. Similar functionality can be obtained via the [READSEQ](./../readseq)/[WRITESEQ](./../writeseq) statement, which can be used to read/write characters a line at a time from a file.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
