# 2-BASE Machine For Conversions Newest

**Created At:** 8/11/2017 12:00:17 AM  
**Updated At:** 8/11/2017 12:01:11 AM  
**Original Doc:** [266640-2-base-machine-for-conversions-newest](https://docs.jbase.com/36040-migration-knowledge-base/266640-2-base-machine-for-conversions-newest)  
**Original ID:** 266640  
**Internal:** Yes  

## In preparation, be sure you have a valid evaluation or active license for jBASE

CHECKLIST.   Use this to be sure all steps are completed as documented.

\_\_\_\_\_\_ Update Centos 7

\_\_\_\_\_\_ Update host name of server

\_\_\_\_\_\_ Disable Selinux and turn off firewall

\_\_\_\_\_\_ GUI server package

\_\_\_\_\_\_ Install packages needed for conversions

\_\_\_\_\_\_ Install latest jBASE with 5.5 installer

\_\_\_**√**\_\_\_ webmin for user/printer/shutdown/reboot web based tools (not to be installed)

\_\_\_\_\_\_ samba (For testpdf printers and other windows shares)

\_\_\_\_\_\_ Update zumasys user .profile and useradd, if shims, udsroot for Jim/Ed

\_\_\_\_\_\_ Add user zumasys and udsroot to sudoers file

\_\_\_\_\_\_ Set permissions and ownership of  /u and /dbms directory

\_\_\_\_\_\_ Add /dbms/u and set permissions and ownership

\_\_\_\_\_\_ Alter cupsd.conf for cups

\_\_\_\_\_\_ Setup trust to NewUVSHIMS (198.51.169.124 server)

\_\_\_\_\_\_ Add the viewpoint items

## Update Centos 7 (be sure to be at the root shell prompt. # get to root by typing “sudo - su” at the $ prompt)

```
yum update
yum upgrade
yum update
yum upgrade
```

Update host name of server (be sure to be at the root shell prompt. #)

Change the hostname of the template to reflect the server.  This is generally the 3 character organization code and jBASE01 for jBASE or universe01 for universe.

hostnamectl set-hostname **ORGjBASE01**

## Disable Selinux and turn off firewall  (be sure to be at the root shell prompt. #)

```
echo "SELINUX=disabled" &gt; /etc/sysconfig/selinux
echo "SELINUXTYPE=targeted" &gt;&gt; /etc/sysconfig/selinux
systemctl stop firewalld
systemctl disable firewalld
```

## GUI server package   (be sure to be at the root shell prompt. #)

If we have the simple GUI server loaded, it contains some utilities that are much simpler with GUI than command line.

```
yum -y groups install "GNOME Desktop"
```

***Install packages needed for conversions*** (be sure to be at the root shell prompt. #)

```
yum install -y cyrus-sasl-plain cyrus-sasl-md5
yum install -y screen
yum install -y ftp
yum install -y a2ps
yum install -y ksh
yum install -y system-config-services
***If telnet needed….***
yum install -y telnet-server
systemctl start telnet.socket
systemctl enable telnet.socket
mv /etc/securetty /etc/securetty\_orig
```

***Install latest jBASE with 5.5 installer*** (be sure to be at the root shell prompt. #)

```
wget [http://www.jbase.com/5.5.0/Linux\_jBASE\_5.5.0\_64bit.bin](http://www.jbase.com/5.5.0/Linux_jBASE_5.5.0_64bit.bin)
bash Linux_jBASE_5.5.0_64bit.bin
```

```
[**A**]dvanced method   Use defaults, except….
        Select jBASE user ID: **zumasys**
        Select jBASE group ID: **jbase** or **shims
        Do not…  
            1. Create JBASEADM…
            2. Create SYSTEM file…  

            jBASE spooler directory: /dbms/jspooler
            jBASE will use process-based locks. OK? ([Y]es/[N]o/[C]ancel): N
            jBASE will use port-based locks. OK? ([Y]es/[N]o/[C]ancel): Y
```

Copy the /opt/jbase/CurrentVersion/config/Config\_EMULATE from a shims customer to this box so that it has the UVSHIMS emulation if  a “shims” conversion.  Add the jbased3 by duplicating the d3 definition if this is a D3 case-insensitive box.

***webmin for user/printer/shutdown/reboot web based tools***  (be sure to be at the root shell prompt. #)

```
wget http://prdownloads.sourceforge.net/webadmin/webmin-1.750-1.noarch.rpm
yum install -y perl perl-CPAN perl-Net-SSLeay perl-IO-Socket-SSL
rpm -Uvh webmin-1.750-1.noarch.rpm
```

***samba (For testpdf printers and other windows shares)***  (be sure to be at the root shell prompt. #)

```
yum -y install samba\*

mv /etc/samba/smb.conf /etc/samba/smb.conf\_orig then, add to /etc/samba/smb.conf as follows:

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

Enable and start the samba service   (be sure to be at the root shell prompt. #)

```
systemctl enable smb.service
systemctl start smb.service
```

Use smbclient for testing if the windows boxes do not want to connect  (be sure to be at the root shell prompt. #)

```
smbclient -L localhost
Enter root’s password:   <Enter>
```

Just press &lt;Enter&gt; at the password and a listing should show of shares including pdfs and shared

## Update zumasys user .profile and useradd, if shims, udsroot for Jim/Ed

```
#id zumasys
uid=507(zumasys) gid=505(shims) groups=505(shims)    ß  This should be jbase or shims.  If not change it.
# usermod -g jbase zumasys   ß  This will change it

#rm -f /home/zumasys/.bash\_profile
#scp [zumasys@198.51.168.86:/scripts/zumasys.profile /home/zumasys/.profile](mailto:zumasys@198.51.168.86%3A/scripts/zumasys.profile%20/home/zumasys/.profile)
#chown zumasys:shims /home/zumasys/.profile
                                       ^-- This is either “shims” or “jbase” depending on what type of conversion
#chmod 644 /home/zumasys/.profile
#passwd zumasys   (as of this doc it was Zuma12$$)
```

--- SHIMS ONLY ---

```
#useradd -m -d /home/udsroot -s /bin/bash -c “Shims Developer” -g shims udsroot
#rm -f /home/udsroot/.bash\_profile
#scp zumasys@198.51.168.86:/scripts/udsroot.profile /home/usdroot/.profile

#chown udsroot:shims /home/udsroot/.profile
#chmod 644 /home/udsroot/.profile
#passwd udsroot  (as of this doc it was nxtrend0o)
```

## Add user zumasys and udsroot to sudoers file
```
#sudoedit /etc/sudoers
zumasys ALL=(ALL)       ALL    ß Look for “root ALL=(ALL) ALL” and add these after it for zumasys and udsroot
udsroot ALL=(ALL)       ALL     ß If a “shims” conversion”
%shims ALL=NOPASSWD: /dbms/scripts/SHIMSLOCKS\_SU, /home/zumasys/zumconvmenu
      ^-- This is either “shims” or “jbase” depending on what type of conversion

***Set permissions and ownership of  /u and /dbms directory***(be sure to be at the root shell prompt. #)
chmod -R 770 /u /dbms                 ß This is a space.  Both directories need to be drwxrwx---
chown -R zumasys:shims /u /dbms           ß This is a space.  Both directories need  “zumasys shims” ownder/group
                                        ^-- This is either “shims” or “jbase” depending on what type of conversion

***Add /dbms/u and set permissions and ownership***(be sure to be at the root shell prompt. #)
mkdir -m 770 /u/dbms
chown -R zumasys:shims /u/dbms
                                         ^-- This is either “shims” or “jbase” depending on what type of conversion
```

Verify all permissions and ownership changes are correct
```
ls -ld /u /dbms /u/dbms                ß  That is ls”space”-ld”space”/u”space”/dbms”space”/u/dbms
drwxrwx--- 33 zumasys shims 4096 Apr 10 11:06 /dbms
drwxrwx---  4 zumasys shims 4096 Apr  4 14:17 /u
drwxrwx---  8 zumasys shims  125 Apr  2 12:40 /u/dbms
```

**Alter cupsd.conf for cups**  (be sure to be at the root shell prompt. #)

```
vi /etc/cups/cupsd.conf
```

Find “Listen localhost:631” and add comment them out.  Then add Port 631 line.

```
#Listen localhost:631
#Listen 192.168.99.252:631
Port 631
```

Find “&lt;Location /&gt;” and “&lt;Location /admin&gt;” parameters section and add the local net
&lt;Location /&gt;  and &lt;Location /admin&gt;

```
      Order allow,deny
      Allow all
```

&lt;/Location&gt;
Find “&lt;/Policy&gt;” and add this line after it to assure new printers retry-job if they fail

```
ErrorPolicy retry-job
```

Change line from &lt;Limit Cancel-Job CUPS-Authenticate-Job&gt; to &lt;Limit CUPS-Authenticate-Job&gt;

```
systemctl restart cups.service
```

## Setup trust to NewUVSHIMS (198.51.169.124 server)

As zumasys…   (be sure to be at the zumasys shell prompt. $)
```
echo $HOME
/home/zumasys               ß If this is not /home/zumasys then export HOME=/home/zumasys

ssh-keygen -trsa
```

         Hit &lt;enter&gt; through all prompts

```
ssh -p 2222 198.51.169.124  (may prompt for ECDSA key fingerprint, just answer “yes”)
```

then exit back

Back on the client machine… (after exit from ZUMUVSHIMS server)

```
ssh-copy-id -p 2222 -i ~/.ssh/id\_rsa.pub 198.51.169.124
```

Back as root…  (be sure to be at the root shell prompt. #)

```
cd ~/.ssh
cp /home/zumasys/.ssh/id\_rsa\* .
```

## Add the viewpoint items    (be sure to be at the root shell prompt. #)

```
scp -P 2222 zumasys@198.51.169.124:/usr/share/terminfo/v/\* /usr/share/terminfo/v/.
```

## Optionally change time zone setting

If the timezome is incorrect, you can change it to the correct one with timedatectl

```
timedatectl list-timezones  | grep America <Enter>

America/Adak
America/Anchorage
America/Anguilla
America/Antigua
America/Araguaina
America/Argentina/Buenos\_Aires

…

America/Vancouver
America/Whitehorse
America/Winnipeg
America/Yakutat
America/Yellowknife

timedatectl set-timezone America/New\_York <Enter>
```
