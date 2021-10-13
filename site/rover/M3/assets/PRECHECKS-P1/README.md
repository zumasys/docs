## Cancel a Check Run (PRECHECKS.P1)
<PageHeader />

**Form Details**
[Form Details](../PRECHECKS-P1-1/README.md)

**Purpose**
The PRECHECKS.P1 procedure is used to cancel a check run for which Prechecks
records have already been created. This may be necessary when it is found that
a data entry error has resulted in selecting an incorrect number of AP item
for payment.

All Prechecks records will be deleted and the AP items originally selected
will have the flag remove which indicates a check is being processed.

**Frequency of Use**
As required.

**Prerequisites**
The [AP.P1](../AP-P1/README.md) procedure must have been run and the
[CHECKS.P1](../CHECKS-P1/README.md) process must not have been run for the selected
check run number.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
