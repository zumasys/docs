# jlp

<PageHeader />

## Description

The jBASE spooler program. This is the jBASE equivalent of the unix lp command. It takes the general form:

where:

```
jlp {options} {filename}
```

where:

- **FileName** can be any of the following:
  - Windows or UNIX file name
  - Database file + record keys
  - Database file + '\*'
  - Database file + Select list.

If **FileName** is omitted, then all input is assumed to come from stdin.

- **options** may be:

| Option | Description |
| --- | --- |
| -aAssignOptions  | Change the default assignment options |
| -cCount | Change the default number of copies to Count |
| -m | Multi-queue support. Data MUST come from stdin, and an 8-byte header preceeds each print element. |
| -qQueueName | Override the default queue name. |
| -rReportNumber  | Use a different report number other than 0. |
| -s | Do not display what queue we have printed to. |

## Note

> The jlp command will respect the current form queue assignment from the most recent SP-ASSIGN command. The action of this program is also affected by the 'JBC\_PRINT\_ASSIGN\_n' environment variables.

  
<PageFooter />
