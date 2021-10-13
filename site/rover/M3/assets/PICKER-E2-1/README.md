## Picklist Pull Entry (PICKER.E2)
<PageHeader />

## Picklist

![](./PICKER-E2-1.jpg)

| **Work order ID**|  Enter the work order number associated with the PICKER
you wish to process.

-  
**Item**|  Line item number identifying an item to be pulled from inventory.
Line items can only be added/deleted if the [wo.control](../Wo-control/README.md)
record has been flagged to allow changes in this procedure.

**Part**|  The part number to be pulled from inventory. This field may be
changed if the [WO.CONTROL](../WO-CONTROL/README.md) record has been flagged to allow
changes. If that flag has not been set, changes to this field are only
permiitted via [PICKER.E1](../PICKER-E1/README.md).

**Description**|  The description of the part to be pulled. It may not be
changed.

**Required Quantity**|  The total quantity required from this line item. It
may not be changed.

**Pull Loc**|  This field contains the inventory location that the parts will
be pulled from. If the [WO.CONTROL](../WO-CONTROL/README.md) has been flagged to allow
changes to this field, you will be able to change the location. If the
[WO.CONTROL](../WO-CONTROL/README.md) has not allowed to allow such changes, this field
is displayed for reference only and the location must be changed from
[PICKER.E1](../PICKER-E1/README.md).

**Pulled Inventory**|  Enter the quantity actually pulled from inventory into
the work order.

**Qty pulled from LOT**|  If the associated part number is lot controlled then
enter the lot number corresponding to the
quantity pulled.

**Pulled Bin Number**|  Enter the bin number from which material is to be
allocated. This field will only be allowed if
the inventory location bin control flag is set.

**Scan Qty**|  This field contains the quantity that was scanned during the
PICKER.BE procedure.

**Quantity Short**|  Enter the quantity to be posted to the shortage file for
this part and work order.

**Backflush Oper**|  This is operation that will determine where this item
will be pulled. It is for backflush work orders only.

**UM**|  The part master inventory unit of measure for the associated
component part number.

**Backflush**|  This box is checked if this is a backflush work order. Only
items with operations coded "P" can be pulled for a backflush work order.

**Assy Part**|  The assembly part number. This data is taken from the WO file
and is displayed for information only.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
