# PN5_60587

<PageHeader />

## Description

jQL: Prevent hidden columns from corrupting totals of other columns

### Previous Release Behavior

When hidden columns are positioned at various places in a jQL statement, depending on the position of the hidden column, the totals could get corrupted.

Issuing a command like

```
SORT SALES-JRL TOTAL GROSS TOTAL NET-AMT TOTAL UNBLD.FRT TOTAL A8 TOTAL ADJ-GP%
```

would produce different results depending on where the **TOTAL A8** was placed.

### Current Release Behavior

Totals for hidden columns are ignored and do not affect the totals of the other columns.

Back to [5.6.2 release Notes](./../README.md)

  
<PageFooter />
