# SP-SUSPEND

**Created At:** 4/5/2018 12:58:04 PM  
**Updated At:** 1/24/2019 8:23:05 AM  
**Original Doc:** [306472-sp-suspend](https://docs.jbase.com/44205-spooler/306472-sp-suspend)  
**Original ID:** 306472  
**Internal:** No  

## Description

This command suspends despooling a print job. It takes the general form:

```
SP-SUSPEND formqueue
```

where **formqueue** is the formqueue from which the print job is being despooled.

If used without an argument as:

```
SP-SUSPEND
```

the user will be prompted as:

```
FORM-QUEUE:
```

The user will then enter the fromqueue from which the the print is to be suspended.

> ### Note
>
> To resume despooling use the RESUME PRINTING option or the [SP-RESUME](./../sp-resume) command.

Back to [Spooler.](./../jbase-spooler)
