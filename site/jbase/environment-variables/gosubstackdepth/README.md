# GOSUBSTACKDEPTH

<PageHeader />

## Description

Defines the maximum number of **GOSUB** levels that can be attained.

## Values

```
513 through 10000 inclusive
```

## Default

The default is 512, which will suit most applications.

## Setting

Must be set before starting a jBASE process.

## Example

To set the **GOSUB** stack depth to 1k:

```
export GOSUBSTACKDEPTH=1024    [UNIX]
set GOSUBSTACKDEPTH=1024       [Windows]
```

## Notes

A setting less than 513 or greater than 10000 will default to 512 levels.

If it is not set, or is set to a non-numeric value, then jBASE uses the default of 512 levels.

If the defined stack depth is exceeded then jBASE will drop to the debugger with this error message:

```
 ** Error [ STACK_FULL ] **
Internal GOSUB stack FULL , Line     2 , Source gosub_test.b
Trap from an error message, error message name = STACK_FULL
Line 2 , Source gosub_test.b
jBASE debugger->
```

Effective release: jBASE 5.7.2.2

Back to [Environment Variables](./../README.md)
