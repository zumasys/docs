# PN730

<PageHeader />

## Description

EDELETE clears entire file

## Previous Release Behavior

Per the documentation `EDELETE` is only supposed to delete items that are specified.

```
EDELETE DEMO
999 Records Deleted
```

## Current Release Behavior

If you attempt to use `EDELETE` without an explicit record list or a preceding select-list then you get this error message:

```
EDELETE DEMO
A preceding select-list or explicit record-list is required.
```

Back to [5.7.11 Release Notes](./../README.md)
  
<PageFooter />
