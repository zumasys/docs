# PN5_60841

**Created At:** 3/8/2019 10:53:22 AM  
**Updated At:** 3/8/2019 10:54:08 AM  
**Original Doc:** [pn5_60841](https://docs.jbase.com/5-7-2-release-notes/pn5_60841)  
**Original ID:** 370728  
**Internal:** No  

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

Back to [5.7.2 Release Notes](./../README.md)
