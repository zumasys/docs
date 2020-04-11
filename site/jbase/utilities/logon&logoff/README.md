# LOGON/LOGOFF

<PageHeader />

**Tags:**
<badge text='utility' vertical='middle' />
<badge text='logon/logoff' vertical='middle' />
<badge text='logoff' vertical='middle' />
<badge text='logon' vertical='middle' />

## Logon

The **LOGON** utility can be used to logon a background process to execute a user login. The user login will execute the .profile, which can be modified in order to execute a logon proc via the "exec jsh -" mechanism.

```
LOGON Port, UserName, Password
```

## Logoff

The **LOGOFF** utility can be used to logoff another process. Root privileges are required to logoff another process logged on with a different user id.

```
LOGOFF {port | startport-endport}
```

## Note

> Use caution when terminating processes with LOGOFF. Although there is no risk of file corruption, a terminated process may compromise logical database integrity.

Examples of use are as:

```
LOGON 6, superman, kryptonite
LOGOFF 42
LOGOFF 1-9999
```

Back to [Utilities](./../utilities)

  
<PageFooter />
