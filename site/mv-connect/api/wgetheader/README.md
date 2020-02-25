# WGETHEADER 

<PageHeader />

**Created At:** 6/27/2017 8:04:00 PM  
**Updated At:** 11/25/2017 10:58:14 AM  
**Original Doc:** [wgetheader](https://docs.zumasys.com/36566-mv-connect-api/wgetheader)  
**Original ID:** 261446  
**Internal:** No  


The WGETHEADER subroutine allows you retrieve headers sent by the client.

### **COMMAND SYNTAX**

```
CALL WGETHEADER(HEADERVALUE,HEADERNAME)
```

### **SYNTAX ELEMENTS**


| <!----> | <!----> |
| --- | --- |
| Parameter | Description |
| HEADERVALUE | This is the returned value of the header. |
| HEADERNAME | Set to the name of the header you want. |


EXAMPLE

```
CALL WGETHEADER(TOKEN,"Token")
* TOKEN will have the passed header
```
