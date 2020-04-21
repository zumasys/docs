# JBCSPOOLERDIR

<PageHeader />

**Tags:**
<badge text='jspooler' vertical='middle' />
<badge text='environment variables' vertical='middle' />

## Description

This environment variable defines the directory where the jBASE spooler entries are located.

## Values

Valid file path.

## Default

$JBCDATADIR/jspooler    (UNIX)  
%JBCDATADIR\jspooler    (Windows)

## Setting

On UNIX it should be set up in the .profile/.bash_profile before the jSHELL is invoked.

On Windows it should also be set before the jSHELL is invoked. If using telnet it should be set before the first executable in **remote.cmd**.

## UNIX

```
export JBCSPOOLERDIR=/home/globals/jspooler
```

## Windows

```
SET JBCSPOOLERDIR=C:\home\globals\jspooler
```

Go Back to [Environment Variables](./../README.md)

<PageFooter />
