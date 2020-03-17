# PN5_60606

**Created At:** 10/2/2017 1:02:11 PM  
**Updated At:** 11/22/2017 11:03:08 AM  
**Original Doc:** [pn5_60606](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60606)  
**Original ID:** 279061  
**Internal:** No  

## Description

Allow AND-LISTS, OR-LISTS, XOR-LISTS to accept 1 list

### Previous Release Behavior

The AND-LISTS, OR-LISTS and XOR-LISTS commands required at least 2 lists:

```
AND-LISTS list1 list2
```

### Current Release Behavior

Those commands now only require 1 list:

```
OR-LISTS list1
```

Back to [5.6.2 release Notes](./../README.md)
