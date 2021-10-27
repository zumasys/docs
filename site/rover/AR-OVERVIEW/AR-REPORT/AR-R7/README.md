##  A/R Invoice Register by State (AR.R7)

<PageHeader />

**Form Details**  
[ Form Details ](AR-R7-1/README.md)   

**Purpose**  
The AR.R7 procedure is used to print an invoice register of invoices and
credit memos sorted by state. The report selects all items issued for a
selected period and shows a detail breakdown of the total sale, freight,
taxable and non-taxable amounts. This report is normally used to help prepare
sales tax reports.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**AR.Id** The record ID of the item in the AR file.  
**Cust#** The customer number on the AR item.  
**Customer.Name** The name of the customer as it appears in the CUST file.  
**State** The state in which this customer resides.  
**Inv.Date** The date of the AR item.  
**Inv.Amount** The total amount of the AR item.  
**Freight.Amt** The freight amount on the AR item.  
**Misc.Amount** The total of all miscellanous amounts on the AR item.  
**Taxable** The amount entered as taxable on the AR item.  
**Non.Taxable** The amount entered as nontaxable on the AR item.  
**Sales.Tax** The total sales tax amount. This figure is extracted from the miscellaneous amount field when the account number matches the sales tax account found in the [ AR.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4/AR-CONTROL) entry, as well as the sales tax amount field.   
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />