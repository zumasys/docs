# WGETINFO

**Created At:** 6/27/2017 8:07:14 PM  
**Updated At:** 11/25/2017 10:58:30 AM  
**Original Doc:** [wgetinfo](https://docs.zumasys.com/36566-mv-connect-api/wgetinfo)  


The WGETINFO subroutine allows you return directly information from WWW.INFO common.

#### **COMMAND SYNTAX**

```
CALL WGETINFO(POS,VALUE)
```

#### **SYNTAX ELEMENTS**


| Parameter | Description |
| --- | --- |
| POS | [WWW.INFO](//WWW.INFO) Dynamic position you wish to get. |
| VALUE | Returned Value |


#### EXAMPLE

```
* Dynamically find all Variables passed by client
CALL WGETINFO(25,VAR.NAMES)
NUM.VARS=DCOUNT(VAR.NAMES,@AM)
FOR V=1 TO NUM.VARS
  VAR.NAME=VAR.NAMES<V>
  CALL WGETVAR(VALUE,VAR.NAME)
    PRINT VAR.NAME:"=":VALUE
NEXT V
```



#### **NOTES**

See WWW.INFO for details on the common.
