##  A/P Check Register by Vendor Name (CHECKS.R2)

<PageHeader />

**Form Details**  
[ Form Details ](CHECKS-R2-1/README.md)   

**Purpose**  
The CHECKS.R2 procedure is used to print a check register by vendor for as
elected period. The report selects all checks, including void and stop-pay
checks provided they fall within the dates selected and sorts them by vendor
name.  
  
Either all vendors or a selected vendor may be reported.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Check#** The record ID of the item in the CHECKS file.  
**Vend#** The vendor number.  
**Vendor.Name** The name of the vendor as it appears in the Vendor file.  
**Chk.Date** The date of the check.  
**Check.Amount** The total amount of the check.  
**Disc.Amount** The amount of discount taken on the check.  
**St** The current status of the check record. (P = posted, other codes are
user-defined)  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />