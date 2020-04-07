# JBCLOGNAME

<PageHeader /> 

**Tags:**
<badge text='accounts' vertical='middle' />

## Description

The **account name** as perceived by commands such as **WHO** or conversions such as **U50BB** will normally be returned as the login name of the user (**LOGNAME** variable). However, if it is desired that users login with personal usernames but execute as if they were all on the same account, this variable may be set to override their username. The account name will be returned as whatever this environment variable is set to.

## Values

Any valid character string.

## Default

None.

## Setting

It must be set before running any jBASE process.

On UNIX it is typically assigned in the **.profile** or **.bash\_profile**.

On Windows it is typically assigned in the user's environment.

```
export JBCLOGNAME=OBIWAN   [UNIX]
set JBCLOGNAME=OBIWAN      [Windows]
```

Go Back to [Environment Variables](./../README.md)