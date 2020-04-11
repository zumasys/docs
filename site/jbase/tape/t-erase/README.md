# T-ERASE

**Created At:** 9/25/2018 1:53:39 PM  
**Updated At:** 12/22/2018 10:41:26 AM  
**Original Doc:** [t-erase](https://docs.jbase.com/49399-tape/t-erase)  
**Original ID:** 340655  
**Internal:** No  


## Description

The **T-ERASE** command erases a cartridge tape and re-positions it at the beginning of tape, (BOT). The use of **T-ERASE** is recommended before writing data to a cartridge tape. The command takes the general form:

```
T-ERASE {CHANNEL=channel}
```

where **channel** is the specific channel attachment (0-9).



## Note: 


> T-ERASE should only be used with streaming cartridge tapes or other tape devices capable of erasing the device. The command will fail if the media has not been made write enabled.




An example of use is as:

```
T-ERASE
```

to erase a streaming cartridge tape of all data.

  
<PageFooter />
