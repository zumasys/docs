# JBCNETDIR

<PageHeader />

**Tags:**
<badge text='jnetdir' vertical='middle' />
<badge text='network directory' vertical='middle' />
<badge text='jbcnetdir' vertical='middle' />
<badge text='jrfs' vertical='middle' />
<badge text='environment variables' vertical='middle' />

## Description

This environment variable defines the location of the jRFS configuration files. If this environment variable is not set then the configuration files in **$JBCRELEASEDIR/config** (**%JBCRELEASEDIR%\config** on Windows) are used.

## Values

Valid file path.

## Default

```
$JBCRELEASEDIR/config (UNIX)
%JBCRELEASEDIR%\config (Windows)
```

## Setting

As per normal environment variable.

## UNIX

```
export JBCNETDIR=/home/globals/jrfs
```

## Windows

```
set JBCNETDIR=C:\home\globals\jrfs
```

Go Back to [Environment Variables](./../README.md)

<PageFooter />
