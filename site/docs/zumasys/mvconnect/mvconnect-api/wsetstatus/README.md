# WSETSTATUS

**Created At:** 6/27/2017 7:40:40 PM  
**Updated At:** 11/23/2017 2:12:43 AM  
**Original Doc:** [wsetstatus](https://docs.zumasys.com/36566-mv-connect-api/wsetstatus)  


The WSETSTATUS subroutine allows you to modify the response code.

### **COMMAND SYNTAX**

```
CALL WSETSTATUS(CODE)
```

### **SYNTAX ELEMENTS**


| Parameter | Description |
| --- | --- |
| CODE | Set to the response code you wish to return.  Default is 200 (Success) |


EXAMPLE

```
CALL WSETSTATUS(405); * Method not allowed
```

NOTES

See [link](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) for list of codes
