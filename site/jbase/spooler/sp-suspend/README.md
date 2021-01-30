# SP-SUSPEND

<PageHeader />

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

<PageFooter />
