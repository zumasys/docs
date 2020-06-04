# JBC_CORE_DUMP

<PageHeader />

**Tags:**
<badge text='diagnostics' vertical='middle' />
<badge text='environment variables' vertical='middle' />

## Description

`JBC_CORE_DUMP` is Linux only and will cause a core dump to be captured if a segmentation fault is encountered.

> Similar to the `jBC` function [JBASECOREDUMP](./../../jbc/jbasecoredump/README.md).

## Values

`1` - Write core dumps to disk during segmentation faults.

## Default

`Undefined` - No core dumps are captured.

## UNIX

```
export JBC_CORE_DUMP=1
```

## Windows

Unsupported.

Go Back to [Environment Variables](./../README.md)

<PageFooter />
