# SP-STOP

<PageHeader />

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
