# T-WEOF

**Created At:** 9/25/2018 2:19:41 PM  
**Updated At:** 12/22/2018 11:06:16 AM  
**Original Doc:** [t-weof](https://docs.jbase.com/49399-tape/t-weof)  
**Original ID:** 340665  
**Internal:** No  


## Description

The**T-WEOF** command writes an end of file mark, (EOF), on the tape device media. The command takes the general form:

```
 T-WEOF {CHANNEL=channel}
```

where **channel** is the specific channel attachment (0-9).



## Note: 


> Two consecutive EOFs without a tape label or any data blocks in between signify an empty tape file. Most device drivers and utilities determine this occurrence as end of media, (EOM), and will stop any further processing.


Most utilities which write to tape devices, e.g. [T-DUMP](./../t-dump), will automatically write an EOF after the data blocks of the tape file. Therefore executing a [T-WEOF](./.) command after a [T-DUMP](./../t-dump) will produce two consecutive EOFs, which can then be used to indicate end of recorded media to a reading utility program.



An example of use may be as:

```
T-WEOF
```

to write an end of file mark, (EOF), at the current media position.

  
<PageFooter />
