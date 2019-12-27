# PN5_60707

**Created At:** 2/20/2018 1:42:11 PM  
**Updated At:** 2/20/2018 1:42:50 PM  
**Original Doc:** [pn5_60707](https://docs.jbase.com/release-notes/pn5_60707)  
**Original ID:** 299978  
**Internal:** No  


### Description

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
