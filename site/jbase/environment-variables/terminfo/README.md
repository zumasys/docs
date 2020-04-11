# TERMINFO

<PageHeader />

**Tags:**
<badge text='environment variables' vertical='middle' />
<badge text='terminal' vertical='middle' />

## Description

The TERMINFO environment variable is used for terminal handling. The environment variable is supported only on platforms that provide full support for terminfo libraries.

## Values

The TERMINFO environment variable defines a directory where the terminal settings are read from.

## Default

On UNIX, the default varies depending on a system and how it has been set up.

## Setting

Normal environment variable, so it can be set at any time by the commands:

### UNIX

```
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$JBCRELEASEDIR/lib
```

### Windows

```
set TERMINFO=C:\term
```

  
<PageFooter />
