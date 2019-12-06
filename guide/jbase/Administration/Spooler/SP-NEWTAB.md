# SP-NEWTAB

**Created At:** 4/4/2018 9:45:21 AM  
**Updated At:** 1/24/2019 8:08:44 AM  


## Description 

The **SP-NEWTAB**command creates a new spooler structure. It takes the general form:

```
SP-NEWTAB 
```

### 


## Details 

This command can only be executed by root or an administrator. The default directory in which the spooler files are created is called jspooler. However, **SP-NEWTAB**allows a different directory to be specified. Before a user can access the spooler, its location must be specified using the environment variable JBCSPOOLERDIR. On UNIX platforms, **SP-NEWTAB** Prompts for the owner and group to be assigned to the spooler files. If not specified the owner is set to root and the group is set to lp.

**SP-NEWTAB**allows security settings for form queues and print jobs. These can be changed subsequently by using the commands [SP-SECURITY](306441-untitled-question), [SP-SECURITY-JOBS](306444-untitled-question), [SP-SECURITY-OWNER](306446-untitled-question) and [SP-SECURITY-QUEUE](306443-untitled-question). Please refer to the documentation for a full discussion of the security settings.

The **SP-NEWTAB** command does not kill despooling daemons. If a process was assigned to any formqueue other than STANDARD when the **SP-NEWTAB** command was executed, the process will be assigned to NO QUEUE.

The default formqueue STANDARD is re-initialized with a LPTR logical device type.




> ### Note: 
> 
> **SP-NEWTAB** removes all print jobs and form queues. The STANDARD formqueue is recreated.




Back to [Spooler.](jbase-spooler)
