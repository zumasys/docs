# PN5_60907

<PageHeader />

## Description

**CREATE-FILE TYPE=JBC** needs to create a dictionary for the source code

### Previous Release Behavior

No dictionary was created for the source code directory when using **TYPE=JBC** with the **CREATE-FILE** command.

### Current Release Behavior

**CREATE-FILE** now creates a dictionary when using **TYPE=JBC**, e.g.

```
jsh ~ -->CREATE-FILE BP TYPE=JBC
[ 417 ] File BP]D created , type = JD
[ 417 ] File BP created , type = UD
[ 417 ] File BP]MOBJECT created , type = UD
jsh ~ -->
```

Back to [5.7.4 Release Notes](./../README.md)
