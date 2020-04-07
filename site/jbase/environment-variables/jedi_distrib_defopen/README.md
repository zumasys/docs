# JEDI_DISTRIB_DEFOPEN

<PageHeader />

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

Setting this environment variable will defer the OPENing of component or part files in a distributed file set until the component file is required to be opened by the application program.

## Values

1

## Default

Not set.

## Setting

As per normal environment variable. It should be setup before the main file is accessed.

### UNIX

```
export JEDI_DISTRIB_DEFOPEN=1
```

### Windows

```
set JEDI_DISTRIB_DEFOPEN=1
```

Go Back to [Environment Variables](./../README.md)
