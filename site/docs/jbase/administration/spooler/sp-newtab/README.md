# SP-NEWTAB

**Created At:** 4/4/2018 9:45:21 AM  
**Updated At:** 1/24/2019 8:08:44 AM  
**Original Doc:** [306221-sp-newtab](https://docs.jbase.com/44205-spooler/306221-sp-newtab)  
**Original ID:** 306221  
**Internal:** No  


## Description 

The **SP-NEWTAB**command creates a new spooler structure. It takes the general form:

```
SP-NEWTAB 
```

### 


## Details 

This command can only be executed by root or an administrator. The default directory in which the spooler files are created is called jspooler. However, **SP-NEWTAB**allows a different directory to be specified. Before a user can access the spooler, its location must be specified using the environment variable JBCSPOOLERDIR. On UNIX platforms, **SP-NEWTAB** Prompts for the owner and group to be assigned to the spooler files. If not specified the owner is set to root and the group is set to lp.

**SP-NEWTAB**allows security settings for form queues and print jobs. These can be changed subsequently by using the commands [SP-SECURITY](./../sp-security), [SP-SECURITY-JOBS](./../sp-security-jobs), [SP-SECURITY-OWNER](./../sp-security-owner) and [SP-SECURITY-QUEUE](./../sp-security-queue). Please refer to the documentation for a full discussion of the security settings.

The **SP-NEWTAB** command does not kill despooling daemons. If a process was assigned to any formqueue other than STANDARD when the **SP-NEWTAB** command was executed, the process will be assigned to NO QUEUE.

The default formqueue STANDARD is re-initialized with a LPTR logical device type.




> ### Note: 
> 
> **SP-NEWTAB** removes all print jobs and form queues. The STANDARD formqueue is recreated.




Back to [Spooler.](./../jbase-spooler)
