# PN5_60788

<PageHeader />

## Description

jQL: Grand totals longer than the defined column width were being truncated

### Previous Release Behavior

A total of [152,183,838.27] would be truncated as the column is set to be formatted 12 characters, right justified.

```
           ============
***        2,183,838.27
```

### Current Release Behavior

The totals now wrap:

```
           ============
***        152,183,838.
                     27
```

Back to [5.7.1 Release Notes](./../jbase-5.7.1-release-notes/README.md)
  
<PageFooter />
