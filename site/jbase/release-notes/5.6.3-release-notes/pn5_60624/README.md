# PN5_60624

**Created At:** 10/2/2017 3:05:57 PM  
**Updated At:** 11/21/2017 8:48:17 PM  
**Original Doc:** [pn5_60624](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60624)  
**Original ID:** 279082  
**Internal:** No  

## Description

jQL: Date and Time conversion codes are not case insensitive

### Current Release Behavior

Prior to this patch, dictionaries with the output conversion (attribute 7) in lower case would fail, e.g.

```
001 a
007 d
009 r
010 10

001 a
007 mths
009 r
010 10
```

Back to [5.6.2 release Notes](./../README.md)
