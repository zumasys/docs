# PN828

<PageHeader />

## Description

In D3 emulation, jQL defaults to underlining BREAK-ON totals

## Previous Release Behavior

A jQL statement such as:

```
SORT CUSTOMERS BY STATE BREAK-ON STATE TOTAL CNT
```

would add underlines to the BREAK-ON totals.

## Current Release Behavior

Underlines are added only when using the **U** option, e.g.

```
SORT CUSTOMERS BY STATE BREAK-ON STATE "'U'" TOTAL CNT
```

## Notes

This behavior is depended on the configuration option **generic_d3 = true**.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
