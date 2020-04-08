# SP-SECURITY

<PageHeader /> 

## Description

This is a menu driven interface to the previously mentioned SP-SECURITY-xx commands. It is also available from option 11 of [SP-STATUS](./../sp-status). When run, it presents the user with a screen that looks like this:

```
11:18:45  01 APR 2018       SECURITY                          PAGE 1 OF 1 PAGES

QUEUE NAME         Queue        Job          Queue Owners

STANDARD           -none-       -none-       jbaseadm
SCREEN2            -none-       -none-       20147
test_form_queue    -none-       -none-       20147






1. QUEUE SECURITY       3. QUEUE OWNERS            5. RETURN TO SP-STATUS
2. JOB SECURITY         4. RETURN TO SP-JOBS       99. EXIT

ENTER ACTION CODE / PAGE NUMBER (P#) ?
```

The screen will show up to 10 form queues at a time. The four fields shown for each form queue are as:

| Field | Description |
| --- | --- |
| QUEUE NAME | This is the name of the form queue. |
| Queue | This is the security for the form queue, and can be one of three possibilities:<ul><li>-none- There is no security and any user can modify the definition of the form queue.</li><li>-q.owners- The security state is such that all the form queue owners shown in the field &ldquo;Queue Owners&rdquo; have permissions to modify the form queue.</li><li>-accname This is the account name of the creator of the form queue, and only this user has permission to modify the form queue.</li></ul> |
| Job | This is the security for the print jobs, and can be one of three possibilities:<ul><li>-none- There is no security and any user can modify or view print jobs placed on this form queue.</li><li>-q.owners- The security state is such that all the form queue owners shown in the field &ldquo;Queue Owners&rdquo; have permissions to modify or view any jobs placed on this form queue.</li><li>-j.creator- The security state is such that only the print job creator has permissions to modify or view the print job.</li></ul> |
| Queue owners | This is a list of the owners of the form queue. The first name in the list is the creator of the form queue and cannot be modified. The other names in the list are the alternate form queue owners. |

## Menu Options


| Option # | Name | Description |
| --- | --- | --- |
| 1 | QUEUE SECURITY | Use this option to modify the security state of the form queue. The syntax of the remainder of the command is similar to the [SP-SECURITY-QUEUE](./../sp-security-queue)  command. |
| 2 | JOB SECURITY | Use this option to modify the security state of print jobs placed on the form queue. The syntax of the remainder of the command is similar to the [SP-SECURITY-JOBS](./../sp-security-jobs) command. |
| 3 | QUEUE OWNERS | Use this option to modify the list of alternative owners of a form queue. This list of owners is used when the form queue security is set to QUEUE or the print job security is set to QUEUE. The syntax of the remainder of the command is similar to the [SP-SECURITY-OWNER](./../sp-security-owner) command. |
| 4 | REUTRN TO SP-JOBS | Returns to the [SP-JOBS](./../sp-jobs) menu. |
| 5 | RETURN TO SP-STATUS | Returns to [SP-STATUS](./../sp-status) menu. |
| 99 | EXIT | Exits the SP-SECURITY menu back to shell |

Back to [Spooler](./../jbase-spooler).
