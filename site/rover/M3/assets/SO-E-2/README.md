## Sales Order Entry (SO.E)
<PageHeader />

## Detail Line Item

![](./SO-E-2.jpg)

| **Line Item#**|  Enter the line number for the associated item.

-  
**Quote#**|  A quote number associated to the sales order may be entered as a
reference in this field. If the quote exists in the Quote file, the relevant
data will be loaded into the line item fields.

**Li Quote Line**|  Enter the line item of the quote which you wish to load
into this sales order.

**Part No**|  Enter the part number being ordered on this line. You may also
enter a model number and have the system retrieve the part number for you. You
may also leave this field blank if there is no part number for the item.

**Revision**|  Enter the revision of the part ordered.

**Customer Part**|  Enter the part number used by the customer to identify the
associated item.

**Desc**|  If a part number is entered the system will load the description
for the part automatically. If you did not enter a part number then a
description of the item should be entered here.

**Schedule Date**|  The schedule date field is associated to the schedule
quantity field, and allows you to enter as many date and quantity pairs as
required. You should enter the required dates in this field in ascending date
sequence.

**Scheduled Qty**|  Enter the quantity of items to be shipped on the
associated schedule date.

**Open Qty**|  Contains the open balance on the associated date.

**Commited**|  Check this box if you want the associated schedule quantity to
be commited in Inventory. If you are entering a new order and the default
commit days has been defined in the [MRK.CONTROL](../MRK-CONTROL/README.md) procedure
then the system will automatically check the box for any date that falls on or
before the current date plus the number of days specified in
[MRK.CONTROL](../MRK-CONTROL/README.md).

**Orig Schedule Date**|  This is the original requested schedule date from the
customer. This may differ from the schedule schedule date once that date has
been changed.

**Total Scheduled Qty**|  The sum of all of the quantities ordered for each
date are displayed for information only in this field.

**Total Open Qty**|  Contains the total quantity of items still open on the
line item.

**Unit Price**|  Enter the unit price being charged for the items on this
line. If there is a contract price for this part number and customer, it will
be retrieved and stored in this field. If no contract applies, then the price
record will be checked for this part, and if found, the following will occur:
** If quantity pricing is not being used, then the price will be retrieved and
stored in this field. If the customer code matches one found in the price
record, the code specific price will be used.**
If contract pricing or quantity pricing is used, then this field should be
skipped, and the price will be calculated and stored after the schedule dates
and total order quantity are entered.

**Price Per**|  Enter the price per factor to be used in conjunction with the
unit price entered. For example, if the material being ordered is priced "per
hundred", then 100 should be entered into this field. If this line item has a
part number, the price per will default based on the part's unit of measure.
The price per is entered for the unit of measure in the [UM.CONTROL](../UM-
CONTROL/README.md) procedure.

**Discount%**|  Enter the discount percent to be applied to the unit price
when shipments are invoiced.
For example, you would enter 10 percent as 10.00. The calculated discount
amount per item will then be loaded into the discount amount field.

**Disc Amt**|  If you prefer to enter a per unit dollar amount instead of a
percentage you may enter that
amount in this field.

**Foreign Price**|  If a currency code and exchange rate are present on the
header, then the foreign price will be displayed here. The foreign price can
also be entered or changed here, and the price will be recalculated based on
the exchange rate.

**FG Loc**|  Enter the inventory location from which the items on the
associated line will be shipped. This location can be over-ridden during the
shipment process if desired.

**CG Loc**|  Enter the cost of goods sold location to be used when the line
item is shipped.

**Sales Acc**|  Enter the sales account number being credited for the amount
of this line item.

**Taxable**|  Check this box if the associated item is taxable. The check box
setting will be defaulted based on the taxable flag in the parts master
record.

**Li Work Orders**|  The work order numbers created for this line item from
SO.E.

**Rep**|  Enter all of the sales reps who will receive a commission for the
items on this line. This field is associated to the commision percent field
and allows you to enter as many sets of rep number and commission percent as
required. If you do not know the rep number, there is an option in the help
menu for this prompt which allows you to select the rep by name.

**Comm%**|  Enter the commission percent the associated rep will receive.

**Project Id**|  If this SO line item is for a project, enter the project
number. This will cause the revenue from this SO line item to be added into
the project revenue.

**Task Id**|  Enter the task ID associated with the project for this SO line
item. A lookup is provided to show all the tasks for the project.

**Hold Code**|  Enter a user defined hold code if you wish to place the items
on this line on hold. You may want to use codes such as "C" for credit hold or
"E" for engineering etc.

**Li Hold Date**|  Enter the date the hold was placed on this line.

**Li Notes**|  Enter any notes pertaining to this line item. If there are
predefined notes available you may load then by selecting the appropriate
option in the help menu for this prompt.

**Shipment Date**|  Contains the date on which the associated shipment number
was posted.

**Shipment Num**|  Contains the shipment number which contained items from
this line. This is the sequential number portion of the shipper ID. The full
shipment ID is the sales order number followed by a dash (-) followed by this
number. When the number is preceded with "R" it indicates that items from the
line were included on an RMA. The data is shown for information only and may
not be changed.

**Shipment Qty**|  Contains the quantity of items from this line which were
shipped on the associated shipment number.

**Open**|  This box is checked when the associated shipment is still open
(i.e. has not been flagged as shipped).

**Total Shipment Qty**|  Contains the total quantity of items shipped for this
line, less returns.

**Part Image**|  Defined Image display.

**Part Number**|  Click this button to display balance and availability
information about the line item part number.

**Single Level**|  Click this button to display the available balances of all
items on the first level bill of material for the line item part number.

**Multi Level**|  Click this button to display the available balances of all
items on all levels of the bill of material for the line item part number.

**Inv Inquiry**|  Click this button to launch the inventory inquiry procedure
([INV.Q](../INV-Q/README.md)) for the line item part number.

**Avail To Prom**|  Click this button to view the available to promise for the
part number.

**Prev**|  Click this button to display the previous line item.

**Next**|  Click this button to display the next line item.

**Add Line**|  Click this button to add a new line item to the end of the
list. You can also perform this function by entering the letter "N" in the
Line Num field.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
