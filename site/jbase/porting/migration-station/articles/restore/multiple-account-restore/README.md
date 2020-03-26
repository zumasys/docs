# Multiple Account Restore

**Created At:** 11/1/2017 12:01:13 AM  
**Updated At:** 11/23/2017 1:27:39 PM  
**Original Doc:** [multiple-account-restore](https://docs.jbase.com/44497-articles/multiple-account-restore)  
**Original ID:** 283752  
**Internal:** No  

The M-A-R (multiple account restore) utility can be used to restore data in the format of a multiple account save (known as M-A-S on Reality systems). M-A-R invokes the ACCOUNT-RESTORE utility to restore each account.

```
M-A-R {-Options}
```

| Option | Explanation |
| --- | --- |
| -Q | question before restore of each account |
| -V | verify only, no restore |

Any other options specified are passed to the ACCOUNT-RESTORE process.

The M-A-R command attempts to restore all the accounts on the attached tape into the current working directory. The first tape block on the tape is expected to be a T-DUMP of the RESTORE-LIST record. This record is used to restore each Account from the M-A-S.

If a SYSTEM file has been configured then it will be checked before restoring to ensure that the Account as specified by the current value in the RESTORE-LIST, does not already exist. If the Account does exist in the SYSTEM file then the Account will be skipped using a T-FWD command. If the Account does NOT exist in the SYSTEM file but DOES exist in the current directory then the Account will be skipped. Also if the Account Name exists in the current directory as a hash or Unix/NT file then the Account will skipped. If the Account exists as an entry in the SYSTEM file OR as a directory in the current directory AND the Account name appears as an attribute in the **FORCE.RESTORELIST** record in the configured SYSTEM file, then an attempt to restore the Account will occur. Once restored the Account MD will be updated via the UpdateMD command and an entry added to the SYSTEM file.

Two control records can be configured in the SYSTEM file, **FORCE.RESTORELIST**, as previously mentioned, will cause any Accounts specified as an attribute in this record to be restored. A second control record, **SKIP.RESTORELIST**, again configured in the SYSTEM file, will cause all Accounts specified as an attribute in the record to be skipped.

To restore from a Reality M-A-S Save, a T-ATT followed by the M-A-R is all that should be required.

[Back to Articles](./../README.md)
