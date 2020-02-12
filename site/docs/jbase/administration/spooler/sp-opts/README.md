# SP-OPTS

**Created At:** 4/5/2018 10:07:02 AM  
**Updated At:** 1/24/2019 8:29:32 AM  
**Original Doc:** [306451-sp-opts](https://docs.jbase.com/44205-spooler/306451-sp-opts)  
**Original ID:** 306451  
**Internal:** No  

## Description

This command changes the spooler assignment options assigned to a print job. It takes the general form:

```
SP-OPTS print-job-num options
```

where:

- **print-job-num** is the number of the print job to change.
- **options** are the options to be assigned to the print job. If no parameter is supplied for **options** then all current options are cancelled, except the P and U options, which cannot be changed. 
  
- Valid **options** are:  
  - A – Align
  - H - Hold

If used without arguments, as:

```
SP-OPTS
```

the user will be prompted as:

```
PRINT JOB #     OPTIONS:
```

The user will then enter the print job number, and the desired option.

> ### Note
>
> Options cannot be changed for print jobs once the job is being despooled.

Back to [Spooler](./../jbase-spooler).
