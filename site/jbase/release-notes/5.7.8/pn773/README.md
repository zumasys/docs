# PN773

<PageHeader />

## Description

T-correlative causes memory error

## Previous Release Behavior

In a file with records that only had sub-values (single multi-value) and a dictionary such as:


ID: PART
```
S
1





T1,10
L
10
```

this query would cause a memory address failure:

```
SORT INVENTORY BY PART PART
```

## Current Release Behavior

Query should complete as normal.

Back to [5.7.8 Release Notes](./../README.md)
  
<PageFooter />
