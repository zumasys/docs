## Miscellaneous Shipment (MSHIP.E)
<PageHeader />

## Line Items

![](./MSHIP-E-2.jpg)

| **Li#**|  Enter the line item number to be used in identifying the
associated item. The next sequential number will be automatically assigned if
the prior line item is numeric.

-  
**Part Number**|  Enter the part number associated with this line item. For a
non-inventory items, leave this field blank.

**Description**|  Enter the description of the item being shipped. This
description is defaulted from the PARTS file when a part number is entered.

**Li Ref Doc**|  Enter a line item reference document, if applicable.

**From Loc**|  Enter a from location for this part if an inventory transaction
is to be done. When the status is changed to Shipped, if there are any line
items with from and to locations, an inventory transaction will be done for
those items.

**To Loc**|  Enter a to location for this part if an inventory transaction is
to be done. When the status is changed to Shipped, if there are any line items
with from and to locations, an inventory transaction will be done for those
items.

**Qty**|  Enter the quantity to be shipped. If this item is either lot or bin
controlled, enter the quantity associated with each lot or bin. If it is
neither then enter the entire ship quantity for this line.

**Lot No**|  Enter the lot number being shipped.

**Bin**|  Enter the bin number being shipped.

**Serial**|  Enter the list of serial numbers being shipped. If the part is
flagged as serial required, then the number of serial numbers must match the
total quantity.

**Unit Insurance Value**|  Enter the unit insurance value for shipping. This
will calculate the total insurance value for the line item.

**Total Insurance Value**|  Enter the total insurance value for shipping. This
will calculate the unit insurance value for the line item.

**Line Notes**|  Enter any notes applicable to this line item.

**Total Qty**|  The total quantity to be shipped for this line item.

**UM**|  This is the unit of measure for the associated part number as defined
in [Parts.E](../Parts-E/README.md). It is for reference only and cannot be changed.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
