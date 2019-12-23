# WGETVAR

**Created At:** 6/24/2017 12:56:05 AM  
**Updated At:** 11/24/2017 6:46:57 PM  
**Original Doc:** [wgetvar](https://docs.zumasys.com/36566-mv-connect-api/wgetvar)  


The WGETVAR subroutine allows you to retrieve variables sent in the web request.

### COMMAND SYNTAX

```
CALL WGETVAR(VARVALUE,VARNAME)
```

### SYNTAX ELEMENTS


| Parameter | Description |
| --- | --- |
| VARVALUE | This is the returned value of the variable. |
| VARNAME | This is a passed in parameter of the value you want retrieved. |


#### EXAMPLE

```
CALL WGETVAR(VAR1,"var1")
```

### NOTES

Only variables sent on the url bar or via x-www-form-urlencoded posts.  Form-Data encoding is not supported. Below is an example from [POSTMAN](https://www.getpostman.com/)

![wgetvar: blob](./blob.jpg)

You can get a list of all supplied variables by call the WGETINFO subroutine and pass it 25.

```
CALL WGETINFO(VARS, 25)
NUM.VARS=DCOUNT(VARS,@AM)
FOR V=1 TO NUM.VARS
   VAR.NAME=VARS<V>
   CALL WGETVAR(VAR.VALUE,VAR.NAME)
   PRINT VAR.NAME:" = ":VAR.VALUE
NEXT V
```




