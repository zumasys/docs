# Debugger Override Settings

**Created At:** 4/5/2018 5:18:30 PM  
**Updated At:** 4/6/2018 9:24:08 AM  
**Original Doc:** [debugger-override-settings](https://docs.jbase.com/44253-profiles/debugger-override-settings)  
**Original ID:** 306600  
**Internal:** No  

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
