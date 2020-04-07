# JBC_TCLRESTART

<PageHeader />

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

Enables the Command Level Restart feature.

## Values

Restart Program.

## Default

Command Level Restart feature disabled.

## Setting

On UNIX or on Windows, the JBC\_TCLRESTART environment variable should be set before any jBASE program is invoked. The environment variable should contain the command string to execute when the user would otherwise go to a shell prompt.

To later enable the feature, use the BITSET(-2). To later disable the feature, use the BITRESET(-2).

Back to [Environment Variables](./../README.md)
