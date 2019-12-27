# SP-PRIORITY

**Created At:** 4/5/2018 1:03:14 PM  
**Updated At:** 1/24/2019 8:27:49 AM  
**Original Doc:** [306474-sp-priority](https://docs.jbase.com/44205-spooler/306474-sp-priority)  
**Original ID:** 306474  
**Internal:** No  


## Description 

This commands moves a print job to the head of the formqueue. It takes the general form:

```
SP-PRIORITY print-job-number
```

where print-job-number is the number of the print job to move to the head of the formqueue.



If used without an argument, as:

```
SP-PRIORITY
```

the user will be prompted as:

```
PRINT JOB #:
```

The user will then enter the print job number desired to be moved to the head of the formqueue.

Back to [Spooler.](./../jbase-spooler)
