# T-UNLOAD

<PageHeader />

## Description

The **T-UNLOAD** command requests the tape device to rewind and unload the media. The command has the general form:

```
T-UNLOAD {CHANNEL=channel}
```

where **channel** is the specific channel attachment (0-9).

## Note

> Some tape devices do not support the unload command. In these cases the usual action is to rewind the tape device.

An example of use may be as:

```
T-UNLOAD
```

to request the tape device to rewind and unload.

Back to [Tape Commands](./../tape-commands/README.md)

<PageFooter />
