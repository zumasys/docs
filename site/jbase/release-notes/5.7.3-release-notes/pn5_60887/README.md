# PN5_60887

<PageHeader />

## Description

Compiler: Make **GOSUB** stack depth configurable

### Previous Release Behavior

The **GOSUB** stack depth was limited to a maximum of 512 levels.

### Current Release Behavior

The **GOSUB** stack depth can be configured up to 10,000 levels by setting a new environment variable, **GOSUBSTACKDEPTH**, to the desired depth.

For example, this will set the GOSUB stack depth to a maximum of 1000 levels.

```
export GOSUBSTACKDEPTH=1000   [AIX/Linux]
set GOSUBSTACKDEPTH=1000      [Windows]
```

This environment variable can be set to anything from 513 through 10000 inclusive. A setting less than 513 or greater than 10000 will default to 512 levels.

If this environment variable is not set, or is set to a non-numeric value, then jBASE uses the default of 512 levels.

If the defined stack depth is exceeded then jBASE will drop to the debugger with and error messages similar to this:

```
 ** Error [ STACK_FULL ] **
Internal GOSUB stack FULL , Line     2 , Source gosub_test.b
Trap from an error message, error message name = STACK_FULL
Line 2 , Source gosub_test.b
jBASE debugger->
```

### Notes

>The effective release for this patch is that of jBASE 5.7.2.2

Back to [5.7.4 Release Notes](./../README.md)

  
<PageFooter />
