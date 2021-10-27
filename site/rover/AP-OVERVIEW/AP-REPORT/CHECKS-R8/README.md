##  AP Check Distribution Listing (CHECKS.R8)

<PageHeader />

**Form Details**  
[ Form Details ](CHECKS-R8-1/README.md)   

**Purpose**  
This report lists all checks created for a user specified date range and shows
the general ledger account numbers to which the check amounts were
distributed. The report may be limited to selected company codes as well as a
specific disbursement (bank/cash) account. You may also choose to exclude
miscellaneous checks (i.e. non-AP checks). A summary of the total distribution
for each account number is printed at the end of the report.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Check#** The number assigned to the check.  
**Vend#** The number of the vendor against which the check was posted. This
may be blank if the check was not defined to a vendor.  
**Vendor Name** The name of the vendor.  
**Chk Date** The date the check was issued.  
**Check Amount** The total amount paid on the check.  
**St** The status of the check. Possible codes include "P" (posted), "C"
(cleared), "S" (stop payment), "V" (voided).  
**AP Items** A list of all the AP voucher numbers paid by the associated
check.  
**Invoice** The vendor invoice number associated with each AP voucher.  
**AP Amount** The amount of each associated AP item paid on the check.  
**GL Account** Each of the general ledger account numbers that appear as a
distribution account on associated check.  
**GL Amounts** The distribution amount associated with the general ledger
distribution account.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />