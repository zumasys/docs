# Updated Installer for jBASE 5.8

<PageHeader />

## Previous Release Behavior

n/a

## Current Release Behavior

### Windows Installer

The following changes apply to the Windows installer for jBASE release 5.8:

- Compiler installation is treated as a prerequisite and is prompted for first. If compiler installation is skipped the user will receive a warning to confirm that this is intentional.  
- After accepting the license agreement, the Microsoft Visual C Runtime is installed, and some temporary files needed by the installer are unpacked.  
- After selecting an installation type (Express or Advanced) and the installation directory (JBCRELEASEDIR), there is a new prompt to select the jBASE Global directory (JBCGLOBALDIR). Beginning with release 5.8.0, all configuration files and some other common files have been moved from JBCRELEASEDIR to JBASEGLOBALDIR. In this way, upgrading to newer jBASE releases is simplified because the configuration information is stored independent of the jBASE release.  
- License keys are no longer entered during installation. Follow instructions included with your license document for entering license keys.  
- After jBASE is installed and configured, the installer will display important notes that should be reviewed.  
- Installer command line options:  

  - /EXTRACTFILES  : installer will confirm license agreement and prompt for a directory to copy the installation file to. No other tasks are performed.  
  - /SILENT : performs an unattended install. The progress window is displayed, but no user interaction is required.  
  - /VERYSILENT : performs an unattended install without displaying the progress window.  
  - /CONFIG=*filename* : use a configuration file to provide default values for the normal installer prompts. This file is a variation of the jbase_config.json file used to configure jBASE. It should contain "environment" and "installation_options", and optionally "licenses". To view an example of "installation_options", perform a normal install, and examine the %JBCRELEASEDIR%\config\jbase_config.json file.  
- /LOG=*filename* : create a log during the installation.  

### Linux Installer

The following changes apply to the Linux installer for jBASE release 5.8:

- After accepting the license agreement, the installer checks for required packages ksh, gcc, and ncurses. Any missing dependencies are installed using yum.
- After selecting an installation type (Express or Advanced) and the installation directory (JBCRELEASEDIR), there is a new prompt to select the jBASE Global directory (JBCGLOBALDIR). Beginning with release 5.8.0, all configuration files and some other common files have been moved from JBCRELEASEDIR to JBASEGLOBALDIR. In this way, upgrading to newer jBASE releases is simplified because the configuration information is stored independent of the jBASE release.
- License keys are no longer entered during installation. Follow instructions included with your license document for entering license keys.
- After jBASE is installed and configured, the installer will display important notes that should be reviewed.
- Installer command line options ( Note: "--" precedes the options, with a space before and after the "--" )

    . -- extractfiles  : installer will confirm license agreement and prompt for a directory to copy the installation file to. No other tasks are performed.  
    . -- unattended : performs an unattended install. No user interaction is required. This is normally used in conjunction with the config option.  
    . -- config=*filename* : use a configuration file to provide default values for the normal installer prompts. This file is a variation of the jbase_config.json file used to configure jBASE. It should contain "environment" and "installation_options", and optionally "licenses".  
          - To view an example of "installation_options", perform a normal install, and examine the $JBCRELEASEDIR/config/jbase_config.json file.  
    . -- log=*filename* : create a log during the installation.  

## Example

```bash
[root@cranfield tmp]# ./Linux_jBASE_5.8.3_948d8070_64bit.bin -- unattended config=jbase_config.json log=install.log
```

## Unattended Installation

During unattended install, if user interaction would normally be required, the installer will default to the "OK" or "Ignore" choice. Using the LOG and CONFIG options is recommended for unattended installations.  

See also [Unattended jBASE Installs](./../../../../administration/installation-guides/unattended-install/README.md)

Back to [5.8.0 Release Notes](./../README.md)

<PageFooter />
