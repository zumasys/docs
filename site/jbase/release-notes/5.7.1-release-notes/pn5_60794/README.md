# PN5_60794

<PageHeader />

## Description

jed/ED crashes with 'generic\_universe' or 'generic\_unidata' using exploded select-list

### Previous Release Behavior

When running in Universe or Unidata emulation a second value is expected when calling READNEXT:

```
READNEXT id:            would fail
READNEXT id, value:     would work
```

### Current Release Behavior

This change does nothing more than check that there is something to assign a result to so that no crash occurs.

Back to [5.7.1 Release Notes](./../README.md)
