# PN5_60938

**Created At:** 1/14/2020 9:47:18 AM  
**Updated At:** 1/15/2020 2:04:05 PM  
**Original Doc:** [pn5_60938](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60938)  
**Original ID:** 516408  
**Internal:** No  

## Description

Segmentation violation when running SQLSELECT from an active select on a file with no indexes.

### Previous Release Behavior

Running SQLSELECT from an active select would crash if the file had no indexes.

### Current Release Behavior

No longer crashes.

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)
