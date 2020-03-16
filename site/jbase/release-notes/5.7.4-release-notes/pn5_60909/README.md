# PN5_60909

**Created At:** 9/25/2019 7:37:26 AM  
**Updated At:** 10/6/2019 11:03:58 AM  
**Original Doc:** [pn5_60909](https://docs.jbase.com/75024-5-7-4-release-notes/pn5_60909)  
**Original ID:** 460056  
**Internal:** No  

## Description

Update **jBaseIsAdminUser** in **jwinnt.c** to eliminate the **CheckTokenMembership** call, eliminating requirement for elevated privileges to qualify as an admin user.

### Previous Release Behavior

Several jBASE commands which require admin privileges would fail on Windows if the process was not running with elevated privileges. This prevented any of these commands from being usable from a telnet connection since the process was not elevated, even if the user was a member of the admin group. This affects jsecurity, jlogadmin, clear-basic-locks, clear-item-locks, logoff, all database control commands starting with DB-, etc.

### Current Release Behavior

Commands requiring admin privileges will run on Windows without error if the user is a member of the admimistrators group, regardless of privilege elevation. **jServControl** continues to require elevated privileges due to Windows API constraints.

Back to [5.7.4 Release Notes](./../README.md)
