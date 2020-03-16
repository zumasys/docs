# PN5_60893

**Created At:** 6/27/2019 12:31:52 PM  
**Updated At:** 6/29/2019 8:04:10 AM  
**Original Doc:** [pn5_60893](https://docs.jbase.com/61286-5-7-3-release-notes/pn5_60893)  
**Original ID:** 400126  
**Internal:** No  

## Description

**@SELECTED** not getting set when doing an **EXECUTE** with a **RTNLIST**

### Previous Release Behavior

Given the following program:

```
EXECUTE "SELECT MD SAMPLE 10" RTNLIST select_list CAPTURING quiet
CRT "@SELECTED = ": @SELECTED
```

This would display:

```
@SELECTED = 0
```

### Current Release Behavior

Running the same program now displays:

```
@SELECTED = 10
```

### Notes

This patch is only applicable in Prime, Universe or Unidata emulations.

Back to [5.7.3 Release Notes](./../README.md)
