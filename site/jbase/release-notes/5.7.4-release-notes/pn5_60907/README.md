# PN5_60907

**Created At:** 9/24/2019 7:56:56 AM  
**Updated At:** 10/6/2019 11:03:58 AM  
**Original Doc:** [pn5_60907](https://docs.jbase.com/75024-5-7-4-release-notes/pn5_60907)  
**Original ID:** 459838  
**Internal:** No  

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
