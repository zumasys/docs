# SP-KILL

**Created At:** 4/5/2018 1:08:24 PM  
**Updated At:** 1/24/2019 8:41:18 AM  
**Original Doc:** [306475-sp-kill](https://docs.jbase.com/44205-spooler/306475-sp-kill)  
**Original ID:** 306475  
**Internal:** No  

## Description

This command immediately stops despooling the current print job. It takes the general form:

```
SP-KILL formqueue
```

where **formqueue** is the formqueue from which the print job is being despooled.

If used without it's argument, the user will be prompted to enter the formqueue as:

```
FORM-QUEUE:
```

> ### Note
>
> The print job status is changed from PRINTING to KILLED and the print job is deleted. If the print job was a hold file, the status of the print job changes to FINISHED. The next print job on the formqueue will then be despooled.

Back to [Spooler.](./../jbase-spooler)
