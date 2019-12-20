# T-RDLBL

**Created At:** 9/25/2018 1:58:03 PM  
**Updated At:** 12/22/2018 11:01:47 AM  
**Original Doc:** [t-rdlbl](https://docs.jbase.com/49399-tape/t-rdlbl)  


## Description 

The **T-RDLBL** command will read the first block from the tape device, determine if the block is a recognized label and either display the label information or inform the user that the media is not labeled. The command takes the general form:

```
T-RDLBL {CHANNEL=channel}
```

where **channel** is the specific channel attachment (0-9).
