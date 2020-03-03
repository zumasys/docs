# Sequential File Extensions

**Created At:** 8/2/2018 2:58:47 PM  
**Updated At:** 8/23/2018 12:49:29 PM  
**Original Doc:** [sequential-file-extensions](https://docs.jbase.com/36868-jbase-basic/sequential-file-extensions)  
**Original ID:** 330428  
**Internal:** No  

**Tags:**
<badge text='files' vertical='middle' />

The following IOCTL commands can be use to manipulate sequential files.

| Command | Function |
| --- | --- |
| JIOCTL\_COMMAND\_SEQ\_NO\_DELIMITER | Suppress SEQ delimiter |
| JIOCTL\_COMMAND\_SEQ\_CHANGE\_DELIMITER | Change SEQ delimiter |
| JIOCTL\_COMMAND\_SEQ\_CHANGE\_RECORDSIZE | Change SEQ Record size |
| JIOCTL\_COMMAND\_SEQ\_CHANGE\_PADCHAR | Change SEQ Pad char |
| JIOCTL\_COMMAND\_SEEK | Reposition the pointer to a specified position in the SEQ file |

## EXAMPLES

```
INCLUDE JBC.h
OPENSEQ "SeqFile" TO FILE ELSE STOP 201,"SeqFile"

*IF IOCTL(FILE, JIOCTL_COMMAND_SEQ_NO_DELIMITER, ") ELSE STOP
*IF IOCTL(FILE, JIOCTL_COMMAND_SEQ_CHANGE_DELIMITER, ",") ELSE STOP
*IF IOCTL(FILE, JIOCTL_COMMAND_SEQ_CHANGE_RECORDSIZE,"10") ELSE STOP
*IF IOCTL(FILE, JIOCTL_COMMAND_SEQ_CHANGE_PADCHAR,".") ELSE STOP
FOR I = 1 TO 10
    WRITESEQ "Data":I ON FILE ELSE STOP
NEXT I

CLOSESEQ FILE
OPENSEQ "SeqFile" TO FILE ELSE STOP 201,"SeqFile"

*IF IOCTL(FILE, JIOCTL_COMMAND_SEQ_NO_DELIMITER, ") ELSE STOP
*IF IOCTL(FILE, JIOCTL_COMMAND_SEQ_CHANGE_RECORDSIZE,"3") ELSE STOP
*IF IOCTL(FILE, JIOCTL_COMMAND_SEQ_CHANGE_DELIMITER, ",") ELSE STOP

FOR I = 1 TO 10
    READSEQ RECORD FROM FILE ELSE STOP
    CRT "Record:":I:" Len:":LEN(RECORD):" Data:":RECORD
NEXT I
* IOCTL(file, JIOCTL_COMMAND_SEEK, parameter)
* Where 'parameter' should be of the form:
*    "offset, blocknumber"
* Examples:
* "0,0" repositions to the start of the file...
*    IF IOCTL(FILE, JIOCTL_COMMAND_SEEK,"0,0") ELSE STOP
*
* To set the position at the 100th byte of the 42nd block,
* a 'block' being defined by the delimiter character...
*    IF IOCTL(FILE, JIOCTL_COMMAND_SEEK,"100,42") ELSE
*        PRINT "IOCTL() failed!"
*        STOP
*    END
*
* This next example illustrates how to seek to a specific location
* when there is no delimiter, and only the 'blocksize' is defined...
*
* First set the delimiter to null
*    IF IOCTL(FILE, JIOCTL_COMMAND_SEQ_NO_DELIMITER, '') ELSE STOP
* Define the blocksize, in this case it will be a 2k block
*    IF IOCTL(FILE, JIOCTL_COMMAND_SEQ_CHANGE_RECORDSIZE, 2048) ELSE STOP
* Now set the position (seek) to the middle (1025th character) of 123rd block
*    IF IOCTL(FILE, JIOCTL_COMMAND_SEEK, "1025,123")
*
```

This code renames a binary file of indeterminate size:

```
INCLUDE JBC.h
blocksize = 8192
filepath = "C:\invoices\january_invoice.pdf"

OPENSEQ filepath TO instream ELSE STOP 201,filepath
IF IOCTL(instream, JIOCTL_COMMAND_SEQ_NO_DELIMITER, "") ELSE STOP
IF IOCTL(instream, JIOCTL_COMMAND_SEQ_CHANGE_RECORDSIZE, blocksize) ELSE STOP

OPENSEQ "C:\invoices\january_2018.pdf" TO outstream ELSE
    CREATE outstream ELSE NULL
END

IF IOCTL(outstream, JIOCTL_COMMAND_SEQ_NO_DELIMITER, "") ELSE STOP
IF IOCTL(outstream, JIOCTL_COMMAND_SEQ_CHANGE_RECORDSIZE, blocksize) ELSE STOP

LOOP
    READSEQ block FROM instream ELSE EXIT
    WRITESEQ block ON outstream ELSE NULL
REPEAT
CLOSESEQ instream
CLOSESEQ outstream

```

See also [Serial I/O Extensions](./../serial-i&o-extensions)

Go back to [jBASE BASIC](./../README.md)

