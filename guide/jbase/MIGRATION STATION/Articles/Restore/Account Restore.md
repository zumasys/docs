# Account Restore

**Created At:** 10/31/2017 11:53:40 PM  
**Updated At:** 12/3/2018 4:42:58 PM  


The ACCOUNT-RESTORE utility can be used to restore data from ACCOUNT-SAVE tapes.



```
ACCOUNT-RESTORE {-Options} {TargetDirectory | TargetUserid} {(Options)}
```


| Option<br> | Description<br> |
| --- | --- |
| -A<br> | Advanced Pick save<br> |
| -B<br> | convert spaces in filename to underline<br> |
| -C<br> | force all filenames to upper case<br> |
| -F<br> | Fujitsu save<br> |
| -G<br> | Use this option when restoring files from a Sequoia system to allow recognition of G-type tape segments<br> |
| -L<br> | set when restoring L type records<br> |
| -M<br> | Reality save<br> |
| -N<br> | No translation of / and \ in filenames<br> |
| -R<br> | R91 save<br> |
| -S<br> | Statistics file .filestats required<br> |
| -V<br> | verify only, no restore<br> |
| -U<br> | update already existing files<br> |
| -X<br> | clear file before restoring records<br> |
| -Z<br> | SMA save<br> |
| -b**n**<br> | modulo blocking ratio, default value 1 - 4k, where **n** can be<br><br>| **8**<br> | source machine used half k frames<br> |<br>| **4**<br> | source machine used 1k frames<br> |<br>| **2**<br> | source machine used 2k frames<br> |<br><br> |
| -f **file**{,bb{,ll}}<br> | read tape data from **file**, or - for stdin , and specify block size bb bytes (default 16k) and a label size of ll bytes {default 80} (or 0 for unlabelled tapes)<br> |
| -r **file**<br> | resize files listed in **file**. Format is: {DICT} FileName NumBuckets {BucketMult} {SecSize}<br> |
| -z<br> | force out of group size to 1<br> |


Some ACCOUNT-SAVE tapes provide two or more tape files before the account data proper. The first is usually an empty tape file the second usually contains a tape label, note that sometimes these tape files can also contain invalid data blocks, these should be ignored. Most R83 based ACCOUNT-SAVE formats are preceded by two tape files and so two T-FWD commands should be executed before the ACCOUNT-RESTORE command. Also some R83 based ACCOUNT-SAVE tapes tend to have labels sized at the same block size as the data blocks and so the label size should be used.



### EXAMPLES

ROS QIC Example - No Preceding tape files.

T-ATT SCT0 LABEL=ROS SIZE=8192
ACCOUNT-RESTORE –b4



R83 QIC Example - Preceding tape files.

T-ATT SCT0 LABEL=R83,8192 SIZE=8192
T-FWD
T-FWD
ACCOUNT-RESTORE –b8



SEQUOIA DAT Example - Preceding tape files.

T-ATT DAT0 LABEL=R83
T-FWD
T-FWD
T-FWD
ACCOUNT-RESTORE



AP DAT Example - Preceding tape files.

T-ATT DAT0 LABEL=R83,-2
T-FWD
T-FWD
ACCOUNT-RESTORE –b8 -C

Note: The -2 effectively means that the block size for the label should be taken from the default attachment size specified in DAT0, i.e. 16384, or the SIZE parameter if supplied.



D3 (native) FILEn example



T-ATT FILE1 DEVICE=C:\MyDirectory\D3AccountSave LABEL=R83,500 SIZE=500
ACCOUNT-RESTORE



Where FILE1 is defined as:
    JBC\_\_EDIjdevTAPENT -I FILE1 -M FILE -H12
Note the use of the '-H12' option.



D3 or mvBASE (R83 compatible) FILEn example - Preceding tape files.



T-ATT FILE1 DEVICE=C:\MyDirectory\D3AccountSave LABEL=R83,500 SIZE=500
T-FWD
T-FWD
ACCOUNT-RESTORE -Z



Where FILE1 is defined as:
    JBC\_\_EDIjdevTAPENT -I FILE1 -M FILE -H12
Note the use of the '-H12' option.



ADDS QIC Example.



T-ATT SCT1 SIZE=16896 LABEL=2,U
ACCOUNT-RESTORE



Where SCT1 is defined as:
    JBC\_\_EDIjdevTAPE -D/dev/nst0 -R/dev/st0 -B8192 -I SCT1 -M SCT
Note: ADDS includes the first part of the save in their standard
SMA 80 byte Label. So the "2" denotes the standard 80 byte Label and
the "U" indicates that the data starts in the label.
