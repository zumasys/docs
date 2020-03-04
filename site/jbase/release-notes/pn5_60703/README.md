# PN5_60703

**Created At:** 2/19/2018 12:13:55 PM  
**Updated At:** 2/19/2018 12:14:35 PM  
**Original Doc:** [pn5_60703](https://docs.jbase.com/release-notes/pn5_60703)  
**Original ID:** 299730  
**Internal:** No  


### Description

Indexes: Lookup conversion codes (other than times and dates) are not applied to queries



### Previous Release Behavior

A dictionary like,

```
001 A
002 2
...
007 MCN
008
009 R
010 10
```

would fail to select any data stored in an index.



### Current Release Behavior

Add better support for conversions and correlatives to indexing and queries.
