# Create Account

<PageHeader />

**Tags:**
<badge text='account' vertical='middle' />
<badge text='create ' vertical='middle' />
<badge text='create-account' vertical='middle' />

## Creating an Account

The **CREATE-ACCOUNT** command enables the user to create a new account for use within the jBASE system.

### Command Syntax

```
CREATE-ACCOUNT {options} AccountName
```

### Syntax Elements

- **AccountName** - the name of the account record in the SYSTEM file.  
  This can be a full path, a relative path or just the name of the account.  
  If a full or relative path is used then the last element of the path is used as the account name.

### Options

| Option | Description |
| --- | --- |
| -e emulation | the emulation for the account |
| -m path      | full path to existing MD (implies -n) |
| -n           | do not create an MD for the account |
| -r           | generate a **remote.cmd** for Telnet (Windows only) |
| -b dirs      | include additional bin directories |
| -l dirs      | include additional lib directories |
| -p           | Prompt for an Account Password (jBASE 5.8 forward) |
| -h or -?     | show helps (ignored if there are other options) |

Back to [Tools and Utilities](./../README.md)

<PageFooter />
