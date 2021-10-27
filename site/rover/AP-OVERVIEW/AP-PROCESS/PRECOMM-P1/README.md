##  Cancel a Commission Check Run (PRECOMM.P1)

<PageHeader />

**Form Details**  
[ Form Details ](PRECOMM-P1-1/README.md)   

**Purpose**  
The PRECOMM.P1 procedure is used to cancel a commission check run for which
Precomm records have already been created. This may be necessary when it is
found that a data entry error has resulted in selecting an incorrect number of
commission items for payment.  
  
All Precomm records will be deleted and the COMM items originally selected
will have the flag remove which indicates a check is being processed.

**Frequency of Use**  
As required.

**Prerequisites**  
The [ COMM.P3 ](../../../../rover/AP-OVERVIEW/AP-REPORT/CHECKS-F4/CHECKS-P3/COMM-P3) procedure must have been run and the [ CHECKS.P3 ](../../../../rover/AP-OVERVIEW/AP-REPORT/CHECKS-F4/CHECKS-P3) process must not have been run for the selected check run number. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />