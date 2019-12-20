# JBCNETACCESS

**Created At:** 7/17/2018 1:25:45 PM  
**Updated At:** 8/22/2018 9:19:43 AM  
**Original Doc:** [jbcnetaccess](https://docs.jbase.com/41717-environment-variables/jbcnetaccess)  

**Tags:**
<badge text='jrfs' vertical='middle' />
<badge text='environment variables' vertical='middle' />

## Description

This environment variable defines the location of the jRFS security access file **jnet\_access**.



## Values

Valid file path.



## Default

```
/usr/jbc/config (Unix)
%JBCRELEASEDIR%\config (Windows)
```



## Setting

As per normal environment variable.

**Unix**

```
export JBCNETDIR=/usr/jbasesetup
```

**Windows**

```
set JBCNETDIR=C:\JBASESETUP
```
