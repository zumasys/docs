# PH-KILL

<PageHeader />

## Description

The jBASE **PH-KILL** command stops the specified jBASE background task process. The command takes the general form:

```
PH-KILL n
```

where **n** is the port (LINE) number associated with the jBASE background task process to be terminated.

## Error Messages

If a port number is not specified:

```
[316] WHICH LINE?
```

If a port number is specified that is not currently logged on:

```
PROCESS NOT LOGGED ON
```

### Example

```
PH-KILL 10000
```

Terminates the jBASE background task process running on port 10000.

Back to [Background Processing](./../README.md)
