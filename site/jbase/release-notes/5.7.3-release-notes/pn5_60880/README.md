# PN5_60880

<PageHeader />

## Description

Create 64-bit build of **telnet**/**transcmd** with a registry option to set the code page

### Previous Release Behavior

The 32 bit release build of transcmd was encountering a segmentation violation error in the Microsoft **conhost.exe** on a system running with code page 65001.

### Current Release Behavior

Setting the code page to 850 for **transcmd** no longer encounters a segmentation error in **conhost.exe**

### Notes

>As this is a 64 bit build, registry setting are now found in **HKEY\_LOCAL\_MACHINE\SOFTWARE\JAC\jBASE Telnetd Server\CurrentVersion**

Back to [5.7.3 Release Notes](./../README.md)
