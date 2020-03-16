# PN5_60783

**Created At:** 8/29/2018 10:26:44 AM  
**Updated At:** 10/24/2018 8:47:45 PM  
**Original Doc:** [pn5_60783](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60783)  
**Original ID:** 336538  
**Internal:** No  

## Description

jQL: Selection criteria on date conversion fails on multi-value field

### Previous Release Behavior

Only the first multi-value was left in internal format, giving the wrong result.

### Current Release Behavior

All multi-values are processed correctly, i.e. the date conversion is applied to every internal value.

Back to [5.7.1 Release Notes](./../README.md)
