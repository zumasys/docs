# PN5_60803

**Created At:** 9/21/2018 8:50:09 AM  
**Updated At:** 10/24/2018 8:48:58 PM  
**Original Doc:** [pn5_60803](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60803)  


### Description

Q-pointer casing issue

### Previous Release Behavior

Q-pointers could not resolve with a mixed-case account name and/or file name.

Previously something like this would fail.

```
MYFILE
001 q
002 another_accounT
003 remote_filE
```

```
LIST myFile
```

where:

```
[myFile] is a record in the MD
[another_accounT] is a record in the SYSTEM file
[remote_filE] is an entry in the Q-pointer where the case did not match the actual file name  
```

### Current Release Behavior

Q-pointers now resolve regardless of the case of the account name and/or file name.

This change is only effective in D3 emulation.
