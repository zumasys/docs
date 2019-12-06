# PH-KILL

**Created At:** 6/14/2018 2:11:34 PM  
**Updated At:** 7/19/2018 12:08:57 PM  


## Description 

The jBASE PH-KILL command stops the specified jBASE background task process. The command takes the general form:

```
PH-KILL n
```

where n s the port (LINE) number associated with the jBASE background task process to be terminated.



## Error Messages 

If a port number is not specified:

```
[316] WHICH LINE?
```



If a port number is specified that is not currently logged on:

```
PROCESS NOT LOGGED ON
```



### EXAMPLE

```
PH-KILL 10000
```

Terminates the jBASE background task process running on port 10000.



Back to [jBTP](jbtp)
