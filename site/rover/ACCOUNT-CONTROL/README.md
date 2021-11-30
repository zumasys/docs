## Define Account Security (ACCOUNT.CONTROL)
<PageHeader />
[link](/site/rover/ACE-Overview/README.md)
**Purpose**
The ACCOUNT.CONTROL procedure is used indicate that an account is to be
secured for all users. This allows the System Administrator to specify that
security is needed on an account by account basis. Each account must be
entered with a 'Y' in order to secure the account. Accounts either not listed,
or which do not contain a 'Y' are considered un-secured.

Accounts which are not secured will, upon user login, allow the entry of any
user ID and not prompt for a password. Also, users who exit the menu (e.g.
press the F1 key) will be left at the system level command prompt.

When security is enabled for an account, the user will be prompted for a
password after they enter their user ID. This entry will be validated against
their password in their user profile to verify access to the account. When
secured, users exiting the menu (e.g. pressing the F1 key) are logged off.

**Frequency of Use**
Generally, this is only required when the system is intially installed.

**Prerequisites**
All users and their security profiles must be entered via the SECURITY.E
procedure.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
