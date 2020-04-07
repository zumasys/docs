# LD_LIBRARY_PATH

<PageHeader />

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

This variable is only valid on Linux and Solaris and must be set to the jBASE lib directory ($JBCRELEASEDIR/lib).



## Values

Colon separated library file paths.



## Default

None.



## Setting

Normal environment variable, so it can be set at any time by the commands:

```
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$JBCRELEASEDIR/lib
```
