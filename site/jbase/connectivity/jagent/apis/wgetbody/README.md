# WGETBODY

<PageHeader />

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