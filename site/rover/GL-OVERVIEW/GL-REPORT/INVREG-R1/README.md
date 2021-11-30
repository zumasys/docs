##  Inventory Register Listing (INVREG.R1)

<PageHeader />

**Form Details**  
[ Form Details ](INVREG-R1-1/README.md)   

**Purpose**  
The INVREG.R1 procedure is used to print a listing of all inventory register
transactions for a period. This report can be run either in detail or summary
for "all or selected" account numbers.

**Frequency of Use**  
This report should be run as a period end audit report of the transactions
which will be posted to the General Ledger. It can be run as required to audit
progress through the period.

**Prerequisites**  
Inventory register transactions are created automatically by the system
whenever inventory movement occurs with a cost involved.

**Data Fields**

**Acct Number** The General Ledger account number.  
**Acct Description** The description as is appears in the Glchart file.  
**Reg Id** The record id of the Invreg entry.  
**Date** The date for which the register entry was made.  
**Amount** The total amount of the register record.  
**Procedure** The procedure which caused this register record to occur (e.g. [ IT.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E/IT-E) , [ RECEIPTS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/RECEIPTS-E2/RECEIPTS-E3/RECEIPTS-E) , etc.).   
**Record Id** The record id which caused theis register record to occur (e.g.
IT id, Receipt number, etc.).  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />