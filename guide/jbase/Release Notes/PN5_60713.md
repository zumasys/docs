# PN5_60713

**Created At:** 2/7/2018 2:04:04 PM  
**Updated At:** 2/7/2018 2:05:23 PM  


### Description

jbase\_agent not working as a service on Windows



### Previous Release Behavior

The **jServControl** command was not effective at controlling the jAgent service.

Additionally, the **jbase\_agent** helps were not updated to reflect Windows usage.



### Current Release Behavior

All jAgent functionality has been removed from the **jServControl** command.

The **jbase\_agent** help screen has been updated to reflect Windows usage.

The **jbase\_agent** command is now the sole utility for managing the jAgent service on all platforms.
