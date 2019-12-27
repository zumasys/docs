# JBCSPOOLERDIR

**Created At:** 11/6/2017 2:19:01 PM  
**Updated At:** 8/8/2018 8:01:07 AM  
**Original Doc:** [jbcspoolerdir](https://docs.jbase.com/41717-environment-variables/jbcspoolerdir)  
**Original ID:** 284343  
**Internal:** No  

**Tags:**
<badge text='jspooler' vertical='middle' />
<badge text='environment variables' vertical='middle' />

## Description

This environment variable defines the directory where the jBASE spooler entries are located.

## 


## Values

Valid file path.

## 


## Default

$JBCDATADIR/jspooler    (Unix)
%JBCDATADIR\jspooler    (Windows)

## 


## Setting

On Unix it should be set up in the .profile before the jSHELL is invoked.

On Windows it should also be set before the jSHELL is invoked. If using telnet it should be set before the first executable in **remote.cmd**.

**UNIX**

```
export JBCSPOOLERDIR=/home/globals/jspooler
```



**Windows**

```
SET JBCSPOOLERDIR=C:\home\globals\jspooler
```
