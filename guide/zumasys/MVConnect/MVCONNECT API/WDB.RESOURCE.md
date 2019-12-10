# WDB.RESOURCE

**Created At:** 2/27/2018 9:44:30 PM  
**Updated At:** 4/18/2018 10:48:36 PM  


**WDB.RESOURCE record layout:**


| **Attribute** <br> | **Description** <br> |
| --- | --- |
| 001<br> | resource type - this should be 'P'<br> |
| 002<br> | description of the resource / service<br> |
| 003<br> | name of program to execute to handle the request<br> |
| 004<br> | reserved<br> |
| 005<br> | set to 1 to parse CGI variables before executing handler program<br> |
| 006<br> | set to 1 to enable this resource, 0 to disable<br> |
| 007<br> | set to 1 to save request debug information for use with WDEBUG debugging tool, 0 to disable debug info |
| 008<br> | resource account name - LOGTO this account before executing the resource handler program specified in attribute 3<br> |

