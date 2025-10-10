##  Final Year End Close (FY.P2)

<PageHeader />

**Form Details**  
[ Form Details ](FY-P2-1/README.md)   

**Purpose**  
The FY.P2 procedure is used to FINALLY close a fiscal year in the General Ledger module. The user is prompted to enter the fiscal year which is to be finally closed. All fiscal periods must have closed and the [ FY.P1 ](../FY-P1/README.md) procedure must have been run to close the fiscal year prior to executing this procedure.   
  
This process sets a flag in the FY record for the fiscal year and will
disallow any further journal entries from occurring for that year. This
process should be run only after all financial reports have been run, audited
and finalized for the selected year.

**Frequency of Use**  
Annually.

**Prerequisites**  
The fiscal year must have been closed using the [ FY.P1 ](../FY-P1/README.md) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />