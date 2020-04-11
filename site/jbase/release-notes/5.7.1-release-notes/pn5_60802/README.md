# PN5_60802

<PageHeader />

## Description

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

Back to [5.7.1 Release Notes](./../README.md)

  
<PageFooter />
