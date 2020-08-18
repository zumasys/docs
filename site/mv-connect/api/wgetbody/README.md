# WGETBODY  

<PageHeader />

The `WGETBODY` gets the raw body sent in the web request.  Only certain content types pass the raw body.  See the config file to determine which ones.

## WGETBODY Syntax

```
CALL WGETBODY(BODY)
```

### Syntax Elements

| Parameter | Description   |
| --------- | ------------- |
| BODY      | Returned body |

The `WGETBODY` subroutine only returns a string.  That string is the raw body.

## WGETBODY Example

```
CALL WGETBODY(BODY)
* NOW PARSE BODY JSON INTO A OBJECT
CALL WOBJ(BODYOBJ,"FROMSTRING","",BODY,"",RERR)
```

<PageFooter />
