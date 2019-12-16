# PN5_60647

**Created At:** 10/3/2017 2:33:08 PM  
**Updated At:** 10/9/2017 1:35:24 PM  


### Description

SP-ASSIGN resets list pointer



### Previous Release Behavior

When **generic\_universe = true** or **generic\_prime = true**, EXECUTE'ing SP-ASSIGN command would reset the list pointer.

e.g.

```
1) set/export JBCEMULATE=universe

2) Run this program:

0001 EXECUTE 'SELECT MD SAMPLE 10' CAPTURING quiet
0002 FOR x = 1 TO 10
0003     READNEXT id ELSE EXIT
0004     CRT x, id
0005     EXECUTE "SP-ASSIGN" CAPTURING quiet
0006 NEXT x
```

READNEXT would always return only the first item in the select list, looping forever.



### Current Release Behavior

READNEXT does not reset the list pointer when SP-ASSIGN is EXECUTE'd.
