##  Generate Executive Business Summary Data (EXEC.P1)

<PageHeader />

**Form Details**  
[ Form Details ](EXEC-P1-1/README.md)   

**Purpose**  
The EXEC.P1 procedure is used to create Executive Business Summary records for
a specified date. Normally this procedure would be run every night in a batch
procedure to update the past days figures. This procedure may be run for past
dates if it required to re- calculate the figures for a specific date due to
such occurrencs as back-dating invoices, etc.  
  
The date buckets (Month-to-Date, Year-to-Date, Current, etc.) are calculated
from the Fiscal Year (FY) file based upon the date entered.  
  
The information is retrieved from a variety of files in the system.

**Frequency of Use**  
Daily.

**Prerequisites**  
Setup of the EXEC record ( [ EXEC.CONTROL ](../../../EXEC-ENTRY/EXEC-CONTROL/README.md) ) and the establishment of the fiscal year record in the FY file for both the present and next fiscal year. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />