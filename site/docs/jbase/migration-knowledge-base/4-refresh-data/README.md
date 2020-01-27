# 4-Refresh Data

**Created At:** 8/11/2017 12:10:36 AM  
**Updated At:** 11/21/2017 2:38:35 PM  
**Original Doc:** [4-refresh-data](https://docs.jbase.com/36040-migration-knowledge-base/4-refresh-data)  
**Original ID:** 266645  
**Internal:** Yes  


# Data Refresh Process

## Customer’s with Universe (UV) database

### zumrsync process for UV type accounts (most SHIMS)

logon to the customer’s live AIX or Linux computer

zumrsync to synchronize the data from their live system to the interim machine (usually ZUMUVSHIMS 198.51.168.86)

Usually we log in as root on their AIX system and run the zumrsync script.   This script downloads newestzumrsync from the ZUMUVSHIMS server, then executes it which simply syncs their system to our snapshot

### zumload process to byte-swap and create backups

Run zumload on the interim machine (usually ZUMUVSHIMS 198.51.168.86)
This process will ask which organization and will then take the synchronized snapshot, run finuxi process to byte swap and do a uvbackup of the data.

$**zumload&lt;Enter&gt;**
This will be run in screen.
Use &lt;Ctrl&gt;A d if you want to detach while it runs.
Press &lt;Enter&gt; to start the process
-------- screen clears -------
aes  ces  cvs  efs  fpd  gwp  iap  miw  rover  rsc  wdi

Enter the organization (i.e. aes) for new backups :**aes&lt;Enter&gt;**

When this is complete, it will change the Versions record so that the zumasys conversion menu option 8 will allow you to load this new data on the customer’s new computer.

### Run 8.. Load latest data from UVSHIMS… on the new Server

This option will be available when the zumload is complete and will move the backup items to the new server.



## Customer’s with D3/ULTIMATE/MVBASE, etc

Login to the new Cloud or on-premises box as … zumasys, Zuma12$$

Usually we have these customer’s create a virtual or pseudo-floppy and we then ftp or ssh move it to the new machine
$**LOGTO SYSPROG&lt;Enter&gt;**jsh SYSPROG ~ --&gt;**cd /u/mvaccounts&lt;Enter&gt;**jsh SYSPROG /u/mvaccounts --&gt;**bash&lt;Enter&gt;**$**rm -rf /u/mvaccounts/\*&lt;Enter&gt;**$**scp or ftp or other form of transport and put theirbackup.vtf into the /u/mvaccounts directory**$**exit&lt;Enter&gt;**

### Format of the “theirbackup.vtf”  (usually D3)

Sometimes the “theirbackup.vtf” tape file from other systems is compressed with gzip.  If the tape file is in a compressed mode you will need to unzip it prior to using it for the sysrestore.   Return to the bash shell and run these commands
  $**mv theirbackup.vtf theirbackup.vtf.gz&lt;Enter&gt;**ß gunzip requires the file to end with .gz and it will remove that
  $**gunzip theirbackup.vtf..gz&lt;Enter&gt;**
  $**exit&lt;Enter&gt;**

D3 pseudo-floppy restore
jsh SYSPROG /u/mvaccounts --&gt;**DELETE-FILE /opt/jbase/CurrentVersion/tmp/jdevattach&lt;Enter&gt;**jsh SYSPROG /u/mvaccounts --&gt;**T-ATT FILE1 DEVICE=/u/mvaccounts/theirbackup.vtf LABEL=R83,500 SIZE=500&lt;Enter&gt;**jsh SYSPROG /u/mvaccounts --&gt;**sysrestore&lt;Enter&gt;**jsh SYSPROG /u/mvaccounts --&gt;**LOGTO SYSPROG&lt;Enter&gt;***(seems redundant, but needed to refresh environment)*

### UltPlus Multi-file (numbers 1 to xxx)

Somehow transfer the multiple tape files from the UltPlus machine to the new server and run ULTrestore script     for example:      on their system…
                                                                **cd /virtsave/ult &lt;Enter&gt;** (where the numeric files exist)
                                                                ***t*ar -cvf /tmp/numfiles.tar . &lt;Enter&gt;**
                                                ~~~ transfer to the new server ~~~
                                                on the new server…
                                                                **mkdir /u/tmp ; cd /u/tmp &lt;Enter&gt;**
                                                                **tar -xvf /tmp/numfiles.tar &lt;Enter&gt;**
                                                                **/dbms/scripts/ULTrestore &lt;Enter&gt;**
                                                                .
                                                                Enter CLEAR to clear /u/mvaccounts directory
                                                                **CLEAR&lt;Ente&gt;**Enter the directory containing the numeric tape files**/u/tmp &lt;Enter&gt;**

Ultimate
jsh SYSPROG /u/mvaccounts --&gt;**DELETE-FILE /opt/jbase/CurrentVersion/tmp/jdevattach&lt;Enter&gt;**jsh SYSPROG /u/mvaccounts --&gt;**T-ATT FILE0 DEVICE=/u/mvaccounts/theirbackup.vtf &lt;Enter&gt;**
jsh SYSPROG /u/mvaccounts --&gt;**sysrestore -U&lt;Enter&gt;**jsh SYSPROG /u/mvaccounts --&gt;**LOGTO SYSPROG&lt;Enter&gt;***(seems redundant, but needed to refresh environment)*



## ALL -- Refresh accounts and CATALOG programs and check for program and DICT changes

$**LOGTO SYSPROG&lt;Enter&gt;***(in case you didn’t just do the tape/pseudo portion)*

Then get a list of the accounts to be refreshed

jsh SYSPROG ~--&gt;**SORT SYSTEM WITH \*A2 = “/dbms]” AND WITHOUT \*A0 = “SYSPROG””ACCUTERM”&lt;Enter&gt;**

ALL.PRGMS
                HISTORY
                PIPESUPPLY
                POCS
                RESULTS
                RESULTS-APS
                RESULTS-FAS
                RESULTS-GLS
                RESULTS-PRS
                SITE
                SYSLIB


| <!----> | <!----> | <!----> | <!----> |
| --- | --- | --- | --- |
| **Account Name**<br> | **ZUMACCT**<br> | **ZUMRECAT**<br> | **ZUMDIFF/ZUMDICTCOMPARE**<br> |
| <br> | <br> | <br> | <br> |
| <br> | <br> | <br> | <br> |
| <br> | <br> | <br> | <br> |
| <br> | <br> | <br> | <br> |
| <br> | <br> | <br> | <br> |
| <br> | <br> | <br> | <br> |


### Do this process on all the accounts in the table…

Check Jira todo list for Resfresh

jsh SYSPROG ~ --&gt;**ZUMACCT PIPESUPPLY&lt;Enter&gt;**  ß Moves it to /u/dbms/**PIPESUPPLY**, recreates and loads **PIPESUPPLY**
                                shows Tape Size “xxxxxxxxx”

This will run the conversion process for this account and if the main account it will prompt for an
email account if you want to run in test mode and then it will return you to SYSPROG at the jsh.

AFTER you have run ZUMACCT on all the accounts, do these steps for each of those accounts

jsh SYSPROG ~ --&gt; **LOGTO PIPESUPPLY&lt;Enter&gt;**

jsh SYSPROG ~ --&gt;**ZUMRECAT&lt;Enter&gt;**                     ß Catalogs the program files in jBASE based on MD or VOC entries
jsh SYSPROG ~ --&gt;**ZUMDIFF&lt;Enter&gt;**                         ß Displays any changes made since last refresh of data/programs
                Determine from listing whether to make changes to the converted program or copy the differing progam and
                re-convert it.

jsh SYSPROG ~ --&gt;**ZUMDICTCOMPARE&lt;Enter&gt;**ß Shows any DICT items changed since last data restore

You can run ZUMDICTCOMPARE (P option if you want the reports to go to the printer.



### example output from ZUMDICTCOMPARE…

#### If files are missing that were in the Account before the refresh

/dbms/MIS/ZUMASYS.BP]D is missing

/dbms/MIS/USERS]D is missing

/dbms/MIS/PAT.BP]D is missing

/dbms/MIS/DANELLZC]D is missing

/dbms/MIS/DANELLTEST]D is missing

/dbms/MIS/D3.COMMANDS]D is missing

/dbms/MIS/CHANGED.PROGRAMS]D is missing

Press &lt;Enter&gt; to continue :

#### If file DICT items Differ or are New

FileName                                 Dictionary ID             Status

======================================== ========================= ======

1099.ACCUM                               1099.ACCUM                Diff

ACCOUNTS.07.20.94                        ACCOUNTS.07.20.94         Diff

ACCOUNTS                                 ACCOUNTS                  Diff

ACCOUNTS.XREF                            ACCOUNTS.XREF             Diff

ACCUMTEMP                                ACCUMTEMP                 Diff

ACCUTERMCTRL                             ACCUTERMCTRL              Diff

ACTIVE-PRODUCTS                          ACTIVE-PRODUCTS           Diff

ADVERTISED-PRICES                        ADVERTISED-PRICES         Diff

AP-BANK-ACCOUNTS                         AP-BANK-ACCOUNTS          Diff

AP-DISTRIBUTION                          AP-DISTRIBUTION           Diff

AP-EXP-GL                                AP-EXP-GL                 Diff

AP-EXP-GL-FIXED                          AP-EXP-GL-FIXED           Diff

AP-LINES                                 AP-LINES                  Diff

APPLIED-CASH-123106                      APPLIED-CASH-123106       Diff

APPLIED-CASH                             APPLIED-CASH              Diff

APPLIED-CASH                             AUTH.DATE                 Diff

APPLIED-CASH                             TEST                      New

…

Enter "DONE" to go to report/overlay prompt :**DONE&lt;Enter&gt;**

#### (R)eport option selected

There are 980 differences.

(R)eport only, (O)verlay all A/S/X dicts or (C)hoose by DICT?  :**R&lt;Enter&gt;**

Refresh -vs- Altered DICT report

Refresh DICT 1099.ACCUM                 Altered DICT

1099.ACCUM                          1099.ACCUM

001 A                                   A

002 0                                   0

003

004

005

006

007                                     T1,10

008

009 L                                   L

010 10                                  10

===============================================================================

Refresh DICT ACCOUNTS.07.20.94          Altered DICT

ACCOUNTS.07.20.94                   ACCOUNTS.07.20.94

001 A                                   A

002 0                                   0

003

004

005

006

007                                     T1,17

008

009 L                                   L

010 10                                  10

…

#### (C)hoose by DICT option selected

There are 980 differences.

(R)eport only, (O)verlay all A/S/X dicts or (C)hoose by DICT?  :**C&lt;Enter&gt;**

Refresh DICT 1099.ACCUM                 Altered DICT

1099.ACCUM                          1099.ACCUM

001 A                                   A

002 0                                   0

003

004

005

006

007                                     T1,10

008

009 L                                   L

010 10                                  10

Enter (O) to overlay , (S) to skip or (E) to exit list :    ß Enter O,S or X

When one is completed if O or S is selected, the next item comes up.  E will exit you completely from the program.

#### (O)verlay all A/S/X dicts option selected

There are 980 differences.

(R)eport only, (O)verlay all A/S/X dicts or (C)hoose by DICT?  :**O&lt;Enter&gt;**

1099.ACCUM 1099.ACCUM overlayed

ACCOUNTS.07.20.94 ACCOUNTS.07.20.94 overlayed

…

This process will only overlay DICT items that have an A, S or X in attribute 1.  The others will be skipped and can be overlayed using the (C)hoose by DICT option.
