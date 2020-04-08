# PN5_60780

<PageHeader /> 

## Description

jBC: MINIMUM() function returns incorrect results when there are null elements in the dynamic array

### Previous Release Behavior

Example:

```
x = @AM : 24@AM : @AM : @AM : 6
CRT MINIMUM(x)
```

displayed "2" when it should have displayed "0" (zero) because null dynamic array elements are treated as zero.

### Current Release Behavior

The MINIMUM() function now works correctly.

Back to [5.7.1 Release Notes](./../README.md)
