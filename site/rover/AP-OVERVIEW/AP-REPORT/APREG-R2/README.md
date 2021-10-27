##  A/P Register Listing for a Specified Record (APREG.R2)

<PageHeader />

**Form Details**  
[ Form Details ](APREG-R2-1/README.md)   

**Purpose**  
The APREG.R2 procedure is used to print a listing of all Accounts Payable
register transactions for a selected record, such as an AP or CHECKS record.

**Frequency of Use**  
This report should be run as a check of all transactions which have been
created for a specific record. It can be run as required to audit the activity
of a record.

**Prerequisites**  
Accounts Payable register transactions are created automatically by the system through the [ AP.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E) , [ CHECKS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E) and [ APR.P1 ](../../../../rover/AP-OVERVIEW/AP-PROCESS/APR-P1) procedures. 

**Data Fields**

**Acct Number** The General Ledger account number.  
**Acct Description** The description as is appears in the Glchart file.  
**Reg Id** The record id of the APREG entry.  
**Date** The date for which the register entry was made.  
**Amount** The total amount of the register record.  
**Procedure** The procedure which caused this register record to occur (e.g. [ AP.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E) , [ CHECKS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E) , etc.).   
**Record Id** The record id which caused this register record to occur (e.g.
AP id, Check number, etc.).  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />