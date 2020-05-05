# PN5_60728

<PageHeader />

## Description

jrestore not restoring all records in D3 emulation

### Previous Release Behavior

If a file on a **jbackup** contains both UPPER- and lower-case versions of the same record IDs and **jrestore** is running in an emulation with **case\_insensitive\_file\_ids = true** then the restored file will end up with only 1 version of each record ID.

### Current Release Behavior

**jrestore** restores all record IDs regardless of the emulation settings.

Back to [jBASE 5.7.0 Release Notes](./../README.md)

<PageFooter />
