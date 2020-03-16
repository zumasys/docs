# PN5_60782

**Created At:** 8/28/2018 9:55:44 AM  
**Updated At:** 10/24/2018 8:47:39 PM  
**Original Doc:** [pn5_60782](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60782)  
**Original ID:** 336411  
**Internal:** No  

## Description

jQL: Fix issue with associations and default dictionary tree

### Previous Release Behavior

Given a query where no output columns where specified or if output was not part of the association, e.g.,

```
LIST myfile with a=1 and b=2
```

the process would hang or crashed.

### Current Release Behavior

No more issues with hangs or crashes.

Back to [5.7.1 Release Notes](./../README.md)
