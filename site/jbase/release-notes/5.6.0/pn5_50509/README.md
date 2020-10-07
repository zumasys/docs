# PN5_50509

<PageHeader />

## Description

Extend J4 and JP file creation to allow case insensitive record IDs

## Previous Release Behavior

The current implementation of case independent files involved using a jBASE index to maintain a lower case version of the item id. This was achieved by with jchmod +U filename.

However, this had proved very slow, as testing showed a marked decrease in jQL performance.

## Current Release Behavior

This patch obviates the requirement to use jchmod +U.

If the configuration option case_insensitive_file_ids set, then all J4 and jPlus files will be created as case insensitive. If that option is not set then all J4 and jPlus files will be created as case sensitive, which is the default. This option is automatically included in the D3 configuration.

This behavior can be overridden by using the CASE=YES|NO|TRUE|FALSE option when creating the file, in which case the file is created accordingly regardless of the emulation option, e.g.:

```
CREATE-FILE CUSTOMERS 1 101 TYPE=JP CASE=NO
```

Once a file is created as case sensitive or not, it should not be overridden. If jchmod +U or jchmod -U is executed against the file, the behavior will be unpredictable.

The case status of J4 and jPlus files can be viewed with jstat -v, e.g.:

```
jsh home ~ -->jstat -v CUSTOMERS
File C:\home\CUSTOMERS
Type=JP , Hash method = 7 , Created Fri Jan 06 04:36:13 2017
Groups = 101 , Frame size = 4096 bytes , Secondary Record Size = 8192 bytes
Restore re-size parameters : (none)
File size = 417792 bytes , Inode = 12542 , Device = Id 28485
Last Accessed Fri Jan 06 09:36:13 2017 , Last Modified Fri Jan 06 09:36:13 2017
Backup = YES , Log = YES , Rollback = YES , Network = NO, Secure updates = NO
CASE = OFF - Case insensitive (internal)

Record Count = 0 , Record Bytes = 0
Bytes/Record = 0 , Bytes/Group = 0
Primary   file space:   Total Frames = 101 , Total Bytes = 0
Secondary file space:   Total Frames = 0 , Total Bytes = 0
```

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />
