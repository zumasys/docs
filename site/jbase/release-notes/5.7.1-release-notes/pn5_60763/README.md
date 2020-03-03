# PN5_60763

**Created At:** 8/27/2018 10:58:43 AM  
**Updated At:** 10/24/2018 8:39:12 PM  
**Original Doc:** [pn5_60763](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60763)  
**Original ID:** 336203  
**Internal:** No  


### Description

jQL: Segmentation Violation scenario with a dictionary subroutine call

For now we simply terminate the current command after returning from the debugger.



### Previous Release Behavior

Example:

```
0001 SUBROUTINE mysub
0002 INCLUDE JBC.h
0003 INCLUDE qbasiccommonpick
0004 DEBUG
0005 newpick(12) = "segfault"
0006 RETURN
```

DICT 'SEGGY'

```
0001 S
0002 0
0007 D2
0008 F;"DATE"]CALL mysub
0009 R
0010 10
```

```
SORT COOK BY SEGGY SEGGY
SELECT COOK BY SEGGY
```

This would previously result in a core dump if you entered "end" in the debugger.
