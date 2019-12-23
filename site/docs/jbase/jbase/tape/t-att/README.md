# T-ATT                

**Created At:** 9/18/2018 8:22:08 AM  
**Updated At:** 10/1/2018 3:56:18 PM  
**Original Doc:** [t-att](https://docs.jbase.com/49399-tape/t-att)  

**Tags:**
<badge text='spooler tape' vertical='middle' />

## Description 

The T-ATT command is used to attach or open a tape device. The device is exclusively associated to the process by the jBASE allocated port number. There are two formats to the T-ATT command. If attaching to a file or pipe device then the path name of the file or the program must be supplied.

The command takes the general form:

```
T-ATT deviceid {SIZE=size} {LABEL=label-type|label-name{,labelsize{,U}}} {CHANNEL=channel} {TTY=ttyName}
```

to attach a hardware device

```
T-ATT deviceid DEVICE=devicepathname {SIZE=size} {LABEL=label-type|label-name{,labelsize{,U}}} {CHANNEL=channel} {TTY=ttyName}
```

to attach a file or pipe, where:

- **deviceid** is the device identifier, specified as a file in the device release directory /usr/jbc/dev (Unix) or C:\JBASE30\dev (Windows). Typically the deviceid would be SCT0, Streaming Cartridge Tape, or FILE0, UNIX file device. The deviceid file defines the media type, e.g. floppy disk or 8mm, and default device information, e.g. blocksize.
- **devicepathname** is the path name of the file or pipe to use for I/O. The devicepathname mandatory if the deviceid defines a device type of file or pipe.
- **size** is the required block size in bytes. The block size can be any value between 512 and 65535. The usual default is 8192. The block size will be resized if the tape label defines a size different to the current attachment, when reading from the tape device. Care should be taken when reading unlabelled tapes to ensure that the correct block size is specified at attachment otherwise blocks can be truncated or filemarks detected prematurely. On some tape devices I/O errors can be reported if the block size is incorrect.
- **label-type**is the type of tape label to be used when writing to the tape. Label-type can be: 
    - 0 = no label (not recommended)
    - 1 = 50-byte label
    - 2 = SMA standard 80-byte label (default)
- **label-name** can be used in place of label-type. Valid values are **ap**, **ros**, **ros70**, **r83**, **ult**, **uni**, **none**. The default is r83.
- **label-size** can optionally be specified with label-name.
- **U** is an optional parameter which indicates that the first block of the tape contains both the label and the start of the data.
- **channel** identifies which logical channel to attach the tape device to. This can be any numeric character from 0 to 9. If you do not specify a channel, all existing attachments are cancelled, and the specified parameters are applied to the default channel. If you do specify a channel, any existing attachment of the default channel is cancelled.
- **ttyName** nominates a terminal device (devices file entry) to be used to display output - to inform the user of tape errors or end-of-media for example. Useful for background jobs. Default is to output to the current terminal.




## Note: 


> Some tape device drivers require the media to be actually mounted before a the tape device can be opened and attached, with a successful T-ATT command.
> 
> Once attached, the tape device will remain open and attached to the users port until the user logs off or the device is detached with a [T-DET](./../t-det) command.
> 
> If the tape device is already open and attached to another UNIX process then the T-ATT command will fail with a device busy message.






To test for an attached tape within a jBC (BASIC) program:

```
IF SYSTEM(1016)<1,1> LE 0 THEN CRT 'Tape is NOT attached!'
```
