##  A/R Invoice Register (AR.R1)

<PageHeader />

**Form Details**  
[ Form Details ](AR-R1-1/README.md)   

**Purpose**  
The AR.R1 procedure is used to print an invoice register of invoices and
credit memos. The report selects all items issued for a selected period. The
report may be sorted either by AR item (invoice/memo number) or by date. This
sort option defaults based upon how the invoice number is assigned from
shipments. If the invoice is sequentially assigned, the option defaults to 'I'
(for AR item). If the shipment number is used as the AR item number, the
option defaults to 'D' (date).

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**AR.Id** The record ID of the item in the AR file.  
**Cust#** The customer number on the AR item.  
**Customer.Name** The name of the customer as it appears in the CUST file.  
**Inv.Date** The date of the AR item.  
**Inv.Amount** The total amount of the AR item.  
**Dist.Amount** The total amount of the AR item, less freight and misc.  
**Freight.Amt** The freight amount on the AR item.  
**Misc.Amount** The total of all miscellaneous amounts on the AR item.  
**Sales.Tax** The total sales tax amount. This figure is extracted from the miscellaneous amount field when the account number matches the sales tax account found in the [ AR.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4/AR-CONTROL) entry.   
**St** The current status of the AR item. (O=open, P=paid)  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />