##  Cleared Checks Listing (CHECKS.R6)

<PageHeader />

**Form Details**  
[ Form Details ](CHECKS-R6-1/README.md)   

**Purpose**  
The CHECKS.R6 procedure is used to print a listing of checks which have cleared the bank and were processed through the [ CHECKS.E3 ](../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E3) procedure. You ma optionally select a single cash account for which you wish to run this report. If you do not enter a cash account number, all records which contain a clear date and amount are selected, provided they fall within the specified date range. 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Check#** The record ID of the item in the CHECKS file.  
**Vend#** The vendor number.  
**Vendor.Name** The name of the vendor as it appears in the Vendor file. If this check was entered via [ CHECKS.E4 ](../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4) , this is the first line of the notes.   
**Chk.Date** The date of the check.  
**Check.Amount** The total amount of the check.  
**Clear.Amount** The amount entered win [ CHECKS.E3 ](../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E3) as it appeared on the bank statement.   
**Variance** The variance amount, if any, between the check amount and the
clear amount.  
**St** The current status of the check record. (P = posted, other codes are
user-defined)  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />