# Account Save

**Created At:** 10/31/2017 11:59:44 PM  
**Updated At:** 12/3/2018 4:42:58 PM  


The ACCOUNT-SAVE utility provides the capability to export data back to legacy systems. The default ACCOUNT-SAVE mode provides an SMA compatible save format. This format has restrictions in that binary records are skipped and records greater than 32k are truncated in this mode. Truncation can be suppressed by invoking the G option. Binary records and records greater than 32k can be saved by the ACCOUNT-SAVE utility when invoked with the M option. This modes generates a different save format which some legacy systems may be able to restore. If the U option is specified then the Unix or NT directories will also be included on the save. The R option forces the save to include all subdirectories in the save. The ACCOUNT-SAVE utility has been coded for functionality and not speed and should **not** be used for daily backup. For daily backups the jbackup utility is recommended..

```
ACCOUNT-SAVE {-Options} directory {(Options)}
```


| Option<br> | Description<br> |
| --- | --- |
| -E or (E<br> | Error message summary<br> |
| -G or (G<br> | Allow Greater than 32k<br> |
| -H or (H<br> | Help message<br> |
| -K or (K<br> | Kill output to device<br> |
| -L or (L<br> | Label override required<br> |
| -M or (M<br> | Modified segment format<br> |
| -O or (O<br> | Override No Backup files<br> |
| -Q or (Q<br> | Quiet mode<br> |
| -R or (R<br> | Recursive mode<br> |
| -S or (S<br> | Statistics required<br> |
| -U or (U<br> | Unix directories required<br> |

