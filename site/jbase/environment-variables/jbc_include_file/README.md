# JBC_INCLUDE_FILE

<PageHeader />

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

**JBC_INCLUDE_FILE** contains a list of source code files that will automatically be compiled prior to compiling the current program.

## Values

One or more full paths, delimited by : (colon) on unix and ; (semi-colon) on Windows, to source code.

The user must have **read** and **write** privileges for each path.

## Default

None.

## Setting

Normal environment variable, so it can be set at any time by:

## UNIX

```
export JBC_INCLUDE_FILE=$HOME/COMMON:BP INITIALIZATION
```

## Windows

```
set JBC_INCLUDE_FILE=%HOME%\COMMON;BP ININTIALIZATION
```

## Example

The above Windows setting is the equivalent of adding these 2 lines of code to the top of every program that is compiled:

```
INCLUDE C:\Home\Daniel\COMMON
INCLUDE BP INITIALIZATION
```

Go Back to [Environment Variables](./../README.md)

<PageFooter />
