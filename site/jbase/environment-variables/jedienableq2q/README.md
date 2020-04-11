# JEDIENABLEQ2Q

<PageHeader />

**Tags:**
<badge text='pointer resolution' vertical='middle' />
<badge text='environment variables' vertical='middle' />

## Description

This environment variable must be set for Q-pointer to Q-pointer chains to be resolved. The maximum chain length allowed is 11. Note that this environment variable only enables Q-pointer to Q-pointer resolution. Q-pointer to F-pointer resolution is not supported.

The **listq** command can be used to display Q-pointer chains.

## Values

1

## Default

Not set.

## Setting

As per normal environment variable.

### UNIX

```
export JEDIENABLEQ2Q=1
```

### Windows

```
set JEDIENABLEQ2Q=1
```

## Note

> The configuration of MD/VOC files in each account should not be ambiguous. For example, do not use the file "MD" in one account and have both MD and MD]D extant in another account.

Go Back to [Environment Variables](./../README.md)

  
<PageFooter />
