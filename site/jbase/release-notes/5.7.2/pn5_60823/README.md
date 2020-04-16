# PN5_60823

<PageHeader />

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

  
<PageFooter />
