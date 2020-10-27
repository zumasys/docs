# PN5_60799

<PageHeader />

## Description

jQL fails to select record keys using NE operator on a case insensitive file

### Previous Release Behavior

jQL statements of the form:

```
select filename op "recordkey"
```

where "op" could be any operator, e.g. eq, ne, gt, lt, ge, le, would fail.

### Current Release Behavior

Fixed issue with pattern matching on ID only select types.

This new behavior will only become active if the file has been created caseless. e.g. create-file CUSTOMERS case=no

Caseless files are created by default in D3 emulation.

Back to [5.7.1 Release Notes](./../jbase-5.7.1-release-notes/README.md)
  
<PageFooter />
