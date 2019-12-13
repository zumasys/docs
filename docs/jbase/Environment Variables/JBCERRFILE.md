# JBCERRFILE

**Created At:** 11/6/2017 2:12:54 PM  
**Updated At:** 8/22/2018 8:43:59 AM  

**Tags:**
<badge text='environment variables' vertical='middle' />
<badge text='directories' vertical='middle' />
<badge text='error handling' vertical='middle' />

## Description

Sets the location of the jBASE error message file.

## 


## Values

Valid path to a hashed file.

## 


## Default

```
$JBCRELEASEDIR/jbcmessages (Unix)
```

```
%JBCRELEASEDIR%\jbcmessages (Windows)
```

## 
Setting

It must be set before jBASE is invoked.

**Unix**

```
export JBCERRFILE=/usr/globals/jBASEerrors
```



**Windows**

```
set JBCERRFILE=C:\home\globals\jbcmessages
```

### 


## Note:


> Setting this environment variable allows for more than one version of the messages displayed by jBASE. This could be desirable if it is desired to have different messages or different behavior when a an error is encountered, depending on the user.
> 
> For example, to prevent a program entering the debugger when an uninitialized variable is encountered, remove the **^WARNING^** string from the ZERO\_USED message.




Back to [Error Handling](jbc-error-handling)
