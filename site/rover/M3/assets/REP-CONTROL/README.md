## Rep Control Entry Screen (REP.CONTROL)
<PageHeader />

**Form Details**
[Form Details](../REP-CONTROL-1/README.md)

**Purpose**
REP.CONTROL allows you to restrict access by user id to the rep reports listed
below. If you wish to use this feature, the activate security option must be
selected. If it is selected, only users that have had their user id(s) entered
in this procedure will be able to run these reports.

For each user.id, you must enter the rep id(s) that the users can run the
reports for. Users whose id(s) have not been entered in this procedure will
get an error message when opening these reports and will not be able to run
them for any rep. If a user should have access to view data on all reps, you
must still enter the user id in this procedure and then select the ALL option
for that user. Please note that this procedure does not over-ride the security
profiles. If a user has been granted access to all reps but has not been given
access to the report procedures themselves, they will not be able to run the
report.

REP Reports:
[SALES.R3](../SALES-R3/README.md). [SALES.R4](../SALES-R4/README.md),
[SALES.R12](../SALES-R12/README.md), [SALES.R20](../SALES-R20/README.md),
[SALES.R21](../SALES-R21/README.md), [SALES.R22](../SALES-R22/README.md),
[SALES.R24](../SALES-R24/README.md), [SALES.R28](../SALES-R28/README.md),
[SALES.R30](../SALES-R30/README.md), [SOBOOK.R3](../SOBOOK-R3/README.md),
[SOBOOK.R4](../SOBOOK-R4/README.md), [SOQUOTE.R5](../SOQUOTE-R5/README.md),
[PROSPECT.R2](../PROSPECT-R2/README.md).

**Frequency of Use**
This procedure should be updated when adding new users or removing old users
from the system.

**Prerequisites**
The user id(s) must be added first in SECURITY.E and the rep id(s) must first
be added in [REP.E](../REP-E/README.md).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
