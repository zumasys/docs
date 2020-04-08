
# SP-DEVICE 

<PageHeader />

## Description

The command reassigns a logical device type to a formqueue. It takes the general form:

```
SP-DEVICE formqueue devicetype devicename
```

where:

- formqueue is the name of the existing formqueue to be reassigned.
- devicetype is the logical device type to be assigned.
- devicename is the device name or program command to which output will be despooled. Options include:

| Device | Description |
| --- | --- |
| LPTR | directly despooled device |
| PROG | programmed device |
| [FILE](./../spooler-file-device-type) | despool to an operating system file |
| TAPE | tape device |
| PORT | terminal device |
| 0 | no device |

Parameters must be entered in the order the above specified format, the user will be prompted for any missing parameters.
The despooler process checks the formqueue assignment at the end of each print job and can therefore be reassigned to alternative device types (depending on availability), without stopping the process.

If the command is issued without arguments, the user will be prompted as:

```
FORM-QUEUE DEVICE-TYPE(LPTR,TAPE,PORT,PROG) DEVICE NAME:
```

The user will then enter the device name.

Back to [Spooler](./../jbase-spooler).
