# PN5_60637

**Created At:** 10/3/2017 12:10:54 PM  
**Updated At:** 10/16/2017 9:55:02 PM  
**Original Doc:** [pn5_60637](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60637)  
**Original ID:** 279174  
**Internal:** No  

## Description

Locks would remain after a file is closed.

### Previous Release Behavior

When a file was closed as shown below, any locks would remain as the file cacheing would prevent the file from being closed.

```
OPEN "file" TO DSCB ELSE STOP 201,"file"
READU rec FROM DSCB,"key" ELSE NULL
DSCB = 0 ;* This would normally close the file and release the locks
```

### Current Release Behavior

If the closed file has taken any locks at any time, then a check is made for those locks and the equivalent of a **RELEASE filevar** statement is executed.

Back to [5.6.2 release Notes](./../README.md)
