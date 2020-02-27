# PH-SUSPEND 

**Created At:** 6/14/2018 2:20:27 PM  
**Updated At:** 7/19/2018 12:06:49 PM  
**Original Doc:** [ph-suspend](https://docs.jbase.com/46465-background-processing/ph-suspend)  
**Original ID:** 321826  
**Internal:** No  


## Description 

The jBASE PH-SUSPEND command suspends a jBASE background task process. The command takes the general form:

```
PH-SUSPEND n
```

where n is the number of the port number associated with the jBASE background task process to be suspended.



### Error Messages 

If you do not specify a port number, you will see the following message:

```
[316] WHICH LINE?
```



If you specify a port number that is not currently logged on, you will see:

```
PROCESS NOT LOGGED ON
```



If you attempt to suspend a jBASE background task process running as a different user name and you are not root, you will see:

```
[82] YOUR SYSTEM PRIVILEGE LEVEL IS NOT SUFFICIENT FOR THIS STATEMENT.
```



## Note: 


> The user must have root privileges if the jBASE background task process is running as a different user name.




### EXAMPLE

```
PH-SUSPEND 10173
```

Resumes the jBASE background task process running on port 10173.



See also [PH-RESUME](./../ph-resume).

Back to [jBTP](./../jbtp)
