# JBCDEV_BIN

<PageHeader />

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

This environment variable defines the directory where user executables will be built when programs are CATALOGed.

## Values

Valid file path.

## Default

%HOME%\bin (Windows)
$HOME/bin (UNIX)

## Note

> It is good practice to set JBCDEV\_BIN explicitly rather than relying on the default setting. This is because the value of the HOME environment variable may change (for example after a LOGTO).

The value of JBCDEV\_BIN can be overridden with the CATALOG -o option.

## Setting

As per normal environment variable, must be set prior to envoking a jBASE process.

## UNIX

```
JBCDEV_BIN=/home/TESTBASE/bin
export JBCDEV_BIN
```

## Windows

```
SET JBCDEV_BIN=C:\dev\TESTBASE\bin
```

See also: [JBCDEV\_LIB](./../jbcdev_lib), [PATH](./../path).

Go Back to [Environment Variables](./../README.md)

<PageFooter />
