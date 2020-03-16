# PN5_60774

**Created At:** 8/28/2018 8:58:39 AM  
**Updated At:** 10/24/2018 8:46:35 PM  
**Original Doc:** [pn5_60774](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60774)  
**Original ID:** 336401  
**Internal:** No  

## Description

CATALOG corrupts shared objects when user does not have permissions on lib/obj

### Previous Release Behavior

Shared objects in the **lib** would get corrupted if the user did not have permissions to write to the **obj** directory.

### Current Release Behavior

If the user does not have permission to write to the **obj** directory then the CATALOG command will display a message similar to:

```
You do not have permissions to write to /home/lib/obj
```

Back to [5.7.1 Release Notes](./../README.md)
