## Container Receipt Confirmation and Price Update (CONTAINER.E2)
<PageHeader />

## Line Items

![](./CONTAINER-E2-2.jpg)

| **Li#**|  Enter the line item number to be used in identifying the
associated item on the container. The next sequential number will be
automatically assigned if the prior line item is numeric.

-  
**Part Number**|  Enter the part number associated with this container line
item. For a non-inventory or expense item, leave this field blank.

**Li Desc**|  Enter the description of the item being purchased. This
description is defaulted from the PARTS file when a part number is entered.

**PO ID**|  This is the PO number associated with this container. A PO number
and PO line# can be entered, and the part number and quantity will be loaded
for you. If a PO number does not exist for the part number and vendor, then a
PO will be automatically created.

**PO LI**|  Enter the line number for the PO to have the part number and
quantity associated with that line loaded for you.

**BOL Qty**|  This is the quantity on the bill of lading for this PO line
item. It is initially defaulted to the open PO line item quantity but can be
changed if it differs from the BOL document.

**Receipt Qty**|  Enter the receipt quantity for this container line item.
When the status is set to "C" for this container, then the receipt record will
be created for this PO line item and the inventory transaction will take place
for the quantity entered. If no quantity is entered, then no receipt record
will be created, unless a reject quantity is entered for this line item.

**Buy U/M**|  This is the buy unit of measure from the purchase order.

**U/M Factor**|  The PO unit of measure factor for this line item. If there is
a factor it translates the buy quantity to the stocking quantity.

**PO Unit Price**|  This is the PO unit price associated with this PO line
item. It can be updated here which will affect the PO value and container
value.

**Price Per**|  Enter the price per quantity associated with the unit price
entered. For example, if the vendor quoted a price of $9.85 per 100 feet of
wire you would enter 9.85 in the unit price field and 100 in the price per
field. When a receipt is made against the item as number of feet received, the
system will divide the unit price by the price per to determine the actual
unit cost. In the case of our example the calculated unit price would be
9.85/100 = .0985 per foot.

**Line Item Value**|  This is the dollar amount associated with this conainer
line item.

**Receipts ID**|  This is the receipt id for the associated container line
item. It is shown for reference only.

**Container.Nbr**|  The container number is displayed for reference only.

**Total Container Value**|  Contains the total value of this container.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
