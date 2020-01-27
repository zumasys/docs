# WGETCOOKIE

**Created At:** 6/26/2017 11:58:15 PM  
**Updated At:** 6/27/2017 11:06:28 PM  
**Original Doc:** [261261-wgetcookie](https://docs.zumasys.com/36617-trash/261261-wgetcookie)  
**Original ID:** 261261  
**Internal:** Yes  


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
