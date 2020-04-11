# Spooler Security

<PageHeader />

## Description

The jBASE spooler has its own security mechanism. The default security is:

- A form queue definition can only be modified by the user that created the form queue in the first instance. In the case of the default formqueue (STANDARD), this is the user defined during the SP-NEWTAB command.
- A print job can only be viewed or modified only by the user who created the print job. The owner of the form queue onto which the job is placed does not have permissions.

By default the owner of a form queue is the user who created it. It is possible to alter the security mechanism, and add "Alternate" owners of the form queue, thus building a list of any number of form queue owners.

The security for a form queue can be in one of three states:

- CREATOR: This means only the user who created the form queue has permission to modify the form queue definition. This is the default state.
- QUEUE: Any of the form queue owners (including the Alternate owners) are allowed to modify the form queue.
- NONE: No security exists and any user can modify the formqueue definition.

The securty for a print job can be in one of three states:

- CREATOR: This means only the user who created the print job has permission to modify or view the print job. This is the default state.
- QUEUE:Any of the form queue owners (including the Alternate owners) are allowed to modify or view the print job.
- NONE: No security exists and any user can modify or view the print job.

When the spooler is first created using the SP-NEWTAB command, the security of any created formqueues is to have:

- **Form queues:** The state is CREATOR
- **Print Jobs:** The state is CREATOR
- **Alternate owners**: None.

The default action may be changed using the options presented by SP-NEWTAB. Of course the security for the form queue can be modified at a later stage.

Back to [Spooler](./../jbase-spooler).

  
<PageFooter />
