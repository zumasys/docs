# PN5_60908

<PageHeader />

## Description

Enhance the **DECATALOG** command to optionally delete the intermediate object code that gets generated when a program is compiled

### Previous Release Behavior

This is an enhancement, so this behavior did not previously exist.

### Current Release Behavior

The files that get deleted are those that start with a "$" or end with ".o" (UNIX) / ".obj" (Windows)

There are 2 ways to achieve this behavior:

1) by using the new **-d** option, e.g. **DECATALOG -d filename program**

2) by setting the new [DECATALOG_DELETE_OBJECT_CODE](./../../../../environment-variables/decatalog_delete_object_code/README.md) environment variable

When this feature is implemented the **DECATALOG** command will look for and delete the intermediate object code files if said object code is in the OBJECT data section or in the source code file when an OBJECT data section does not exist.

Caveat:

If a program compiled with an explicit filename, e.g.

```
BASIC bp test.b
```

then a subsequent

```
DECATALOG -d . test
```

will only remove the object code if the current directory is "bp".

Back to [5.7.4 Release Notes](./../jbase-5.7.4-release-notes/README.md)
  
<PageFooter />
