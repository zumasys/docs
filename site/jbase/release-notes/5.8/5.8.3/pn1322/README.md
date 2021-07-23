# PN1322

<PageHeader />

## Description

We need to restrict the size of the jBASE error log

## Previous Release Behavior

On some systems, the jBASE error log can become huge and take over all the disk space.
We need to restrict the log size.

## Current Release Behavior

The error log is now restricted to a maximum of 100 MB. When the log file exceeds that, we will truncate the file to 50MB and retain the most recent entries.  
The size of the log file can be amended by setting the JBC_LOG_SIZE environment variable, as in:

```bash
$ export JBC_LOG_SIZE=100{M|G|K}
```

Back to [5.8.3 Release Notes](./../README.md)

<PageFooter />

