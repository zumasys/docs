# PN5_60850

<PageHeader />

## Description

jQL: No records returned when an index is created on an ITYPE

### Previous Release Behavior

Prior to this patch, when an index was created with an ITYPE, an ATYPE with dict&lt;2&gt; = 0 would always return "No Records selected" when there were, in fact, records that satisfied the selection criteria.

Back to [5.7.2 Release Notes](./../README.md)
