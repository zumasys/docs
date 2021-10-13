## Recurring AP Entry (APR.E)
<PageHeader />

## Line Items

![](./APR-E-2.jpg)

| **Li#**|  Enter the line item number which will contain an item or items
received from the vendor. For items received through the Purchasing module,
line items will correspond to those on the receipt.

-  
**Part#**|  Enter the part number ordered and received from the vendor. This,
and all related information, is automatically loaded from the purchase order
and receipt for those items received through the Purchasing module. This field
is optional and can be left blank for items and/or services ordered for which
there is no entry in the Parts file.

**Description**|  The description of the item being invoiced.

**Unit/Measure**|  If this recurring AP is related to a Purchase Order, the
unit of measure will default from the PO. Otherwise, the data will default
from the Parts file.

**Conv Factor**|

**Project Id**|  If this AP line item is for a project, enter the project
number. This will cause the costs associated with this AP line item to be
added into the project costs when an AP record is created.

**Task Id**|  Enter the task ID associated with the project for this AP line
item. A lookup is provided to show all the tasks for the project.

**Receipt Qty**|  Enter the quantity received for this line item. This field
is required in order to calculate the total extension amount. For invoices,
enter this amount as a positive number. For debit memos, enter this number as
a negative number.

**Actual Cost**|  Enter the actual unit cost being charged as it appears on
the invoice. This may differ from the cost on the purchase order, resulting in
a purchase price variance. Whether an invoice or a debit memo, this cost is
always entered as a positive number.

**Amount**|  Enter the amount for this line item distribution.

**Expense Acct**|  Enter the account associated with the amount. This must be
a valid General Ledger Account number.

**Total Extension**|  This is the total extended cost for this line item
(Received quantity X actual cost).

**Total Amount**|  This is the total of all of the amounts entered on this
line item.

**Li Notes**|  Enter any notes pertaining to this line item.

**Prev line**|  Press this button to move to the previous line item.

**Next line**|  Press this button to move to the next line item.

**Multiline Display**|  Press this button to display all line items in a
summary screen.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
