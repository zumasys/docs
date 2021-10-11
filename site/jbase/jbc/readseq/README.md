# READSEQ

<PageHeader />

**Tags:**
<badge text='record handling' vertical='middle' />
<badge text='sequential file handling' vertical='middle' />

## Description

The statement allows for reading from a file opened for sequential access. It takes the general form:

```
READSEQ Variable FROM filevar THEN | ELSE statements
```

Where:

- **Variable** specifies the variable to contain next record from sequential file.
- **filevar** specifies the file descriptor of the file opened for sequential access.
- **Statements** Conditional jBASE BASIC statements

Each **READSEQ** reads a line of data from the sequentially opened file. After each **READSEQ**, the file pointer moves forward to the next line of data. **Variable** contains the line of data less the new line character from the sequential file.

The default buffer size for a **READSEQ** is 1024 bytes. This can be changed using the [IOCTL](./../ioctl) function with the **JIOCTL\_COMMAND\_SEQ\_CHANGE\_RECORDSIZE** defined in the [Sequential File Extensions](./../sequential-file-extensions).

An example of use would be as:

```
OPENSEQ ".", "report.txt" TO FILE_VAR ELSE ABORT 201, "report file"
READSEQ VAR_LINE FROM FILE_VAR THEN CRT VAR_LINE
```

to open a "report file" and read the first line from it.

See also [PN1073](./../../release-notes/5.8/5.8.2/pn1073/README.md/#new-file-seq-delimiter-method) for changes to delimiter functionality as of jBASE 5.8.2.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
