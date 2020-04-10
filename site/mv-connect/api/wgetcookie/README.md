# WGETCOOKIE

<PageHeader />

The WGETCOOKIE subroutine retrieves cookies sent in the web request.

#### **COMMAND SYNTAX**

```
CALL WGETCOOKIE(COOKIEVALUE,COOKIENAME)
```

#### **SYNTAX ELEMENTS**


| <!----> | <!----> |
| --- | --- |
| Parameter | Description |
| COOKIEVALUE | Returns the value of the cookie |
| COOKIENAME | The name of the cookie you wish to retrieve. |


#### EXAMPLE

```
CALL WGETCOOKIE(TOKEN,"Token")
```

  
<PageFooter />
