# PN5_60728

**Created At:** 3/21/2018 8:20:27 AM  
**Updated At:** 3/21/2018 8:21:37 AM  


### Description

jrestore not restoring all records in D3 emulation



### Previous Release Behavior

If a file on a **jbackup** contains both UPPER- and lower-case versions of the same record IDs and **jrestore** is running in an emulation with **case\_insensitive\_file\_ids = true** then the restored file will end up with only 1 version of each record ID.



### Current Release Behavior

**jrestore** restores all record IDs regardless of the emulation settings.
