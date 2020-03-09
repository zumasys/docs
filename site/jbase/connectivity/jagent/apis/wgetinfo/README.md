# WGETINFO

**Created At:** 6/8/2017 3:35:06 PM  
**Updated At:** 3/14/2018 9:41:05 PM  
**Original Doc:** [258354-wgetinfo](https://docs.jbase.com/34473-docs/258354-wgetinfo)  
**Original ID:** 258354  
**Internal:** No  

The **WGETINFO** subroutine allows you to obtain information directly from WWW.INFO common

## Command Syntax

```
CALL WGETINFO(WWW.INFO.VALUE,WWW.INFO.POS)
```

### Syntax Elements

The WGETINFO subroutine takes [WWW.INFO.POS](./../www.info) as a input paramenter and outputs WWW.INFO.VALUE.

### Example

```
CALL WGETINFO(ALL.VAR.NAMES,25)
```

### Notes

>See WWW.INFO for details on the common.

[Back to jAgent APIs](./../README.md)
