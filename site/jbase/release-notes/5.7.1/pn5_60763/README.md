# PN5_60763

<PageHeader />

## Description

jQL: Segmentation Violation scenario with a dictionary subroutine call

For now we simply terminate the current command after returning from the debugger.

### Previous Release Behavior

Example:

```
SUBROUTINE mysub
INCLUDE JBC.h
INCLUDE qbasiccommonpick
DEBUG
newpick(12) = "segfault"
RETURN
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

Back to [5.7.1 Release Notes](./../README.md)

  
<PageFooter />
