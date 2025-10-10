##  AP Invoice Register (AP.R7)

<PageHeader />

**Form Details**  
[ Form Details ](AP-R7-1/README.md)   

**Purpose**  
The [ AP.R1 ](../../../../rover/AP-OVERVIEW/AP-REPORT/AP-R1/README.md) procedure is used to print an invoice register of invoices and debit memos. The report selects all items issued for a selected period. The report may be sorted either by AP item (invoice/memo number) or by date. 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**AP.Id** The record ID of the item in the AP file.  
**Vendor** The vendor number on the AP item.  
**Vendor** The name of the vendor as it appears in the VENDOR file.  
**Invoice** The invoice number of the AP item.  
**Inv.Date** The date of the AP item.  
**Inv.Amount** The total amount of the AP item.  
**Dist.Amount** The total amount of the AP item, less freight and misc.  
**Freight.Amt** The freight amount on the AP item.  
**Misc.Amount** The total of all miscellanous amounts on the AP item.  
**St** The current status of the AP item. (O=open, C=closed)  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />