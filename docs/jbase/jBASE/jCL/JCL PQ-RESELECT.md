# JCL PQ-RESELECT

**Created At:** 5/28/2018 10:17:54 AM  
**Updated At:** 9/14/2018 5:02:49 PM  


## Description 

This command when executed from a jCL  program, resets the pointer of a specified select register to the beginning of the list of record keys. It takes the general form:

```
PQ-RESELECT  register-number
```

where register-number is the number (1 to 5) of the select register to be reset.



## Note: 


> This command is executed from the primary output buffer to reset the pointer of a specified select register back to the beginning of the list. Each time the "!" reference is used to retrieve a value from the list, the value is not destroyed. The pointer is simply advanced to the next parameter in the list. **PQ-RESELECT**  resets the pointer back to the beginning of the list so that another pass may be performed.
> 
> PQ-RESELECT cannot be executed directly from the shell.


An example of use may be as:

```
HSELECT SALES
STON
HPQ-SELECT  1
PH
MV %1 !1
IF # %1 XNo records selected
HPQ-RESELECT 1
PH
10 MV %1 !1
IF # %1 XFinished
...
GO  10
```


