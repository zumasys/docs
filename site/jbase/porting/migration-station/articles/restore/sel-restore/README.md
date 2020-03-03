# sel-restore

**Created At:** 11/1/2017 12:08:05 AM  
**Updated At:** 12/3/2018 4:42:58 PM  
**Original Doc:** [sel-restore](https://docs.jbase.com/49275-restore/sel-restore)  
**Original ID:** 283757  
**Internal:** No  

The jBASE sel-restore command enables users to restore all or specific records into a jBASE file from an ACCOUNT-SAVE or FILE-SAVE. The command prompts for the name of source account and file held on the media, unless the restore by file number option has been used, in which case the user is prompted for the number of the source file on the media.

## Command Syntax

```
sel-restore targetfilename {recordlist} {(options}
```

### Prompts

Name of Account on media : **sourceaccountname**
Name of File on media : **sourcefilename**
Number of File on media : **sourcefilenumber**

### SYNTAX ELEMENTS

**sourceaccountname** is the name of the account on the media where the source file resides.
**sourcefilename** is the name of the file on the media in which the source records reside.
**sourcefilenumber** is the number of the file on the media in which the source records reside.
**targetfilename** is the name of the file where the records are to be restored.
**recordlist** is a list specifying the record identifiers to be restored.

| Option | Explanation |
| --- | --- |
| -A | Media already positioned in the section containing the account where the source file was located. |
| -C | Restore all records from the current media position. |
| -F | Display file names as the media is searched for the source file. |
| -I | Display record ids as they are restored. |
| -N | Prompt for source file number. |
| -O | Overwrite records which already exist in the target file. |
| -S | Suppress records already exist messages. |

### Notes

Options may be specified after the targetfilename or recordlist by preceeding the options with a left parenthesis

Before execution the tape device should have been opened with the T-ATT command.

### Examples

```
SEL-RESTORE NEWCODES * (I
Name of Account on media :PAYROLL
Name of File on media :TAXCODES
```

Restore all records from the file TAXCODES in account PAYROLL into the file NEWCODES. The record id will be displayed as each record is restored.

```
SEL-RESTORE NEWCODES SINGLE (N
Number of File on media :22
```

Restore record SINGLE from the file number 22 into the file NEWCODES.

[Back to Restore](./../README.md)
