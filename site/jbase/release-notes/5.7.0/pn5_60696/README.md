# PN5_60696

<PageHeader />

## Description

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

Back to [jBASE 5.7.0 Release Notes](./../README.md)
  
<PageFooter />
