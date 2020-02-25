# WBUILDJSON

<PageHeader />

**Created At:** 6/24/2017 1:06:40 AM  
**Updated At:** 11/25/2017 10:59:10 AM  
**Original Doc:** [wbuildjson](https://docs.zumasys.com/36566-mv-connect-api/wbuildjson)  
**Original ID:** 260983  
**Internal:** No  


The WBUILDJSON is a very simple jSON building subroutine.  It basically handles encoding of your values.  This subroutine has been replaced by WOBJ.

### COMMAND SYNTAX

```
CALL WBUILDJSON(JSON,FIELD,VALUE,ERRORS)
```

### SYNTAX ELEMENTS


| <!----> | <!----> |
| --- | --- |
| Parameter | Description |
| JSON | This is the jSON string that is being built |
| FIELD | The field you wish to set |
| VALUE | The value you wish to set the field to. |
| ERRORS | Any returned errors. |


#### EXAMPLE

```
JSON="{"
CALL WBUILDJSON(JSON,"status","ok",RERR)
JSON:="}"
* JSON NOW EQUALS: { "status":"ok" }
```

### NOTES

This is a very simple function.  In order to build arrays you must manually build the strings.  This function has been replaced with the much more powerful WOBJ subroutine.  This function remains for backwards compatibility.
