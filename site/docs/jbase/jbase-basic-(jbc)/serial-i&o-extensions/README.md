# Serial I/O Extensions

**Created At:** 8/2/2018 2:57:33 PM  
**Updated At:** 6/6/2019 7:34:51 AM  
**Original Doc:** [serial-i-o-extensions](https://docs.jbase.com/36868-jbase-basic/serial-i-o-extensions)  
**Original ID:** 330427  
**Internal:** No  


## Description 

Serial IO to the com ports on NT and to device files on Unix can be achieved using the sequential file statements. In addition certain control operations can be performed using the ioctl function.

**OPENSEQ**

The specified Port, such as "COM2", is opened to FileVar for exclusive access, therefore this command will fail if any other process has the COM port open.

**READSEQ**

Reads 512 bytes from the previously opened Serial port. By default, the read will block until the required number of characters are available, however, the actual number to read, and any timeout value can be set using the IOCTL() function.

**WRITESEQ**

The variable is written to the previously opened serial port. Normally this data will not have a CRLF appended to it, but using an IOCTL command can change this action.

**IOCTL**

This function returns a Boolean TRUE if the command was successful and FALSE if it failed. The general jBASE include file "JBC.h" should be included in order to get the system equates for the Commands.



### SERIAL IO EXTENSIONS

The following IOCTL commands can be use to manipulate serial io.

```
JIOCTL_COMMAND_SERIAL_GET_STATE
```

and

```
JIOCTL_COMMAND_SERIAL_SET_STATE
```

Get or Set the serial port line state, in the format "BaudRate,Parity,NoBits,FlowControl"

- Where:
- Baudrate The value of the baud rate,
- Parity 0 - None, 1 - Even, 2 - Odd, 3 - Mark.
- NoBits The number of bits, normally 7 or 8,
- FlowControl Bit mask; 0x1 Xon/Xoff; 0x2 RTS/CTS; 0x4 DTR/DSR


e.g. "9600,1,7,1" 9600 Baud, 7 bit even parity, Xon/Xoff flow control.

Note that the jBASE command jsetport can also be used to set/get the setting for a serial port(jsetport COM2)



```
JIOCTL_COMMAND_SERIAL_SET_TIMEOUT
```

Set the Timeout value for a read, the value for the argument is:

- 0 No timeout, all reads will block until the specified number of characters have been read (This is the default)
- -1 Non blocked read, the Read will return immediately, with however many characters are in the buffer.
- &gt; 0 The read will return with either the number of requested characters, or after the specified number of milliseconds.




```
JIOCTL_COMMAND_SERIAL_SET_CRLF
```

Append a CRLF to each WRITESEQ.



```
JIOCTL_COMMAND_SERIAL_SET_RAW
```

Do not append a CRLF after each write (Default).



```
JIOCTL_COMMAND_SERIAL_READ_LEN
```

Specify how many characters each READSEQ will read, the default is 512.



```
JIOCTL_COMMAND_SERIAL_FLUSH
```

Purge any buffered input/output.



### EXAMPLE

```
INCLUDE JBC.h

EQU CRLF TO CHAR(10):CHAR(13)
EQU CHAR_ESC TO CHAR(27)
EQU CHAR_CR TO CHAR(10)
EQU CHAR_LF TO CHAR(13)

Comport = "COM2"
*
* Comstate here 9600 Baud, 8 bit no parity, no flow control.
*
ComState = "9600,0,8,0"
*
* Open the port
*
OPENSEQ ComPort TO Fd ELSE STOP 201,ComPort
*
* Set up the line state
*
IF IOCTL(Fd, JIOCTL_COMMAND_SERIAL_SET_STATE, ComState) ELSE
   CRT "Set State Failed"
END
*
* Now output some text.
*
WRITESEQ @(-1):"jBASE NT Serial line Test":CRLF ON Fd ELSE GOTO
999
*
* Test a timed read (500ms)
*
IF IOCTL(Fd, JIOCTL_COMMAND_SERIAL_SET_TIMEOUT, "500") ELSE
   CRT "Set Timeout Failed"
END
WRITESEQ "Timed Read :" ON Fd ELSE GOTO 999
READSEQ X FROM Fd ELSE CRT "Read Timed Out"
*
* Now just go into a loop reading text from the port, exit when we
receive an "X"
*
X = "
LOOP
WHILE X NE "X" DO
   WRITESEQ CRLF:"Input :" ON Fd ELSE GOTO 999
   READSEQ X FROM Fd THEN
      CRT "GOT IT :":X
   END ELSE
   CRT "Timeout"
   END
REPEAT
* 999:
```
