# RESUV

**Created At:** 11/1/2017 12:06:29 AM  
**Updated At:** 12/3/2018 4:42:58 PM  


# 


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


| Option<br> | Description<br> |
| --- | --- |
| -c<br> | suppress check on directory being empty<br> |
| -d<br> | debug display on<br> |
| -e<br> | suppress empty directory delete<br> |
| -m<br> | suppress conversion of VOC entries to MD entries<br> |
| -p<br> | suppress calling PortBas on all source files<br> |
| -r<br> | suppress Restore from Tape phase<br> |
| -s<br> | suppress the resize of all jBASE files<br> |
| -t<br> | suppress deletion of ".Type1" files<br> |
| -v<br> | verbose mode<br> |
| -E<br> | delete empty directories<br> |
| -M<br> | convert from VOC records to MD records<br> |
| -O<br> | keep all the object files i.e. those that end in .O<br> |
| -P<br> | run PortBas on all source files<br> |
| -R<br> | restore from tape<br> |
| -S<br> | resize all jBASE files<br> |
| -T<br> | delete all .Type1 files<br> |


resuv creates a directory in the target directory using the name of the account in the uvbackup. The usual default block size for a uvbackup save appears to be 8192. Also the uvbackup format provides a different label type to the standard SMA version and so the label parameter should be configured to NONE.



### Notes

When doing a uvbackup on a Windows platform, specify a relative path to avoid problems caused by the translation of drive characters.

The LABEL=NONE option is required when doing the T-ATT.

Use of the **-rev7** option when doing the uvbackup should no longer be necessary.

The **-M** option will change references to dictionary files in attribute 3 of F-pointers to the jBASE syntax. For example D\_CUSTOMER is changed to CUSTOMER]D. In addition, trailing blanks are removed from attribute 1 of items that commence with "PQ" or "PQN".



### Example


| mkdir restoredir<br> | Create restore directory<br> |
| cd restoredir<br> | Change to restore directory<br> |
| T-ATT DAT0 LABEL=NONE SIZE=8192<br> | Attach device with label identification suppressed.<br> |
| resuv –v .<br> | Restore data to current directory.<br> |

