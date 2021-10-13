## Check Re-assignment Process (CHECKS.P4)
<PageHeader />

**Form Details**
[Form Details](../CHECKS-P4-1/README.md)

**Purpose**
Checks.p4 is used to reassign the check numbers in the ap, apreg and checks
files for posted checks. This procedure is used to correct the check numbers
when a error occurred during the printing process and was not detected until
after the check run was posted.

This procedure should be used with caution. When a check is deleted/voided via
[checks.e](../Checks-e/README.md) or [checks.e2](../Checks-e2/README.md), reversing entries are
made in the apreg, ap and/or check files to reflect this transaction.
Checks.p4, however, does not create these reversing transactions. Instead it
changes the check numbers posted to the ap, apreg and checks files. A date
stamp is posted to the new check number in the checks file to indicate that
the check was created/updated via this procedure.

**Frequency of Use**
As required.

**Prerequisites**

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
