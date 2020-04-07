# Restoring data from a Windows Veeam backup

<PageHeader />

When a Veeam Windows backup is made, the backup files can be inspected in File Explorer:

![Windows_Restore_1](./windows_restore_1.png)

To restore data from this backup, you can either double-click on the .vbk file, which brings up the following screen and may lead to a rather unsatisfactory experience, as it does not appear to be possible to make any selection:

![Windows_Restore_2](./windows_restore_2.png)

Alternatively, navigate to "Inventory -> Physical & Cloud Infrastructure -> Perform Restore":

![Windows_Restore_3](./windows_restore_3.png)

You can the select the Windows server from which to restore data:

![Windows_Restore_4](./windows_restore_4.png)

Select the "Guest Files (Windows) Restore" option and the Restore Point:

![Windows_Restore_5](./windows_restore_5.png)

For audit purposes, enter the reason for the restore. It is also possible to elect to skip this page:

![Windows_Restore_6](./windows_restore_6.png)

and Finish:

![Windows_Restore_7](./windows_restore_7.png)

This results in a Restore Session being started:

![Windows_Restore_8](./windows_restore_8.png)

and a folder listing being presented:

![Windows_Restore_9](./windows_restore_9.png)

The appropriate folder can be opened and the required files selected:

![Windows_Restore_10](./windows_restore_10.png)

You can elect to restore to the server and either keep or overwrite, which currently seems to be a slow and error prone process:

![Windows_Restore_11](./windows_restore_11.png)

Or elect to browse to and restore into a folder on a local drive, then proceed with a manual restore to the server itself at a convenient time:

![Windows_Restore_12](./windows_restore_12.png)

Back to [Veeam](./../README.md)
