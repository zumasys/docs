# WGETCOOKIE

<PageHeader />

The WGETCOOKIE subroutine retrieves cookies sent in the web request.

## Command Syntax

```
CALL WGETCOOKIE(COOKIEVALUE,COOKIENAME)
```

### Syntax Elements

| <!----> | <!----> |
| --- | --- |
| Parameter | Description |
| COOKIEVALUE | Returns the value of the cookie |
| COOKIENAME | The name of the cookie you wish to retrieve. |

#### Example

```
CALL WGETCOOKIE(TOKEN,"Token")
```

<PageFooter />
