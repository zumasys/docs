## Point of Sale Order Entry (PSO.E)
<PageHeader />

## Order Information

![](./PSO-E-1.jpg)

| **Order Number**|  Enter an existing order number, or leave blank to assign
the next sequential number.

-  
**Order Date**|  The current date will be automatically loaded when the order
is created.

**Sold By**|  Enter the ID of the rep responsible for the sale.

**Customer**|  If you do not want to associate this order with a customer then
leave this field blank. Otherwise, enter the customer's number. If you don't
know the customer's number you may enter all or part of any word in the
customer's name, or the entire telephone number including the area code, the
entire telephone number without the area code, or the last four digits of the
telephone number to display a list of customers matching your entry.

**Source**|  Enter the source that prompted the customer to visit the store
and make a purchase.

**Status**|  Displays the current status of the order.
New
Backordered


**Item No**|  Enter or scan the item number being purchased.

**Description**|  This field contains the description of the item as it
appears in the Parts file. It may be changed for this order as required.

**Quantity**|  Enter the quantity of the item being ordered.

**Layaway**|  If an item is not to be processed when the order is saved (i.e.
placed on layaway) then check this box. When the customer returns to pickup
the item uncheck this box so the item will be processed when the order is
saved.

**Pkg**|  If package pricing has been defined for the order then all items
that belong to a package will display the same number in this field.

**Unit Price**|  Enter the unit price for the goods being sold. This is the
price before discount and tax.

**Disc Pct**|  Enter the line item discount being applied to this item. This
is a discount percent (e.g. 10.00 = 10%)

**Taxable**|  Check this box if the associated item is taxable. This should
normally be set automatically based on the tax flag defined in the item master
file.

**Ext Price**|  This field contains the extended value of the associated line
item.

**?**|  Click this button to select from a list of options related to the
associated item. These include inventory lookup, removing the item, returning
the item, canceling the item, entering or changing the serial number, and
setting up a package price.

**Taken**|  If this box is checked it indicates that the associated item has
already been taken (i.e. received by the customer) from a prfevious posting of
the order. It may not be updated manually.

**Pay Type**|  Enter the payment type used for this order. You may enter
multiple payments if split payments are made by the customer. The entry made
here must match the valid entries listed in [PSO.CONTROL](../PSO-CONTROL/README.md).

**Tendered**|  Enter the amount tendered by the customer for the associated
payment type.

**Pay Amount**|  Enter the amount of payment received from the customer.

**Pay Deposit**|  If this payment amount is to be applied as a deposit, enter
the amount of deposit here.
This amount will default to the payment amount, if there are hold (layaway)
items on the order.

**Payment Posted**|  A check mark in this box indicates that the associated
payment was posted during a previous save. It may not be changed manually.

**Total Deposits**|  Displays the total amount of deposits not yet applied.

**Deposit Minimum**|  Displays the minimum deposit amount required for the
items placed on layaway.

**Save (F9)**|  Click this button to save the order. You may also press the F9
key or Ctrl+S.

**Hold**|  Click this button to save the order in a hold status. This option
is available only on new orders (i.e. those that have not had anything taken
yet). The purpose of the option is to allow an order that had been scanned to
be saved and then recalled and completed at a later time. This might occur if
a customer decides he needs to get another item after everthing else has been
scanned. You can save the order in a hold status so you can checkout other
customers until the original customer returns. Then you can retrieve the order
based on the order number, printed on the customers temporary receipt, and
finish the order.

**Return**|  Click this button if you want to return items previously taken.
You will then be presented with a list of all items that had been previously
processed. Click on each item you want to return or click the "Check All"
button to mark all items as returned. You may also scan individual returns by
clicking on the "Scan Returns" check box before scanning each item. This cause
a minus one (-1) to be loaded in the Quantity column.

**Layaway**|  Click this button to make add, remove or cancel items on
layaway.

**Package**|  Click this button the setup, change or remove a package price
for a group of items.

**Discount**|  Click this button to apply a discount to one or more items on
the order.

**Scan Returns**|  Check this box when you want to scan or enter item numbers
that are to be returned. Instead of loading a quantity of 1 for the item a
quantity of -1 will be loaded. Uncheck the box when you want to scan normal
sales.

**Scan Layaways**|  When this box is checked any items that are entered or
scanned are assumed to be for layaway and will automatically be flagged as a
layaway item. If you check this box after items have already been entered you
will be given the option of flagging some or all of those items as layaways.

**Total Quantity**|  This field contains the total quantity on this order.

**Subtotal**|  This field contains the sub total of all items on the order
including holds (layaways) and previously taken items.

**Sales Tax**|  This field contains the amount of sales tax to be collected
based on the subtotal of items checked as taxable.

**Order Total**|  Displays the total dollar value of the order (Sub Total +
Sales Tax).

**Prior Paid**|  Display the total amount paid previously including deposits.

**Balance Due**|  Displays the amount of the order that was not previously
paid.

**Current Due**|  Displays the minimum amount that must be tendered at this
time. This includes any deposits required.

**Tendered**|  Displays the sum of the payments entered that had not been
entered previously plus any deposits currently applied.

**Change Due**|  Displays the change that is due to the customer. This figure
is calculated as the sum of all current payments (i.e. those just entered)
less any amounts designated as deposits from those payments.

**Log On/Off**|  Click this button to bring up the log on dialog box. The user
that logged on last is logged off.

**Drawer**|  Click this button to open the cash drawer.

**Current Entry Rep**|  Displays the name of the rep currently signed on for
entering orders.

**Select Pay Type**|  Click this button to select from a list of payment types
and/or scan a credit card.

**Total Payments**|  Displays the total amount of applied payments.

**Minimum Payments**|  Displays the minimum amount of applied payments that
are required before the order may be saved.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
