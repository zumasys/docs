## ARTAX File Listing (ARTAX.R1)
<PageHeader />

**Form Details**
[Form Details](../ARTAX-R1-1/README.md)

**Purpose**
The ARTAX.R1 procedure is used to print a listing of all detail sales tax
register transactions for a period. This report can be run either in detail or
summary, for all or selected sales tax codes.

**Frequency of Use**
This report should be run as a period end audit report of the transactions
which will be reported to the appropriate sales tax collection authority. It
can be run as required to audit progress through the period.

**Prerequisites**
Sales Tax register records are created automatically by the system through the
[AR.E](../AR-E/README.md), [SHIP.P1](../SHIP-P1/README.md), [RMA.P1](../RMA-P1/README.md) and
[ARR.P1](../ARR-P1/README.md) procedures.

**Data Fields**

| **Tax Code**    | The sales tax code to which the amount has been posted.   |
| --------------- | --------------------------------------------------------- |
| **Cust Number** | The number of the customer on the AR record which created |
this sales tax entry.
**Cust Name**|  The name of the customer as read from the CUST file.
**AR ID**|  The record ID of the AR item which created this entry.
**Record Date**|  The date of the AR item.
**ARTAX ID**|  The record id which was sequentially assigned to this detail
record in the ARTAX file.
**ARTAX Date**|  The date on which the ARTAX record was created. This should
normally be the same as the AR record date. It will only differ if records
have been manually altered using [ARTAX.E](../ARTAX-E/README.md).
**ARTAX Amount**|  The amount of sales tax collected for the associated sales
tax code and AR item.
**Post Date**|  The date which the [ARTAX.P1](../ARTAX-P1/README.md) procedure was run
to flag ARTAX records as posted. This is important when you are allowing AR
items to be posted into a prior period and you wish to know the exact sales
tax figures of those postings.
**Total Invoice**|  This field contains the taxable amount of the invoice. For
example, if the invoice amount is for 100.00 but 90.00 was taxable, 90.00 will
appear in this field. If more than one ARTAX.ID has been generated for the
same invoice and the same tax code in the date range selected, the taxable
amount will only be included once. However, if multiple ARTAX records have
been generated for the same invoice against different tax codes, the invoice
or taxable amount will be reported against each tax code. For example, if two
tax codes - CA and LA - were posted against an invoice with a taxable amount
of 90.00, the 90.00 would show in this column for tax code CA and in this
column for tax code LA.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
