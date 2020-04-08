# jchmod

<PageHeader />

## Description

The **jchmod** utility provides a mechanism to modify Hash file parameters. The -L and +L options will also affect operating system level directory files.

## Syntax

```
jchmod -Options +Options Filename
```

## Options

| Option | Explanation |
| --- | --- |
| -t | Tabulate description about the file |
| -B | Remove backup of file using jbackup |
| -C | Remove control file usage flag |
| -J | Remove journaled file updates |
| -L | Remove logging the file |
| -M | Disable monitoring the file (Audit Logging) |
| -N | Remove the network friendly flag |
| -R | Remove resize specification |
| -S | Remove secure mode updates (j3 only) |
| -T | Remove transaction boundary support |
| +A | Auto-detect if a file is network friendly |
| +B | Add backup of file using jbackup |
| +C | Add control file usage flag |
| +J | Add journaled file updates |
| +L | Add logging the file |
| +M | Enable monitoring the file (Audit Logging) |
| +N | Add the network friendly flag |
| +S | Add secure mode updates (j3 only) |
| +T | Add transaction boundary support |
| +Rspec | Add restore spec , used during jrestore |

Back to [Utilities](./../utilities)
