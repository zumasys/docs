# PN5_60963

**Created At:** 1/15/2020 1:44:40 PM  
**Updated At:** 1/15/2020 2:04:05 PM  
**Original Doc:** [pn5_60963](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60963)  
**Original ID:** 517114  
**Internal:** No  


### Description

**ACCOUNT-SAVE** on Windows doesn't save files with Windows reserved characters ? \* ; | &lt; &gt; )



### Previous Release Behavior

When running **ACCOUNT-SAVE** (aka **ACCSAVE**) on Windows, any file name with a Windows reserve character was not saved.

For example, if a file is named ABC\*DEF then the **ACCOUNT-SAVE** process would display these lines:

```
ACCOUNT-SAVE : Skipping file 'ABC*DEF]D' in directory 'C:\jBASE\TESTACCT'
ACCOUNT-SAVE : Skipping file 'ABC*DEF' in directory 'C:\jBASE\TESTACCT'
```



### Current Release Behavior

All valid files with Windows reserved characters are saved.
