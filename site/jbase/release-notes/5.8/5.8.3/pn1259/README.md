# PN1259

<PageHeader />

## Description

The TRANS() function in an Itype allows unquoted filenames as the first argument, which can mean the filename itself or an expression to evaluate to a filename.

## Previous Release Behavior

Given a file of:

```
mdf-a*b/c
```

An itype of

```
TRANS(mdf-a*b/c,@ID,1,'X')
```

Fails with Named attribute mdf-a/b*c is not valid

## Current Release Behavior

TRANS parser first checks if initial argument is a valid file.

Back to [5.8.3 Release Notes](./../README.md)

<PageFooter />
