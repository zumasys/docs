# SP-COPIES

<PageHeader />

## Description

This command changes the number of copies assigned to a print job. It takes the general from:

```text
SP-COPIES print-job-num copies
```

where:

- **print-job-num** is the number of the print job to change.
- **copies** are the number of copies (1 to 99) to be despooled.

If used without arguments as:

```
SP-COPIES
```

the user will be prompted as:

```
PRINT JOB #     COPIES:
```

The user will enter the print job number and the desired copies.

> ### Note
>
> The number of copies of a print job already despooled to the spooler cannot be changed. Parameters must be entered in the order shown. The user will be prompted for any missing parameters.

Back to [Spooler.](./../jbase-spooler)
<PageFooter />
