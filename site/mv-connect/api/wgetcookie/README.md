# WGETCOOKIE

<PageHeader />

**Created At:** 6/27/2017 8:17:43 PM  
**Updated At:** 11/25/2017 10:58:25 AM  
**Original Doc:** [wgetcookie](https://docs.zumasys.com/36566-mv-connect-api/wgetcookie)  
**Original ID:** 261450  
**Internal:** No  


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
