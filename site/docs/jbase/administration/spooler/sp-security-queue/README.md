# SP-SECURITY-QUEUE

**Created At:** 4/5/2018 9:36:26 AM  
**Updated At:** 1/24/2019 8:24:41 AM  
**Original Doc:** [306443-sp-security-queue](https://docs.jbase.com/44205-spooler/306443-sp-security-queue)  


## Description 

This command modifies the security state of a form queue. The command takes the general form:

```
SP-SECURITY-QUEUE queuename (CREATOR | QUEUE | NONE)
```

For example, to modify the security of form queue “PAYROLL” such that only the user who created that form queue has access to it, the command would be as:

```
SP-SECURITY-QUEUE PAYROLL CREATOR
```

For example, to modify the security of form queue “MAILSHOT” such that ANY user can modify the form queue, command would be as:

```
SP-SECURITY-QUEUE MAILSHOT NONE
```



Back to [Spooler.](jbase-spooler)
