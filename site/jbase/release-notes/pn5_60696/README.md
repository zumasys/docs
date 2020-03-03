# PN5_60696

**Created At:** 2/7/2018 8:25:40 AM  
**Updated At:** 2/16/2018 7:12:11 PM  
**Original Doc:** [pn5_60696](https://docs.jbase.com/release-notes/pn5_60696)  
**Original ID:** 298032  
**Internal:** No  


### Description

Correct TJ memory access violations when the record key or transaction information exceeds 16k



### Previous Release Behavior

Given either of these scenarios

```
    reckey = "x" : SPACE(20000)
    WRITE  "data" ON FILEVAR,reckey
```

OR

```
    tid = "x" : SPACE(20000)
    TRANSTART tid ELSE DEBUG
```

Then when the transaction journal data is accessed , we will get memory violations.



### Current Release Behavior

No memory violations.
