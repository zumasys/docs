# 3-Conversion From Start

**Created At:** 8/11/2017 12:07:29 AM  
**Updated At:** 8/11/2017 12:07:54 AM  
**Original Doc:** [3-conversion-from-start](https://docs.jbase.com/36040-migration-knowledge-base/3-conversion-from-start)  


## 1.. Discovery Document and UVShims Parameter load

Go through the discovery document and load the UVSHIMS server with information as explain in this document on the I drive - 1-UVShimsParamsFromDiscovery.docx

If a new emulation type is needed, add that to the development release of the conversion tools on ZumLinuxDevel under /usr/zumasys/templates/OTHER/config\_tags.  There are currently UVSHIMS, jbased3 and jbaseult.

## 2.. Provision a Centos 7 Linux box for the conversion

Provision a Centos 7 Linux box for the client.

I envision a Minimal install Centos 7 Linux box with:
                16 GB Memory -- Resized to customer order a week before go-live
                4 processors -- Again,  resized to customer order a week before go-live
                3 Customer file systems  created on a virtual drive to the size needed (from discovery)
                                / root file system, generally at least 18GB, bigger for large customers (from discovery)
                                /dbms file system, at least 40 GB, but determined by discovery
                                /u file system, at least 40 GB, but determined by discovery
                Then create a second virtual drive and have the conversion filesystem on it.
                                /conv would be a 300GB filesystem on its own drive that can be deleted a week before go-live

## 3.. Set up the base machine

Go through the Base machine document and create the shell to be used for the conversion as explained on this document on the I drive - 2-BASE\_machine\_for\_Conversions.docx

This document is a step-by-step detailed setup including: Update Centos 7, Disable Selinux and turn off firewall, GUI server package, Install packages needed for SHIMS, Install latest jBASE with 5.5 installer, webmin for user/printer/shutdown/reboot web based tools, samba (For testpdf printers and other windows shares), Update zumasys user .profile and useradd, if shims, udsroot for Jim/Ed, Add user zumasys and udsroot to sudoers file, Set permissions and ownership of  /u and /dbms directory, Add /dbms/u and set permissions and ownership, Alter cupsd.conf for cups, Setup trust to zumUVSHIMS (198.51.168.86 server) and Add the viewpoint items.

## 4.. Running the entire conversion

### Initial Setup

The process will ask these initial setup questions the first time the server is accessed via “zumasys” account

#### aes rsc wdi …

#### Enter organization (i.e. aes) : rsc

Validates that organization exists on ZUMUVshims server in /u directory.

#### Enter IP of UVSHIMS server (for DATA) or UVSHIMS if default : UVSHIMS  (or could be 10.0.1.13 or other for on-prem)

Enter the IP address if there is an on-prem server or the actual verbatim “UVSHIMS” for cloud.  This is usually going to be UVSHIMS if cloud based, but it is the IP address for an on-premises conversion with their own staging machine

#### UVSHIM will get written to /dbms/DATABACKUPS as the UVSHIMS server IP

#### Are you sure this is where the databackups reside for rsc? :y

Enter y if the IP address or “UVSHIMS” is correct.

*DESQTOP
GWS
ROBINSON
ROBINSONWEB
UAS
UDS*

#### Enter the name of your main data Account (i.e. PIPESUPPLY) : ROBINSON

Writes account to /dbms/MYACCT item which is used by environment scripts.

#### ROBINSON will get written to /dbms/MYACCT as the main account.
Are you sure this is the main data account for rsc? :y

Enter y if the account entered was correct.

#### Enter emulation for jBASE i.e. jbase or UVSHIMS : UVSHIMS

Enter ‘UVSHIMS” for shims conversions, “jbase” for most others, “jbased3” for D3 and there may be others.

#### UVSHIMS will be used as the jBASE Emulation
Are you sure this is the emulation you want? : y

Enter y if you are sure of the emulation used.

### Processes normally run from the menu during initial load

1.. Load jBASE release – Initial load/update of the jBASE release

2.. Load /usr/zumasys conversion -- This may be updated several times after the conversion begins

3.. Create Linux based printers -- Updated once devices are established and real printers are in place

4.. Create jBASE printers --           Initially this will only create a LP0/F0 pdf printer and create the jBASE spooler
                                                                Later when the printers are all in place, we will update this and run again

5.. Add Mail relay -- This process will be run when mail relay information is established and setup

6.. Move users to this box -- Once site administrator decides which user are to be created.

7.. Move .ssh info to this box -- Any users needing .ssh information will have that information transferred

\* see note\* 8.. Load latest data from UVSHIMS -- Will load initially and will be updated when data needs to be refreshed

9.. Load latest /usr/local/bin --  This may be updated after the conversion begins.

10. Load webmin configuration files – Initial setup of webmin scripts/edits/users

\*note\*    -- For MV type conversions, you will need to restore the data accounts into /u/mvaccounts

### Add Line for ZLR to the sudoers file

userid ALL=NOPASSWD: /usr/local/bin/dojb5 ZL
     ^-- This line is for every user that needs to do ZLR (ZumLock that allows release)

## Customer’s with D3/ULTIMATE/MVBASE, etc

Login to the new Cloud or on-premises box as … zumasys, Zuma12$$

Usually we have these customer’s create a virtual or pseudo-floppy and we then ftp or ssh move it to the new machine
$**LOGTO SYSPROG&lt;Enter&gt;**jsh SYSPROG ~ --&gt;**cd /u/mvaccounts&lt;Enter&gt;**jsh SYSPROG /u/mvaccounts --&gt;**bash&lt;Enter&gt;**$**rm -rf /u/mvaccounts/\*&lt;Enter&gt;**$**scp or ftp or other form of transport and put theirbackup.vtf into the /u/mvaccounts directory**$**exit&lt;Enter&gt;**jsh SYSPROG /u/mvaccounts--&gt;**export JEDI\_PREFILEOP=TYPE=JP&lt;Enter&gt;**

D3 pseudo-floppy restore
jsh SYSPROG /u/mvaccounts --&gt;**T-ATT FILE1 DEVICE=/u/mvaccounts/theirbackup.vtf G&lt;Enter&gt;**jsh SYSPROG /u/mvaccounts --&gt;**sysrestore&lt;Enter&gt;**jsh SYSPROG /u/mvaccounts --&gt;**LOGTO SYSPROG&lt;Enter&gt;***(seems redundant, but needed to refresh environment)*

### UltPlus

jsh SYSPROG /u/mvaccounts --&gt;**T-ATT FILE0 DEVICE=/u/mvaccounts/theirbackup.vtf &lt;Enter&gt;**
jsh SYSPROG /u/mvaccounts --&gt;**sysrestore -U&lt;Enter&gt;**jsh SYSPROG /u/mvaccounts --&gt;**LOGTO SYSPROG&lt;Enter&gt;***(seems redundant, but needed to refresh environment)*

### After the menu items are initially processed

$**LOGTO SYSPROG&lt;Enter&gt;**

Then for each account (in this example PIPESUPPLY)

jsh SYSPROG ~--&gt;**ZUMACCT&lt;Enter&gt;**                         ß First time you may want to just type this to get list of accounts                Usage:   ZUMACCT Account
                Account is the name of the data account
                33M DESQTOP
                4.5M UDS
                5.2G PIPESUPPLY
Note:  You will want to run ZUMACCT on support accounts first, accounts
such as DESQTOP and UDS, before running on the main account so that the
INCLUDE and FILE dependencies will exist when you use ZUMxx2JB on the
main account.

ZUMxx2JB is ZUMMV2JB for Multivalue and ZUMUV2JB for UV

As the “Note:” suggests, you will probably want to run the ZUMACCT process on the ancillary accounts like DESQTOP and UDS before the primary account

jsh&gt;**ZUMACCT PIPESUPPLY&lt;Enter&gt;**  ß Moves the prior one to /u/dbms/**PIPESUPPLY**, recreates and loads PIPESUPPLY
                                shows Tape Size “xxxxxxxxx”
                                Is this a new account? (Y/N/E) :**Y&lt;Enter&gt;**

This will run the conversion process for this account and if the main account it will prompt for an
email account if you want to run in test mode and then it will return you to SYSPROG at the jsh.

jsh&gt; **LOGTO PIPESUPPLY&lt;Enter&gt;**

jsh&gt; ZUMxx2JB ALL                                          ß Converts all PROCS and BP files and moves original to …\_orig
jsh&gt; ZUMGB ALL                                               ß Creates lists of BP good/bad/good CATALOGED/Bad CATALOGED
jsh&gt;ZUMRECAT                                                 ß Catalogs the program files in jBASE based on VOC entries from UNIVERSE
                                                                                     Then prompts to run process to rebuild indexes

Work on the programs as shown in the ZUMGB ALL lists concentrating on the ones in the BADCAT.xxx LISTS

***YOU ARE DONE.   Ready for testing***
