# PN895

<PageHeader />

## Title

BY-EXP sort is case sensitive

## Current Release Behavior

Prior to this patch, when **case_insensitive_queries = true**, an exploded sort such as:

```
list testfile by-exp bcode = "[ABC]"
```

would not find the item if it is stored as, for example, **Abc**.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
