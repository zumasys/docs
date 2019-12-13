# WGETHEADER - remove

**Created At:** 6/26/2017 11:56:00 PM  
**Updated At:** 7/3/2017 7:46:56 PM  


The WGETHEADER subroutine allows you retrieve headers sent by the client.

### **COMMAND SYNTAX**

```
CALL WGETHEADER(HEADERVALUE,HEADERNAME)
```

### **SYNTAX ELEMENTS**


| Parameter | Description |
| --- | --- |
| HEADERVALUE | This is the returned value of the header. |
| HEADERNAME | Set to the name of the header you want. |


EXAMPLE

```
CALL WGETHEADER(TOKEN,"Token")
* TOKEN will have the passed header
```
