# SP-DEVICE 

**Created At:** 4/4/2018 2:45:41 PM  
**Updated At:** 1/24/2019 8:14:51 AM  
**Original Doc:** [306299-sp-device](https://docs.jbase.com/44205-spooler/306299-sp-device)  
**Original ID:** 306299  
**Internal:** No  


## Description 

The command reassigns a logical device type to a formqueue. It takes the general form:

```
SP-DEVICE formqueue devicetype devicename
```

where:

- formqueue is the name of the existing formqueue to be reassigned.
- devicetype is the logical device type to be assigned.
- devicename is the device name or program command to which output will be despooled. Options include:





| Device<br> | Description<br> |
| --- | --- |
| LPTR<br> | directly despooled device<br> |
| PROG | programmed device<br> |
| [FILE](./../spooler-file-device-type) | despool to an operating system file |
| TAPE<br> | tape device<br> |
| PORT<br> | terminal device<br> |
| 0<br> | no device<br> |




Parameters must be entered in the order the above specified format, the user will be prompted for any missing parameters.
The despooler process checks the formqueue assignment at the end of each print job and can therefore be reassigned to alternative device types (depending on availability), without stopping the process.

If the command is issued without arguments, the user will be prompted as:

```
FORM-QUEUE DEVICE-TYPE(LPTR,TAPE,PORT,PROG) DEVICE NAME:
```

The user will then enter the device name.



Back to [Spooler](./../jbase-spooler).
