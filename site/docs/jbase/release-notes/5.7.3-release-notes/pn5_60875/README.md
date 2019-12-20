# PN5_60875

**Created At:** 6/29/2019 7:43:48 AM  
**Updated At:** 6/29/2019 8:04:10 AM  


### Description

**READNEXT KEY** does not process all records in Universe or Prime emulations



### Previous Release Behavior

In Universe or Prime emulations, **READNEXT KEY** would not process the first index key value in an index.

For example, if the first index key value was **abc** and the second index key value was **def** and there were 10 of them then **READNEXT KEY** would skip all 10 **abc** values and begin at the **def** value.



### Current Release Behavior

All index key values are processed.
