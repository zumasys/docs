## List ARTAX Records for a Specified Record (ARTAX.R2)
<PageHeader />

**Form Details**
[Form Details](../ARTAX-R2-1/README.md)

**Purpose**
The ARTAX.R2 procedure is used to print a listing of all detail sales tax
register transactions for a specific record. This report can be run for a date
range .

**Frequency of Use**
This report should be run if there is some question about the tax codes which
were assigned to a specific record ID (e.g. invoice).

**Prerequisites**
Sales Tax register records are created automatically by the system through the
[AR.E](../AR-E/README.md), [SHIP.P1](../SHIP-P1/README.md), [RMA.P1](../RMA-P1/README.md) and
[ARR.P1](../ARR-P1/README.md) procedures.

**Data Fields**

| **Tax Code** | The sales tax code to which the amount has been posted.        |
| ------------ | -------------------------------------------------------------- |
| **Number**   | The number of the customer on the AR record which created this |
sales tax entry.
**Cust Name**|  The name of the customer as read from the CUST file.
**AR ID**|  The record ID of the AR item which created this entry.
**Date**|  The date of the AR item.
**ID**|  The record id which was sequentially assigned to this detail record
in the ARTAX file.
**Date**|  The date on which the ARTAX record was created. This should
normally be the same as the AR record date. It will only differ if records
have been manually altered using [ARTAX.E](../ARTAX-E/README.md).
**Amount**|  The amount of sales tax collected for the associated sales tax
code and AR item.
**Post Date**|  The date which the [ARTAX.P1](../ARTAX-P1/README.md) procedure was run
to flag ARTAX records as posted. This is important when you are allowing AR
items to be posted into a prior period and you wish to know the exact sales
tax figures of those postings.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
