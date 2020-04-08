# WHO

<PageHeader />

**Tags:**
<badge text='assign port number' vertical='middle' />
<badge text='who' vertical='middle' />
<badge text='logged in user' vertical='middle' />

## Description

The **WHO** utility displays the assigned port number and user for the current process. The user string reflects the JBCLOGNAME if configured otherwise the user name is the login user id.

```
WHO {PortNumber}
```

If **PortNumber** is specified, then the user for that port is displayed.

For some [emulations](./../../../environment-variables/jbcemulate), (e.g. ros), the system name and login user id are also displayed.

Back to [Utilities](./../utilities)
