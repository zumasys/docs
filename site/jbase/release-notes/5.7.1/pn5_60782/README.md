# PN5_60782

<PageHeader />

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

  
<PageFooter />
