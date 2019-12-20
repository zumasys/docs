# PN5_60922

**Created At:** 10/28/2019 11:33:18 AM  
**Updated At:** 12/4/2019 9:31:38 AM  
**Original Doc:** [pn5_60922](https://docs.jbase.com/79141-5-7-5-release-notes/pn5_60922)  


### Description

jQL: Add (U option to the D3 GET-LIST command to produce Unique entries



### Previous Release Behavior

This option did not previously exist.



### Current Release Behavior

This option removes duplicate entries when multiple lists are specified.

The resulting select-list is sorted by the entries in the resulting list.



### Notes

This option can only be used if **d3\_list\_processing = true** is set in the **Config\_EMULATE** file.
