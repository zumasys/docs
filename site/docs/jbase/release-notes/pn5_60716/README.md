# PN5_60716

**Created At:** 2/20/2018 2:20:32 PM  
**Updated At:** 2/20/2018 2:23:21 PM  
**Original Doc:** [pn5_60716](https://docs.jbase.com/release-notes/pn5_60716)  
**Original ID:** 299982  
**Internal:** No  


### Description

Add optional parameters to REGEXP() for case insensivity



### Previous Release Behavior

REGEXP() had no options to handle case insensitivity.



### Current Release Behavior

You can now use 2 added options to REGEXP() with an optional parameter. These control extended POSIX regular expressions and case insensitivity.

```
INCLUDE JBC.h
CRT "Match = " : REGEXP("Hello World", "WORLD" , REGEXP_ICASE + REGEXP_EXTENDED)
```
