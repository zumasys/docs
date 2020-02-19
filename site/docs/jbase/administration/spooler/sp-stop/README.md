# SP-STOP

**Created At:** 4/5/2018 10:24:20 AM  
**Updated At:** 1/24/2019 8:23:45 AM  
**Original Doc:** [306456-sp-stop](https://docs.jbase.com/44205-spooler/306456-sp-stop)  
**Original ID:** 306456  
**Internal:** No  

## Description

This command stops despooling from a formqueue. It takes the general form:

```
SP-STOP formqueue
```

where **formqueue** is the formqueue from which to stop despooling.

If used without arguments,as:

```
SP-STOP
```

the user will be prompted as:

```
FORM-QUEUE OR PRINT JOB:
```

The user will then enter the formqueue or printjob to be stopped.

> ### Note
>
> Despooling will stop after the current print job is despooled. To resume printing refer to Option 7 - the [SP-RESUME](./../sp-resume) command.

Back to [Spooler.](./../jbase-spooler)
