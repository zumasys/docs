## Post Commission Checks (CHECKS.P3)
<PageHeader />

**Form Details**
[Form Details](../CHECKS-P3-1/README.md)

**Purpose**
The CHECKS.P3 procedure is used to post Precomm records after the successful
printing of the commission checks. All records for a selected check run number
are processed.

All COMM records which are being paid by the check run are updated with the
check information and the open balance is changed. Register (APREG) records
are created for all amounts and accounts numbers posted.

As each Precomm record is processed, it is deleted from the Precomm file.

**Frequency of Use**
As required.

**Prerequisites**
A check run must have been created through the [COMM.P3](../COMM-P3/README.md)
procedure and all checks must have been successfully printed.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
