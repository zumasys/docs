# SP-CREATE

**Created At:** 4/4/2018 1:33:58 PM  
**Updated At:** 1/24/2019 8:14:10 AM  


## Description 

The command creates and assigns a formqueue to a logical device type. The command takes the form:

```
SP-CREATE formqueue devicetype devicename {(Z}
```

Where:

**formqueue**is the formqueue name, which contains up to 20 alphabetic numeric or special characters (excluding asterisks and embedded spaces). The first character of the formqueue name must be alphabetic. Only the first fifteen characters are displayed. The formtype screen can display the complete 20-character name.

**devicetype**is the logical device type to be assigned:

- LPTR - directly despooled device . Cannot HOLD since print jobs are sent directly to O/S spooler
- [FILE](spooler-file-device-type) - to an operating system file
- TAPE - tape device
- PORT - terminal device
- PROG - programmed device
- 0 - no device
- NT - directly despooled to windows printername.  Cannot HOLD since print jobs are sent directly to the default printer.


**devicename**is the device name or program command to which output will be despooled.

The **(Z** option can be used to encrypt the spooler jobs. See this [page](jbase-encryption-database-security) for details.



If the command is issued without arguments, for instance:

```
SP-CREATE
```

The user will be prompted for input as:

```
FORM-NAME     DEV TYPE(LPTR,TAPE,PORT,PROG,NT,FILE)     DEVICE NAME:_
```




> ### Note: 
> 
> Parameters must be entered in the order shown in the syntax description. You will be prompted for any missing parameters. There is no limit to the number of formqueues, which can be created.




Back to [Spooler.](jbase-spooler)
