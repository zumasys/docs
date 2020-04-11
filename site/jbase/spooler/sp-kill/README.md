# SP-KILL

<PageHeader />

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

  
<PageFooter />
