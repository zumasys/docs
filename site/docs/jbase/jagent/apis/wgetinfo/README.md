# WGETINFO

**Created At:** 6/8/2017 3:35:06 PM  
**Updated At:** 3/14/2018 9:41:05 PM  
**Original Doc:** [258354-wgetinfo](https://docs.jbase.com/34473-docs/258354-wgetinfo)  


The WGETINFO subroutine allows you return directly information from WWW.INFO common

#### **COMMAND SYNTAX**

```
CALL WGETINFO(WWW.INFO.VALUE,WWW.INFO.POS)
```

### **SYNTAX ELEMENTS**

The WGETINFO subroutine take [WWW.INFO.POS](258357-www-info) as a input paramenter and outputs WWW.INFO.VALUE.

#### EXAMPLE

```
CALL WGETINFO(ALL.VAR.NAMES,25)
```

#### **NOTES**

See WWW.INFO for details on the common.
