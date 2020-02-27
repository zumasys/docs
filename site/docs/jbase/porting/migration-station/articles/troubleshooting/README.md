# Troubleshooting

**Created At:** 11/1/2017 12:10:27 AM  
**Updated At:** 11/1/2017 12:16:24 AM  
**Original Doc:** [troubleshooting](https://docs.jbase.com/44497-articles/troubleshooting)  
**Original ID:** 283759  
**Internal:** No  


# **Alternatives to T-READ**

If you are experiencing trouble accessing the tape device using the T-READ command, ensure that the device is correctly configured by using the either the UNIX dd utility or the NT backup facility.

To read with the dd command try the following command

```
dd if=/dev/rmt/devicename of=dummyfile
```

To write with the dd command try the following command.

```
dd of=/dev/rmt/devicename if=dummyfile
```

To write an NT backup tape from the console as administrator, select the following from the menus and select any directory for backup :

( Note that some tapes may need to be erased before the backup otherwise the backup program will not recognize the tape correctly ).

Admin Tools-&gt;Backup

If the device does not function as expected then contact your hardware representative, having first checked trouble scenario two.

If the device responds correctly, then ensure that the device name is configured in the jBASE release device subdirectory , ‘dev’ for the device you are attempting to attach. Also, ensure that the device entry has read and write permissions for all users.

```
ls –l /usr/jbc3.0/dev/DAT1
rw-rw-rw 1 jbaseadm other 433 Sep 17 01:48 DAT1
```

```
DAT1
JBC__EDI –D/dev/rmt/DevName –R/dev/rmt/RewindDevName –B16384 –I DAT1 –M DAT –LR83,-2
```

# 


# **Variable Block Size**

Some tape devices e.g. DAT and 8MM EXABYTE need to be configured for variable length.

To configure the device on some of the System V Release 4 UNIX systems, try the following command (note that a tape must be in the device and may need to be write enabled) :

```
tapecntl -v /dev/rmt/devicename
```

On AIX, use the **smit** utility to configure the tape variable to zero.

**Note**: This command may need to be re-executed when either the tape media is changed or the system rebooted, depending upon platform.

Some variable length devices can return an error when an attempt to read the tape at a block size LOWER than the actual block size has been made. The result of the error is either translated as error ‘234’ on NT, or a zero byte transfer on UNIX, thus returning EOF status.

This can happen when the tape has been attached with the default settings. I.e. T-ATT DAT0. The problem is that the tape driver expects to read an 80 byte label, as per the default configuration, and so only requests 80 bytes from the device. However the label could be blocked at 16384, as per the data block. As the 80 byte request is less than the label block size, then the above error situation occurs. This problem has been addressed in later versions of jBASE by changing the default device assignment.

To avoid this problem, use the following tape assignment :

```
T-ATT LABEL=R83,16384 SIZE=16384
```

# 


# **Tape Labels**

If you are having trouble reading a tape with the T-READ command or READT, it could be because the tape does not contain an expected label. The jBASE jbackup tape, for example, contains a 1000 byte label and a UNIX tar is usually blocked at 5120 bytes. Therefore, set the assignment label parameter to none and increase the requested block size.

```
T-ATT DAT0 LABEL=NONE SIZE=32256
T-READ
```

Trouble reading a tape without a label.

If the tape you are trying to read does not contain a label, then the block size can usually be determined from variable length tape devices by assigning the label to NONE and then reading a large block size. This method, however, does not work with fixed length devices, as effectively there is no inter block gap. If the device is a QIC device, then the tape can be read correctly by setting the label parameter to none and the block size to 512.

The above QIC method will fail if the tape was written at a block size not divisible by 512, due to the 512 byte padding that occurs. In this case, the original block size must be used, however a good guess would be a block size of 8000, as this is the default used by some legacy systems.

### 


# **Reading from a ‘dd’ copy of a tape file**

Sometimes it is necessary to transfer the tape file from the tape device to a disk file and then attempt to restore from the disk file. This can be because the tape device is not available on the target system, or the tape copy needs to be delivered quickly over the network.

Care should be taken when transferring QIC tapes to tape files. If the block size of the QIC tape, as specified in the label, is NOT a multiple of 512, then each block will contain padding at the end of the block from the specified block size to a 512 multiple. This padding is usually performed by the QIC device. In cases like this, it is best to obtain a 512 multiple tape copy, if possible. If not, then a program is required to convert the disk image of the tape file to remove the padding.

Another common problem with transferring DAT tape files to disk is that the inter block gap that is available on the physical tape is no longer available on the disk image. This means that when you request a 16k block for a label from the disk image, it will return a 16k block if enough data is available. This is unlike the physical tape file, where the request would be truncated to an 80 byte block due to the inter block gap. It is, therefore, always advisable to use a label size when reading from a disk image tape file.

```
dd if=/dev/rmt/ctape1 of=MyDatImage bs=16384
T-ATT FILE0 DEVICE=MyDatImage LABEL=ROS70,80 SIZE=16384
```

or

```
T-ATT FILE0 DEVICE=MyDatImage LABEL=R83,16384 SIZE=16384
```

Note: When using ‘dd’ to copy from physical tape to a disk image, the ‘dd’ command will only copy ONE tape file at a time. For multiple tape files, multiple ‘dd’ commands will be required, each to a unique file name.

### 


# **Restoring multiple tape volumes**

Handling of end of tape is extremely unpredictable as legacy vendors have tended to implement different schema, for handling the end of physical tape on different legacy devices. In addition, UNIX platforms do not tend to be consistent when returning an end of tape status. Most return an end of file condition, which cannot be differentiated from a real end of file. Attempting to restore from multiple tape volumes should be avoided.

Note also that the ‘dd’ command cannot detect end of tape as such, and so you should not attempt to ‘dd’ tape files across multiple tape volumes.

### 


# **Trouble reading from floppy**

Floppy disks tend to be blocked at 512 bytes, where the first 12 bytes of each disk block contains some sort header information. The jBASE floppy driver is, by default, configured to ignore the first 12 bytes of each block (note the -H12 option in the FLOPPY0 ‘dev’ file). If all 512 bytes of the disk block is required, then a new device file should be created and the -H12 option removed.

Note that all tape label options which apply to physical tape also apply to the floppy device.

### 


# **Trouble restoring an ACCOUNT-SAVE**

Attempting to restore an ACCOUNT-SAVE can become very frustrating, this is due mainly to the variation of vendor save implementations, which can not only vary from platform to platform but also from device to device. There are three main types of ACCOUNT-SAVE format.

## **Type1: R83 based**

Usually preceded by two dummy tape files, the label block size is the same size as the data block size, of which only 80 bytes is valid. Therefore try to attach the tape as follows for the various devices and then skip two blocks before attempting to restore :

```
SCT - T-ATT SCT0 LABEL=R83,8192 SIZE=8192
DAT - T-ATT DAT0 LABEL=R83,16384 SIZE=16384
FLOPPY - T-ATT FLOPPY0 LABEL=R83
8MM - T-ATT 8MM LABEL=R83,16384 SIZE=16384
```

FILE-SAVE
Two preceding dummy tape files, then multiple tape files containing each account, then an empty tape file to signify end of save :

```
T-FWD
T-FWD
SYSRESTORE –b8
ACCOUNT-SAVE
```

Two preceding dummy tape files, then a single tape file containing the account, then an empty tape file to signify end of save :

```
T-FWD
T-FWD
ACCOUNT-RESTORE –b8
```



## **Type2: D3**

Some D3 tapes contain a combination of six label and \_EOF sections before the data begins :

```
FLOPPY - T-ATT FLOPPY0 LABEL=NONE SIZE=500
FILE - T-ATT FILE0 DEVICE=... LABEL=NONE SIZE=512
T-FWD 6
```

The **(L** option should then be used with ACCOUNT-RESTORE.



## **Type3: ROS**

Zero or two preceding dummy tape files. The label size is either 50 bytes, if from an older REALITY system, or 80 bytes from 6.0/3.0 systems onwards :

Note on QIC the label is always contained within the first 512 byte record. Therefore try to attach the tape as follows for the various devices.

```
SCT - T-ATT SCT0 LABEL=ROS70,512 SIZE=8192
DAT - T-ATT DAT LABEL=ROS70,80 SIZE=16384
FLOPPY - N/A
8MM - T-ATT 8MM LABEL=ROS70,80 SIZE=16384
```

FILE-SAVE
Two preceding dummy tape files followed by one continuous tape file containing all accounts on save, then an empty tape file to signify end of save :

```
T-FWD
T-FWD
SYSRESTORE -b4
```



ACCOUNT-SAVE
One tape file containing the account, then an empty tape file to signify end of save :

```
ACCOUNT-RESTORE –b4
```



## **Type4: SEQ**

One or more preceding dummy tape blocks before the account data. The label is usually sized at 80 bytes. Therefore, try to attach the tape as follows for the various devices :

```
SCT - T-ATT SCT0 LABEL=R83,512 SIZE=8192
DAT - T-ATT DAT LABEL=R83,80 SIZE=16384
FLOPPY - T-ATT FLOPPY0 LABEL=R83
8MM - T-ATT 8MM LABEL=R83,80 SIZE=16384
```

FILE-SAVE
Two preceding dummy tape files, then multiple tape files containing each account, then an empty tape file to signify end of save :

```
T-FWD
T-FWD
SYSRESTORE
```

ACCOUNT-SAVE
One dummy tape file then one tape file containing account data, then an empty tape to signify end of save :

```
T-FWD
ACCOUNT-RESTORE
```

Note: Later SEQUOIA save formats may only work with the ACCOUNT-RESTORE command.



# **Manual Examination**

If none of the above attachments resolve your problem, then you need to investigate further. To do this, set the label parameter to NONE and the block size parameter to 32256, then use the T-READ command to examine the tape.

```
T-ATT DEV LABEL=NONE SIZE=32256
T-READ
```

If the T-READ returns EOF, then the tape file is probably empty, so at least one T-FWD will be required.

If the T-READ returns a label block, for instance  ‘\_L xxxx’, where xxxx is a hexadecimal representation of the block size, a value of 4000 would indicate that this tape is blocked at 16384. This may either be the start of the account data proper, or a dummy label block. Continuing to read the subsequent blocks will help to determine if this is real or garbage data. If this tape file stops after one or two blocks, then it is most likely a dummy tape file and should be skipped. If no recognizable start of account data pattern is detectable at the first character position of subsequent blocks, i.e. ‘\_D’ or ‘\_F’ or ‘\_vr’, then it is likely this is a dummy tape file and should also be skipped with a T-FWD.

When reading variable length tapes with the T-READ, command the actual block size of each record will be displayed. For example, if the tape is assigned with LABEL=NONE and SIZE=32256 and the blocks returned from the DAT device are 80 bytes then 16384 then the following attachment should be tried :

```
T-ATT DAT0 LABEL=R83,80 SIZE=16384
```

If, however, the blocks returned are all 16384, then the following attachment should be used :

```
T-ATT DAT0 LABEL=R83,16384 SIZE=16384
```
