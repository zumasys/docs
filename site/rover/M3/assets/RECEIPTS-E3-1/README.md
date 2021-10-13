## Receipts Reversal/Deletion (RECEIPTS.E3)
<PageHeader />

## Line Items

![](./RECEIPTS-E3-1.jpg)

| **Rec ID**|  Enter the number of the receipt that is to be reversed. The
receipt number is made up of the purchase order number followed by a dash (-)
and a sequential number maintained in the purchase order.

-  
**Vendor**|  Contains the name of the vendor associated with the purchase
order. This data is loaded from the vendor record and may not be changed.

**Container**|  This is the container number associated with this receipt if
this receipt record was created from the container receipt process. It is for
information only and cannot be changed.

**Orig Receipt**|  This contains the original receipt number if the record
being reversed is a debit receipt.

**Status**|  The status of the receipt:
N - New
R - Received
S - Shipped
P -

**Ship Debit?**|  This is checked if a miscellaneous shipment was created for
the debit receipt.

**Rec Date**|  Contains the Date on which the original receipt was made. This
date can be changed but it cannot be changed to a date that is before the
original receipt date.

**Pack Slip**|  Contains the packing slip number from the original receipt.

**Mship Id**|  This is the miscellaenous shipment number created by the debit
receipt process.

**Item**|  Contains the purchase order line item number of the item received.

**Part Number**|  Contains the internal part number of the item being
received.

**Desc**|  The first line of the description of the part being received.

**Vendor Part Number**|  The number the vendor uses to identify the associated
part number.

**Revision**|  The revision level ordered of the associated part number.

**Buy UM**|  The unit of measure in which the vendor ships the materials.

**Factor**|  The factor by which the quantity received is multiplied to obtain
the quantity received in the internal unit of measure. For example, if the
vendor ships you eggs by the dozen, but you stock eggs individually, the
factor would be 12.

**Receiving Loc**|  The location into which the system recorded the receipt of
the materials. The on hand balance in this location for the part will decrease
by the amount received.

**Stock Location**|  This is the inventory location into which the materials
were to be moved after they completed the inspection process. The materials
must be moved back to the receiving location prior to deleting this record so
that the proper inventory balances will be maintained.

**WO.ID**|  Contains the work order number associated with the item on the
receipt.

**Receipt Qty**|  Contains the quantity of the associated lot received.

**Lot No**|  Contains the lot number assigned to the items received. It may
not be changed.

**Vendor Lot No**|  Contains the vendor's lot number assigned to the items
received.

**Bin Number**|  The bin number into which the material was originally
received.

**Li Qty**|  Contains the total quantity of the associated item received.

**Message Box**|


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
