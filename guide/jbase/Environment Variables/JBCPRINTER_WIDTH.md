# JBCPRINTER_WIDTH

**Created At:** 7/17/2018 1:08:38 PM  
**Updated At:** 8/22/2018 9:20:46 AM  

**Tags:**
<badge text='spooler' vertical='middle' />
<badge text='printer' vertical='middle' />
<badge text='environment variables' vertical='middle' />

## Description

This environment variable specifies the page width for paged spooler output, and overrides the value specified by the [TERM](term) type.

Valid only on jBASE 3.x.



## Values

Decimal number



## Default

None.



## Setting

As per normal environment variable. On Unix, should be setup in the .profile before the jbcconnect command. On Windows, should be set before any jBASE program is invoked.

**Unix**

```
export JBCPRINTER_WIDTH=132
```

**Windows**

```
set JBCPRINTER_WIDTH=132
```
