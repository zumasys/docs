# PN5_60910

**Created At:** 9/25/2019 7:35:45 AM  
**Updated At:** 10/6/2019 11:03:58 AM  
**Original Doc:** [pn5_60910](https://docs.jbase.com/75024-5-7-4-release-notes/pn5_60910)  
**Original ID:** 460055  
**Internal:** No  


### Description

Add jDLS status to **jdiag** output when using **-s** or **-v** option (show services)



### Previous Release Behavior

Only status of jRFS and Telnetd Windows services was displayed when using **-s** or **-v** option.



### Current Release Behavior

Display status of jDLS and jRLA services (jBASE service, not Windows service) when using **-s** or **-v** option. Also display status of jDLS, jRCS and jSHMD Windows services.



### Notes

To display status of Windows services, the **jdiag** command must be run with elevated privileges (run as administrator).
