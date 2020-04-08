# General Settings

<PageHeader />

## Description

This section describes where jBASE is installed and how it should behave.

| Section | Description |
| --- | --- |
| emulation   | Specify what MV platform to emulate as a default (**JBCEMULATE**). |
| emulation\_file           | Where to find config\_emulate. |
| jbase\_data\_files | Where to put jBASE workfiles and the default location for new accounts created with **CREATE-ACCOUNT** (**JBCDATADIR**) |
| md | This is an optional **MD** file, also known as **VOC** on some MV platforms (**JEDIFILENAME\_MD**). |
| system | This is the **SYSTEM** file used to define the locations of accounts (**JEDIFILENAME\_SYSTEM**). |
| default\_home | Default home directory, i.e. the starting directory/account when starting jBASE (**HOME**). |
| no\_admin\_mode | If you are just using a single session to enter code then set this to **true**, for multiple users set it to **false** so that shared memory is accessible to all users (Windows only) (**JBASE\_ENV\_DEVELOPER\_MODE**). |

Back to [Profiles](./../jbase-profiles)
