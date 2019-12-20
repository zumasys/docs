# PN5_60767

**Created At:** 8/27/2018 12:34:30 PM  
**Updated At:** 10/24/2018 8:39:34 PM  
**Original Doc:** [pn5_60767](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60767)  


### Description

Utilities: Running **jrf** on an encrypted file decrypts the file



### Previous Release Behavior

When the **jrf** command was run on a file encrypted with:

```
create-file filename encrypted=true
```

The resulting data would be decrypted.



### Current Release Behavior

The data remains encrypted after running **jrf** on an encrypted file.
