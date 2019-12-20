# PN5_60617

**Created At:** 10/2/2017 2:22:50 PM  
**Updated At:** 11/21/2017 9:43:16 AM  


### Description

Case Independence: Casing issue with IF statement in combination with the LOCATE() function



### Current Release Behavior

Prior to this patch:

```
IF 1 THEN LOCATE(a,b,c;pos;'AL') ELSE NULL
```

jFormatCode would change **LOCATE** to **locate**.
