## Purchase Requisition Entry (POREQ.E)
<PageHeader />

## Line Items

![](./POREQ-E-2.jpg)

| **Line Item**|  Enter the line item number to be associated with each item
to be purchased. To assign the next sequential number automatically enter the
letter "N".

-  
**Part Number**|  If you are requesting the procurement of an inventory item
enter the part number identifying the item in this field. If you are
purchasing non-inventory items (e.g. items without a part number) you may
leave this field blank and describe it in the description field.

**Desc**|  If you entered a part number at the part number prompt the
description from the parts master for the part will be loaded into this field.
If you did not enter a part number you should enter a description of the item
being requested here.

**Revision**|  If applicable enter the revision of the part to be procured.
The current revision from the parts master will be loaded as the default
entry.

**Buy UM**|  Enter the unit of measure in which the supplier will be providing
the items.

**U/M Factor**|  If the unit of measure in which the item is stocked
internally is different than the unit of measure in which the vendor supplies
the items, enter the factor by which the vendor's quantity is to be multiplied
to convert the quantitiy into the internal unit of measure. For example, if
you were purchasing cleaning solvent that you inventoried by the bottle, but
the vendor sold it to you by the case, with 24 bottles to a case, you would
enter the number 24 in this field. Fractional quantities may be entered as
well.

**Receipt Loc**|  If you are requesting an inventory item (i.e. an item with a
part number) enter the inventory location into which it will be moved when it
is received. Leave this field blank for items without a part number.

**Stock Loc**|  Enter the inventory location into which the items are to be
moved after inspection.

**Work Order**|  If you are purchasing the items directly to a work order or
are requesting the performance of an outside processing step on a work order,
enter the work order number in this field. You must specify the work in
process location for the work order in the receiving and stocking location
fields.

**Account**|  If you are requesting non-inventory items (i.e. no part number)
you must define the general ledger account number to be debited with the cost
of the purchase.

**Project Id**|  If this purchase requisition line item is for a project,
enter the project number. This will cause the costs associated with this line
item to be added into the project's scheduled costs.

**Task Id**|  Enter the task ID associated with the project for this
requisition line item. A lookup is provided to show all the tasks for the
project.

**Vendor Part**|  Enter the vendor/manufacturer part numbers that are
acceptable to fullfill the requirement.

**Mfgr Name**|  Enter the name of the manufacturer for the associated part.

**Schedule Date**|  Enter the dates on which you want the items to arrive.

**Schedule Quantity**|  Enter the quantity of the item to be received on each
of the associated dates. The quantity should be specified in the vendor's unit
of measure.

**Total Quantity**|  This field will contain the total of the quantities
specified in the scedule quantities fields. If you do not want to specify
delivery dates and quantities you may leave those fields blank and enter the
total quantity in this field.

**Price**|  If you know the price the vendor is expected to charge for the
items enter it here.

**Price Per**|  If the vendor charges a price per some number of units, for
example per 100 units, enter the number of units in this field.

**Taxable**|  Check here if the items on this line are subject to sales tax.

**Notes**|  Enter any notes applicable to the items being requested on the
line item.

**PO Number**|  Displays the purchase order number used to satisfy the
requirement on the line item.

**PO Line Number**|  Contains the line item number on the purchase order used
to satisfy the requirement on the requisition.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
