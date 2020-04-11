# Account Restore

<PageHeader />

The ACCOUNT-RESTORE utility can be used to restore data from ACCOUNT-SAVE tapes.

```
ACCOUNT-RESTORE {-Options} {TargetDirectory | TargetUserid} {(Options)}
```

| Option | Description |
| --- | --- |
| -A | Advanced Pick save |
| -B | convert spaces in filename to underline |
| -C | force all filenames to upper case |
| -F | Fujitsu save |
| -G | Use this option when restoring files from a Sequoia system to allow recognition of G-type tape segments |
| -L | set when restoring L type records |
| -M | Reality save |
| -N | No translation of / and \ in filenames |
| -R | R91 save |
| -S | Statistics file .filestats required |
| -V | verify only, no restore |
| -U | update already existing files |
| -X | clear file before restoring records |
| -Z | SMA save |
| -b**n** | modulo blocking ratio, default value 1 - 4k |
| -f **file**{,bb{,ll}} | read tape data from **file**, or - for stdin , and specify block size bb bytes (default 16k) and a label size of ll bytes {default 80} (or 0 for unlabelled tapes) |
| -r **file** | resize files listed in **file**. Format is: {DICT} FileName NumBuckets {BucketMult} {SecSize} |
| -z | force out of group size to 1 |

Some ACCOUNT-SAVE tapes provide two or more tape files before the account data proper. The first is usually an empty tape file the second usually contains a tape label, note that sometimes these tape files can also contain invalid data blocks, these should be ignored. Most R83 based ACCOUNT-SAVE formats are preceded by two tape files and so two T-FWD commands should be executed before the ACCOUNT-RESTORE command. Also some R83 based ACCOUNT-SAVE tapes tend to have labels sized at the same block size as the data blocks and so the label size should be used.

## Examples

ROS QIC Example - No Preceding tape files.

```
T-ATT SCT0 LABEL=ROS SIZE=8192
ACCOUNT-RESTORE –b4
```

R83 QIC Example - Preceding tape files.

```
T-ATT SCT0 LABEL=R83,8192 SIZE=8192
T-FWD
T-FWD
ACCOUNT-RESTORE –b8
```

SEQUOIA DAT Example - Preceding tape files.

```
T-ATT DAT0 LABEL=R83
T-FWD
T-FWD
T-FWD
ACCOUNT-RESTORE
```

AP DAT Example - Preceding tape files.

```
T-ATT DAT0 LABEL=R83,-2
T-FWD
T-FWD
ACCOUNT-RESTORE –b8 -C
```

Note: The -2 effectively means that the block size for the label should be taken from the default attachment size specified in DAT0, i.e. 16384, or the SIZE parameter if supplied.

D3 (native) FILEn example

```
T-ATT FILE1 DEVICE=C:\MyDirectory\D3AccountSave LABEL=R83,500 SIZE=500
ACCOUNT-RESTORE
```

Where FILE1 is defined as:

```
    JBC__EDIjdevTAPENT -I FILE1 -M FILE -H12
```

Note the use of the '-H12' option.

D3 or mvBASE (R83 compatible) FILEn example - Preceding tape files.

```
T-ATT FILE1 DEVICE=C:\MyDirectory\D3AccountSave LABEL=R83,500 SIZE=500
T-FWD
T-FWD
ACCOUNT-RESTORE -Z
```

Where FILE1 is defined as:

```
    JBC__EDIjdevTAPENT -I FILE1 -M FILE -H12
```

Note the use of the '-H12' option.

ADDS QIC Example.

```
T-ATT SCT1 SIZE=16896 LABEL=2,U
ACCOUNT-RESTORE
```

Where SCT1 is defined as:

```
    JBC__EDIjdevTAPE -D/dev/nst0 -R/dev/st0 -B8192 -I SCT1 -M SCT
```

Note: ADDS includes the first part of the save in their standard
SMA 80 byte Label. So the "2" denotes the standard 80 byte Label and
the "U" indicates that the data starts in the label.

[Back to Restore](./../README.md)

  
<PageFooter />
