##  AP Invoices for a Batch Number (AP.R8)

<PageHeader />

**Form Details**  
[ Form Details ](AP-R8-1/README.md)   

**Purpose**  
The AP.R8 procedure is used to print an invoice register of invoices and debit
memos for a specified batch number. The report selects all items issued for a
selected period which contain the batch number entered.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Batch** The batch number entered for this item in [ AP.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/README.md) .   
**AP.Id** The record ID of the item in the AP file.  
**Vendor** The vendor number on the AP item.  
**Vendor** The name of the vendor as it appears in the VENDOR file.  
**Inv.Date** The date of the AP item.  
**Inv.Amount** The total amount of the AP item.  
**Dist.Amount** The total amount of the AP item, less freight and misc.  
**Freight.Amt** The freight amount on the AP item.  
**Misc.Amount** The total of all miscellanous amounts on the AP item.  
**St** The current status of the AP item. (O=open, C=closed)  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />