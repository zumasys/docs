# PH5_60867

**Created At:** 6/29/2019 7:09:19 AM  
**Updated At:** 6/29/2019 8:04:10 AM  


### Description

jQL process exits prematurely when a jBC subroutine exits from within a query.



### Current Release Behavior

Prior to this patch, a select on a distributed file using a select list would exit perpetually. Error messages when selecting on J4/JP/JD files were limited when using SELECT.

Specifically, a partition algorithm used with a distributed file would have caused the query to end.

More meaningful errors messages are returned from jQL.
