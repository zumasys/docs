# jBASE Admin

**Created At:** 6/26/2017 9:47:45 PM  
**Updated At:** 8/11/2017 12:03:46 AM  


## Changing Linux Passwords

This process allows you to change the Linux password for a user.

$**sudo passwd *username* &lt;Enter&gt;**
[sudo] password for jbaseadm:

Changing password for user *username*.

New password: **PASSWORD &lt;Enter&gt;  (where PASSWORD is the new password and will not show)**

BAD PASSWORD: it is too short  ß These are warnings which may come up

BAD PASSWORD: is too simple   ß

Retype new password: **PASSWORD &lt;Enter&gt; (Same PASSWORD again and will not show)**

passwd: all authentication tokens updated successfully.

## Groups and Users

### Adding a group

A group is normally added to allow permissions to be added for a group of users.  A user can be a member of multiple secondary groups.

$**sudo groupadd *other* &lt;Enter&gt;**

This will add the group other to the groups

### Adding a user

Here is a typical command to add a new user and add a password for that user.

$**sudo useradd -c”*User Name in LISTU*” -g jbase *-G jbaseadm,other* -m *newuser*&lt;Enter&gt;** [sudo] password for jbaseadm:

“User Name in LISTU” would be that, the user name listed in LISTU in the Location column and must be in quotes.
jbase is the main group that jbase users need to have as their primary group.
-G jbaseadm,other refers to secondary groups of which this user should be included.
newuser is the name of the user to be created.

$**sudo passwd *newuser* &lt;Enter&gt;   (see above Changing Linux Passwords)**

## Edit /etc/hosts file

Edit the /etc/host file and add/maintain name to address cross-reference for printers and devices

$**sudo vi /etc/hosts &lt;Enter&gt;**
[sudo] password for jbaseadm:

127.0.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6
***192.168.8.88       laser1
192.168.8.89       laser2***

## Printer Administration

### Create a printer in linux

**sudo lpadmin -v *socket://laser1:9100* -E -*plaser1* -D ‘*Laser in main office*’
sudo cupsenable laser1 ; accept laser1**

### Delete a printer

**sudo lpadmin -x *laser1***

## Print Jobs in linux

### Listing print jobs

For all printers                   **lpq -a**
For a specific printer       **lpq -P *laser1***
More verbose listing       **lpstat -l or lpstat -l -P *laser1***

### Remove a print job

**lprm -P *laser1 12***                              ß print job number is from lpq list
jBASE Administrative commands

Here are some of the commands which can be used as an administrator of jBASE.   See the knowledgebase for complete information at [http://www.jbase.com/r5/knowledgebase/manuals/3.0/30manpages/man/util1.htm](http://www.jbase.com/r5/knowledgebase/manuals/3.0/30manpages/man/util1.htm)

## LISTU               Display users on the system

jsh&gt; LISTU
Port   PID    Account    Locale Location               Date       Time

1      10048  SGT        C      Don Garside            13 OCT 15  14:43:02

2      6514   SGT        C      Kevin Coleman          13 OCT 15  13:29:44

3      13666  SGT        C      philv                  13 OCT 15  15:21:57

4      31122  SGT        C      glenm                  13 OCT 15  06:58:34

5      26917  SGT        C      counter4               13 OCT 15  10:30:39

6      24906  SGT        C      wally                  13 OCT 15  10:07:00

7      14186  SGT        C      mikef                  13 OCT 15  15:33:00

9      25454  SGT        C      suefr                  13 OCT 15  10:13:29

10     25309  SGT        C      Chad Stanley           13 OCT 15  10:12:01

…

## Logoff Log a user process off

jsh&gt; LOGOFF 10

## SP-STATUS                 Control printers for jBASE

jsh&gt; SP-ASSIGN
15:37:00  13 OCT 2015       QUEUE STATUS                      PAGE 1 OF 3 PAGES

QUEUE NAME  DEVICE                   STATUS             #Q SKIP    XLT    BLKSZ

LP0         PROG lp -dlp0            ASSIGNED           13    1

LP1         PROG lp -dlp1            ASSIGNED            1    0

LP2         PROG lp -dlp2            ASSIGNED            3    0

LP3         PROG lp -dlp3            ASSIGNED            5    0

LP4         PROG lp -dlp4            ASSIGNED            0    0

LP5         PROG dopdf               ASSIGNED            0    0

LP6         PROG lp -dlp6            ASSIGNED            0    0

LP7         PROG lp -dlp7            ASSIGNED            0    0

1. CREATE FORMQUEUE  4. CHANGE DEVICE      7. DELETE FORM QUEUE    10. PURGE

2. CHANGE QUEUENAME  5. CHANGE PAGE SKIP   8. CHANGE TRANSLATION   11. SECURITY

3. LIST FORM TYPES   6. LIST PRINT JOBS    9. STOP PORT DESPOOL    99. EXIT

ENTER ACTION CODE / PAGE NUMBER (P#) ?



## SP-JOBS                      Show / Edit print jobs queued

15:36:06  13 OCT 2015       PRINT JOBS                        PAGE 1 OF 2 PAGES

JOB QUEUE        LINE ACCOUNT       CREATED    STATUS     SIZE  PRNTD  OP  CP

3 LP0             3 zumasys     09 OCT 08:46 HOLD        313      0  HS   1

1 LP1             2 zumasys     23 SEP 08:38 HOLD          9      0  HS   1

21 LP0             2 hote        22 SEP 14:09 P#0000        5      0  HS   1

22 LP0             2 hote        22 SEP 14:09 P#0000       10      0  HS   1

23 LP0             2 hote        22 SEP 14:15 P#0000        5      0  HS   1

24 LP0             2 hote        22 SEP 14:15 P#0000       10      0  HS   1

25 LP0             2 hote        22 SEP 14:16 P#0000       10      0  HS   1

30 LP0            35 zumasys     25 SEP 19:29 P#0000      102      0  HS   1

7 LP0             3 debla       02 OCT 11:32 P#0000        1      0  HS   1

13 LP0             3 hote        05 OCT 13:49 P#0000        1      0  HS   1

14 LP0             4 hote        05 OCT 13:51 P#0000       11      0  HS   1

1. MOVE FORM QUEUE 6.  STOP PRINTING    11. SP-STATUS      16. DETAIL DISPLAY

2. MOVE PRINT JOB  7.  RESUME PRINTING  12. KILL PRINTING  17. RESET SELECTION

3. CHANGE OPTIONS  8.  EDIT PRINT JOB   13. ALIGN PRINTER  18. TOGGLE ACCOUNT

4. CHANGE #COPIES  9.  SUSPEND PRINT    14. CLEAR QUEUE

5. DELETE JOB      10. TOP PRIORITY                        99. EXIT

Action Code / Options (P#; PT#; A acctname ; Q queuename; S status) :

# ZUMASYS utilities

## ZL or ZLR (which allows lock release, but must add user to zlr group with usermod -G zlr username)

jsh&gt; ZLR

Ln Port File Name                 Key        User Name          Date  Time

1    7 ./BID                     619726     Bob Reagon         06/01 06:30AM

2   19 ./ORDER.FILE              786476     Counter 4 terminal 06/01 06:59AM

3   33 ./ORDER.FILE              786472     Jill Jones         06/01 07:43AM

Enter Lock number (Ln) to release, R to refresh or &lt;Enter&gt; to exit :



## ZUMQUICKBU

This utility will create a snapshot of the live system based in LiveDir to BackupDir.   If BackupDir already exists, it will prompt for you to back up that to an archive in ArchiveDir.

jsh SYSPROG ~ --&gt;**ZUMQUICKBU&lt;Enter&gt;**

LiveDir    = "/dbms/"
BackupDir  = "/u/dbmsbu/"
ArchiveDir = "/u/archives/"

You will be using approximately 11.60% of your available space.

This process will synchronize the /dbms/ and /u/dbmsbu/

Do you want to run the synchronization? (Y/N) : **Y&lt;Enter&gt;**

Current backup already archived as :

-rw-rw-r-- 1 zumasys shims 39874679 Mar 14 11:56 031417\_115558.bzip

Running synchronization process.  This can take a few minutes...

Synchronization complete and correct.

Creating archive of this synchronization in background

Use ZUMFILE to access files in the synchronized backup

Options:

(O will allow the backup to run even if &gt; 90% of backup space will be taken
                (U will allow the process to run unattended without prompting for input
                (V verbose mode (Shows rsync in process)

The program can be changed from its defaults by exporting these environment variables
                variable                                Default                 Description
RSYNC\_WARN\_PERCENT              80                           When to show warning the backup filesystem is near capacity
RSYNC\_LIVE\_DIR                              /dbms/                 Base directory of directories (Accounts) to be synchronized
RSYNC\_BACKUP\_DIR                      /u/dbmsbu         Directory which is to be synchronized
RSYNC\_ARCHIVE\_DIR                     /u/archives         Location of tar files of prior synchronized data

## ZUMFILE {Account} {Filename}

The ZUMFILE command will allow you to set a pointer to the synchronized file in the BackupDir directory.  This command can have the account and file specified at the prompt or it will ask for them if not provided

jsh SYSPROG ~ --&gt;**ZUMFILE COUNTER-POWER IM-MENU&lt;Enter&gt;**You can now access the backup of COUNTER-POWER IM-MENU as ZUMFILE

or…

jsh SYSPROG ~ --&gt;**ZUMFILE COUNTER-POWER&lt;Enter&gt;**Enter File Name : **IM-MENU&lt;Enter&gt;**You can now access the backup of COUNTER-POWER IM-MENU as ZUMFILE

or…

jsh SYSPROG ~ --&gt;**ZUMFILE&lt;Enter&gt;**Enter Account Name (&lt;Enter&gt; = SYSPROG) or "X" : **COUNTER-POWER&lt;Enter&gt;**Enter File Name : **IM-MENU&lt;Enter&gt;**You can now access the backup of COUNTER-POWER IM-MENU as ZUMFILE

## ZUMRESTORE

This utility will allow you to restore any of the archives in ArchiveDir as created by ZUMQUICKBU to the BackupDir.  Once restored here you can either F-point to these files and/or mv the /BackupDir/ACCOUNT to the LiveDir structure.

jsh SYSPROG ~ --&gt;**ZUMRESTORE&lt;Enter&gt;**

You may encounter the following prompts depending on status of your system:
Limited disk space in BackupDir  (Aborts)

You need xxGB of diskspace to restore your data in BackupDir.
                You only have zzGB disk space available in BackupDir
                You cannot use ZUMRESTORE until this is resolved.

### Limited disk space in ArchiveDir (Aborts)

The current backup is not archived.
ArchiveDir has xxGB space and LiveDir is zzGB.
We cannot allow restore until the current backup can be archived.
You cannot use ZUMRESTORE until this is resolved.

### Last ZUMQUICKBU synchronization did not get archived

Do you want to archive the mmddyy\_hhmmss  Synchronization? (Y/N/X) :
                                Answering “Y” will create an archive of the current BackupDir so you can restore it back if needed

### No BackupDir have been archived (Aborts)

There are no archives to restore.

This restore will take 1.43% of your available space on /u file system
-------------------------------------------------------------------------------
  1) 12/07/16 03:12:42pm     2) 12/07/16 03:09:19pm     3) 12/05/16 04:32:18pm
  4) 12/05/16 04:25:17pm

Enter number for archive to restore or EX : **4&lt;Enter&gt;**We will first clear BackupDir with rm -rf BackupDir/\*
We will restore the archive from 12/05/16, 04:25:17pm
Enter OKAY to proceed or EX to exit : **OKAY&lt;Enter&gt;**

./

./ACCUTERM/

./ACCUTERM/bin/

./ACCUTERM/bin/DEMO.SERVER.so

./ACCUTERM/bin/.jbase\_header

./ACCUTERM/bin/DEMO.FTPICK.INTRO.so.el

./ACCUTERM/bin/ATGUI.MAIN.SAMPLE

…

./zzzrsync

Complete.

### You can F-point to the archive with a F-POINT in the MD like this.

jsh SYSPROG ~ --&gt;**ED MD OLD.EMPLOYEE&lt;Enter&gt;**

001 F
002 BackupDir/RESULTS-PRS/EMPLOYEE               &lt;- ACCOUNT = account, FILE = file
003 BackupDir/RESULTS-PRS/EMPLOYEE]D           &lt;- Same as above with bracket D

### With great care you can replace an account

jsh SYSPROG ~ --&gt;**mv LiveDir/ACCOUNT /u/ACCOUNT\_was &lt;Enter&gt;**         &lt;- move account to \_was name

jsh SYSPROG ~ --&gt;**cp BackupDir/ACCOUNT LiveDir/ACCOUNT&lt;Enter&gt;**&lt;- copy restored ACCOUNT

### You could also add a copy of an account

jsh SYSPROG ~ --&gt;**cp -r BackupDir/RESULTS-PRS LiveDir/RESULTS-PRS2016&lt;Enter&gt;**

Then add a SYSTEM entry…

jsh SYSPROG ~ --&gt;**COPY SYSTEM RESULTS-PRS&lt;Enter&gt;**TO:**RESULTS-PRS2016&lt;Enter&gt;**jsh SYSPROG ~ --&gt;**ED SYSTEM RESULTS-PRS2016&lt;Enter&gt;**
TOP
.**R999999/RESULTS-PRS/RESULTS-PRS2016&lt;Enter&gt;**
002 LiveDir/RESULTS-PRS2016
022 LiveDir/RESULTS-PRS2016
023 LiveDir/RESULTS-PRS2016/bin
024 LiveDir/RESULTS-PRS2016/lib
025 LiveDir/RESULTS-PRS2016/bin:LiveDir/bin:LiveDir/ACCUTERM/bin
026 LiveDir/RESULTS-PRS2016/lib:LiveDir/lib:LiveDir/ACCUTERM/lib
028 LiveDir/RESULTS-PRS2016/MD
BOTTOM
.**FI&lt;Enter&gt;**

You can now LOGTO RESULTS-PRS2016
