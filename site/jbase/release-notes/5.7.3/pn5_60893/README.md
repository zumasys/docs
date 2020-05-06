# PN5_60893

<PageHeader />

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

Back to [5.7.3 Release Notes](./../jbase-5.7.3-release-notes/README.md)
  
<PageFooter />
