# JBCSCREEN_DEPTH

**Created At:** 7/17/2018 12:54:46 PM  
**Updated At:** 8/20/2018 1:09:39 PM  
**Original Doc:** [jbcscreen_depth](https://docs.jbase.com/41717-environment-variables/jbcscreen_depth)  
**Original ID:** 327508  
**Internal:** No  

**Tags:**
<badge text='terminal' vertical='middle' />
<badge text='environment variables' vertical='middle' />

## Description

This environment variable specifies the page depth for paged terminal output, and overrides the value specified by the [TERM](term) type.

Valid only on jBASE 3.x.

## Values

Decimal number

## Default

None.

## Setting

As per normal environment variable, should be setup before the jSHELL is invoked.

## UNIX

```
JBCSCREEN_DEPTH=10
export JBCSCREEN_DEPTH
```

## Windows

```
SET JBCSCREEN_DEPTH=10
```

Go Back to [Environment Variables](./../README.md)
