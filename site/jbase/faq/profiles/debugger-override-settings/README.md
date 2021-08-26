# Debugger Override Settings

<PageHeader />

## Description

This section is used to define what errors that would normally drop you in the debugger are to be overridden. This will not disable them in the logs (if logging is enabled).

``` json
"debugger_overide": [
"DIVIDE_ZERO",
"ZERO_USED",
],
```

This is the equivalent to setting:

```
export JBASE_ERRMSG_DIVIDE_ZERO=1
export JBASE_ERRMSG_ZERO_USED=1
```

Back to [Profiles](./../jbase-profiles)

  
<PageFooter />
