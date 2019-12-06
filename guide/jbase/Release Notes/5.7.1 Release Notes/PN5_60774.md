# PN5_60774

**Created At:** 8/28/2018 8:58:39 AM  
**Updated At:** 10/24/2018 8:46:35 PM  


### Description

CATALOG corrupts shared objects when user does not have permissions on lib/obj



### Previous Release Behavior

Shared objects in the **lib** would get corrupted if the user did not have permissions to write to the **obj** directory.



### Current Release Behavior

If the user does not have permission to write to the **obj** directory then the CATALOG command will display a message similar to:

```
You do not have permissions to write to /home/lib/obj
```
