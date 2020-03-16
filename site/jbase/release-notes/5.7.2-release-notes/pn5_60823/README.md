# PN5_60823

**Created At:** 3/8/2019 9:34:36 AM  
**Updated At:** 3/8/2019 9:36:25 AM  
**Original Doc:** [pn5_60823](https://docs.jbase.com/5-7-2-release-notes/pn5_60823)  
**Original ID:** 370717  
**Internal:** No  

## Description

Runtime: Segmentation violation using the jBC **CLEAR** statement in a tight loop

### Previous Release Behavior

Running the following code would cause a Segmentation Violation:

```
v1 = ''
LOOP
    CLEAR
    JUST='L#15'
    CRT v1 JUST
REPEAT
```

### Current Release Behavior

No Segmentation Violation occurs and code runs as expected.

Back to [5.7.2 Release Notes](./../README.md)
