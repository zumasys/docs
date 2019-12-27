# WHO

**Created At:** 9/11/2018 1:20:03 PM  
**Updated At:** 12/28/2018 2:12:17 PM  
**Original Doc:** [who](https://docs.jbase.com/46963-utilities/who)  
**Original ID:** 338995  
**Internal:** No  

**Tags:**
<badge text='assign port number' vertical='middle' />
<badge text='who' vertical='middle' />
<badge text='logged in user' vertical='middle' />

## Description

The WHO utility displays the assigned port number and user for the current process. The user string reflects the JBCLOGNAME if configured otherwise the user name is the login user id.

```
WHO {PortNumber}
```

If **PortNumber** is specified, then the user for that port is displayed.

For some [emulations](./../../../environment-variables/jbcemulate), (e.g. ros), the system name and login user id are also displayed.
