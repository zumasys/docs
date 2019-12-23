# OPENSER

**Created At:** 9/21/2017 1:43:45 PM  
**Updated At:** 1/5/2018 6:36:17 PM  
**Original Doc:** [277544-openser](https://docs.jbase.com/36868-jbase-basic/277544-openser)  


# Description

The **OPENSER** statement is used to handle Serial IO. Serial IO to the COM ports on NT and to device files, achieves this on UNIX by  using the sequential file statements. In addition, certain control operations can be performed using the [IOCTL function](./../ioctl). The **OPENSER** function takes the general form:

```
OPENSER Path,DevInfo| PIPE TO FileVar THEN | ELSE Statements
```

Where :

Path is the pathname of the required device.

DevInfo consists of the following:


| Baud<br> | <br> | Baud rate required<br> |
| --- | --- | --- |
| Flow<br> | y<br> | X-ON X-OFF flow control (default)<br> |
| <br> | n<br> | no flow control<br> |
| <br> | i<br> | input flow contro<br> |
| <br> | o<br> | output flow control<br> |
| Parity<br> | e<br> | 7 bit even parity<br> |
| <br> | o<br> | 7 bit odd parity<br> |
| <br> | n<br> | 8 bit no parity (default)<br> |
| <br> | s<br> | 8 bit no parity, strip top bit<br> |
| PIPE<br> | <br> | specifies the file is to be opened to a PIPE for reading.<br> |


# 


## Note:


> The PIPE functionality allows a process to open a PIPE, once opened then the process can execute a command via the [WRITESEQ](./../writeseq)/[SEND](./../send) statement and then received the result back via the [GET](./../get)/[READSEQ](./../readseq) statements.


An example of use is as:

```
FileName = "/dev/tty01s"
OPENSER FileName TO File ELSE STOP 201,FileName
WRITESEQ "ls -ail" ON File,"" ;* ONLY for PIPEs
LOOP
    Terminator = CHAR (10)
    WaitTime = 4
    GET Input
    WAITING WaitTime THEN
        CRT "Get Ok, Input ":Input:" Count ":Count:"TermChar":TermChar
    END ELSE
        CRT "Get Timed out Input ":Input:" Count ":Count:" TermChar":TermChar
    END
WHILE Input NE "" DO
REPEAT
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
