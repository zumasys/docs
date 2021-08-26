# PN5_60875

<PageHeader />

## Description

**READNEXT KEY** does not process all records in Universe or Prime emulations

### Previous Release Behavior

In Universe or Prime emulations, **READNEXT KEY** would not process the first index key value in an index.

For example, if the first index key value was **abc** and the second index key value was **def** and there were 10 of them then **READNEXT KEY** would skip all 10 **abc** values and begin at the **def** value.

### Current Release Behavior

All index key values are processed.

Back to [5.7.3 Release Notes](./../jbase-5.7.3-release-notes/README.md)

<PageFooter />
