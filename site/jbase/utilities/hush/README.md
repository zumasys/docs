# HUSH

<PageHeader />

**Tags:**
<badge text='input supression' vertical='middle' />

## Description

The jBASE **HUSH** command Controls character echo of input and output in programs and procs.

## Syntax

```
HUSH {ON|OFF|INPUT}
```

where:

- **ON** Suppress input and output
- **OFF** Resume input and output
- **INPUT** Suppress input only

When no argument is supplied, **OFF** is assumed.

Note: When the Config\_EMULATE setting **hush\_input\_and\_output = true** and no argument is supplied, the state is toggled.

Back to [Utilities](./../utilities)
