# PN5_60842

<PageHeader />

## Description

Spooler: SP-LIST does not pause between Queue and Job reports

### Previous Release Behavior

Running SP-LIST with no options had the following issues:

a) did not pause (wait for user input) between the Queue and Job reports.

b) produced 2 spooler entries

### Current Release Behavior

If no options are specified to SP-LIST (or if both the Q and J options are specified):

a) SP-LIST now waits for user input after the Queue listing if no option are specified.

b) Only 1 spooler report is produced

Back to [5.7.2 Release Notes](./../README.md)

  
<PageFooter />
