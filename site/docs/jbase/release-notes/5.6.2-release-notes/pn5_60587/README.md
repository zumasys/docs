# PN5_60587

**Created At:** 6/27/2017 3:42:16 PM  
**Updated At:** 7/6/2017 6:48:25 PM  
**Original Doc:** [pn5_60587](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60587)  


### Description

jQL: Prevent hidden columns from corrupting totals of other columns



### Previous Release Behavior

When  hidden columns are positioned at various places in a jQL statement,  depending on the position of the hidden column, the totals could get corrupted.

Issuing a command like

```
SORT SALES-JRL TOTAL GROSS TOTAL NET-AMT TOTAL UNBLD.FRT TOTAL A8 TOTAL ADJ-GP%
```

would produce different results depending on where the **TOTAL A8** was placed.



### Current Release Behavior

Totals for hidden columns are ignored and do not affect the totals of the other columns.
