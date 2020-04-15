# OPENSER

<PageHeader />  

## Description

The **OPENSER** statement is used to handle Serial IO. Serial IO to the COM ports on NT and to device files, achieves this on UNIX by  using the sequential file statements. In addition, certain control operations can be performed using the [IOCTL function](./../ioctl). The **OPENSER** function takes the general form:

```
OPENSER Path,DevInfo| PIPE TO FileVar THEN | ELSE Statements
```

Where :

**Path** is the pathname of the required device.

**DevInfo** consists of the following:

| Baud |  | Baud rate required |
| --- | --- | --- |
| Flow | y | X-ON X-OFF flow control (default) |
|  | n | no flow control |
|  | i | input flow contro |
|  | o | output flow control |
| Parity | e | 7 bit even parity |
|  | o | 7 bit odd parity |
|  | n | 8 bit no parity (default) |
|  | s | 8 bit no parity, strip top bit |
| Pipe |  | specifies the file is to be opened to a Pipe for reading. |

## Note

> The **PIPE** functionality allows a process to open a **PIPE**, once opened then the process can execute a command via the [WRITESEQ](./../writeseq)/[SEND](./../send) statement and then received the result back via the [GET](./../get)/[READSEQ](./../readseq) statements.

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

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
