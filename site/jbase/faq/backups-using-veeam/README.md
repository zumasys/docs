# Backing up jBASE Servers using Veeam

<PageHeader />

## Introduction

For expediency sake, these procedures have been illustrated with the use of virtual machines running on VMware Workstation rather than in a full-fledged VMware Server environment.

In such an environment, the procedures will be much the same but the options may vary somewhat.

A virtual ESXi server was staged and used in order to illustrate restoring data from a Linux backup, as it was not possible to achieve an end result by any other means.

## Veeam

The [Community Edition of Veeam](https://www.veeam.com/virtual-machine-backup-solution-free.html) was used for these procedures.

As well as online help at the above link, there is a [Hitchhikers Guide available to read](https://www.veeam.com/wp-guide-backup-replication-community-edition.html), although you must register for access.

* * *

The Veeam utility can be used to make full or partial backups of Windows and Linux jBASE servers.

In order that an uncorrupted copy of the jBASE folders/accounts is made, a DB-PAUSE should be in effect before the backup is made.

After the backup, a DB-RESUME should be issued to allow normal jBASE activity to resume.

[Configuring a full Linux Server backup](./linux-full-backup/README.md)  

[Configuring a Protection group for a Windows jBASE Server](./windows-protection-group/README.md)

[Configuring a Full Backup for a Windows Server Protection Group](./windows-full-backup/README.md)

[Restoring data from a Windows Veeam backup](./windows-restore/README.md)

[Restoring data from a Linux Veeam backup](./linux-restore/README.md)

Back to [FAQ](./../README.md)

  
<PageFooter />
