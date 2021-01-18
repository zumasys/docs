# SP-SECURITY-OWNER

<PageHeader />

## Description

This command allows for the definition of a list of users who are considered “alternate” owners of a formqueue. This list of users is used when the form queue security state is set to “OWNER”,  or the print job security state is set to “OWNER”.

The command takes the general form:

```
SP-SECURITY-OWNER queuename {user {user...}}
```

For example, to make users “personnel” and “footwear” the alternative owners of the formqueue “LIBRARY” the command would be as:

```
SP-SECURITY-OWNER LIBRARY personnel footwear
```

Back to [Spooler.](./../jbase-spooler)

<PageFooter />
