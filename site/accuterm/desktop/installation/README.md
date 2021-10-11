# Installation

<PageHeader />

## Description

This feature is available beginning with AccuTerm 8 release 8.0.

## Automated Deployment

**Overview**

For automated installation, you need to create a `setup.ini` file, which the installer will use for any installation options. Place this file in the same directory as the AccuTerm `installer.exe`

```
;
; Custom setup for AccuTerm 8
;
; Use atwin_8.0.1000.exe /silent or /verysilent for a "quiet" unattended installation
;
; Items which can be defined:
[Defaults]
;MAINDIR=Program Files\atwin80
;HOMEDIR=My Documents
;DESKTOPSHORTCUT=Y
;ALLUSERS=Y
;AUTOACTIVATE=Y or N
;AUTOUPGRADE=Y or N or numeric value (see help)
;CUSTOMFEATURECODE=xxxx
;LICENSEKEY=xxxx-xxxx-xxxx-xxxx-xxxx
;KEYTYPE=1 (device-based license) or 0 (user-based license)
;EMAIL=you@company.com (for user-based license only)
[CustomFiles]
;Main=folder containing extra files copied to the main program directory
;Images=folder containing extra image files copied to the Images sub-directory
;Home=folder containing pre-configured session or layout files copied to home directory
[CustomShortcut]
;Name=name of shortcut
;Target=path to .exe, .atsp, .atlp or .atsc file (can use %HOMEDIR% or %MAINDIR% prefix for path)
;Icon=path to file containing icon (can use %HOMEDIR% or %MAINDIR% prefix for path)
;Index=n (index of icon, if icon is contained in an exe file with multiple icons)
;State=n (initial window state: 1=normal, 2=minimized, 3=maximized)
```

> **Note:**
> Please ensure these fields are filled correctly.
>
>  * ALLUSERS=Y
>  * AUTOACTIVATE=Y
>  * AUTOUPGRADE=Y 
>  * LICENSEKEY=xxxx-xxxx-xxxx-xxxx-xxxx
>  * KEYTYPE=1

The `AUTOACTIVATE`, `LICENSEKEY` & `KEYTYPE` fields only make sense when using device licensing.

The `setup.ini` file needs to be in the same directory as the `installer.exe`. You can use whatever mechanism you have for automated installation. Use the `/VERYSILENT` command line switch when invoking the installer unattended.


<PageFooter />