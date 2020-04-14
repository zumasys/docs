# jBASE 5.6 Windows Installation Guide

<PageHeader />

**Tags:**
<badge text='installing jbase on windows' vertical='middle' />
<badge text='windows' vertical='middle' />
<badge text='install ' vertical='middle' />
<badge text='jbase on windows' vertical='middle' />

## Document Scope

These instructions describe the system requirements and process for installing and initial configuration of jBASE 5.6 on Microsoft Windows operating systems.

## System requirements

jBASE 5.6 is a 64-bit application and must be installed on Microsoft Windows 64-bit operating systems.

jBASE 5.6 for Windows requires the same minimum hardware specifications as the host operating system plus a minimum of 500MB of additional hard disk space.

### Supported Operating Systems

- Windows 7 64-bit
- Windows 8/8.1 64-bit
- Windows 10 64-bit
- Windows Server 2008 R2
- Windows Server 2012
- Windows Server 2012 R2

> [How to verify your Windows Operating System](./../verify-your-windows-operating-system)

## Licence Information

To install jBASE 5.6 for Windows, you will need the JBASE\_5.6.0.xxx\_rel\_64bit.exe installer, license key and a user account with administrator privileges. For licensing assistance contact Zumasys jBASE support in the United States at 866 582 8447 and from the United Kingdom at 0808 189 3266 or sales@jbase.com.

### Installer File

![jbase-56-windows-installation-guide: installer](./installer.jpg)

### LICENSE INFORMATION

![jbase-56-windows-installation-guide: licence_info](./licence_info.jpg)

## Installation

### Installation Types

The jBASE installer provides two installation modes: **Express** and **Advanced**.  Continue to [Upgrade from a Previous Version](./../upgrading-from-a-previous-version), if you already have jBASE installed.

**Express:** install jBASE with typical options and services. Select this option if you are new to jBASE and wish to get started quickly. Express mode installs jBASE, creates a jBASE Administrator user and account, creates a SYSTEM file to organize jBASE accounts, initializes the spooler, installs and starts JBASE services.

**Advanced**: allows you to select which features and services to install. Select this option if you need to customize the location of the SYSTEM file, administrator account, or JBASE spooler, or if you do not want some of these features installed. Also select this option to select which optional services to install (telnet and jRCS).

> ### Note
>
> The jRemote client will be located in  C:\jBASE\CurrentVersion\clients\csjrcs

Each step below will highlight which mode this step pertains. If you do not see the step during installation, skip to the next step as it may not apply to the mode chosen.

### Starting the Installation

1. Launch the installer and choose Run if prompted.

Applies to: **Express** **Advanced**

![jbase-56-windows-installation-guide: start_install](./start_install.jpg)

2. Choose your company location and then click Next.

Applies to: **Express** **Advanced**

![jbase-56-windows-installation-guide: location_selection](./location_selection.jpg)

3. Review the End User License Agreement (EULA) and choose I Agree. Then click Next.

Applies to: **Express** **Advanced**

![jbase-56-windows-installation-guide: accept_eula](./accept_eula.jpg)

4. Choose the installation type, then click Next. See the beginning of this section for more detail about each mode.

Applies to: **Express** **Advanced**

![jbase-56-windows-installation-guide: install_type](./install_type.jpg)

5. Choose the installation path for jBASE, default is C:\jBASE\5.6.0. Then click Next.

For Windows Server installations, it is recommended to install to an alternate partition than the C:\ System partition if available, however JBASE will install properly on any local partition if there is sufficient free disk space.

Applies to: **Express** **Advanced**

6. Choose the path for the jBASE data directory, this will default to the same as the installation path. Then click Next.

Applies to: Express **Advanced**

7. Choose the Start Menu folder for the application shortcuts, default is “jBASE”, click Next.

Applies to: Express **Advanced**

![jbase-56-windows-installation-guide: install_directory](./install_directory.jpg)

8. Choose the installation options, then click Next.

Applies to: Express **Advanced**

![jbase-56-windows-installation-guide: installation_options](./installation_options.jpg)

**Create jBASE administrator user** The installer can create a new Windows user to perform jBASE administrative functions such as creating new jBASE accounts. The jBASE administrator also owns the jBASE system files. If you select this option, you will be prompted for the user name and password. An existing user name is acceptable, for example, when performing an upgrade of jBASE.

**Create SYSTEM file to organize jBASE accounts** In jBASE, the SYSTEM file is optional. However, using a SYSTEM file provides a convenient way to organize your jBASE accounts, and is required for using Q-pointers and the LOGTO command in your JBASE applications.

**Create JBASEADM account for administrative functions** The JBASEADM account can be used to perform jBASE administrative tasks such as creating or deleting other jBASE accounts.

**Initialize the print spooler** Select this option to initialize the default print spooler configuration after a new installation. *Note: this option is not available for upgrade installations.*

**Start telnet server** The jBASE telnet server is required to support remote connections to jBASE over telnet. The telnet server runs as a Windows service. By default, the telnet server listens on TCP port 23. See [Windows Telnet](./../../../jbase/windows-telnet-%28telnetd.exe%29) article for information on configuring the jBASE telnet server.

**Start jRCS service** The jBASE Remote Connectivity Server (jRCS) provides remote access to your jBASE system. jBASE System Manager uses this service to perform management tasks on your jBASE system. By default, the jRCS server listens on TCP port 8236. See the jBASE knowledgebase article [jRCS](./../../../connectivity/jbase-remote-connectivity-server-(jrcs)/README.md) for more information regarding jRCS.

9. Type a username to be created for the jBASE Administrator. The installer will create a local Windows user account who will "own" the jBASE system files, and can be used to perform jBASE administrative tasks such as creating new jBASE accounts. If the user does not exist, the installer will create the user for you. Then click Next.

Applies to: **Express** **Advanced**

![jbase-56-windows-installation-guide: admin_username](./admin_username.jpg)

10. If the user name specified in the previous screen does not exist, you need to specify a password for this user. If there are Windows Group Policy requirements that apply to this computer, you must type a password that meets the requirements, then click Next. The installer will not create a new user without a password. Because security policies vary widely, it is not possible for the jBASE installer to validate that the password you enter conforms to the local security policy of the computer. Be sure to follow your local security policy regarding passwords. Otherwise the installer will not be able to create the JBASE Administrator user, and you will need to do this manually after the installation.

Applies to: **Express** **Advanced**

![jbase-56-windows-installation-guide: admin_user_paswd](./admin_user_paswd.jpg)

11. Enter a jBASE license key, then click Next.

Applies to: **Express** **Advanced**

![jbase-56-windows-installation-guide: licence_key](./licence_key.jpg)

jBASE requires a valid license key in order to operate. Either a permanent or evaluation key may be used. If your license key is an evaluation key, check the 'Evaluation License' check-box. If you have been issued a Multisession or Websession license key, enter these keys in the respective fields. If you are upgrading from a previous version of jBASE, the installer will attempt to locate your existing license keys and use them to populate the license key fields on this page. *Note: the installer will not continue unless you enter a license key.*

For licensing assistance contact Zumasys jBASE support in the United States at 866 582 8447 and from the United Kingdom at 0808 189 3266 or sales@jbase.com.

12. Review the summary information and then click Install.

Applies to: **Express** **Advanced**

![jbase-56-windows-installation-guide: review_before_install](./review_before_install.jpg)

13. The jBASE release files are copied to the destination folder, replacing any existing files if installing over an existing installation.

Applies to: **Express** **Advanced**

![jbase-56-windows-installation-guide: installing](./installing.jpg)

14. After copying the jBASE release files, the installer will install the Microsoft Visual C++ runtime. Finally, optional configuration tasks are performed, such as creating the jBASE Administrator user, creating the SYSTEM file, the JBASEADM account, initializing the spooler, and installing and starting the jBASE services.

Applies to: **Express** **Advanced**

**![jbase-56-windows-installation-guide: c___install](./c___install.jpg)**

15. If jBASE installation was successful, two additional options are available: install the compiler (see next section) and open a jShell command prompt. If the installation was not successful, for example, an invalid license key was entered, an error message will be displayed.

Applies to: **Express** **Advanced**

![jbase-56-windows-installation-guide: succesful_install](./succesful_install.jpg)

The installation of jBASE is complete.  Continue on to [Installing the Compiler](./../windows-compiler-installation).

### related Topics

[Upgrading from a Previous Version](./../upgrading-from-a-previous-version)

[Installing the Compiler](./../windows-compiler-installation)

[Manual Installation of jDLS Service](./../../../jbase/manual-installation-of-jdls-service)

[Creating Accounts and Users](./../create-accounts-and-users)

[Manual License Key Installation](./../manual-license-key-installation)

Back to [Installation Guides](./../README.md).

<PageFooter />
