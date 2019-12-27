# PN5_60894

**Created At:** 9/23/2019 9:58:53 AM  
**Updated At:** 10/6/2019 11:03:58 AM  
**Original Doc:** [pn5_60894](https://docs.jbase.com/75024-5-7-4-release-notes/pn5_60894)  
**Original ID:** 459571  
**Internal:** No  


### Description

**listf -xml** fails on Linux



### Previous Release Behavior

The **listf -xml** command did not produce complete xml output.

This was primarily due to the jBASE **stat** command conflicting with the Linux one.



### Current Release Behavior

**listf -xml** produces correct xml output.
