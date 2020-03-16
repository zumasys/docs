# PN5_60881

**Created At:** 6/29/2019 8:22:49 AM  
**Updated At:** 6/29/2019 8:24:12 AM  
**Original Doc:** [pn5_60881](https://docs.jbase.com/61286-5-7-3-release-notes/pn5_60881)  
**Original ID:** 401007  
**Internal:** No  

## Description

**GET-LIST**in D3 emulation changes characters in the select-list

### Previous Release Behavior

In D3 emulation, issuing a **GET-LIST** on an exploded-list, i.e. a list with entries of the form **id]vn**, caused the value-marks to be converted to sub-value-marks.

### Current Release Behavior

Value-marks are retained.

Back to [5.7.3 Release Notes](./../README.md)
