## A/R Statements (AR.F3)
<PageHeader />

**Form Details**
[Form Details](../AR-F3-1/README.md)

**Purpose**
The AR.F3 procedure is used to print customer statements on blank paper. The
statement of account is intended to give the customer a complete presentation
of their current account balance as of a selected cut-off date. Invoices and
credits applied after this date will not appear on the statement.

**Frequency of Use**
As required.

**Prerequisites**
The aging periods must be established in the [AR.CONTROL](../AR-CONTROL/README.md)
record.

**Data Fields**

| **Statement Date** | The cut-off date selected for the statement run.     |
| ------------------ | ---------------------------------------------------- |
| **Account Number** | The customer number for which the statement is being |
printed.
**Reference**|  The AR item number.
**Type**|  The type of AR item. (Cr Memo, Invoice, On Acct)
**Ref Date**|  The date of the AR item.
**Due Date**|  The date on which the AR item was due for payment.
**Open Amount**|  The open balance of the associated AR item.
**Cumm Balance**|  The cummulative balance of all the AR items through the
item on the associated line.
**Aging**|  The total amount due, aged over the periods as defined in the
[AR.CONTROL](../AR-CONTROL/README.md) record.
**Total Due**|  The total due of all items appearing on the statement.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
