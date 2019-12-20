# T-RETENSION

**Created At:** 9/25/2018 2:01:36 PM  
**Updated At:** 12/22/2018 11:17:54 AM  
**Original Doc:** [t-retension](https://docs.jbase.com/49399-tape/t-retension)  


## Description 

The **T-****RETENSION**command retensions a cartridge tape by fast forwarding to end of tape, (EOT), and then rewinding back to beginning of tape, (BOT). The use of **T-****RETENSION**is recommended before reading a cartridge tape.

The command has the general form:

```
T-RETENSION {CHANNEL=channel}
```

where **channel** is the specific channel attachment (0-9).



## Note: 


> T-RETENSION should only be used with streaming cartridge tapes or other tape devices capable of retensioning the device.




An example of use is as:

```
T-RETENSION
```

to retension a streaming cartridge tape.
