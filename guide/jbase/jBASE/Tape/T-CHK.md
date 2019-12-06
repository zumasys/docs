# T-CHK

**Created At:** 9/25/2018 1:32:49 PM  
**Updated At:** 12/22/2018 10:39:55 AM  


## Description 

The **T-CHK** command reads the label and data blocks from the tape device, thus checking for tape parity errors. **T-CHK** will continue reading until an end of file mark, (EOF), or end of media, (EOM), is encountered.

The command takes the general form:

```
T-CHK {CHANNEL=channel}
```

where **channel** is the specific channel attachment (0-9). For instance:

```
T-CHK
```

to read the tape device up to the next end of file mark.
