# WSETHEADER - remove

**Created At:** 6/26/2017 11:52:45 PM  
**Updated At:** 7/3/2017 7:44:07 PM  


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
