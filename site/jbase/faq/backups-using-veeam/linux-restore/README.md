# Restoring data from a Linux Veeam backup  

When a Veeam Linux backup is made, the backup files can be inspected in File Explorer:

![Linux_Restore_1](./linux_restore_1.png)

To restore data from this backup, you can either double-click on the .vbk file, which brings up the following screen and may lead to a rather unsatisfactory experience, as it does not appear to be possible to make any selection:

![Linux_Restore_2](./linux_restore_2.png)

Alternatively, navigate to "Inventory -> Computer Tools -> Restore -> Agent ":

![Linux_Restore_3](./linux_restore_3.png)

Which results in this form being displayed:

![Linux_Restore_4](./linux_restore_4.png)

Assuming that individual files are required here, select "Guest files restore".

Then "Linux and other":

![Linux_Restore_5](./linux_restore_5.png)

Which bring up the Guest File Restore Wizard.

Expand the tree and select the VM backup from which you wish to restore:

![Linux_Restore_6](./linux_restore_6.png)

Select the Restore Point:

![Linux_Restore_7](./linux_restore_7.png)

For audit purposes, enter the reason for the restore. It is also possible to elect to skip this page:

![Linux_Restore_8](./linux_restore_8.png)

In order to be able to achieve a file level restore an Esxi server needs to be available as a File Level Restore helper appliance (FLR): 

![Linux_Restore_9](./linux_restore_9.png)

And "Finish"

![Linux_Restore_10](./linux_restore_10.png)

You are then presented with the layout of the Linux volume with the complete file system:

![Linux_Restore_11](./linux_restore_11.png)

from which to select the file(s) to be restored:

![Linux_Restore_12](./linux_restore_12.PNG)

It is possible to elect for the files to be copied to a local drive, then proceed with a manual restore to the server itself at a convenient time, i.e. via ftp:

![Linux_Restore_13](./linux_restore_13.PNG)

In progress:

![Linux_Restore_14](./linux_restore_14.PNG)

or to restore to the original VM with either "Keep" or "Overwrite"  option, which, as with the Windows version seems to be a slow and error prone process:

![Linux_Restore_15](./linux_restore_15.PNG)

## To be completed

Back to [Veeam](./../README.md)
