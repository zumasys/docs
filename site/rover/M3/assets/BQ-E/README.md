## Batch Queue Definition (BQ.E)
<PageHeader />

**Form Details**
[Form Details](../BQ-E-1/README.md)

**Purpose**
The BQ.E procedure is used to update batch queues on the system. Batch queues
are used to execute processes either in an on-line method, or in a batch mode
at a designated time of day. There are two (2) types of batch queues
available:

Administrator queues are used to store a set of procedures to run
as designated by the system administrator. For example, the night-
time queue may contain procedures such as the nightly backup, any
necessary batch posting procedures which are to be run on a nightly
basis, etc. An administrator queue is not available to the non-
administrator user for processing.

Public queues are available to all users, allowing them to place
their selected procedures for processing either in a background
process, or at night during a nighttime batch process. These are
not pre-stored commands, but are submitted by placing a (4) in the
action code of any print or batch procedure.

A maximum number of save may be set to allow the 'dropping' of completed
processes after a certain amount of time.

There are three (3) sets of times and dates associated with each procedure
submitted. The submit time show when the procedure was actually submitted by
the user. The start time and date are set when the batch process actually
starts to execute the procedure. The job end date and time are set when the
procedure is actually completed.

**Frequency of Use**
As required.

**Prerequisites**
The batch queue must have been previously defined in the BE.E procedure. Jobs
which are to be executed as part of the administrator queue must be defined
with a unique procedure name in the JD (job definition file). This is
accomplished by placing a name in the JOB.ID prompt of any report or batch
procedure and pre-storing the answers to the prompts (e.g.
[MRP.P1](../MRP-P1/README.md) can be saved as [MRP.P1](../MRP-P1/README.md)*NIGHTLY).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
