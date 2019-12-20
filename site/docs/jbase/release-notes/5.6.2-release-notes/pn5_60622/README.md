# PN5_60622

**Created At:** 10/2/2017 2:51:00 PM  
**Updated At:** 11/22/2017 11:03:16 AM  
**Original Doc:** [pn5_60622](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60622)  


### Description

jFormatCode to parse out expressions that are used in the LOCATE statement and LOCATE() function



### Previous Release Behavior

```
LOCATE (exp) IN (exp)<mv extract>
```

would fail to compile.



### Current Release Behavior

jFormatCode now handles the LOCATE statement and LOCATE function correctly.
