# PN5_60867

**Created At:** 3/27/2019 10:10:27 AM  
**Updated At:** 3/27/2019 10:13:51 AM  
**Original Doc:** [pn5_60867](https://docs.jbase.com/5-7-2-release-notes/pn5_60867)  
**Original ID:** 375019  
**Internal:** No  

## Description

jQL process exits prematurely when a jBC subroutine exits from within a query.

### Current Release Behavior

Prior to this patch, a select on a distributed file using a select list would exit perpetually. Error messages when selecting on J4/JP/JD files were limited when using SELECT.

Specifically, a partition algorithm used with a distributed file would have caused the query to end.

More meaningful errors messages are returned from jQL.

Back to [5.7.2 Release Notes](./../README.md)
