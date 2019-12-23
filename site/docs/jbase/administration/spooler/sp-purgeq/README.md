# SP-PURGEQ

**Created At:** 4/5/2018 8:53:58 AM  
**Updated At:** 1/24/2019 8:17:04 AM  
**Original Doc:** [306436-sp-purgeq](https://docs.jbase.com/44205-spooler/306436-sp-purgeq)  


## Description

This command purges a formqueue of a specific print or all print jobs. It takes the general form:

```
SP-PURGEQ
```

The user will then be prompted as:

```
FORM-QUEUE PRINT JOB LIST (OR * FOR ALL):
```



This command will delete the print job or jobs irrespective of status. If all jobs are requested the jspprint despool will also be stopped.


> ### Note: 
> 
> This command can only be run by root (UNIX), or an Administrator (Windows).




Back to [Spooler.](./../jbase-spooler)
