# PN5_60841

<PageHeader />

## Description

jBC: Error when passing a non-numeric to the STR() function

### Release Behavior

The following code:

```
rc = PUTENV("JBASE_ERRMSG_NON_NUMERIC=2")
CRT STR("x","non-numeric")
```

would display the the "x" value until the system ran out of memory.

### Current Release Behavior

The above code now returns "" (null).

Back to [5.7.2 Release Notes](./../jbase-5.7.2.1-release-notes/README.md)
  
<PageFooter />
