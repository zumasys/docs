## Billed Freight Variance Report (AP.R13)
<PageHeader />

**Form Details**
[Form Details](../AP-R13-1/README.md)

**Purpose**
This report shows billed freight variances based on data in the accounts
payable file (AP). Only AP records that have been linked to AP purchase
receipts that have an estimated freight cost are shown. The linkage between
the AP records is done through the field on [AP.E](../AP-E/README.md) called "Freight
Receipts". The actual freight bill that is entered manually in
[AP.E](../AP-E/README.md) is compared to the freight receipts that are linked to it.
The user is prompted for start and end invoice cutoff dates.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Invoice Date**|  The invoice date of the freight bill from the freight
carrier.
-  
**AP ID**|  The AP ID created for the freight carrier's invoice number.
**Freight Vendor Name**|  The freight vendor's name.
**Actual Freight**|  The actual freight amount as billed by the freight
carrier.
**Rec Date**|  The receipt dates for all the receipts associated with this
freight bill.
**Receipt ID**|  The receipt ID's for all the receipts associated with this
freight bill.
**Vendor Name**|  The vendor name from the actual PO receipt.
**Est Freight**|  The estimated freight amount that was entered on the PO.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
