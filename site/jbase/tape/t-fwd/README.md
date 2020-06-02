# T-FWD

<PageHeader />

## Description

The T-FWD command will forward space the tape device one block at a time by the number of blocks specified. If the block specification is omitted then the T-FWD command will execute a forward file search command for the next end of filemark, (EOF).

```
T-FWD {CHANNEL=channel} {n}
```

where:

- **channel** is the specific channel attachment (0-9).
- **n** is the number of blocks to move the tape forward.

### Note

> Some tape devices, cannot reliably perform forward spacing individual blocks and therefore specifying the number of blocks to forward space should be avoided for those devices other than half inch units as possible I/O errors can result.

If the end of filemark, (EOF), or end of media, (EOM), is detected while forward spacing or forward file searching then the block specification, if any, is overridden and the tape device positioned after the EOF.

## Examples  

```
T-FWD 10
```

to request the tape device to forward space 10 blocks, or:

```
T-FWD
```

to request the tape device to forward search to the next end of file mark, (EOF).

Back to [Tape Commands](./../tape-commands/README.md)

<PageFooter />
