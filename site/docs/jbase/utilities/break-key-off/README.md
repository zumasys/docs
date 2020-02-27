# BREAK-KEY-OFF

**Created At:** 8/16/2018 2:49:08 PM  
**Updated At:** 10/24/2018 9:27:28 AM  
**Original Doc:** [break-key-off](https://docs.jbase.com/46963-utilities/break-key-off)  
**Original ID:** 334581  
**Internal:** No  

## Description

The jBASE **BREAK-KEY-OFF** command disables the break key when executing jBASE programs. The break key can be disabled on the current port or a port number specified as an argument.

It takes the general form:

```
BREAK-KEY-OFF {port number}
BREAK-KEY-OFF {-?|-h}
```

For example, if the break key is enabled on port 42 then this command will disable it:

```
BREAK-KEY-OFF 42
```

Back to [Utilities](./../utilities)