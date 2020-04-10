# WGETBODY 

<PageHeader />

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

  
<PageFooter />
