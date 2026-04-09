##  Rep Control Entry Screen (REP.CONTROL)

<PageHeader />

**Form Details**  
[ Form Details ](REP-CONTROL-1/index.md)   

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
[ SALES.R3 ](../../MRK-REPORT/SALES-R3/index.md) . [ SALES.R4 ](../../MRK-REPORT/SALES-R4/index.md) , [ SALES.R12 ](../../MRK-REPORT/SALES-R12/index.md) , [ SALES.R20 ](../../MRK-REPORT/SALES-R20/index.md) , [ SALES.R21 ](../../MRK-REPORT/SALES-R21/index.md) , [ SALES.R22 ](../../MRK-REPORT/SALES-R22/index.md) , [ SALES.R24 ](../../MRK-REPORT/SALES-R24/index.md) , [ SALES.R28 ](../../MRK-REPORT/SALES-R28/index.md) , [ SALES.R30 ](../../MRK-REPORT/SALES-R30/index.md) , [ SOBOOK.R3 ](../../MRK-REPORT/SOBOOK-R3/index.md) , [ SOBOOK.R4 ](../../MRK-REPORT/SOBOOK-R4/index.md) , [ SOQUOTE.R5 ](../../MRK-REPORT/SOQUOTE-R5/index.md) , [ PROSPECT.R2 ](../../MRK-REPORT/PROSPECT-R2/index.md) . 

**Frequency of Use**  
This procedure should be updated when adding new users or removing old users
from the system.

**Prerequisites**  
The user id(s) must be added first in SECURITY.E and the rep id(s) must first be added in [ REP.E ](../REP-E/index.md) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />