# PN5_60703

<PageHeader />

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

  
<PageFooter />
