# JBC_DESPOOLSLEEP

<PageHeader />

**Tags:**
<badge text='environment variable' vertical='middle' />
<badge text='spooler' vertical='middle' />
<badge text='despool' vertical='middle' />

## Description

By default, the jBASE despooler processes check for queued jobs every 5 seconds. This environment variable can be used to decrease or increase that interval.

The minimum sleep time this can be set to is 3 seconds.

## Values

Number of seconds.

## Default

5

## Setting

It should be set before form queues are started.

```
set JBC_DESPOOLSLEEP=10     [Windows]
export JBC_DESPOOLSLEEP=10  [UNIX]
```

Back to [Environment Variables](./../README.md)

<PageFooter />
