##  Work Order Register Listing (WOREG.R1)

<PageHeader />

**Form Details**  
[ Form Details ](WOREG-R1-1/README.md)   

**Purpose**  
The WOREG.R1 procedure is used to print a listing of all work order register
transactions for a period. This report can be run either in detail or summary,
for all or selected account numbers.

**Frequency of Use**  
This report should be run as a period end audit report of the tranactions
which will be posted to General Ledger. It can be run as required to audit
progress through the period.

**Prerequisites**  
Work order register transactions are created automatically by the system when
transactions occur against a work order.

**Data Fields**

**Acct Number** The General Ledger account number.  
**Acct Description** The description as is appears in the Glchart file.  
**Woreg Id** The record id of the work order register.  
**Date** The date for which the register entry was made.  
**Amount** The total amount of the register record.  
**Procedure** The procedure which caused this register record to occur (e.g. [ WOMATL.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-2/WOMATL-E) , [ WOOP.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-2/WOOP-E) , etc.).   
**Record Id** The record id which caused this register record to occur (e.g.
WOMATL id, WOOP id, etc.).  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />