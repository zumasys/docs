##  Modify Pre-Check Entries (PRECHECKS.E)

<PageHeader />

**Form Details**  
[ Form Details ](PRECHECKS-E-1/README.md)   

**Purpose**  
The PRECHECKS.E procedure is used to modify prechecks records that were created through the [ AP.P1 ](AP-P1/README.md) procedure. These records may be modified any time before the [ CHECKS.P1 ](../../../../rover/AP-OVERVIEW/AP-PROCESS/CHECKS-P1) posting process is run. The user may add vouchers, delete vouchers, change the amt to pay or discount amt on a voucher within a specific record. An entire PRECHECKS record may, also, be deleted.   
  
New records cannot be created through this procedure. In cases where a PRECHECKS record does not exist for a specific vendor, the [ AP.P1 ](AP-P1/README.md) procedure will need to be processed.   
  
The user may, also, add and/or delete a check number to a record. Therefore,
if a problem occurs with a check run, the user has the option to make the
change directly to the PRECHECKS record without re-running the checks.

**Frequency of Use**  
As required.

**Prerequisites**  
Creation of a check run through the [ AP.P1 ](AP-P1/README.md) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />