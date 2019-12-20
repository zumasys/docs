# GENERAL SETTINGS

**Created At:** 4/5/2018 5:01:36 PM  
**Updated At:** 4/5/2018 5:10:52 PM  


## Description 

This section describes where jBASE is installed and how it should behave.


| Section<br> | Description<br> |
| --- | --- |
| emulation  <br> | Specify what MV platform to emulate as a default (**JBCEMULATE**).<br> |
| emulation\_file          <br> | Where to find config\_emulate.<br> |
| jbase\_data\_files<br> | Where to put jBASE workfiles and the default location for new accounts created with **CREATE-ACCOUNT**(**JBCDATADIR**)<br> |
| md<br> | This is an optional **MD**file, also known as **VOC**on some MV platforms (**JEDIFILENAME\_MD**).<br> |
| system<br> | This is the **SYSTEM**file used to define the locations of accounts (**JEDIFILENAME\_SYSTEM**).<br> |
| default\_home<br> | Default home directory, i.e. the starting directory/account when starting jBASE (**HOME**).<br> |
| no\_admin\_mode<br> | if you are just using a single session to hammer in code then set this to **true**, for multiple users set it to **false** so that shared memory is accessible to all users (Windows only) (**JBASE\_ENV\_DEVELOPER\_MODE**).<br> |




Back to [Profiles](jbase-profiles57)
