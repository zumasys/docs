# PN931

<PageHeader />

## Description

Add SYSTEM(9010) Function

## Previous Release Behavior

User must infer jBASE by inspecting SYSTEM(1011), SYSTEM(1012), SYSTEM(1021) or otherwise.

## Current Release Behavior

Same as previous/this is a feature request.

## Notes

Add SYSTEM(9010), returning a value of "JBASE" to meet equivalency to other platforms including UniVerse, UniData and OpenQM.

```
CRT "The contents of SYSTEM(9010) are : " : system(9010)

The contents of SYSTEM(9010) are : JBASE
```

[Back to 5.8.4 Release Notes](./../README.md)
  
<PageFooter />