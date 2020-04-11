# SLEEP

<PageHeader />

## Description

The jBASE **SLEEP** command causes the process to sleep either until a specified time or for a specified number of seconds. It has the general form:

```
SLEEP {time|seconds}
```

where:

- **time** specifies the time until which the process should sleep. The time value is specified in 24 hour format, HH:MM:SS.
- **seconds** specifies the number of seconds for which the process is to sleep.

## Note

> If the debugger is invoked during SLEEP and then execution **c**ontinued, the user will be prompted:
> Continue with SLEEP (Y/N) ?
> If "N" is the response, the SLEEP will terminate.

An example of use may be:

```
SLEEP 13:15
```

The process will sleep until 1:15 p.m.

or

```
SLEEP 300
```

to sleep for 300 seconds or 5 minutes.

Back to [Utilities](./../utilities)

  
<PageFooter />
