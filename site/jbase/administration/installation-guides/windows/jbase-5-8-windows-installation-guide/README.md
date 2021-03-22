# jBASE 5.8 Windows Installation Guide

<PageHeader />

**Tags:**
<badge text='installing jbase on windows' vertical='middle' />
<badge text='windows' vertical='middle' />
<badge text='install ' vertical='middle' />
<badge text='jbase on windows' vertical='middle' />
<badge text='5.8' vertical='middle' />

## Document Scope

These instructions describe the system requirements and process for installing and initial configuration of jBASE 5.8.0 and later on a Microsoft Windows operating systems.

## System Requirements

jBASE 5.8 is a 64-bit application and must be installed on Microsoft Windows 64-bit operating systems.

jBASE 5.8 for Windows requires the same minimum hardware specifications as the host operating system plus a minimum of 500MB of additional hard disk space.

### Supported Operating Systems

- Windows 10 64-bit
- Windows Server 2016  
- Windows Server 2019  

> [How to verify your Windows Operating System](./../verify-your-windows-operating-system/README.md)

## Prerequisites

To install jBASE 5.8 for Windows, you will need the jbase\_5.8.x.xxx\_64bit.exe installer, license key and a user account with administrator privileges.  

For licensing assistance contact Zumasys jBASE support in the United States at 866 582 8447 and from the United Kingdom at 0808 189 3266 or sales@jbase.com.

### Installer File

![jBASE 5.8 Installer](./58Installer_1.jpg)

### License Information

As of the 5.8 version, jBASE can be licensed using either a conventional license key:

![jBASE Installation License](./58Installer_2.jpg)

or using CPU Licensing:

[jBASE CPU Licensing Overview](./../../../../licensing/cpu/README.md)  

jBASE 5.8 can either be installed on a clean system or used to upgrade from a previous jBASE 5.x version. We will cover both scenarios here.

### Installing on a clean system

![Welcome to the jBASE 5 Setup Wizard](./58Installer_2A.jpg)

jBASE now utilizes the command-line C compiler from Visual Studio 2019 by installing the Visual Studio Build Tools 2019. This process takes place before the jBASE installation proper.

![Install jBASE Prerequisites](./58Installer_3.jpg)

![jBASE Compiler Information](./58Installer_4.jpg)

![Download Visual Studio Build Tools Installer](./58Installer_5.jpg)

Click to install the Visual Studio Build Tools.

![Getting Everything Ready](./58Installer_6.jpg)

![Visual Studio Installer](./58Installer_7.jpg)

After the Build Installation completes, click the "Next" button to continue.

![Installation Completed](./58Installer_8.jpg)

![Searching for compiler](./58Installer_8A.jpg)

The installer will then save compiler configuration information for later use.

![Update jBASE Compiler Configuration](./58Installer_9.jpg)

Compiler Setup is complete and we can now install jBASE.

![Compiler Configuration Complete](./58Installer_10.jpg)

![Company Location](./58Installer_11.jpg)

![License Agreement](58Installer_12.jpg)

![Information](./58Installer_13.jpg)

![Install Runtime and jBASE Components Briefly](./58Installer_13A.jpg)

![Install Runtime and jBASE Components Finished](./58Installer_14.jpg)

We will cover the Advanced Installation Options, which provide control over what is installed and where.

![Installation Type](./58Installer_15.jpg)

![Select Destination Location](./58Installer_16.jpg)

With jBASE 5.8, user profiles are introduced and the default version is stored in JBCGLOBALDIR, which may now be a different location than JBCRELEASEDIR.

![Select Directory for jBASE Global Files](./58Installer_17.jpg)

![Select Directory for jBASE Data](./58Installer_18.jpg)
exit
![Select Start Menu Folder](./58Installer_19.jpg)

Decide which additional options you wish to install:

![Select Additional Tasks](./58Installer_20.jpg)

![jBASE Administrator User Name](./58Installer_21.jpg)

![jBASE Administrator Password](./58Installer_22.jpg)

![Ready to Install](./58Installer_23.jpg)

![Preparing to Install](./58Installer_24.jpg)

The jBASE installation process will be performed here, before displaying the following:

![Information](./58Installer_25.jpg)

![Completing the jBASE 5 Setup Wizard](./58Installer_26.jpg)

![jBASE 5.8 jshell prompt](./58Installer_27.jpg)

### Upgrading from a previous jBASE version

[Upgrading to jBASE 5.8 from a previous release](./../upgrading-to-5.8-windows/README.md)

Back to [Windows](./../README.md)

<PageFooter />
