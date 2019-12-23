# SP-SECURITY-OWNER

**Created At:** 4/5/2018 9:48:40 AM  
**Updated At:** 1/24/2019 8:25:31 AM  
**Original Doc:** [306446-sp-security-owner](https://docs.jbase.com/44205-spooler/306446-sp-security-owner)  


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


