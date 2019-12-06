# JBCBASETMP

**Created At:** 7/11/2018 2:48:24 PM  
**Updated At:** 7/13/2018 9:19:46 AM  

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

jBASE programs make use of a work file for various internal functions such as storing SAVE-LISTs, the lock file for PAUSE and WAKE statements, and very transiently for some spooler operations. The default name and location of this file may be changed using the JBCBASETMP environment variable. The default behavior is that jBASE uses one work file called jBASEWORK for all sessions. However as the file is not used to share data between sessions, one file could be configured for each user. Doing so may provide some performance benefits, especially with large user populations.

If the specified file does not exist when jBASE attempts to open it, it is created as a j4 hashed file with a modulo of 97. As the data in the file is of a transitory nature, the flags for backup, journaling and transaction boundaries are set to NO. A dictionary is also created. It is not used by jBASE and can be deleted if desired.

This environment variable is superceeded by [JBASEUNIQUE](jbaseunique).

## 


## Values

Valid file path.



## Default

```
$JBCRELEASEDIR/tmp/jBASEWORK (Unix)
%JBCRELEASEDIR\tmp\jBASEWORK (Windows)
```



## Setting

As per normal environment variable, it should be set before any jBASE process is invoked.

**Unix**

```
JBCBASETMP=/home/tmp/jwork$LOGNAME
export JBCBASETMP
```



**Windows**

```
set JBCBASETMP=C:\JBASE30\tmp\workfiles\jTMP%USERNAME%
```
