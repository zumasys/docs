# JBCERRFILE

<PageHeader />

**Tags:**
<badge text='environment variables' vertical='middle' />
<badge text='directories' vertical='middle' />
<badge text='error handling' vertical='middle' />

## Description

Sets the location of the jBASE error message file.

## Values

Valid path to a hashed file.

## Default

```
$JBCRELEASEDIR/jbcmessages (UNIX)
```

```
%JBCRELEASEDIR%\jbcmessages (Windows)
```

## Setting

It must be set before jBASE is invoked.

## UNIX

```
export JBCERRFILE=/usr/globals/jBASEerrors
```

## Windows

```
set JBCERRFILE=C:\home\globals\jbcmessages
```

## Note

> Setting this environment variable allows for more than one version of the messages displayed by jBASE. This could be desirable if it is desired to have different messages or different behavior when a an error is encountered, depending on the user.
>
> For example, to prevent a program entering the debugger when an uninitialized variable is encountered, remove the **^WARNING^** string from the ZERO\_USED message.

Back to [Error Handling](./../../jbase-basic-%28jbc%29/jbc-error-handling)

Go Back to [Environment Variables](./../README.md)

<PageFooter />
