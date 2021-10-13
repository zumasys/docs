## A/P Entry (AP.E)
<PageHeader />

## Line Items

![](./AP-E-2.jpg)

| **Li#**|  Enter the line item number which will contain an item or items
received from the vendor. For items received through the Purchasing module,
line items will correspond to those on the receipt.

-  
**Part#**|  Enter the part number ordered and received from the vendor. This,
as well as all related information, is automatically loaded from the purchase
order and receipt for those items received through the Purchasing module. This
field is optional and can be left blank for items and/or services ordered for
which there is no entry in the Parts file.

**Description**|  The description of the item being invoiced.

**Unit/Measure**|  If AP line item is associated to a purchase order, this
field will default from the Purchase Order. Otherwise, the data will default
from the PARTS file.

**Conv Factor**|  If AP line item is associated to a purchase order, this
field will default from the Purchase Order. Otherwise, the data will default
from the PARTS file.

**Standard Cost**|  This will default from the COST file.

**Std.Lot.Size**|  The field contains the standard lot size, as read from the
Cost file when the receipt was posted.

**Original Cost**|  This is the original actual cost. This cost reflects the
actual cost as it originally appeared on the AP item, before any changes.

**Cost Group**|  Enter the cost group which will be validated against
[INV.CONTROL](../INV-CONTROL/README.md). The cost group is used to define the costing
method for this AP item.

**Project Id**|  If this AP line item is for a project, enter the project
number. This will cause the costs associated with this AP line item to be
added into the project costs.

**Task Id**|  Enter the task ID associated with the project for this AP line
item. A lookup is provided to show all the tasks for the project.

**Receipt Qty**|  Enter the quantity received for this line item. This field
is required in order to calculate the total extension amount. For invoices,
enter this amount as a positive number. For debit memos, enter this number as
a negative number.

**Price Per**|  If the vendor prices the material received based upon some
grouping or packaging (e.g. .395 per thousand), enter that number here (e.g.
1000).

**Actual Cost**|  Enter the actual unit cost being charged as it appears on
the invoice. This may differ from the cost on the purchase order, resulting in
a purchase price variance. Whether an invoice or a debit memo, this cost is
always entered as a positive number.

**Foreign Price**|  If a currency code and exchange rate are present on the
header, then the foreign price will be displayed here. The foreign price can
also be entered or changed here, and the actual cost will be recalculated
based on the exchange rate.

**Total Extension**|  This is the total extended cost for this line item
(Received quantity X actual cost).

**Li Notes**|  Enter any notes specific to this line item.

**Amount**|  Enter the amount.

**Expense Acct**|  Enter the expense account number to which the associated
amount will be distributed. For items received via a purchase order, this
account number is loaded from the PO. For new AP items, if the vendor has a
specific account number entered on the [VENDOR.E](../VENDOR-E/README.md) screen, that
number is defaulted.

**Acct Description**|  This field contains the account description and is for
reference only.

**Total Amount**|  This is the total of all of the amounts entered on this
line item.

**Multiline Display**|  Click on this button to display all line items in a
summary listing.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
