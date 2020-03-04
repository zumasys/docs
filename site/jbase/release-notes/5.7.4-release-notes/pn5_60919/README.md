# PN5_60919

**Created At:** 10/6/2019 8:13:31 AM  
**Updated At:** 10/14/2019 10:10:17 AM  
**Original Doc:** [pn5_60919](https://docs.jbase.com/75024-5-7-4-release-notes/pn5_60919)  
**Original ID:** 477360  
**Internal:** No  


### Description

Multi-session licenses limited to 255 sessions and up to 255 licenses per session



### Previous Release Behavior

The license did not support more than 255 sessions/licenses.



### Current Release Behavior

The limit now for multi-session licenses is 65535 sessions and 65535 licenses per session



### Notes

The change is backwards compatible, up to a point.

For Linux, when the first user logs on, it creates shared memory and loads the license and there it stays until the shared memory is removed or jLicenseUpgrade is run.

For releases prior to 5.7.4, this will be limited to 255 sessions/licenses.

If a new license is installed using 5.7.4 or greater with this patch, and the number of sessions/licenses is less than 255, then there is no problem -- users running 5.7.4 and users running earlier versions will both see the correct value.

However, if a new license is installed using 5.7.4 and the number of sessions/licenses is MORE than 255, then only the 5.7.4 users will see this change. For users on jBASE 5.7.3 or earlier they will see an indeterminate figure, and so will need to upgrade to 5.7.4
