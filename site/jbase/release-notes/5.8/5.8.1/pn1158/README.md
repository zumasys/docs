# PN1158

<PageHeader />

## Description

`SQLSELECTL file WHERE no-matching-criteria` displays 1 Items selected.

## Previous Release Behavior

```
make-demo-file testfile 10 jd
SQLSELECTL testfile FROM testfile WHERE testfile > 10
```

Returns 1 Items selected.

## Current Release Behavior

Returns 0 Items selected.

Back to [5.8.1 Release Notes](./../README.md)
  
<PageFooter />
