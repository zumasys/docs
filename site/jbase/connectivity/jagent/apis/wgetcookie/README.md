# WGETCOOKIE

**Created At:** 6/27/2017 8:26:30 PM  
**Updated At:** 11/21/2017 4:27:20 AM  
**Original Doc:** [wgetcookie](https://docs.jbase.com/34473-docs/wgetcookie)  
**Original ID:** 261452  
**Internal:** No  

The **WGETCOOKIE** subroutine retrieves cookies sent in the web request.

## Command Syntax

```
CALL WGETCOOKIE(COOKIEVALUE,COOKIENAME)
```

### Syntax Elements

The WGETCOOKIE subroutine expects an input paramenter of COOKIENAME and will return in COOKIEVALUE the value of the cookie, if found.

### Example

```
CALL WGETCOOKIE(TOKEN,"Token")
```

[Back to jAgent APIs](./../README.md)
