# PN5_60783

**Created At:** 8/29/2018 10:26:44 AM  
**Updated At:** 10/24/2018 8:47:45 PM  


### Description

jQL: Selection criteria on date conversion fails on multi-value field



### Previous Release Behavior

Only the first multi-value was left in internal format, giving the wrong result.



### Current Release Behavior

All multi-values are processed correctly, i.e. the date conversion is applied to every internal value.
