# Upgrading from a previous jBASE version

<PageHeader />

**Tags:**
<badge text='jbase upgrade' vertical='middle' />
<badge text='upgrade' vertical='middle' />

## Overview

For instructions on upgrading to jBASE 5.8, see either:

[Upgrading to jBASE 5.8 on Linux](./../linux/upgrading-to-5.8-linux/README.md)  
[Upgrading to jBASE 5.8 on Windows](./../windows/upgrading-to-5.8-windows/README.md)  

The jBASE installer will examine the directory pointed to by the JBCRELEASEDIR environment variable for a previous jBASE installation.

If a **config** directory is found in the previous jBASE release directory, the current contents of the previous 'config' directory will be backed up to 'config\_pre\_&lt;new version&gt; in the destination directory.

For example, on Windows, if, prior to installing this release of jBASE, JBCRELEASEDIR points to 'C:\jBASE5\5.2' and the new version of jBASE is 5.6.0, then the contents of 'C:\jBASE5\5.2\config' will be backed up as 'C:\jBASE\CurrentVersion\config\_pre\_5.6.0'.

On UNIX, JBCRELEASEDIR points to '/opt/jbase/5.2.31' and the new and the new version of jBASE is 5.6.0, then the contents of '/opt/jbase/5.2.31/config' will be backed up as '/opt/jbase/CurrentVersion/config\_pre\_5.6.0'.

## Note

>If you have modified any of the configuration files in the previous release **config** directory, you will need to apply your modifications to the corresponding files in the new installation **config** directory.

Such files may include:

**Config\_EMULATE** - Contains the JBCEMULATE settings

**Config\_TERM** - Contains translations from PICK TERM to linux TERM items

**jagent\_config** - Contains jAgent configuration settings

**jediLoggerAdminLog**, **jediLoggerConfig**, **jediLoggerTransLock** - Contains TJ log parameters

**jnet\_access**, **jnet\_config**, **jnet\_env**, **jnet\_map**, **jrfs\_config** - jRFS configuration files

**jspjobs\_config**, **jspform\_deflt**, **jspxl\_deflt** - jBASE spooler config files

**jshlogin** - if jsh shell is used as the login shell

**jLibDefinition** - Define shared object items

**system.json** - System profile information  

### Related Topics

[Installing the Compiler](./../../installation-guides/windows/windows-compiler-installation/README.md)

[Creating Accounts and Users](./../../installation-guides/windows/create-accounts-and-users/README.md)

[Manual License Key Installation](./../../installation-guides/licensing/manual-license-key-installation/README.md)

[Manual Installation of jDLS Service](./../../../daemons/manual-installation-of-jdls-service/README.md)

Back to [Installation Guides](./../README.md).

<PageFooter />
