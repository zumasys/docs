# PN5_60710

**Created At:** 2/20/2018 12:51:45 PM  
**Updated At:** 2/20/2018 12:53:06 PM  
**Original Doc:** [pn5_60710](https://docs.jbase.com/release-notes/pn5_60710)  
**Original ID:** 299972  
**Internal:** No  


### Description

jQL: NI operand returns zero



### Previous Release Behavior

Previously the following dictionary would fail to return any values when used in a SELECT.

```
ID: RANK
0001 A
0002 0
     ...
0008 A;NI
0009 R
0010 4
```

```
SELECT file RANK
```

would return 0's in the resulting select-list.



### Current Release Behavior

The above SELECT returns non-zero (correct) entries.
