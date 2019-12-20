# 1-UVShims Params From Discovery

**Created At:** 8/10/2017 11:58:47 PM  
**Updated At:** 8/11/2017 12:04:18 AM  
**Original Doc:** [1-uvshims-params-from-discovery](https://docs.jbase.com/36040-migration-knowledge-base/1-uvshims-params-from-discovery)  


Contents



The files behind the scenes in /u/***ORG****/params, /conversiontools and /usr\_local\_bin*. 2

[1] Load jBASE release - **/conversiontools/jBASE.tar.gz**. 2

[2] Load /usr/zumasys conversion suite - **/conversiontools/usr\_zumasys.tar.gz**. 2

[3] Create Linux base printers - **/u/*****ORG*/params/hosts.txt and /u/****ORG/params/linuxprinters.txt**. 2

[4] Create jBASE Printers - **/u/****ORG/params/jbaseprinters or /u/****ORG/params/uvlp/\***. 3

[5]  Add Mail relay - **Currently NOT FUNCTIONAL**. 3

[6] Move users to the box - **/u/*****ORG*/params/passwd.txt**. 3

[7]   Move .ssh info to this box - **/u/*****ORG*/params/dotssh/userid/id\_\***. 4

[8] Load latest data from UVSHIMS - **/u/****ORG/backups** (ONLY USED FOR U2 “rsynced” DATA). 4

[9]  Load latest /usr/local/bin - **/usr\_local\_bin**/\*. 5

[10] Load webmin configuration files - **/conversiontools/etc\_webmin\_custom.tar.gz**. 5

The vs tool used to activate the menu options. 5

The vs process. 5

How we update each of the menu items. 6



## If AIX based client, load packages needed

ssh -

rsync -

screen -

bash -

## SHIMS conversion menu

1..    Load jBASE release                 [Major 5.5 , Minor 0]

2..   Load /usr/zumasys conversion suite [Nov 18, 2016 ]

3..   Create Linux based printers        [18 Nov 2016 08:33:43]

4..   Create jBASE printers              [Nov 18 08:34]

5..   Add Mail relay                     [Jun 9 2014 ]

6..   Move users to this box             [47]

7..   Move .ssh info to this box         [1]

8..   Load latest data from UVSHIMS      []

9..   Load latest /usr/local/bin         [Oct 14 20:46]

10.  Load webmin configuration files    [Sep 12 16:32, MiniServ/1.810]

X.. Exit menu

## The files behind the scenes in /u/***ORG****/params, /conversiontools and /usr\_local\_bin*

### [1] Load jBASE release - **/conversiontools/jBASE.tar.gz**

untars UVSHIMS/conversiontools/jBASE.tar.gz into /opt/jbase/jBASEforSHIMS.
Put a tar of the jBASE release to be used for conversions on the UVSHIMS server under /conversiontools/jBASE.tar.gz
This will be a vanilla jBASE release with minor changes to the ./config directory.   This is used for new releases and if a release already exists, it will untar this and replace the ./config directory with the one that already exists.

### [2] Load /usr/zumasys conversion suite - **/conversiontools/usr\_zumasys.tar.gz**

Creates the base machine at /dbms from a tar.
The ZumLinuxDevel machine’s /usr/zumasys directory where the conversion tools are maintained is “published” to the UVSHIMS machine whenever new tools are added or updated.  This menu option will move a tar of those tools in  /conversiontools/usr\_zumasys.tar.gz from the UVSHIMS machine to the clients /tmp directory.   It will then untar and BASIC/CATALOG the files and create all the files and parameters needed in the /dbms directory on the client machine.
This menu option is automatically updated to the new version whenever new tools are “publish”ed.

### [3] Create Linux base printers - **/u/*****ORG*/params/hosts.txt and /u/****ORG/params/linuxprinters.txt**

This option will create the linux based printers from information collected in the hosts.txt and linuxprinters.txt files.

####                 hosts.txt - IP addresses to add to their machines etc/hosts file

Put a copy of the clients current /etc/hosts file in the directory as hosts.orig, then create a hosts.txt file of those
                IP addresses that will be needed for the new machine.   These are normally printers and terminal servers.
                Example:

192.168.1.4         lp1
                192.168.1.100     digits4
                192.168.1.140   portserver1

####                 linuxprinters.txt - Linux printer setup information

This linuxprinters.txt item holds information needed to create the linux printers.
                The format is simply :        printername, printdevice, printerdescription
                Example:

lp0,socket://digits4:2001,Main Printer
                lp1,socket://lp1:9100,Printer 1
                lp2,socket://digits4:2002,Check Printer
                lp3,socket://lp3:9100,Printer 3
                counterptr,lpd://portserver1/raw\_7,Counter Printer

### [4] Create jBASE Printers - **/u/****ORG/params/jbaseprinters or /u/****ORG/params/uvlp/\***

####                 jbaseprinters.txt - Holds MV form queue and associated linux printer information

The jbaseprinters.txt format is simply:    FormQueue,Linux Printer or script,page skip
                Example:

F0,laser\_Q5,0
                F3,laser\_Q7,0
                F99,/dbms/scripts/dopdf,0

####                 ./uvlp items for UV type printer definitions

The uvlp directory can contain the UV type printer drivers and use those to print from jBASE
                The format is simply:      lpxx.drv key with script for printing in Linux.  We add #pageskip 1 if page skip needed.
`               Formqueue=xx can be used if not in the format lpxx.drv and a formqueue needs to be specified.
                Examples:

uvlp/lp0.drv
                # pageskip 1
                cat - |lp -dlp0

lp1.drv
                cat - |lp -dlp1

lp2.drv
                cat - |lp -dwarehouseptr

counter
                #Formqueue=15
                cat - | lp -dcounter

### [5]  Add Mail relay - **Currently NOT FUNCTIONAL**

### [6] Move users to the box - **/u/*****ORG*/params/passwd.txt**

This process will use a password.txt file to create the new users for the box.   The format is the same as that of the /etc/password file on the clients Linux or AIX box.

####                 password.orig - An actual copy of the client’s /etc/passwd  (Work file used to help create password.txt)

This file will just be an actual copy of the client’s current /etc/passwd which should hold there existing users

####                 password.enc - An actual copy of the client’s encrypted password file (Work file to help create password.txt)

This file will be an actual copy of the customers /etc/shadow file on Linux or /etc/secure/passwd.

####                 password.txt - Actual list of users for the new system

This contains a simple layout of the new users.   It will generally be created by taking the password.orig file and
                exporting the users to an Excel spreadsheet, allowing the clients on-site admin to add/remove/change the users
                that are on the sheet and then populating this item with the results.
                Here is the format of that file:       userid : password : user number : group number : description : home directory
                Here is how the fields will be used:
                                userid -- Linux user id.  If this already exists on the new system, it will be skipped
                                password -- This will be used as the encrypted password or it will use encrypted N0P@sswd if blank.
                                                        The field can be populated or updated by running processenc.
                                user number -- This is ignored unless it starts with a “+”.  + uses that number, otherwise uses next avail
                                group number -- This is ignored unless it starts with a “+”, + uses number, otherwise uses ‘jbase’ or
                                                                 ‘shims’ number based on the type of conversion.
                                description -- If present, is used for the user
                                home directory -- This is ignored unless it starts with a “+”, defaults to /home/***userid***

Run processenc to update the final password.txt file with encrypted passwords from password.enc file.

### [7]   Move .ssh info to this box - **/u/*****ORG*/params/dotssh/userid/id\_\***

This process will move the items from the ./dotssh/***userid*** directory to the new boxes /home/***userid***/.ssh respectively
The .ssh items from the client’s current box should be moved to the ./dotssh directory on he UVSHIMS client params directory to assure that any currently trusted ssh credentials will pass to the new box.

####                 On the clients machine

As root, check for .ssh credentials for all users with “find / -name .ssh”.  Check if the users have any id records in
                there and if so, move those items to the corresponding /u/***ORG***/params/dotssh/**userid** directory.

### [8] Load latest data from UVSHIMS - **/u/****ORG/backups** (ONLY USED FOR U2 “rsynced” DATA)

This process will load the latest rsync’ed data for UV type clients.   It will get the data from the ./backups directory on the UVSHIMS server which is created by a processes that rsyncs the clients data to a ./fromAIX directory.   The .fromAIX universe style accounts are finuxi’ed and moved to ./Finuxed directory then a uvbackup process creates backup items that are put in the ./backups directory.
Original setup of this:

####                 On the clients machine

1.. Create a trusted .ssh to UVSHIMS
                                #ssh-keygen -t rsa  (Press &lt;Enter&gt; through all the prompts
                                #scp ~/.ssh/id\_rsa.pub [zumsys@198.51.168.86:/home/zumasys/.ssh/tmpkey](mailto:zumsys@198.51.168.86%3A/home/zumasys/.ssh/tmpkey)
                                # ssh zumasys@198.51.168.86 (uvshims)
                                #cd ~/.ssh
                                #cat tmpkey &gt;&gt;authorized\_keys
                                #rm -f tmpkey

2..copy UVSHIMS/scripts/zumrsync to the client’s box in the /usr/bin directory and make it executeable
                                #scp zumasys@198.51.168.86:/scripts/zumrsync /usr/bin/.
                                #chmod 777 /usr/bin/zumrsync

3.. Run zumrsync on the client’s
                                #zumrsync
                                                { First time, nothing, then subsequent times it will show a list}
                                Data account path or ALL for those listed :

####                 On the ZUMUVShims server

1.. Run zumload on the UVSHIMS server

### [9]  Load latest /usr/local/bin - **/usr\_local\_bin**/\*

This process moves UVSHIMS/usr\_local\_bin items to the local /usr/local/bin.

### [10] Load webmin configuration files - **/conversiontools/etc\_webmin\_custom.tar.gz**

This process will load the webmin user scripts and setup a webmin admin user.   You will be prompted for that user.   If you have not yet setup users, use zumasys.   Other users can be added later via the webmin interface.

## The vs tool used to activate the menu options

### The vs process

[root@uvlinux bin]# vs

aes  col  dan  fpd  gwp  miw    rsc  sss  wlk
ces  cvs  efs  gas  iap  rover  sbm  wdi

Enter the organization (i.e. aes) to have version changed or ALL :

1-jBASE Release
2-Zumasys Conv
3-Linux Printers
4-jBASE Printers
5-Mail Relay
6-Users
7-.ssh
8-Data Restore
9-usr\_local\_bin
10-Webmin

Which module? :



### How we update each of the menu items

####                 [1] Load jBASE release

This should be updated for each ORG when the client is first converted and should be updated whenever a
                pertinent jBASE release is updated on the UVSHIMS box

####                 [2] Load /usr/zumasys conversion suite

This should be updated for each ORG when the client is created and will be updated automatically any time the
                development tools have been “publish”ed from the zumlinuxdev server.

####                 [3] Create Linux base printers

This should be updated whenever the linuxprinters.txt item has been updated.

####                 [4] Create jBASE Printers

This should be updated anytime the jbaseprinters.txt or ./uvlp items have been updated.

####                 [5]  Add Mail relay -- Currently NOT FUNCTIONAL

This may be setup in the future, but is not currently functional

####                 [6] Move users to the box

This should be updated anytime the password.txt file is updated.

####                 [7]   Move .ssh info to this box

This should be updated anytime the ./dotssh items are updated

####                 [8] Load latest data from UVSHIMS

This will automatically be updated whenever new data is created by the zumload process.

####                 [9]  Load latest /usr/local/bin

This should be updated anytime new items are added or items are changed in /usr\_local\_bin

####                 [10] Load webmin configuration files

This should be updated for each ORG after the users have been created on their box *[6] Move users to the box*
