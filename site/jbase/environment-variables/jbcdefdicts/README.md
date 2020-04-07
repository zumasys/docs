# JBCDEFDICTS

<PageHeader />

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

Specifies one or more files that are used to hold dictionary items for use by [jQL](./../../jql/jql). When JBCDEFDICTS is set, jQL will scan each specified file for dictionary items that cannot be located in the dictionary of the queried file. When JBCDEFDICTS is not set, jQL will scan just the the dictionary of the queried file then the MD/VOC.

## Values

Colon separated file paths (UNIX)

Semicolon separated file paths (Windows)

## Default

None.

## Setting

## UNIX

```
export JBCDEFDICTS=/home/PRIVATEDICT]D:/usr/globals/GLOBALDICT]D
```

## Windows

```
set JBCDEFDICTS=C:\home\PRIVATEDICT]D;C:\globals\GLOBALDICT]D
```

Go Back to [Environment Variables](./../README.md)
