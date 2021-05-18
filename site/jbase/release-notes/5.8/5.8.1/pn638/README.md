# PN638

<PageHeader />

## Description

SQL: I-type with `EXTRACT` causes segmentation violation

## Previous Release Behavior

For example:

```
ID: TEST
001 I
002 EXTRACT(@RECORD,9)
003
004
005 10R
```

A `SQLSELECT` statement using this dictionary would cause a segmentation violation.

## Current Release Behavior

No segmentation violation occurs and the correct output is produced.

Back to [5.8.1 Release Notes](./../README.md)
  
<PageFooter />
