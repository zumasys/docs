## System Purge Controls (PURGE.CONTROL)
<PageHeader />

**Form Details**
[Form Details](../PURGE-CONTROL-1/README.md)

**Purpose**
The PURGE.CONTROL procedure controls which purges can be run using the purge
procedures themselves, to prevent unauthorized or accidental purges. It can
also optionally be used to run purge procedures for some or all of the files
that can be purged.

A cutoff date must be entered to run any purges, and optionally a history
account can be specified in which to write out the purged data. Purges must be
run through PURGE.CONTROL if history files are to be written. History account
must be set up in advance with all file names defined the same as the live
account.

**Frequency of Use**
As required.

**Prerequisites**
If a history account is to be written to, then it must exist, with all of the
files defined.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
