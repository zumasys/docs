##  Vendor Activity Listing (VENDOR.R4)

<PageHeader />

**Form Details**  
[ Form Details ](VENDOR-R4-1/README.md)   

**Purpose**  
This report will print an activity listing for each vendor which has activity
for the selected period. One page is printed for each vendor.  
  
This report is similar to [ AP.R4 ](../../../../rover/AP-OVERVIEW/AP-REPORT/AP-R4/README.md) but will include misc. checks that were issued to the vendor. Misc.checks are checks that were not used to pay an invoice. 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**AP.ID** The record ID of the item in the AP file.  
**Invoice#** The vendor invoice number as it appears in the AP file.  
**Inv.Date** The invoice date as it appears in the AP file.  
**Terms.Code** The terms code assigned to the AP item.  
**Due.Date** The date this item is due for payment.  
**Inv.Amount** The original invoice amount of the AP item.  
**Payments** A total of all payments processed against this AP item.  
**Balance.Due** The balance due of this AP item.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />