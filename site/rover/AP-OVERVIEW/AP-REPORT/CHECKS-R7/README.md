##  A/P Check Listing for a Precheck Number (CHECKS.R7)

<PageHeader />

**Form Details**  
[ Form Details ](CHECKS-R7-1/README.md)   

**Purpose**  
The CHECKS.R7 procedure is used to print a check listing for a selected
prechecks run. A "precheck" number is assigned during the check printing
procedure and defines a check print "batch". The report selects all checks,
including void and stop-pay checks provided they fall within the dates
selected. If desired, the notes from the check entry procedure(s) may be
included on this report.

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
**Disc.Amount** The amount of discount taken on the check.  
**St** The current status of the check record. (P = posted, other codes are
user-defined)  
**Notes** Optionally, the notes from the check entry procedure(s) will be
printed.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />