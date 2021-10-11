# JBC_LOG_SIZE

<PageHeader />

## Description

When this environment variable is set, it will determine the maximum size of th jBASE error log.

## Values

integer{M|G|K}

where **M** is the value in megabytes, **G** is the value in gigabytes, **K** is the value in kilobytes.  

## Default

100 MB

## Setting

As per normal environment variables. It should be set before jBASE is invoked.

## UNIX

```bash
export JBC_LOG_SIZE=100M
```

## Windows

```
set JBC_LOG_SIZE=100M
```

Back to [Environment Variables](./../README.md)

<PageFooter />
