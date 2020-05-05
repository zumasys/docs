# PN5_60774

<PageHeader />

## Description

CATALOG corrupts shared objects when user does not have permissions on lib/obj

### Previous Release Behavior

Shared objects in the **lib** would get corrupted if the user did not have permissions to write to the **obj** directory.

### Current Release Behavior

If the user does not have permission to write to the **obj** directory then the CATALOG command will display a message similar to:

```
You do not have permissions to write to /home/lib/obj
```

Back to [5.7.1 Release Notes](./../jbase-5.7.1-release-notes/README.md)

<PageFooter />
