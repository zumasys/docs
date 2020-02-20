# Create Account

**Created At:** 2/12/2019 1:24:59 AM  
**Updated At:** 2/12/2019 1:28:29 AM  
**Original Doc:** [create-account](https://docs.jbase.com/46963-utilities/create-account)  
**Original ID:** 364468  
**Internal:** No  

**Tags:**
<badge text='account' vertical='middle' />
<badge text='create ' vertical='middle' />
<badge text='create-account' vertical='middle' />

## Creating an Account

The **CREATE-ACCOUNT** command enables the user to create a new account for use within the jBASE system.

### Command Syntax

```
CREATE-ACCOUNT -Options <accountdirectory> <accountname>
```

### Syntax Elements

- **Account Directory** - the full path or a name relative to the current directory
- **Account Name** - the name of the account record in the SYSTEM file. If Account Name is not specified, the last element in Account Directory is used as the account name.
- **Options** :

| Option | Description |
| --- | --- |
| -m md\_path   | full path to existing MD (implies -n) |
| -n           | do not create an MD for the account |
| -r           | generate remote.cmd for Telnet (Windows only) |
| -b dirs     | include additional bin directories |
| -l dirs     | include additional lib directories |
| -h or -?     | show helps (ignored if there are other options) |

Back to [Utilities](./../utilities)
