# Create an Encrypted Spooler Queue

<PageHeader />

To protect data that is sent to spooler, jobs can be encrypted but only when using device types of **PROG** or **FILE** when the spooler queue is initially created.

## Command Syntax

```
SP-CREATE <QueueName> PROG devicename (Z
SP-CREATE <QueueName> FILE devicename (Z
```

To enable spooler encryption you must use the **PROG** or **FILE** device type with the (Z) option when you create the form queue.

```
SP-CREATE MYQUEUE PROG lp -d HPLASERJET (Z
SP-ASSIGN =MYQUEUE
```

If the **H** (Hold) option is specified doing the **SP-ASSIGN** then it will not be possible to view the contents of the print job:

```
SP-ASSIGN =MYQUEUE HS
```

If you attempt to edit the print job with **SP-EDIT** or with option 8 on the **SP-JOBS** menu then you will see the message **Encrypted no access from edit**, e.g.

```
SP-EDIT 2
PRINT JOB # 2
TOI
.
Encrypted no access from edit
```

Back to [Encryption](./../README.md)
