# resuv

**Created At:** 11/1/2017 12:06:29 AM  
**Updated At:** 12/3/2018 4:42:58 PM  
**Original Doc:** [resuv](https://docs.jbase.com/49275-restore/resuv)  
**Original ID:** 283756  
**Internal:** No  

The RESUV utility can be used to restore data from a UVBACKUP tape.

By default, the restore process will do the following in order:

1. Restore from tape
2. Delete .Type1 files
3. Delete empty sub-directories.
4. Run PortBas on directories with source in them
5. Convert VOC entries to MD entries

The -e -r -t -p and -m options can suppress some of these phases. The -R , -E , -T , -P or -M option can cause ONLY those phases.

```
resuv {-Options} {Targetdir}
```

| Option | Description |
| --- | --- |
| -c | suppress check on directory being empty |
| -d | debug display on |
| -e | suppress empty directory delete |
| -m | suppress conversion of VOC entries to MD entries |
| -p | suppress calling PortBas on all source files |
| -r | suppress Restore from Tape phase |
| -s | suppress the resize of all jBASE files |
| -t | suppress deletion of ".Type1" files |
| -v | verbose mode |
| -E | delete empty directories |
| -M | convert from VOC records to MD records |
| -O | keep all the object files i.e. those that end in .O |
| -P | run PortBas on all source files |
| -R | restore from tape |
| -S | resize all jBASE files |
| -T | delete all .Type1 files |

resuv creates a directory in the target directory using the name of the account in the uvbackup. The usual default block size for a uvbackup save appears to be 8192. Also the uvbackup format provides a different label type to the standard SMA version and so the label parameter should be configured to NONE.

## Notes

When doing a uvbackup on a Windows platform, specify a relative path to avoid problems caused by the translation of drive characters.

The LABEL=NONE option is required when doing the T-ATT.

Use of the **-rev7** option when doing the uvbackup should no longer be necessary.

The **-M** option will change references to dictionary files in attribute 3 of F-pointers to the jBASE syntax. For example D\_CUSTOMER is changed to CUSTOMER]D. In addition, trailing blanks are removed from attribute 1 of items that commence with "PQ" or "PQN".

### Example

| <!----> | <!----> |
| --- | --- |
| mkdir restoredir | Create restore directory |
| cd restoredir | Change to restore directory |
| T-ATT DAT0 LABEL=NONE SIZE=8192 | Attach device with label identification suppressed. |
| resuv –v . | Restore data to current directory. |

[Back to Restore](./../README.md)