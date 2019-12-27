# WWW.INFO

**Created At:** 6/27/2017 8:08:14 PM  
**Updated At:** 11/25/2017 10:58:35 AM  
**Original Doc:** [wwwinfo](https://docs.zumasys.com/36566-mv-connect-api/wwwinfo)  
**Original ID:** 261449  
**Internal:** No  


WWW.INFO is a common variable that stores all the web information.  It is not recommended you directly access the common due to platform/emulation issues.  Instead you can use the WGETINFO function to gain access to any of the commons




| Common Position | Description | Subroutine |
| --- | --- | --- |
| 25 | All passed variable names. |  |
| 26 | All passed variable values | WGETVAR |
| 27 | All passed cookie names | <br> |
| 28 | All passed cookie values | WGETCOOKIE |
| 29 | Server Name | <br> |
| 30 | Cgi Path | <br> |
| 31 | Server Port | <br> |
| 32 | Body | WGETBODY |
| 33 | All Passed Headers Names | <br> |
| 34 | All Passed Header Values | WGETHEADER |
| 35 | Rest Params (params after Resource) | WGETPARAM |
| 36 | Config file | WGETCONFIG |
| <br> | <br> | <br> |

