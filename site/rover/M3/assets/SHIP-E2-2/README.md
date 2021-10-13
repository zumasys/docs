## Shipment Confirmation (SHIP.E2)
<PageHeader />

## Shipment Line Items

![](./SHIP-E2-2.jpg)

| **Line Item#**|  The line number of the part to be shipped. This does not,
necessarily, have to be in the same sequence as the line items of the sales
order.

-  
**Sales Order Li#**|  Enter the line item number on the sales order that
identifies the item you are shipping. Enter "N" if you wish to add a line item
to the shipper that is not on the sales order. When the record is saved, this
line item will be added to the sales order. The actual line item number will
not be assigned until the record is saved.

**Close So Li**|  Check this box if you wish to close the line item on the
sales order short. If this box is checked when the record is saved, the open
quantity on the sales order will be reduced to match the quantity shipped. If
this box is checked and no quantity is scheduled to ship against this shipper,
the open quantity on the sales order will be cancelled. If you decide to ship
the part number in the future against this sales order, you will need to use
[SO.E](../SO-E/README.md) to re-open the order. If you check this box on a new line
item, the program will uncheck the box.

**Part Number**|  Contains the part number to be shipped, and is loaded from
the sales order for the sales order line number entrered. The part number is
shown for verification only and may not be changed except on new line items.

**Description**|  The description is loaded from the sales order for the sales
order line entered when the shipment is first created. The description may be
changed if required.

**Unit Price**|  Contains the unit price of the items being shipped. The price
is initially loaded from the sales order but may be changed as required.

**Price Per**|  This is the price per factor as entered in the sales order. It
can be changed here if needed. It is used in conjunction with the unit price.
For example, if the material being ordered is priced "per hundred", then 100
should be entered into this field.

**Disc.Pct**|  The discount percent being applied to the unit price on this
line. This is originally defaulted from the Sales Order.

**Unit Discount**|  Contains the discount to be applied to the unit price for
the shipment. The discount is loaded from the sales order but may be changed
as required.

**Fin Goods Loc**|  Enter the inventory location from which the associated
part number is being pulled for shipment. If the line item does not contain a
part number then no entry is required.

**Cost/Goods Loc**|  Enter the cost of goods location to be used for the line
item. This location is defaulted from the [MRK.CONTROL](../MRK-CONTROL/README.md)
record.

**Sales Account#**|  Enter the general ledger account number to be used as the
sales account for the line item. The account number is defaulted from the
[MRK.CONTROL](../MRK-CONTROL/README.md) record.

**Taxable**|  Check this box if the items on this line are taxable. This is
initially defaulted from the sales order line item.

**Pull Qty**|  Enter the quantity which has, or is being shipped. If this part
is either lot or bin controlled, then enter the quantity associated to the lot
or bin number.

**Lot No**|  Enter the lot number for the corresponding quantity entered at
the previous prompt.

**Pick.Bin**|  This field contains the bin number from which the material was
pulled for this shipment.

**Quantity**|  Contains the total quantity being shipped. This field is for
reference only and cannot be changed.

**Line Notes**|  Enter any notes which pertain only to the associated line
item. These will be printed on the shipment form.

**Serial Numbers**|  If the items being shipped are serialized then enter the
serial number for each item in this field. There is an option available in the
help menu for this prompt which allows you to enter a range of serial numbers.
The numbers selected will be inserted at the current prompt position.

**Schedule Date**|  The schedule date is associated with the schedule quantity
and contains the dates for the remaining open balance on the sales order line
item. It is displayed for information and may not be changed.

**Schedule Quantity**|  The schedule quantity is associated with the schedule
date and contains the open balance on the sales order line item for the
associated date.

**Part Image**|  Display of defined image.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
