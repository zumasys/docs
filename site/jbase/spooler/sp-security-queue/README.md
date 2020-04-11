# SP-SECURITY-QUEUE

<PageHeader />

## Description

This command modifies the security state of a form queue. The command takes the general form:

```
SP-SECURITY-QUEUE queuename (CREATOR | QUEUE | NONE)
```

For example, to modify the security of form queue “PAYROLL” such that only the user who created that form queue has access to it, the command would be as:

```
SP-SECURITY-QUEUE PAYROLL CREATOR
```

For example, to modify the security of form queue “MAILSHOT” such that ANY user can modify the form queue, command would be as:

```
SP-SECURITY-QUEUE MAILSHOT NONE
```

Back to [Spooler.](./../jbase-spooler)

  
<PageFooter />
