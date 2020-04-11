# WGETVAR

<PageHeader />

The **WGETVAR** subroutine allows you to retrieve variables sent in the web request.

## Command Syntax

```
CALL WGETVAR(VARVALUE,VARNAME)
```

### Syntax Elements

| Parameter | Description |
| --- | --- |
| VARVALUE | This is the returned value of the variable. |
| VARNAME | This is a passed in parameter of the value you want retrieved. |

### Example

```
CALL WGETVAR(VAR1,"var1")
```

### Notes

>Only variables sent on the url bar or via x-www-form-urlencoded posts.  Form-Data encoding is not supported. Below is an example from [Postman](https://www.getpostman.com/)

![wgetvar: blob](./blob.jpg)

>You can get a list of all supplied variables by calling the WGETINFO subroutine with a parameter of 25.

```
CALL WGETINFO(VARS, 25)
NUM.VARS=DCOUNT(VARS,@AM)
FOR V=1 TO NUM.VARS
   VAR.NAME=VARS<V>
   CALL WGETVAR(VAR.VALUE,VAR.NAME)
   PRINT VAR.NAME:" = ":VAR.VALUE
NEXT V
```

[Back to jAgent APIs](./../README.md)

  
<PageFooter />
