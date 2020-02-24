# JBCDEV_LIB

**Created At:** 11/3/2017 5:23:18 PM  
**Updated At:** 8/8/2018 7:47:39 AM  
**Original Doc:** [jbcdev_lib](https://docs.jbase.com/41717-environment-variables/jbcdev_lib)  
**Original ID:** 284191  
**Internal:** No  

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

This environment variable defines the directory where user shared object libraries will be built when subroutines are CATALOGed.

## Values

Valid file path.

## Default

%HOME%\lib (Windows)
$HOME/lib (UNIX)

## Note

> It is good practice to set JBCDEV\_LIB explicitly rather than relying on the default setting. This is because the value of the HOME environment variable may change (for example after a LOGTO).

The value of JBCDEV\_LIB can be overridden with **CATALOG** command using the **-L** option, e.g. CATALOG -L /home/templib mysub.

## Setting

As per normal environment variable.

## UNIX

```
JBCDEV_LIB=/home/TESTBASE/lib
export JBCDEV_LIB
```

## Windows

```
SET JBCDEV_LIB=C:\dev\TESTBASE\lib
```

See also: [JBCDEV\_BIN](./../jbcdev_bin), [JBCOBJECTLIST](./../jbcobjectlist).

Go Back to [Environment Variables](./../README.md)
