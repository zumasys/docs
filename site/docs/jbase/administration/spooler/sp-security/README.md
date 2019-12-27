# SP-SECURITY 

**Created At:** 4/5/2018 9:16:49 AM  
**Updated At:** 1/24/2019 8:17:30 AM  
**Original Doc:** [306441-sp-security](https://docs.jbase.com/44205-spooler/306441-sp-security)  
**Original ID:** 306441  
**Internal:** No  


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


| Field<br> | Description<br> |
| --- | --- |
| QUEUE NAME<br> | This is the name of the form queue.<br> |
| Queue<br> | This is the security for the form queue, and can be one of three possibilities:<ul><li>-none- There is no security and any user can modify the definition of the form queue.</li><li>-q.owners- The security state is such that all the form queue owners shown in the field &ldquo;Queue Owners&rdquo; have permissions to modify the form queue.</li><li>-accname This is the account name of the creator of the form queue, and only this user has permission to modify the form queue.</li></ul> |
| Job<br> | This is the security for the print jobs, and can be one of three possibilities:<ul><li>-none- There is no security and any user can modify or view print jobs placed on this form queue.</li><li>-q.owners- The security state is such that all the form queue owners shown in the field &ldquo;Queue Owners&rdquo; have permissions to modify or view any jobs placed on this form queue.</li><li>-j.creator- The security state is such that only the print job creator has permissions to modify or view the print job.</li></ul> |
| Queue owners<br> | This is a list of the owners of the form queue. The first name in the list is the creator of the form queue and cannot be modified. The other names in the list are the alternate form queue owners.<br> |




## Menu Options 


| Option #<br> | Name<br> | Description<br> |
| --- | --- | --- |
| 1<br> | QUEUE SECURITY<br> | Use this option to modify the security state of the form queue. The syntax of the remainder of the command is similar to the [SP-SECURITY-QUEUE](./../sp-security-queue)  command.<br> |
| 2<br> | JOB SECURITY<br> | Use this option to modify the security state of print jobs placed on the form queue. The syntax of the remainder of the command is similar to the [SP-SECURITY-JOBS](./../sp-security-jobs) command.<br> |
| 3<br> | QUEUE OWNERS<br> | Use this option to modify the list of alternative owners of a form queue. This list of owners is used when the form queue security is set to QUEUE or the print job security is set to QUEUE. The syntax of the remainder of the command is similar to the [SP-SECURITY-OWNER](./../sp-security-owner) command.<br> |
| 4<br> | REUTRN TO SP-JOBS<br> | Returns to the [SP-JOBS](./../sp-jobs) menu.<br> |
| 5<br> | RETURN TO SP-STATUS<br> | Returns to [SP-STATUS](./../sp-status) menu.<br> |
| 99<br> | EXIT<br> | Exits the SP-SECURITY menu back to shell<br> |




Back to [Spooler](./../jbase-spooler).
