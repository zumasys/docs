# SYSRESTORE

**Created At:** 11/1/2017 12:09:07 AM  
**Updated At:** 12/3/2018 4:42:58 PM  
**Original Doc:** [sysrestore](https://docs.jbase.com/49275-restore/sysrestore)  


# 


The SYSRESTORE utility can be used to restore multiple accounts from a FILE-SAVE tape.

```
 sysrestore -Options (Options
```


| Option<br> | Description<br> |
| --- | --- |
| A<br> | restoring Advanced Pick file save<br> |
| B<br> | change spaces in file names to underline<br> |
| C<br> | force file names to upper case<br> |
| F<br> | restoring Fujitsu file save<br> |
| M<br> | restoring Reality file save<br> |
| R<br> | restoring R91 file save<br> |
| S<br> | produce statistics<br> |
| U<br> | restoring Ultimate file save<br> |
| V<br> | verify save<br> |
| Z<br> | restoring SMA file save<br> |
| -b**n**<br> | modulo blocking ratio, default value 1 - 4k, where **n** can be:<br><br>| **8**<br> | Source machine used half k frames<br> |<br>| **4**<br> | Source machine used 1k frames<br> |<br>| **2**<br> | Source machine used 2k frames<br> |<br><br> |
| -rfilename<br> | resize filename<br> |
| -z<br> | force OOG size to one<br> |




### EXAMPLE

```
sysrestore -V > restoredata
```

Verify a FILE-SAVE tape. The names of the accounts and files on the tape are written to the file *restoredata*.
