# JBCPRINTER_DEPTH

**Created At:** 7/17/2018 1:02:00 PM  
**Updated At:** 8/22/2018 9:22:43 AM  
**Original Doc:** [jbcprinter_depth](https://docs.jbase.com/41717-environment-variables/jbcprinter_depth)  
**Original ID:** 327511  
**Internal:** No  

**Tags:**
<badge text='printer' vertical='middle' />
<badge text='environment variables' vertical='middle' />

## Description

This environment variable specifies the page depth for paged spooler output, and overrides the value specified by the [TERM](term) type.

Valid only on jBASE 3.x.



## Values

Decimal number



## Default

None.



## Setting

It must be set before any jBASE program is invoked.

**Unix**

```
export JBCPRINTER_DEPTH=62
```

**Windows**

```
set JBCPRINTER_DEPTH=62
```
