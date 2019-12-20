# PN5_60683

**Created At:** 12/29/2017 10:07:28 AM  
**Updated At:** 2/16/2018 7:08:48 PM  
**Original Doc:** [pn5_60683](https://docs.jbase.com/release-notes/pn5_60683)  


### Description

SQL: JOIN issue, some JOINs would fail



### Previous Release Behavior

The issue seemed to be with JOINs on more than 2 tables and was dependent on the sequence of the limiters in relation to the sequence of the tables in the query.



### Current Release Behavior

We now check for situations where the data can't be limited for a given table because one of the limiting expressions has not yet been read. In this situation, the driver should switch to reading the join table sequentially and then continue to the next table in sequence.
