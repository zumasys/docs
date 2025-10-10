##  A/R Register Listing for a Specified Record (ARREG.R2)

<PageHeader />

**Form Details**  
[ Form Details ](ARREG-R2-1/README.md)   

**Purpose**  
The ARREG.R2 procedure is used to print a listing of all Accounts Receivable
register transactions for a selected record, such as an AR, SHIP or CASH
record.

**Frequency of Use**  
This report should be run as a check of all transactions which have been
created for a specific record. It can be run as required to audit the activity
of a record.

**Prerequisites**  
Accounts Receivable register transactions are created automatically by the system through the [ AR.E ](../../AR-ENTRY/AR-E/README.md) , [ CASH.E ](../../AR-ENTRY/CASH-E/README.md) , [ SHIP.P1 ](../../../duplicates/SHIP-P1/README.md) and [ ARR.P1 ](../../AR-PROCESS/ARR-P1/README.md) procedures. 

**Data Fields**

**Acct Number** The General Ledger account number.  
**Acct Description** The description as is appears in the GLCHART file.  
**Reg Id** The record id of the ARREG entry.  
**Date** The date for which the register entry was made.  
**Amount** The total amount of the register record.  
**Procedure** The procedure which caused this register record to occur (e.g. [ AR.E ](../../AR-ENTRY/AR-E/README.md) , [ CASH.E ](../../AR-ENTRY/CASH-E/README.md) , etc.).   
**Record Id** The record id which caused this register record to occur (e.g.
AR id, Cash number, etc.).  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />