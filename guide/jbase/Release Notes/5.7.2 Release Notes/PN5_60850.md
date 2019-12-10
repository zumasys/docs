# PN5_60850

**Created At:** 3/8/2019 11:13:15 AM  
**Updated At:** 3/8/2019 11:14:04 AM  


### Description

jQL: No records returned when an index is created on an ITYPE



### Previous Release Behavior

Prior to this patch, when an index was created with an ITYPE, an ATYPE with dict&lt;2&gt; = 0 would always return "No Records selected" when there were, in fact, records that satisfied the selection criteria.
