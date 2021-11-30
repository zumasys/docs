##  Budget Entry (GLBAL.E)

<PageHeader />

**Form Details**  
[ Form Details ](GLBAL-E-1/README.md)   

**Purpose**  
The GLBAL.E procedure is used to enter budgets for General Ledger account numbers. One record is required for each account number for each fiscal year required. The field which defines the record key is made up of the account number, an asterisk (*) and the fiscal year for which you are entering budgets. All fiscal periods which are defined in the [ FY.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E/GLTRANS-E-1/FY-E) procedure are defaulted into the record, and the budget amounts are prompted. After filing a record, you may enter only the account number in the next record, and the fiscal year will automatically default, saving data entry time. 

**Frequency of Use**  
As required.

**Prerequisites**  
The fiscal year must have been defined in the [ FY.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E/GLTRANS-E-1/FY-E) procedure and the account numbers must have been defined by the [ GLCHART.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E) process. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />