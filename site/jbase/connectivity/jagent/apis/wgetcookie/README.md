# WGETCOOKIE

<PageHeader />

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
