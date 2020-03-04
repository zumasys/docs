# WGETCOOKIE

**Created At:** 6/27/2017 8:26:30 PM  
**Updated At:** 11/21/2017 4:27:20 AM  
**Original Doc:** [wgetcookie](https://docs.jbase.com/34473-docs/wgetcookie)  
**Original ID:** 261452  
**Internal:** No  


The WGETCOOKIE subroutine retrieves cookies sent in the web request.

### **COMMAND SYNTAX**

```
CALL WGETCOOKIE(COOKIEVALUE,COOKIENAME)
```

### **SYNTAX ELEMENTS**

The WGETCOOKIE subroutine expects a input paramenter of COOKIENAME and it will return in COOKIEVALUE the value of the cookie if found.

### EXAMPLE

```
CALL WGETCOOKIE(TOKEN,"Token")
```
