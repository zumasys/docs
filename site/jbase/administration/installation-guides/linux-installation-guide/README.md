# Linux Installation Guide

<PageHeader />

**Tags:**
<badge text='ubuntu' vertical='middle' />
<badge text='debian' vertical='middle' />
<badge text='centos' vertical='middle' />
<badge text='redhat' vertical='middle' />
<badge text='installing jbase on linux' vertical='middle' />
<badge text='linux' vertical='middle' />
<badge text='install ' vertical='middle' />
<badge text='jbase on linux' vertical='middle' />

<iframe width="640" height="360" class="fr-draggable" src="https://www.youtube.com/embed/Xpsr4LgBZVk?wmode=opaque" frameborder="0" allowfullscreen=""></iframe>

## System Requirements

jBASE for Linux is officially supported on 64-bit versions of CentOS 5 or above and Red Hat Enterprise Linux 5 or above. If installed on other distributions you may receive a warning but allowed to continue, however prerequisites will not be installed on un-supported operating systems.

### Supported Operating Systems

- CentOS 6 and 7
- Red Hat Enterprise 6 and 7

### Info

- Please download jBASE and request evaluation from [https://www.zumasys.com/downloads/](https://www.zumasys.com/downloads/)
- Each step in this guide will highlight which mode this step pertains. If you do not see the step during installation, skip to the next step as it may not apply to the mode chosen.

### Root Access

1. This document assumes you have superuser (su) or root access to the computer. Root or superuser commands will be represented with the pound sign or hash (#) character.

2. To gain root or superuser access, login to your system as root, or from a terminal prompt, type the (su) command.

``` bash
\$ su
```

3. Enter the root password when prompted, and you will notice the command prompt changes to a pound or hash (#) sign.![jbase-linux-installation-guide: blob](./blob.jpg)

### Determining Operating System Version

1. To determine the operating system version, run the (uname -a) command from the terminal as root.

``` bash
# uname -a
```

2. You should see this information displayed, x86\_64 indicates this is a 64-bit version of Linux.![jbase-linux-installation-guide: blob](./blob-1.jpg)

### Disk Space Requirements

1. jBASE for Linux requires the same minimum hardware specifications as the host operating system plus a minimum of 500MB of additional hard disk space, plus space for temporary files.

2. To determine disk space, run the df -h command.![jbase-linux-installation-guide: blob](./blob-2.jpg)

3. In this example this volume has 13GB free.

### License Information

To install jBASE for Linux, you will need the **Linux\_jBASE\_5.x\_rel\_64bit.bin**file, license key and root or su permissions as discussed in the previous section. You will receive an email with download links to the various jBASE installers and an html attachment containing licensing key information.

In order to complete the installation, you will need to enter your jBASE license key. jBASE cannot be installed without either a permanent or evaluation license key. If you are performing an upgrade, the installer will attempt to locate your existing license keys and allow you to reuse them.

For licensing assistance contact jBASE support in the United States at 866 582 8447 and in the United Kingdom at 0808 189 3266 or sales@jbase.com.

![jbase-linux-installation-guide: blob](./blob-3.jpg)

## Prerequisites

### Required Components

The jBASE installer will check for the following required packages and install them automatically:

- openssl
- gcc
- ksh
- ncurses-devel

### Installer Binary

1. Download the jBASE installer and place the installer in a convenient directory, for example, /tmp. ![jbase-linux-installation-guide: blob](./blob-4.jpg)

### Installer file permissions

1. Ensure that the installer is executable. Depending on the source of the installer file, most likely the execute mode of the installer file may have been lost. Use the chmod to change permissions.

2. First cd to the directory where the installer is located:

``` bash
# cd /tmp
```

![jbase-linux-installation-guide: blob](./blob-5.jpg)

3. Run chmod +x command to enable the file to be executed, note your filename and build number may vary.

``` bash
# chmod +x Linux_jBASE_5.5.1.18496_rel_64bit.bin
```

4. Run ls -l command to verify the permissions.

``` bash
# ls -l Linux_jBASE_5.5.1.18496_rel_64bit.bin
```

![jbase-linux-installation-guide: blob](./blob-7.jpg)

## Installation

### Starting the Installation

The jBASE installer is an interactive script-based installer. The installer will prompt you with various questions about the installation and after all of the information has been gathered, it will perform the installation automatically.

1. Launch the installer by typing ./ and then the install file name. Then press Enter.

``` bash
# ./Linux_jBASE_5.5.1.18496_rel_64bit.bin
```

![jbase-linux-installation-guide: blob](./blob-8.jpg)

2. The installer checks operating system compatibility, then verifies that all of the required Linux commands used during installation are available. Once the pre-installation tests are complete, a welcome message is displayed. Press enter to start the installation. ![](https://s3.amazonaws.com/screensteps_live/image_assets/assets/000/179/375/original/307c5313-c01e-4d10-a8a4-8d464b36e32b.png?AWSAccessKeyId=AKIAJRW37ULKKSXWY73Q&Expires=1489165724&Signature=gyd7j%2BmOg66bekOuuEE2ihOphmI%3D)![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/108925/blob)

3. Type W if your company is within the EU, otherwise type O if outside the EU. Then press Enter.![jbase-linux-installation-guide: blob](./blob-10.jpg)

4. Press spacebar to page down through the license agreement, then type YES to accept and continue.![](https://s3.amazonaws.com/screensteps_live/image_assets/assets/000/179/379/original/10067fd9-8c92-483c-9ffd-94936019fb8c.png?AWSAccessKeyId=AKIAJRW37ULKKSXWY73Q&Expires=1489165724&Signature=AB%2FTLhDi31CJ2frMe8c92MQbKrI%3D)![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/108927/blob)

5. Choose an installation type.

jBASE provides two installation modes, **Express** and **Advanced**.

**Express**: install jBASE with typical options and services. Select this option if you are new to jBASE and wish to get started quickly. Express mode installs jBASE, creates a jBASE Administrator user and account, creates a SYSTEM file to organize jBASE accounts, initializes the spooler, installs and starts jBASE services.

**Advanced**: allows you to select which features and services to install. Select this option if you need to customize the location of the SYSTEM file, administrator account, or jBASE spooler, or if you do not want some of these features installed.  Also select this option to select which optional services to install (jDLS and jRCS).  
![](https://s3.amazonaws.com/screensteps_live/image_assets/assets/000/179/425/original/428a1486-f0cf-462c-b57f-06d6d6d73fa1.png?AWSAccessKeyId=AKIAJRW37ULKKSXWY73Q&Expires=1489165724&Signature=z9%2Bd%2BS0XAxNB4N8IzCeYe1P1NZY%3D)![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/108929/blob)

6. Type an installation path or press Enter to choose the default /opt/jbase/5.5.1 directory.

Applies to: **Express,** **Advanced**![jbase-linux-installation-guide: blob](./blob-13.jpg)

7. If the installer is able to locate an existing jBASE installation, the previous release directory will also be shown on this page. The installer will look for existing installations at the location pointed to by the JBCRELEASEDIR environment variable, as well as commonly used directories for past jBASE releases.

The default installation directory is /opt/jbase/&lt;release number&gt;.

The installer will validate the specified installation directory. If it is a new directory, or an empty directory, installation may proceed. If the directory exists and contains a jBASE installation of the same release as the one being installed, the installation may proceed. Otherwise a different directory must be selected.

If you are performing an Express mode install, the parent of the installation directory will be used as the location for the SYSTEM file, the JBASEADM account and jBASE spooler. For example, if jBASE is installed in the default directory, the parent is '/opt/jbase', so the SYSTEM file will be created as '/opt/jbase/SYSTEM'.

8. Then press Y and then Enter to confirm![jbase-linux-installation-guide: blob](./blob-14.jpg)

9. Specify a name for a symbolic link for the new release or press Enter to accept the default. The symbolic link name is typically used for the JBCRELEASEDIR environment variable. For jBASE, the default symbolic link name is 'CurrentVersion'.

If the installer identified a previous jBASE release, the symbolic link name for the previous release will also be displayed. If you have existing scripts that rely on the previous symlink name, you may want to use the same name here to avoid having to update any existing scripts.

Express install will use the default symbolic link name 'CurrentVersion'.

Applies to: **Advanced**![jbase-linux-installation-guide: blob](./blob-15.jpg)

10. Then press Y to confirm.![jbase-linux-installation-guide: blob](./blob-16.jpg)

11. Specify a Linux user ID to own the jBASE system files, or press Enter to accept the default jbaseadm user account. If the user does not exist, the installer will create the user for you. Press Y to confirm.

Applies to: **Express,** **Advanced**![jbase-linux-installation-guide: blob](./blob-17.jpg)

12. Enter a password for the Linux user, and again for verification.

Applies to: **Express,** **Advanced**![jbase-linux-installation-guide: blob](./blob-18.jpg)

13. Specify a group ID for the jBASE system files, or press Enter to accept the default jBASE group ID. Then press Y to confirm.

Applies to: **Express,** **Advanced**![jbase-linux-installation-guide: blob](./blob-19.jpg)

14. Here you can choose optional tasks to complete during installation, or choose the default to complete all tasks. Options include:

**Create JBASEADM a****ccount for a****dministrative functions** The JBASEADM account can be used to perform jBASE administrative tasks such as creating or deleting other jBASE accounts.

**Create SYSTEM file to organize jBASE accounts** In jBASE, the SYSTEM file is optional. However, using a SYSTEM file provides a convenient way to organize your jBASE accounts, and is required for using Q-pointers and the LOGTO command in your jBASE applications.

**Start jDLS distributed locking service** jDLS is responsible for resolving all record locking conflicts for jBASE processes. If jDLS is not running, jBASE will use the normal operating system locks. This is acceptable for small user populations, but the operating system locking mechanism has limits on the number of locks available, and on performance. See the [Introduction to jBASE Distributed Locking](./../../../miscellaneous/introduction-to-distributed-locking/README.md) for more information regarding jDLS.

**Start jRCS remote connectivity service** The jBASE Remote Connectivity Server (jRCS) provides remote access to your jBASE system. jBASE System Manager uses this service to perform management tasks on your jBASE system. By default, the jRCS server listens on TCP port 8236. See the [jBASE Remote Connectivity Service knowledgebase article](./../../../connectivity/jbase-remote-connectivity-server-(jrcs)/README.md) for more information regarding jRCS.

### Note

The jRemote client is located in /opt/jbase/CurrentVersion/clients

**Initialize the print spooler** Select this option to initialize the default print spooler configuration after a new installation. For upgrade installations, this option will restart the print spooler instead.

Applies to: **Advanced**![jbase-linux-installation-guide: blob](./blob-20.jpg)

15. Please specify the directory where jBASE user data will be stored, or press Enter to accept the default directory: /opt/jbase. Then press Y to accept the directory.

Applies to: **Advanced**![jbase-linux-installation-guide: blob](./blob-21.jpg)

16. In order to complete the installation you will need to enter your jBASE license key. jBASE cannot be installed without either a permanent or evaluation license key. If you are performing an upgrade, the installer will attempt to locate your existing license keys and allow you to reuse them. Type the letter for the license type and enter the license key to continue.

Applies to: **Express,** **Advanced**![jbase-linux-installation-guide: blob](./blob-22.jpg)

17. Specify the TCP port to use for the jBASE Remote Connectivity Server (jRCS), or press Enter to use the default port 8236. Then press Y to accept.

Applies to: **Advanced**![jbase-linux-installation-guide: blob](./blob-23.jpg)

18. If you opt to start the jDLS service, you can select port-based or process-based locks or press Y to choose the default process-based locks. See the [Introduction to jBASE Distributed Locking](./../../../miscellaneous/introduction-to-distributed-locking/README.md) for more information regarding jDLS.

Applies to: **Advanced**![jbase-linux-installation-guide: blob](./blob-24.jpg)

19. After verifying the information displayed on the summary page, type Y to begin the installation process. The following tasks will be completed.

Applies to: **Express,** **Advanced**

- Shut down jBASE daemons and ensure that no processes are using jBASE files
- Check for required packages and install any that are missing
- Backup the config directory from a previous installation
- Copy the jBASE release files to the destination directory
- Install the license keys in the 'system.properties' file
- Validate that jBASE is functional by executing a simple command (TERM)
- Create the jbaseadm user and jbase group, if needed
- Create a jbase\_env.sh script in the release directory to help with jBASE configuration
- Create the SYSTEM file (if option is selected)
- Initialize the spooler (if option is selected and performing a new install)
- Create the JBASEADM account (if option is selected)
- Update /etc/init.d with scripts to start jDLS, jRCS, jSPOOL daemons (if option is selected) ![jbase-linux-installation-guide: blob](./blob-25.jpg)

20. Congratulations, jBASE is now successfully installed. Press Y to login as JBASEADM.

If you have a local firewall installed on this server, it may prevent network users from connecting to the application. Your system administrator may need to allow access to TCP port 8236.

Applies to: **Express,** **Advanced**![jbase-linux-installation-guide: blob](./blob-26.jpg)

### Upgrading from a Previous Version

The jBASE installer will examine the directory pointed to by the JBCRELEASEDIR environment variable for a previous jBASE installation. If JBCRELEASEDIR does not point to a valid jBASE installation, the installer will test common installation locations for previous jBASE versions. The 'jdiag' command is used to that the directory contains a jBASE installation, as well as the previous jBASE release number.

If a previous jBASE release is found, the contents of the previous release 'config' directory will be backed up to 'config\_pre\_&lt;new version&gt; in the destination directory. For example, if, prior to installing this release of jBASE, JBCRELEAESEDIR points to '/opt/jbase5/5.2' and the new installation destination directory is '/opt/jbase/5.5.1', then the contents of '/opt/jbase5/5.2/config' will be backed up as '/opt/jbase/5.5.1/config\_pre\_5.5.1'.

If you have modified any of the configuration files in the previous release 'config' directory, you will need to apply your modifications to the corresponding files in the new installation 'config' directory. Such files may include:

**Config\_EMULATE** - Contains the JBCEMULATE settings

**Config\_TERM** - Contains translations from PICK TERM to linux TERM items

**jediLoggerAdminLog**, **jediLoggerConfig**, **jediLoggerTransLock** - Contains TJ log parameters

**jnet\_access**, **jnet\_config**, **jnet\_env**, **jnet\_map**, **jrfs\_config** - jRFS configuration files

**jspjobs\_config**, **jspform\_deflt**, **jspxl\_deflt** - jBASE spooler config files

**jLibDefinition** - Define shared object items

When upgrading a previous release of jBASE, the installer will not overwrite any existing JBASEADM account, SYSTEM file or jBASE Spooler configuration.

## Administration

### jBASE Users

jBASE users are normal Linux users. The installer automatically creates a Linux user group called jBASE. To create new Linux users joined to this group, follow the instructions below.

It is recommended that all jBASE users belong to the 'jbase' group, as their primary group. That way, they not only have access to other files belonging to the 'jbase' group, but any files they create will also belong to the 'jbase' group, and be accessible by other members of this group.

1. If you just completed the jBASE install above, exit out of the jSHELL prompt, by typing exit then Enter.![jbase-linux-installation-guide: blob](./blob-27.jpg)

2. Run the useradd command to add a new Linux user called for example, jbaseuser. This can be any username you wish.

``` bash
useradd -m -k /opt/jbase/CurrentVersion/src/skel -g jbase jbaseuser
```

![jbase-linux-installation-guide: blob](./blob-28.jpg)

3. Set the Linux password for the new user:

``` bash
# passwd jbaseuser
```

![jbase-linux-installation-guide: blob](./blob-29.jpg)

### jBASE Accounts

Now that we have created a Linux user, in order to login to jBASE, we must create a corresponding jBASE Account.

1. From the root command prompt, launch the jSHELL prompt by typing jbase.

``` bash
# jbase
```

2. If prompted, type JBASEADM for the username.![jbase-linux-installation-guide: blob](./blob-30.jpg)

3. You should now be back at the jSHELL prompt, type CREATE-ACCOUNT jbaseuser, or any account name to match the Linux user account you created in the previous section.

```
CREATE-ACCOUNT jbaseuser
```

![jbase-linux-installation-guide: blob](./blob-31.jpg)

4. Congratulations, now you have created the corresponding jBASE Account.

5. You may now login to the jSHELL prompt as the user:

![jbase-linux-installation-guide: blob](./blob-32.jpg)

6. You may also connect remotely from another Linux OS or Windows, typically with SSH protocol and a terminal emulator such as AccuTerm or Putty. First you are logging in with the Linux User username and password. Then, the jBASE environment variables automatically launch the jSHELL prompt. If prompted, enter the jBASE account username to continue. You should now be at the jSHELL prompt.![jbase-linux-installation-guide: blob](./blob-33.jpg)

## Support

Contact jBASE support in the United States at 866 582 8447 and from the United Kingdom at 0808 189 3266.  

You may also email devsup@jbase.com and visit [http://www.jbase.com/support/](http://www.jbase.com/support/) for more support options.

Back to [Installation Guides](./../README.md).
