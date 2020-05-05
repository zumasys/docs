# PN5_60707

<PageHeader />

## Description

jQL: Date with embedded conversions produce wrong results

### Previous Release Behavior

Previously, the following dictionary conversion would fail:

```
001 A
002 2
...
007 D2]G0 1
008
009 R
010 5
```

### Current Release Behavior

The above conversion now works correctly, as well as other conversions of the form:

```
D2]<<conversion>>
```

Back to [jBASE 5.7.0 Release Notes](./../README.md)
  
<PageFooter />
