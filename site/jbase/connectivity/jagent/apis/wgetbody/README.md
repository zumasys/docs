# WGETBODY

**Created At:** 6/2/2017 6:17:36 PM  
**Updated At:** 11/25/2017 5:50:19 AM  
**Original Doc:** [wgetbody](https://docs.jbase.com/34473-docs/wgetbody)  
**Original ID:** 257606  
**Internal:** No  

**WGETBODY** gets the raw body sent in the web request if the web request is not a x-www-form-urlencoded.  This is primarily used to get XML or JSON sent in Rest services.

## Cpommand Syntax

```
CALL WGETBODY(BODY)
```

### Syntax Elements

The WGETBODY subroutine only returns a string.  That string is the raw body.

### Example

```
CALL WGETBODY(BODY)
* NOW PARSE BODY JSON INTO A OBJECT
CALL WOBJ(BODYOBJ,"FROMSTRING","",BODY,"",RERR)
```

[Back to jAgent APIs](./../README.md)