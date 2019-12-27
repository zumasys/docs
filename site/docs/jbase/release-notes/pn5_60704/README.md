# PN5_60704

**Created At:** 2/20/2018 12:05:55 PM  
**Updated At:** 2/20/2018 12:06:48 PM  
**Original Doc:** [pn5_60704](https://docs.jbase.com/release-notes/pn5_60704)  
**Original ID:** 299965  
**Internal:** No  


### Description

Suppress character echo on input



### Previous Release Behavior

HUSH ON would suppress both input and output; there was no ability to suppress input only.



### Current Release Behavior

HUSH command extended to make it possible to only suppress input.

New syntax:

```
HUSH ON    - Suppress input and output
HUSH OFF   - Resume input and output
HUSH INPUT - Suppress input only
```

These commands are effective for both programs and procs.
