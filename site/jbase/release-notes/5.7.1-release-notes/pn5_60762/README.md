# PN5_60762

<PageHeader />

## Description

Allow BREAK-KEY-ON and BREAK-KEY-OFF to specify a port number

### Previous Release Behavior

Limited to current port only

### Current Release Behavior

Ability to alter break key on other ports.

New options:

- BREAK-KEY-ON {port\_number} | {-H} | {-?}
- BREAK-KEY-OFF {port\_number} | {-H} | {-?}

Where:

- port\_number, is the port number of the session to disable break on.
- -?, -H, show help.

Back to [5.7.1 Release Notes](./../README.md)
