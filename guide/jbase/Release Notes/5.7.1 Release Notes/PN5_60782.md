# PN5_60782

**Created At:** 8/28/2018 9:55:44 AM  
**Updated At:** 10/24/2018 8:47:39 PM  


### Description

jQL: Fix issue with associations and default dictionary tree



### Previous Release Behavior

Given a query where no output columns where specified or if output was not part of the association, e.g.,

```
LIST myfile with a=1 and b=2
```

the process would hang or crashed.



### Current Release Behavior

No more issues with hangs or crashes.
