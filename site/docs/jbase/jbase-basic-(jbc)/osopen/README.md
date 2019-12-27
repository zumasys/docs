# OSOPEN

**Created At:** 9/22/2017 11:58:54 AM  
**Updated At:** 11/27/2018 9:45:01 AM  
**Original Doc:** [277623-osopen](https://docs.jbase.com/36868-jbase-basic/277623-osopen)  
**Original ID:** 277623  
**Internal:** No  

**Tags:**
<badge text='file handling' vertical='middle' />

# Description

The **OSOPEN**command opens a sequential file that does not use CHAR(10) as the line delimiter. The command takes the general form:

```
OSOPEN filename TO file.var[ON ERROR statements] {THEN | ELSE} statements [END]
```

Where:

- Specifies the file to open. filename must include the entire path name unless the file resides in the current directory,
- TO **file.var** Specifies a variable to contain a pointer to the file,
- ON ERROR **statements** specifies statements to execute if the **OSOPEN**statement fails with a fatal error because the file is not open, an I/O error occurs, or JBASE cannot find the file. If you do not specify the ON ERROR clause and a fatal error occurs, the program enters the debugger.


THEN statements Executes if the read is successful.

ELSE statements Executes if the read is not successful or the record (or ID) does not exist.

## Note:


> Read/write access mode is the default. Omitting READONLY and WRITEONLY will by default specify this access mode.
> 
> After opening a sequential file with **OSOPEN**, use [OSBREAD](./../osbread) to read a block of data from the file, or [OSBWRITE](./../osbwrite) to write a block of data to the file. You also can use [READSEQ](./../readseq) to read a record from the file, or [WRITESEQ](./../writeseq) or [WRITESEQF](./../writeseqf) to write a record to the file, if the file is not a named pipe. ([READSEQ](./../readseq), [WRITESEQ](./../writeseq), [WRITESEQF](./../writeseqf) are line-oriented commands that use CHAR (10) as the line delimiter.)


An example of use would be a program statement that opens the file ‘MYSLIPPERS’ as SLIPPERS.

```
OSOPEN 'MYSLIPPERS' TO SLIPPERS ELSE STOP 
```



Go back to[jBASE BASIC](./../jbase-basic-programmers-reference-guide).
