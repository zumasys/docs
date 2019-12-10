# WBUILDJSON

**Created At:** 6/27/2017 7:47:33 PM  
**Updated At:** 11/20/2017 10:12:30 PM  


The WBUILDJSON is a very simple JSON building subroutine.  It basically handles encoding of your values.  This subroutine has been replaced by WOBJ.

### COMMAND SYNTAX

```
CALL WBUILDJSON(JSON,FIELD,VALUE,ERRORS)
```

### SYNTAX ELEMENTS


| Parameter | Description |
| --- | --- |
| JSON | This is the JSON string that is being built |
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
