# LOGTO

<PageHeader />

## Description

Switches to the specified user account.

```
LOGTO {account-name{,password}}
```

Where:

* **account-name** is the defined in the SYSTEM file.
* **password** is only required if a password as been assigned to the corresponding SYSTEM entry via the **PASSWORD** command.

If *account-name* is not specified, the user will be prompted. If the account is password protected then *password* will also be prompted.

## Note

> * Execution of this command changes the environment as defined in the SYSTEM File entry. The one exception is that the *PATH* defined in the account will be prepended to the existing path.
> 
> * This command does not directly support any options. However, it is possible to specify options specific to the destination account's environment via the SYSTEM File entry.
>
> * This command *cannot* be used in the command stream for PH-START or in the Primary input buffer of a jCL command.

### Example

```
LOGTO homer
```

Logs off the current account and logs into the **homer** account.

Back to [Accounts](./../README.md)

<PageFooter />
