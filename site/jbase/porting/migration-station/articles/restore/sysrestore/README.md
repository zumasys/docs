# sysrestore

**Created At:** 11/1/2017 12:09:07 AM  
**Updated At:** 12/3/2018 4:42:58 PM  
**Original Doc:** [sysrestore](https://docs.jbase.com/49275-restore/sysrestore)  
**Original ID:** 283758  
**Internal:** No  

The **sysrestore** utility can be used to restore multiple accounts from a FILE-SAVE tape.

```
 sysrestore -Options (Options
```

| Option | Description |
| --- | --- |
| A | restoring Advanced Pick file save |
| B | change spaces in file names to underline |
| C | force file names to upper case |
| F | restoring Fujitsu file save |
| M | restoring Reality file save |
| R | restoring R91 file save |
| S | produce statistics |
| U | restoring Ultimate file save |
| V | verify save |
| Z | restoring SMA file save |
| -b**n** | modulo blocking ratio, default value 1 - 4k, where **n** can be:<br><br>| **8**<br> | Source machine used half k frames<br> |<br>| **4**<br> | Source machine used 1k frames<br> |<br>| **2**<br> | Source machine used 2k frames<br> |<br><br> |
| -rfilename | resize filename |
| -z | force OOG size to one |

## Example

```
sysrestore -V > restoredata
```

Verify a FILE-SAVE tape. The names of the accounts and files on the tape are written to the file *restoredata*.

[Back to Restore](./../README.md)
