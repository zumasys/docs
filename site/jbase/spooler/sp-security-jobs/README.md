# SP-SECURITY-JOBS

<PageHeader />

## Description

This command modifies the security state of print jobs that are placed in a particular form queue. The command is as:

```
SP-SECURITY-JOBS queuename (CREATOR | QUEUE | NONE)
```

For example, to modify the security of print jobs on the form queue “DEVELOPMENT” such that only the form queue owners can modify or view the print job, the command would be as:

```
SP-SECURITY-JOBS DEVELOPMENT QUEUE
```

In the above example, if it is assumed that the alternate form queue owners had been set to “personnel” and “footwear”, then the following users would be allowed to modify or view any print jobs:

- The user who created the print job,
- The initial creator of form queue “DEVELOPMENT”,
- The users "personnel" and "footwear".

> ### Note
>
> If the security status of print jobs changes, it only affects new print jobs. Any jobs already sent to the spooler will have their security state unaffected.

Back to [Spooler.](./../jbase-spooler)
