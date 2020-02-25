# WGETBODY 

<PageHeader />

**Created At:** 6/27/2017 8:01:27 PM  
**Updated At:** 11/25/2017 10:58:08 AM  
**Original Doc:** [wgetbody](https://docs.zumasys.com/36566-mv-connect-api/wgetbody)  
**Original ID:** 261445  
**Internal:** No  


The WGETBODY gets the raw body sent in the web request.  Only certain content types pass the raw body.  See the config file to determine which ones.

### **COMMAND SYNTAX**

```
CALL WGETBODY(BODY)
```

### **SYNTAX ELEMENTS**


| <!----> | <!----> |
| --- | --- |
| Parameter | Description |
| BODY | Returned body |


The WGETBODY subroutine only returns a string.  That string is the raw body.

### EXAMPLE

```
CALL WGETBODY(BODY)
* NOW PARSE BODY JSON INTO A OBJECT
CALL WOBJ(BODYOBJ,"FROMSTRING","",BODY,"",RERR)
```
