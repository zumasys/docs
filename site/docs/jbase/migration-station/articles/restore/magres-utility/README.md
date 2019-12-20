# MAGRES Utility

**Created At:** 11/1/2017 12:02:46 AM  
**Updated At:** 12/3/2018 4:42:58 PM  
**Original Doc:** [magres-utility](https://docs.jbase.com/49275-restore/magres-utility)  


The MAGRES utility can be used to restore data from a MAGSAVE tape.

By default, the restore process will do the following:

- Display all restored record identifiers
- Skip binary records


```
magres {-Options} {(Options}
```


| Option<br> | Explanation<br> |
| --- | --- |
| -P<br> | output record identifiers to printer<br> |
| -Q<br> | suppress record identifiers display<br> |
| -S<br> | restore all records<br> |
| (P)<br> | output record identifiers to printer<br> |
| (Q)<br> | suppress record identifier display<br> |
| (S)<br> | restore all records<br> |


The utility will create data files and subdirectories in the current working directory. A block size of 4096 is assumed for record bodies spanning more than one block. The MAGSAVE tape usually contains a dummy first block and so must be skipped before execution of the ‘magres’ command, also the MAGSAVE format has it’s own label format and so the label parameter must be set to NONE and the usual block size appears to be 4096.



### EXAMPLE


| mkdir restoredir<br> | Create restore directory<br> |
| cd restoredir<br> | Change to restore directory<br> |
| T-ATT DAT0 LABEL=NONE SIZE=4096<br> | Attach device with label identification suppressed<br> |
| T-FWD<br> | Skip first tape file<br> |
| magres -Q<br> | Restore data<br> |

