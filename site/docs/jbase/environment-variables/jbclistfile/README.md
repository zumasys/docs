# JBCLISTFILE

**Created At:** 7/11/2018 2:54:32 PM  
**Updated At:** 8/22/2018 9:09:01 AM  
**Original Doc:** [326531-jbclistfile](https://docs.jbase.com/41717-environment-variables/326531-jbclistfile)  

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

This environment variable specifies the file where stored lists are kept.



## Values

Any valid path to a directory or hashed file.



## Default

If not set, jBASE will attempt to store lists in POINTER-FILE. If it can't be opened then it will store lists in **$JBCRELEASEDIR/tmp/jBASEWORK** (**%JBCRELEASEDIR%\tmp\jBASEWORK** on Windows).



## Setting

As per normal environment variable.

**Unix**

```
export JBCLISTFILE=/home/jim/mylists
```



**Windows**

```
set JBCLISTFILE=C:\globals\SAVEDLISTS
```



See also [List Storage](./../../jbase/lists/list-storage).
