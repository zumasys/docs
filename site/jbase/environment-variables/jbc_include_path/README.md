# JBC_INCLUDE_PATH

<PageHeader />

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

**JBC_INCLUDE_PATH** contains a list of directories the compiler searches through when an **INCLUDE** statement is seen in a program.

## Values

One or more directory paths, delimited by : (colon) on unix and ; (semi-colon) on Windows.

The user must have **read** privileges for each directory in the list.

## Default

None.

## Setting

Normal environment variable, so it can be set at any time by:

## UNIX

```
export JBC_INCLUDE_PATH=$HOME/myincludes:/home/globals/includes
```

## Windows

```
set JBC_INCLUDE_PATH=%HOME%\myincludes;C:\home\globals\includes
```

## Examples

The above settings mean that, when an **INCLUDE** statement is seen in a program, the compiler will search each path in the list to find the **INCLUDE**'d file.

Go Back to [Environment Variables](./../README.md)

<PageFooter />
