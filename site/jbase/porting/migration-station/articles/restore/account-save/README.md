# Account Save

<PageHeader />

The ACCOUNT-SAVE utility provides the capability to export data back to legacy systems. The default ACCOUNT-SAVE mode provides an SMA compatible save format. This format has restrictions in that binary records are skipped and records greater than 32k are truncated in this mode. Truncation can be suppressed by invoking the G option. Binary records and records greater than 32k can be saved by the ACCOUNT-SAVE utility when invoked with the M option. This modes generates a different save format which some legacy systems may be able to restore. If the U option is specified then the UNIX or Windows directories will also be included on the save. The R option forces the save to include all subdirectories in the save. The ACCOUNT-SAVE utility has been coded for functionality and not speed and should **not** be used for daily backup. For daily backups the jbackup utility is recommended..

```
ACCOUNT-SAVE {-Options} directory {(Options)}
```

| Option | Description |
| --- | --- |
| -E or (E | Error message summary |
| -G or (G | Allow Greater than 32k |
| -H or (H | Help message |
| -K or (K | Kill output to device |
| -L or (L | Label override required |
| -M or (M | Modified segment format |
| -O or (O | Override No Backup files |
| -Q or (Q | Quiet mode |
| -R or (R | Recursive mode |
| -S or (S | Statistics required |
| -U or (U | Unix directories required |

[Back to Restore](./../README.md)
