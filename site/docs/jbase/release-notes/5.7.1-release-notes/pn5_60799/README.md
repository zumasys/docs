# PN5_60799

**Created At:** 9/14/2018 8:09:26 AM  
**Updated At:** 10/24/2018 8:48:53 PM  
**Original Doc:** [pn5_60799](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60799)  


### Description

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
