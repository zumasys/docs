# PN5_60764

**Created At:** 8/27/2018 11:55:17 AM  
**Updated At:** 10/24/2018 8:39:17 PM  
**Original Doc:** [pn5_60764](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60764)  
**Original ID:** 336208  
**Internal:** No  

## Description

Support DEFFUN with no parameters and no parenthesis

### Previous Release Behavior

The DEFFUN statement would need () even if there were no parameters, e.g.

```
    DEFFUN MYFUNCTION()
```

This was incompatible with Universe code.

### Current Release Behavior

Parenthesis are optional. This is now supported

```
    DEFFUN MYFUNCTION
```

Back to [5.7.1 Release Notes](./../README.md)
