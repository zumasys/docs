# PN5_60909

<PageHeader />

## Description

Update **jBaseIsAdminUser** in **jwinnt.c** to eliminate the **CheckTokenMembership** call, eliminating requirement for elevated privileges to qualify as an admin user.

### Previous Release Behavior

Several jBASE commands which require admin privileges would fail on Windows if the process was not running with elevated privileges. This prevented any of these commands from being usable from a telnet connection since the process was not elevated, even if the user was a member of the admin group. This affects jsecurity, jlogadmin, clear-basic-locks, clear-item-locks, logoff, all database control commands starting with DB-, etc.

### Current Release Behavior

Commands requiring admin privileges will run on Windows without error if the user is a member of the admimistrators group, regardless of privilege elevation. **jServControl** continues to require elevated privileges due to Windows API constraints.

Back to [5.7.4 Release Notes](./../README.md)
