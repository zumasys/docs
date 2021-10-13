## Debit Entry (RECEIPTS.E2)
<PageHeader />

## Components

![](./RECEIPTS-E2-2.jpg)

| **Phantom Li**|  The phantom line item. It must match a line item on the
receipt for a phantom part with quantity received. This data is loaded from
the original receipt.

-  
**Comp Li**|  The component line number. This data is loaded from the original
receipt.

**Comp Qty**|  Enter the quantity of this item being debited.

**Comp Bin**|  Enter the bin number from which the material is being returned.
The bin number defaults to the bin entered during the original receipt.

**Comp Lot**|  Contains the lot number assigned to the receipt line item. It
may not be changed.

**Comp Vend Lot**|  Contains the vendor's lot number for the line item.

**Comp Part**|  Contains the internal part number of the item being received.

**Description**|

**Comp Invloc**|  The location from which the parts will be removed.

**Parent WO**|  Contains the work order number the part will be removed from
if the location is a work in process location. This is derived from the parent
phantom part and cannot be changed.

**Comp Notes**|  Enter any notes pertaining to this component part debit
receipt.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
