# OPENDEV

**Created At:** 9/21/2017 12:37:32 PM  
**Updated At:** 11/27/2018 9:46:34 AM  
**Original Doc:** [277540-opendev](https://docs.jbase.com/36868-jbase-basic/277540-opendev)  
**Original ID:** 277540  
**Internal:** No  

**Tags:**
<badge text='record handling' vertical='middle' />
<badge text='file handling' vertical='middle' />

## Description

Opens a device (or file) for sequential writing and/or reading. It takes the general form:

```
OPENDEV Device TO filevar { LOCKED statements } THEN | ELSE statements
```

Where :

- **Device** specifies the target device or file,
- **filevar** contains the file descriptor of the file when the open was successful,
- **Statements** conditional jBASE BASIC statements.

If the device does not exist or cannot be opened it executes the **ELSE** clause. Once open it takes a lock on the device. If the lock cannot be taken then the **LOCKED** clause is executed if it exists otherwise the **ELSE** clause is executed. The specified device can be a regular file, pipe or special device file. Regular file types only take locks. Once open the file pointer is set to the first line of sequential data.

An example of use is as:

```
OPENDEV "\\.\TAPE0" TO tape.drive ELSE STOP
```

Opens the Windows default tape drive and prepares it for sequential processing.

For more information on sequential processing, see the [READSEQ](./../readseq), [WRITESEQ](./../writeseq).

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
