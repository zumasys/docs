##  Open Debit A/P - Prepayment Checks (CHECKS.R9)

<PageHeader />

**Form Details**  
[ Form Details ](CHECKS-R9-1/README.md)   

**Purpose**  
The CHECKS.R9 procedure is used to print prepayment type checks for a selected
period. The report selects all prepayment checks, including void and stop-pay
checks provided they fall within the dates selected. The report selection can
also be limited by company code and/or cash account number. If desired, the
notes from the check entry procedure may be included on this report.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Check#** The record ID of the item in the CHECKS file.  
**Vend#** The vendor number.  
**Vendor.Name** The name of the vendor as it appears in the Vendor file. If this check was entered via [ CHECKS.E4 ](../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4/README.md) and the option to print notes was not selected, then this is the first line of the notes.   
**Chk.Date** The date of the check.  
**Check.Amount** The total amount of the check.  
**Invoice Number** The invoice number associated with the prepayment.  
**Debit ID** The Debit ID created as a result of the prepayment check.  
**St** The current status of the check record. (P = posted, other codes are
user-defined)  
**Notes** Optionally, the notes as entered in [ CHECKS.E ](../../AP-ENTRY/CHECKS-E/README.md) will be printed.   
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />