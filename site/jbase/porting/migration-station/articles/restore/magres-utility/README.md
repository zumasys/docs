# MAGRES Utility

<PageHeader />

The MAGRES utility can be used to restore data from a MAGSAVE tape.

By default, the restore process will do the following:

- Display all restored record identifiers
- Skip binary records

```
magres {-Options} {(Options}
```

| Option | Explanation |
| --- | --- |
| -P | output record identifiers to printer |
| -Q | suppress record identifiers display |
| -S | restore all records |
| (P) | output record identifiers to printer |
| (Q) | suppress record identifier display |
| (S) | restore all records |

The utility will create data files and subdirectories in the current working directory. A block size of 4096 is assumed for record bodies spanning more than one block. The MAGSAVE tape usually contains a dummy first block and so must be skipped before execution of the ‘magres’ command, also the MAGSAVE format has it’s own label format and so the label parameter must be set to NONE and the usual block size appears to be 4096.

## Example

| <!----> |<!----> |
| --- | --- |
| mkdir restoredir | Create restore directory |
| cd restoredir | Change to restore directory |
| T-ATT DAT0 LABEL=NONE SIZE=4096 | Attach device with label identification suppressed |
| T-FWD | Skip first tape file |
| magres -Q | Restore data |

[Back to Restore](./../README.md)