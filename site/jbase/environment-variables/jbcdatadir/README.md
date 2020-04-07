# JBCDATADIR

<PageHeader />

**Tags:**
<badge text='data directories' vertical='middle' />
<badge text='directories' vertical='middle' />

## Description

Defines the location for jBASE to determine any configured databases. Overrides  the default setting for the spooler direcory.

## Values

Valid file path

## Default

```
$JBCRELEASEDIR/jbase_data (UNIX)
%JBCRELEASEDIR%\jbase_data (Windows)
```

## Setting

It must be set before running any jBASE program.

## Note

> When the JBCSPOOLERDIR is not defined,  the default setting for the jBASE spooler directory is $JBCDATADIR/jbase\_data.  
> When JBCDATADIR is not set, the default setting is $JBCGLOBALDIR/jbase\_data.
>
> If the JBCGLOBALDIR is not set, it defaults to $JBCRELEASEDIR.

$JBCDATADIR/home is used as the default $HOME environment variable, when $HOME (UNIX) / %HOME% (Windows) is NOT set on a LOGTO.

Go Back to [Environment Variables](./../README.md)
