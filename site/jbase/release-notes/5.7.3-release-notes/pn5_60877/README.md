# PN5_60877

**Created At:** 6/29/2019 7:49:18 AM  
**Updated At:** 6/29/2019 8:04:10 AM  
**Original Doc:** [pn5_60877](https://docs.jbase.com/61286-5-7-3-release-notes/pn5_60877)  
**Original ID:** 401004  
**Internal:** No  

## Description

Prevent process abort when restoring over an existing file with indexes

### Previous Release Behavior

If a **jbackup** is performed without the -c option on a file with indexes or other control information in the header and a **jrestore** is performed with the -O option overwriting the same file the restore would crash.

### Current Release Behavior

Restore completes successfully.

Back to [5.7.3 Release Notes](./../README.md)
