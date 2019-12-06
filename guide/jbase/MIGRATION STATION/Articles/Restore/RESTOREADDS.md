# RESTOREADDS

**Created At:** 11/1/2017 12:05:34 AM  
**Updated At:** 12/3/2018 4:42:58 PM  


# 


The jBASE RESTOREADDS utility can be used to restore floppy disks saved in the ACCOUNT-SAVE format from an ADDS MENTOR systems. The reason for standard ACCOUNT-RESTORE utility cannot be used is because the floppy disk contains a two dummy blocks, one at the start and one at the end of the floppy. The dummy block at the end of the floppy is the main problem as the tape driver cannot determine that this dummy block is not good data.


| <samp>mkdir restoredir</samp> | Create restore directory |
| --- | --- |
| <samp>cd restoredir</samp> | Change to restore directory |
| <samp>restoreadds</samp> | Copy to disk image then account restore from disk |


The restoreadds utility will automatically attach to the floppy device FLOPPY0 and then proceed to copy the valid tape blocks to a tape file via device FILE0. Once complete then the normal ACCOUNT-RESTORE is executed. This mechanism will handle multiple floppy disks.
