# PN5_60654

**Created At:** 12/24/2017 11:15:43 AM  
**Updated At:** 5/14/2018 8:21:16 PM  
**Original Doc:** [pn5_60654](https://docs.jbase.com/release-notes/pn5_60654)  
**Original ID:** 292193  
**Internal:** No  


### Description

Change the way the MD is created with the **create-account** command



### Previous Release Behavior

The **MD** was always created as a Case Sensitive file.

### Current Release Behavior

- The **MD** now follows the effective emulation, so if the emulation specifies that all files are to be created as Case Insensitive then so will the **MD**.

