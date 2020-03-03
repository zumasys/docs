# JBCOBJECTLIST

**Created At:** 11/3/2017 5:17:24 PM  
**Updated At:** 7/13/2018 1:30:38 PM  
**Original Doc:** [jbcobjectlist](https://docs.jbase.com/41717-environment-variables/jbcobjectlist)  
**Original ID:** 284187  
**Internal:** No  

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

This environment variable defines the directories to find user shared object libraries where user subroutines are located.

## Values

File paths, Colon separated on UNIX, semi-colon separated on Windows.

## Default

```
%HOME%\lib (Windows)
$HOME/lib (UNIX)
```

## Note

> It is good practice to set JBCOBJECTLIST explicitly rather than relying on the default setting. This is because the value of the HOME environment variable may change (for example after a LOGTO).

## Setting

As per normal environment variable. On UNIX or on Windows it should be set before the jSHELL is invoked.

## UNIX

```
JBCOBJECTLIST=$HOME/lib:/home/TESTBASE/lib
export JBCOBJECTLIST
```

## Windows

```
SET JBCOBJECTLIST=%HOME%\lib;C:\dev\TESTBASE\lib
```

Go Back to [Environment Variables](./../README.md)