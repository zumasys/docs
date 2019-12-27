# T-UNLOAD

**Created At:** 9/25/2018 2:16:53 PM  
**Updated At:** 12/22/2018 11:05:20 AM  
**Original Doc:** [t-unload](https://docs.jbase.com/49399-tape/t-unload)  
**Original ID:** 340664  
**Internal:** No  


## Description 

The **T-UNLOAD** command requests the tape device to rewind and unload the media. The command has the general form:

```
T-UNLOAD {CHANNEL=channel}
```

where **channel** is the specific channel attachment (0-9).

## 


## Note: 


> Some tape devices do not support the unload command. In these cases the usual action is to rewind the tape device.




An example of use may be as:

```
T-UNLOAD
```

to request the tape device to rewind and unload.
