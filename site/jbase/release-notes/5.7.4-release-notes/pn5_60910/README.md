# PN5_60910

<PageHeader />

## Description

Add jDLS status to **jdiag** output when using **-s** or **-v** option (show services)

### Previous Release Behavior

Only status of jRFS and Telnetd Windows services was displayed when using **-s** or **-v** option.

### Current Release Behavior

Display status of jDLS and jRLA services (jBASE service, not Windows service) when using **-s** or **-v** option. Also display status of jDLS, jRCS and jSHMD Windows services.

### Notes

>To display status of Windows services, the **jdiag** command must be run with elevated privileges (run as administrator).
