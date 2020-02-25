# WGETPARAM

<PageHeader />

**Created At:** 6/24/2017 1:02:28 AM  
**Updated At:** 11/21/2017 3:24:58 AM  
**Original Doc:** [wgetparam](https://docs.zumasys.com/36566-mv-connect-api/wgetparam)  
**Original ID:** 260980  
**Internal:** No  


The WSETPARAM subroutine will retrieve additional URI parameters.

#### **COMMAND SYNTAX**

```
CALL WGETPARAM(VALUE,PARAM)
```

#### **SYNTAX ELEMENTS**


| <!----> | <!----> |
| --- | --- |
| VALUE | The value of the param you requested. |
| PARAM | The param number you want (first is 1) |


#### EXAMPLE

Requested URL

```
http://localhost:20002/api/employee/1234
```

```
CALL WGETPARAM(VALUE,1)
* Value should equal "1234"
```

#### NOTES

Typically on rest calls you send the Primary Key you want retrieved as the first parameter.  You would use this subroutine to retrieve that id.
