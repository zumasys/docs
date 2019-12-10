# PUTENV

**Created At:** 8/30/2018 1:35:29 PM  
**Updated At:** 5/16/2019 6:30:37 PM  

**Tags:**
<badge text='program profiling' vertical='middle' />

## Description

Export a variable to become an external environment variable so that child processes executed through subsequent [PERFORM](336876-execute), [EXECUTE](336876-execute) or [PROGRAM](program) statements can see it.

```
putenv expression
```

where **expression** is the name and value of the external



An example of use may be as:

```
portno = 1001
PUTENV "JBCPORTNO=":portno
```

where the variable portno is created as 1001 and then made into an external environment variable. This is used in this example by jBASE to decide the port number of any subsequent programs that are loaded.

Environment variables are only exported to child processes. Once jkeyauto terminates, all the environment variables are lost.
