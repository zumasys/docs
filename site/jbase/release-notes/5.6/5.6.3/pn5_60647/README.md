# PN5_60647

<PageHeader />

## Description

SP-ASSIGN resets list pointer

### Previous Release Behavior

When **generic\_universe = true** or **generic\_prime = true**, EXECUTE'ing SP-ASSIGN command would reset the list pointer.

e.g.

```
1) set/export JBCEMULATE=universe

2) Run this program:

EXECUTE 'SELECT MD SAMPLE 10' CAPTURING quiet
FOR x = 1 TO 10
    READNEXT id ELSE EXIT
    CRT x, id
    EXECUTE "SP-ASSIGN" CAPTURING quiet
NEXT x
```

READNEXT would always return only the first item in the select list, looping forever.

### Current Release Behavior

READNEXT does not reset the list pointer when SP-ASSIGN is EXECUTE'd.

Back to [5.6.3 Release Notes](./../README.md)

<PageFooter />
