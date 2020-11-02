# JBC_ENDRESTART

<PageHeader />

## Description

Enables the Break/End Restart feature.

## Values

Restart program name.

## Default

Break/End Restart feature disabled.

## Setting

On UNIX or on Windows, the JBC\_ENDRESTART environment variable should be set before any jBASE program is run. The environment variable should contain the command string to execute when the the debugger is exited.

To later enable the feature, use the [BITSET](./../../jbase-basic-%28jbc%29/bitset)(-3). To later disable the feature, use the [BITRESET](./../../jbase-basic-%28jbc%29/bitreset)(-3).

Back to [Environment Variables](./../README.md)

<PageFooter />
