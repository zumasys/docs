# Migration to jBASE: Preparing jBASE on Linux

**Created At:** 2/11/2019 7:59:34 PM  
**Updated At:** 4/5/2019 2:16:38 PM  

**Tags:**
<badge text='preparing' vertical='middle' />
<badge text='minimal specs' vertical='middle' />
<badge text='jbase conversion' vertical='middle' />
<badge text='jbase migration' vertical='middle' />
<badge text='linux' vertical='middle' />

## 


This is a step-by-step setup of a jBASE system on Linux, in preparation to converting from another multivalue database using jBASE migration tools.



### Preparing the jBASE System

Stage a server to run your converted application on jBASE.

#### Minimal specifications:


| 16 GB Memory | Though jBASE will run the application with less, the conversion process will utilize the memory and run much more efficient. |
| --- | --- |
| 2 Processors | A single processor will suffice, however the conversion process will run better with two. It is seldom recommended to use more than 4 in a VM. |
| 2 File systems | /dbms file system of at least 40GB.   Size is recommended to be twice that of your current system.   This  allows for growth and may vary for you.<br>/u file system of at least 40GB.  This file system would contain non-jBASE hashed files suc as historical pdfs, ftp csv files,etc. |


Load CentOS 7 or RedHat 7 on the server

### CHECKLIST.

Use this to be sure all steps are completed as documented.

##### For all these steps, be sure to be logged in as root or sudo to the root shell prompt (#).

\_\_\_\_\_\_ Update Centos / RedHat

\_\_\_\_\_\_ Update host name of server

\_\_\_\_\_\_ Disable SELinux and turn off firewall

\_\_\_\_\_\_ Install latest jBASE with the installer

\_\_\_\_\_\_ Set permissions and ownership of  /u and /dbms directory

\_\_\_\_\_\_ Install and setup samba server

\_\_\_\_\_\_ Update jbaseadm user .profile

\_\_\_\_\_\_ Add user jbaseadm and group jbsudo to sudoers file

\_\_\_\_\_\_ Alter cupsd.conf for cups

\_\_\_\_\_\_ Update /etc/skel items for new users

\_\_\_\_\_\_ Optionally change time zone setting





### SELinux

SELinux is a additional security layer that protects your system<br>from attacks. It is recommended that SELinux be turned off or put into<br>Permissive mode while doing your conversion. Permissive mode will make SELinux<br>generate errors in your Logs where it would have stopped programs/services. It<br>is recommended you have an understanding of Linux administration with SELinux<br>before setting it to Active mode.





### Update CentOS/RedHat

```
yum -y update
yum -y upgrade
yum -y update
yum -y upgrade
```

### Update host name of server

Change the hostname of the template to reflect the server.  This is generally a simple name ending in jbase01

```
hostnamectl set-hostname _________jbase01
```

### Disable SELinux and turn off firewall

```
echo "SELINUX=disabled" > /etc/sysconfig/selinux
echo "SELINUXTYPE=targeted" >> /etc/sysconfig/selinux
systemctl stop firewalld
systemctl disable firewalld
```

### Install latest jBASE with the installer

Get the newest release of jBASE from the jBASE site and load it into a directory with enough space to hold the installer which is generally less than 50MB.

Run the installer with sh by simply typing sh and the name of the installer .bin

```
sh jBASE_Server_v5.7.1.21639_x64_Linux.bin
```

...program loads.

```
Press <Enter> to start the installation process or [C]ancel <Enter>
Company is registered <O>utside the EU, [W]ithin the EU or [C]ancel :O<Enter>
```

... License agreement...

```
To continue, type "YES" to accept the agreement, or "NO" to exit:YES<Enter>
[E]xpress : Install jBASE with typical options and services
[A]dvanced :  Select components to install and services to start
[C]ancel installation
Install type: E<Enter>
```

Take the defaults unless otherwise instructed.

```
License Keys
--------------------------------------------------------------------
[E]valuation license    :
[S]ystem license        :
[M]ulti-session license :
[W]eb session license   :

Enter license type to edit, or [N]ext or [C]ancel E<Enter> or S<Enter> if you have a permanent license
Enter evaluation license key: 6m9w6S... eval key ...8Wts4U4u<Enter>

Enter license type to edit, or [N]ext or [C]ancel N<Enter>
```

```
Installation Summary
-----------------------------------------------------------------------

Release directory : /opt/jbase/5.7.1
Symbolic link : /opt/jbase/CurrentVersion
Data directory        : /dbms
jBASE admin user      : zumasys
jBASE group           : jbase
SYSTEM file           : /dbms/SYSTEM   [will create]
JBASEADM account      : /dbms/JBASEADM   [will create]
Spooler directory     : /dbms/jspooler   [will initialize spooler]
Start jDLS            : Y
jRCS TCP Port         : 8236
Evaluation License    : aS1NwXGX+AMwpdHSQ53LtTmRipBQqvQy
Begin installation? ([Y]es/[N]o) :Y<Enter>
```



The jBASE installer will check for needed packages and install those packages and the jBASE release.

### Set permissions and ownership of /u and /dbms file systems

```
chmod -R 770 /u
chmod -R 770 /dbms
chown -R jbaseadm:jbase /u
chown -R jbaseadm:jbase /dbms
```

### Install and setup samba server

This is used to share the pdf printer and simple open windows share for other files

#### Install Samba package

```
yum -y install samba*
```

#### Copy original samba configuration to the side and update

```
cp /etc/samba/smb.conf /etc/samba/smb.conf_orig
```

#### Create new configuration file

```
vi /etc/samba/smb.conf
```

delete all original lines of the smb.conf and add the following:

```
[Global]	
disable netbios = yes	
hosts allow = 0.0.0.0/0.0.0.0
security = user
guest account = root
map to guest = Bad User
log file = /var/log/samba/%m.log
max log size = 1024
[pdfs]
path = /dbms/pdfs
read only = no
guest ok = yes
guest only = yes
force create mode = 0777
force directory mode = 0777
[shared]
path = /dbms/winshared
read only = no
guest ok = yes
guest only = yes
force create mode = 0777
force directory mode = 0777
```

#### Enable and start the samba service

```
systemctl enable smb.service
systemctl start smb.service
```

#### Use smbclient and test shares are okay

```
smbclient -L localhost
Enter root’s password:   <Enter>
```

Just press &lt;Enter&gt; at the password.  pdfs Disk and shared Disk should show in the list

### Update jbaseadm user .profile

```
rm -f /home/jbaseadm/.bash_profile   (Optional profile for bash shell only.   Not recommended)
echo . /dbms/profilesource/env_user > /home/jbaseadm/.profile
mkdir -m770 /dbms/profilesource
chown jbaseadm:jbase /dbms/profilesource
```

Add the /dbms/profilesource/env\_user

```
#
### This is to be sourced into user profile
#
  HOME=/dbms/$MYACCT
  if [ ! -d "$HOME" ]; then
    echo "Warning... $HOME is not a valid directory"
    exit 1
  fi
#
### Add umask and stty for backspace and disable CTRL-D for exit
#
  umask 002
  export IGNOREEOF=999
  stty erase ^h susp ^- quit ^-
#
### jBASE Release
#
  if [ -z "$JBCRELEASEDIR" ];then
    if [ -d "/opt/jbase/CurrentVersion" ]; then
      JBCRELEASEDIR=/opt/jbase/CurrentVersion
    else
      echo echo '!!!! Warning... jBASE release not found'
      echo .
      read AnyKey
    fi
  fi
#
### Set jBASE base environment
#
  export JBCRELEASEDIR ;# Where is jBASE release
  export JBCGLOBALDIR=$JBCRELEASEDIR ;# Where is jBASE configuration
  export PATH=$PATH:$JBCRELEASEDIR/bin ;# Where are JBASE programs
  export LD_LIBRARY_PATH=$JBCRELEASEDIR/lib ;# Where are jBASE shared object
  export JEDIFILENAME_SYSTEM=/dbms/SYSTEM ;# Where are system accounts defined
  export JBCSPOOLERDIR=/dbms/jspooler ;# Where is the spooler based
#
### Set additional environment variables
#
  export JBCPORTNO=400-5000 ;# What port numbers to assign
  export JEDIENABLEQ2Q=1 ;# Allow Q-point to Q-point
  export Z_DISABLE_QUEUEING=1 ;# Multiple Z run in background
#
### Allow for "GLOBAL" programs / subroutines
#
  PATH=/dbms/bin:$PATH ;# Where are my GLOBAL programs
  JBCOBJECTLIST=/dbms/lib ;# Where are my GLOBAL subroutines
#
### Add Stack and set Prompt to show shelltype, account, userid and directory
#
  userid=`id -u -n`
  export JSH_PROMPT="$%s $%a $userid $%c -->",">>",jsh
  export JSH_COMMAND_STACK=USERNAME,150000
```

```
chown jbaseadm:jbase /dbms/profilesource/env_user
```

### Add user jbaseadm and jbsudo group to sudoers file

```
Add group jbsudo
groupadd jbsudo
```

#### Edit sudoers file and add jbaseadm user and jbsudo group

You will add the jbaseadm user to be the same as root in that in can run any command as super-user

jbsudo is added as a group with specific commands which can be run by anyone in that group without prompting for password

These two lines can be added anywhere in the file and you may want to put them at the very top

```
sudoedit /etc/sudoers
```

```
jbaseadm ALL=(ALL) ALL
%jbsudo ALL=NOPASSWD: /usr/local/bin/dojb5 ZL
```

in this case the specific command is the ZL program. You then add this group to the users that need it with -a -G group in usermod

```
usermod -a -G jbsudo user123
```

### Alter cupsd.conf to allow all users access and permission

```
vi /etc/cups/cupsd.conf
```

#### Allow any IP access

Find “Listen localhost:631” and add comment them out.  Then add Port 631 line.

```
#Listen localhost:631
#Listen 192.168.99.252:631
Port 631<Enter>
```

#### Allow any location access

```
Find “<Location />” and “<Location /admin>” parameters sections
<Location /> and <Location /admin>
Order allow,deny
Allow all<Enter>
</Location>
```

#### Change retry policy to retry job if it fails

Find “&lt;/Policy&gt;” and add this line after it to assure new printers retry-job if they fail

```
ErrorPolicy retry-job<Enter>
```

#### Allow anyone to cancel any job

Change line from &lt;Limit Cancel-Job CUPS-Authenticate-Job&gt; to &lt;Limit CUPS-Authenticate-Job&gt;

#### Restart the service

```
systemctl restart cups.service
```

### Update /etc/skel items for new users

Assuming this machines main purpose is jBASE and that most new users added will be added for this purpose, we can change the Linux skeleton for new users to setup those new users as a typical jBASE user

#### Remove .bash\_profile and add .profile item

```
cd /etc/skel
ls -la
total 28
drwxr-xr-x. 2 root root 71 Sep 10 10:47 .
drwxr-xr-x. 93 root root 8192 Feb 11 08:37 ..
-rw-r--r--. 1 root root 18 Sep 6 2017 .bash_logout
-rw-r--r--. 1 root root 231 Sep 6 2017 .bashrc
-rw-r--r--. 1 root root 172 Aug 2 2017 .kshrc
-rwxr-xr-x   1 root root  735 Sep 10 10:47 .bash_profile
rm -f /etc/skel/.bash_profile

Add /etc/skel/.profile
```

The first line is dot space /dbms/profilerouce/env\_user and makes Linux use the env\_user entered earlier as included script for this .profile
The second line will LOGTO xxxx assuming xxxx is the account where users will want to begin.   LOGTO alone will prompt for the account name

```
vi /etc/skel/.profile
. /dbms/profilesource/env_user
exec LOGTO xxxx
```

#### Setting up new users

```
useradd -c”User Name” -g jbase newuser
```

#### Optionally change time zone setting

If the timezome is incorrect, you can change it to the correct one with timedatectl

```
timedatectl list-timezones  | grep America
America/Adak
America/Anchorage
America/Anguilla
America/Antigua
…
America/Vancouver
America/Whitehorse
America/Winnipeg
America/Yakutat
```

### Set timezone that is appropriate (e.g America/New\_York)

```
timedatectl set-timezone America/New_York <Enter>
```
