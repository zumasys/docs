# PN980

<PageHeader />

## Description

Nulls are converted to zero when using a substring in A/F correlative

## Current Release Behavior

Prior to this patch, correlatives such as:

```
F;2;C1;C10;[]
```

```
A;2["1","5"]
```

Would display "0" (zero) if the data in attribute 2 was **null**

## Notes

This behavior is dependent on the **null_eq_zero** configuration option.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
