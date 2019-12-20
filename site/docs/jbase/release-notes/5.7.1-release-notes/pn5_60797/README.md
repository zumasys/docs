# PN5_60797

**Created At:** 9/7/2018 10:18:28 AM  
**Updated At:** 10/24/2018 8:48:48 PM  
**Original Doc:** [pn5_60797](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60797)  


### Description

jQL: Issue with indexes and using wildcards with record keys (CW2532)



### Previous Release Behavior

The actual problem was mixing LIKE and [] pattern matching.

```
[]  is PICK
... is PRIME
```

Internally we use the same code as MATCHES with indexing, because this had only been coded to only support ... queries, gave the impression they were failing,

The code was running and doing what it meant to but no matches would ever be found.

```
OK      SELECT FILE WITH ID LIKE 2...
FAIL    SELECT FILE WITH ID EQ "2]"
```

This is because the index is looking for a right ignore string match and the trailing wild card had not been trimmed.
