# RESTOREADDS

<PageHeader />

The jBASE RESTOREADDS utility can be used to restore floppy disks saved in the ACCOUNT-SAVE format from ADDS MENTOR systems. The reason for standard ACCOUNT-RESTORE utility cannot be used is because the floppy disk contains a two dummy blocks, one at the start and one at the end of the floppy. The dummy block at the end of the floppy is the main problem as the tape driver cannot determine that this dummy block is not good data.

| <!----> | <!----> |
| --- | --- |
| mkdir restoredir | Create restore directory |
| cd restoredir | Change to restore directory |
| restoreadds | Copy to disk image then account restore from disk |

The restoreadds utility will automatically attach to the floppy device FLOPPY0 and then proceed to copy the valid tape blocks to a tape file via device FILE0. Once complete then the normal ACCOUNT-RESTORE is executed. This mechanism will handle multiple floppy disks.

[Back to Restore](./../README.md)

<PageFooter />
