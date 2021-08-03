# JBASE_ERRMSG_TRACE

<PageHeader />

**Tags:**
<badge text='message logging' vertical='middle' />
<badge text='error messages' vertical='middle' />

## Description

Defines whether or not to log jBASE messages to the **$JBCRELEASEDIR/tmp/jbase\_error\_trace** file.

## Values

1 - Log the message to **$JBCRELEASEDIR/tmp/jbase\_error\_trace**

## Default

0 - Do not log messages

## Setting

The only valid values for this environment variable are 1 or 0. Setting this variable will not interfere with the behavior set by other JBASE\_ERRMSG\* environment variables. As per normal environment variables, it can be set dynamically using the jBC [PUTENV](./../../jbc/putenv) function.

### UNIX

```
export JBASE_ERRMSG_TRACE=1
```

### Windows

```
set JBASE_ERRMSG_TRACE=1
```

## Notes

> See patch [**5\_60517**](./../../release-notes/pn5_60517) for an alternate (better) way to log errors.

Go Back to  [Error Handling](./../../jbc/jbc-error-handling)

Go Back to [Environment Variables](./../README.md)

<PageFooter />
