# Tape

**Created At:** 9/25/2018 12:47:03 PM  
**Updated At:** 10/1/2018 3:12:34 PM  

**Tags:**
<badge text='devices' vertical='middle' />
<badge text='tape' vertical='middle' />

## Description 

jBASE provides support for the following tape devices. The device control records are located in the "dev" subdirectory of the jBASE release directory.


| Device<br> | Description<br> |
| --- | --- |
| FLOPPY<br> | Floppy disc. Usually blocked at 500 bytes with 12 byte header.<br> |
| SCT<br> | Streaming cartridge tape. Usually blocked at 8192. 512 fixed byte blocks.<br> |
| DAT<br> | 4mm cartridge tapes. Usually blocked at 16384. Variable length.<br> |
| HALF<br> | Half inch tape. Usually blocked at 16384. Variable length.<br> |
| FILE<br> | Unix or NT file requires additional path parameter.<br> |


The actual tape device files on Unix reside in the "/dev/rmt" directory, however naming conventions differ between the various platforms. On Windows, they are named by convention \\.\TAPE0, etc. Where as the floppy disc is named as \\.\A:

## 


## Note: 


> Windows 95 does not support tape devices via the Win32 standard interface. However jBASE has been enabled to read and write to the Win95 floppy disc drive.




Compression and formats can vary between different manufacturers of the same device. When reading or writing a tape ensure that the target system device is compatible with your format of written media.

QIC 150 and QIC 525 appear to be readable by most Stream cartridge tape drives. In general higher specification drives tend to be able to read, but not necessarily write, lower specification media tapes.

## 


## Note: 


> Some DAT devices must be enabled for variable length blocks before they can be read else they produce no data status. This can also happen when the requested block size is lower than the actual block size on tape.


To enable variable length tape on SVR4 systems use the following command.

```
tapecntl -v /dev/rmt/devicename
```

On AIX use "smitty" to set tape device for variable length.


| Device Flags<br> | Description<br> |
| --- | --- |
| -D DeviceName<br> | device to open in no rewind mode<br> |
| -I LockId<br> | lock name for [T-ATT](t-att) to show device attached.<br> |
| -M MediaType<br> | media name. SCT, DAT, HALF, FLOPPY, FILE.<br> |
| -L Type,Size<br> | label Type and expected size e.g. R83,8192 or ROS,80<br> |
| -T TTYName<br> | alternative device for next reel prompt or errors etc.<br> |
| -S SizeKb<br> | max size of device. Floppy only<br> |
| -H HeaderSize<br> | specifies bytes to skip for each block.<br> |
| -R DeviceName<br> | device for rewind mode<br> |
| -P PadChar<br> | value of -1 No pad on [WRITET](279572-writet), -P0xff pads with 0xff.<br> |
| -B Blocksize<br> | default block size to read and write.<br> |


The Label and block size parameters can be overridden from the T-ATT command line. For instance to attach and read a tape blocked at 5120, i.e. a tar, use the following command.

```
T-ATT SCT0 SIZE=5120 LABEL=0
```

To read a tape produced by R83 use the following command.

```
T-ATT DAT0 SIZE=16384 LABEL=R83,-2
```

The -2 means the label is expected to be the same block size as the other tape blocks. To read a tape produced by a ROS system use the following command.

```
T-ATT DAT0 SIZE=16384 LABEL=ROS,80
```

Note: Streaming cartridge drives automatically pad to 512 byte boundary on write.
