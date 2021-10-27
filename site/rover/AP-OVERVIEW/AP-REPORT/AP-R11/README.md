##  A/P Cash Requirement Report (AP.R11)

<PageHeader />

**Form Details**  
[ Form Details ](AP-R11-1/README.md)   

**Purpose**  
This report provides information about cash requirements based on data in the
accounts payable file (AP). The user is prompted for period cut-off dates to
be used in spreading the cash requirements across periods. The report may be
run for selected vendors or all vendors, with sub-totals for each vendor.  

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Vendor** The number and name of the vendor with open accounts payable items.  
**Invoice No.** The vendor invoice number as it appears in the AP record.  
**Invoice Date** The invoice date as is appears in the AP record.  
**Due Date** The date to pay as it appears in the AP record.  
**Dscnt Date** This is the date through which a discount is allowed, if
allowed by the terms negotiated with the vendor.  
**Cash Requirements** This major report heading contains for sub columns; the
first three show the cutoff dates entered by the user, and the last is
"Future". Each contains the amount required for the associated invoice in the
time period specified. Future contains everything beyond the last cutoff date.  
**Discounts Avail** This shows the discount amount for the invoice that is
still available if paid within the discount date.  
**Discounts Lost** This shows the discount amount that is no longer available
because the due date has been passed.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />