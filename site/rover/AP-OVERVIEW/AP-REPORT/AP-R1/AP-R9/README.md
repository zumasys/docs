##  Accounts Payable Accrual Listing (AP.R9)

<PageHeader />

**Form Details**  
[ Form Details ](AP-R9-1/README.md)   

**Purpose**  
The AP.R9 procedure is used to create an accounts payable accrual report as of
a specified date. The report will select all A/P items which were present on
the accounts payable file, but were not invoiced as of the cutoff date
entered.  
  
Because the report is date sensitive it will show all of the items that were
in an accrual status at the that point in time, even if they have since been
invoiced and/or paid. This makes the report appropriate for use in balancing
against the general ledger.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Apid** The record ID of the item in the AP file.  
**Vend#** The vendor number.  
**Vendor Name** The name of the vendor as it appears in the Vendor file.  
**Rec.Date** The date on which the receipt was processed.  
**Accrual Amount** The amount of the accrual.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />