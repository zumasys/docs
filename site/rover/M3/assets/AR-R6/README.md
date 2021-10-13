## A/R Invoice Register by Customer (AR.R6)
<PageHeader />

**Form Details**
[Form Details](../AR-R6-1/README.md)

**Purpose**
The [AR.R1](../AR-R1/README.md) procedure is used to print an invoice register of
invoices and credit memos by customer name. The report selects all items
issued for a selected period and summarizes them by customer name.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Cust#**         | The customer number on the AR item.                           |
| ----------------- | ------------------------------------------------------------- |
| **Customer.Name** | The name of the customer as it appears in the CUST file.      |
| **Inv.Amount**    | The total amount of the AR item.                              |
| **Dist.Amount**   | The total amount of the AR item, less freight and misc.       |
| **Freight.Amt**   | The freight amount on the AR item.                            |
| **Misc.Amount**   | The total of all miscellanous amounts on the AR item.         |
| **Sales.Tax**     | The total sales tax amount. This figure is extracted from the |
miscellaneous amount field when the account number matches the sales tax
account found in the [AR.CONTROL](../AR-CONTROL/README.md) entry.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
