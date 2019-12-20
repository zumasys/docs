# WSETHEADER

**Created At:** 6/27/2017 7:59:27 PM  
**Updated At:** 11/20/2017 8:20:57 PM  
**Original Doc:** [wsetheader](https://docs.zumasys.com/36566-mv-connect-api/wsetheader)  


The WSETHEADER subroutine allows you to set return headers.

### **COMMAND SYNTAX**

```
CALL WSETHEADER(HEADERVALUE,HEADERNAME)
```

### **SYNTAX ELEMENTS**


| Parameter | Description |
| --- | --- |
| HEADERVALUE | Set this to what you wish to assign the header. |
| HEADERNAME | Set to the name of the header you want. |


EXAMPLE

```
CALL WSETHEADER("111-22-3333","Token")
```
