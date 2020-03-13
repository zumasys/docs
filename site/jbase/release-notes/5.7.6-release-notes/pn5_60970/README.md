# PN5_60970

**Created At:** 1/22/2020 10:17:31 AM  
**Updated At:** 1/22/2020 10:29:13 AM  
**Original Doc:** [pn5_60970](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60970)  
**Original ID:** 521074  
**Internal:** No  

## Description

DELETE-FILE DICT *filename* deleting multiple files.

### Previous Release Behavior

Performing **DELETE-FILE DICT *filename*** would also delete any additional sub-section of a file (e.g. ***filename*]MOBJECT** and ***filename*]I**)

### Current Release Behavior

Now only deletes ***filename*****]D**

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)
