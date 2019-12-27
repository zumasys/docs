# PN5_60802

**Created At:** 9/24/2018 10:47:26 AM  
**Updated At:** 10/24/2018 8:49:01 PM  
**Original Doc:** [pn5_60802](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60802)  
**Original ID:** 340485  
**Internal:** No  


### Description

jQL: No output using controlling/dependent associations with a limiting expression

### Previous Release Behavior

No data was displayed for:

```
SORT filename WITH PDATE2 GE "26/5/07" AND LE "26/5/07" TOTAL PAYMENTS2 PDATE2 GE "26/5/07" AND LE "26/5/07" PDESC2  PAYMENTS2
```

This was basically due to jQL not handling the limiting expression correctly as well as the the structure of the jQL statement.

### Current Release Behavior

As long as the statement is restructured to place the limiting expression on the end then there will be no issue, e.g.

```
SORT WCOMPS TOTAL PAYMENTS2 PDATE2 GE "26/5/07" AND LE "26/5/07" PDESC2 PAYMENTS2 WITH PDATE2 GE "26/5/07" AND LE "26/5/07"
```

### 

