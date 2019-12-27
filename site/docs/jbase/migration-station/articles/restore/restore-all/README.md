# RESTORE-ALL

**Created At:** 11/1/2017 12:03:50 AM  
**Updated At:** 12/3/2018 4:42:58 PM  
**Original Doc:** [restore-all](https://docs.jbase.com/49275-restore/restore-all)  
**Original ID:** 283754  
**Internal:** No  


# 


The RESTORE-ALL command is provided as a front-end utility to the ACCOUNT-RESTORE command, with some additions. The RESTORE-ALL command automatically updates the MD file in the restored Account and also automatically generates a SYSTEM file entry for the Account.

The RESTORE-ALL command is primarily intended to restore Accounts from a SEQUOIA system save, however, the command may also be used with other manufacturer systems and account saves.

The RESTORE-ALL command attempts to restore all the accounts on the attached tape into the current working directory.

If a SYSTEM file has been configured, the SYSTEM file will be checked before restoring to ensure that the Account specified by the current label does not already exist in the SYSTEM file.

If the Account does exist in the SYSTEM file, the Account will be skipped using a T-FWD command.

If the Account does NOT exist in the SYSTEM file but DOES exist in the current directory, the Account will be skipped. Also, if the Account Name exists in the current directory as a hash or UNIX/NT file, the Account is skipped.

If the Account exists as an entry in the SYSTEM file OR as a directory in the current directory AND the Account name appears as an attribute in the FORCE.RESTORELIST record in the configured SYSTEM file, an attempt to restore the Account will be made.

Once restored, the Account MD is updated via the UpdateMD command and an entry added to the SYSTEM file if configured.

Two control records can be configured in the SYSTEM file. FORCE.RESTORELIST, causes any Accounts specified as attributes in the record to be restored. A second control record, SKIP.RESTORELIST, also configured in the SYSTEM file, causes all Accounts specified as attributes in the record to be skipped.

The RESTORE-ALL command itself processes two options –V and –Q. All other options are passed on to the underlying ACCOUNT-RESTORE command.

The –Q option prompts the operator before each Account Restore. This option is NOT passed to the Account-Restore command.

The –V option, Verify Option, is used to process the tape in verify mode. This option is passed on to the Account-Restore command.

### COMMAND SYNTAX

```
RESTORE.ALL {-Options}
```

Restore all accounts from multiple account save or system save

**Where-Options can be:**

-V        Verify only, no restore

-Q        Question before restore

Any other options are passed to ACCOUNT-RESTORE process.

**Example**

To restore from a Standard System Sequoia Save, a T-ATT followed by the RESTORE-ALL is all that should be required.

To restore from other manufacture tapes try the following steps.

T-ATT SCT0 LABEL=R83,-2
            T-REW            
            T-FWD
            T-RDLBL 1
            T-FWD
            RESTORE-ALL –V

If this fails due to error control string try specifying one of the manufacture types, e.g. ‘A’ advanced Pick.

T-REW
            T-FWD
            T-RDLBL 1
            T-FWD
            RESTORE-ALL –VA -‘A’ for advanced pick.

NOTE: If attempting to use on a dd of a tape file the label information MUST still be included as part of the dd, otherwise the tape format will be unrecognizable.

NOTE: RESTORE-ALL is NOT intended for use with ROS File Saves, as the ROS save is one continuous tape file. However M-A-S type saves may work depending upon the tape labeling schema.
