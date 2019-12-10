# WGETBODY

**Created At:** 6/2/2017 6:17:36 PM  
**Updated At:** 11/25/2017 5:50:19 AM  


The WGETBODY gets the raw body sent in the web request if the web request is not a x-www-form-urlencoded.  This is primarily used to get XML or JSON sent in Rest services.

### **COMMAND SYNTAX**

```
CALL WGETBODY(BODY)
```

### **SYNTAX ELEMENTS**

The WGETBODY subroutine only returns a string.  That string is the raw body.

### EXAMPLE

```
CALL WGETBODY(BODY)
* NOW PARSE BODY JSON INTO A OBJECT
CALL WOBJ(BODYOBJ,"FROMSTRING","",BODY,"",RERR)
```
