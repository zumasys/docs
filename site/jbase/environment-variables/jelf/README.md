# JELF

<PageHeader />

## Description

Change the object and shared object paradigm on jBASE so that each BASIC subroutine has its own shared object.

## Values

1

## Default

Not set.

## Setting

Normal environment variable, can be set at any time by:

## UNIX

```
export JELF=1
```

## Windows

```
set JELF=1
```

## Other Options  

```
sh jBASEAdmin ~ -->export JELF=help WHO
sh jBASEAdmin ~ -->WHO
JELF options
    debug                         Set debug level to 1
    debug=[0-3]                   Set debug level to levels 0 through 3
                                  Debug level 0 == off
                                  Debug level 1 == sanity checking, only errors reported
                                  Debug level 2 == tracing of object loading
                                  Debug level 3 == verbose tracing of object loading
    source                        Add source code to the JELF extension
    key=EncryptionKey             Encrypt source (max key size 63)

```

See also [Single Object Build](./../../compilation/single-object-build/README.md)

Back to [Environment Variables](./../README.md)

<PageFooter />
