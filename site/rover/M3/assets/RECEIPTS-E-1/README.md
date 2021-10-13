## Receipts Entry (RECEIPTS.E)
<PageHeader />

## Line Items

![](./RECEIPTS-E-1.jpg)

| **Receipt ID**|  The receipt ID is assigned by the system and is made up of
the purchase order number followed by a dash (-), followed by a sequential
number which is maintained in the purchase order record. If you are creating a
new receipt you should leave this prompt blank. If you want to make a change
to an existing receipt you should enter the full receipt ID.

-  
**PO#**|  Enter the purchase order number against which this receipt is being
made.

**Status**|  The status field contains the current status of the receipt
record. It will display one of the following codes:
N - The items have not been received (pending receipt).
R - The items have been received.
P - The receipt has been posted and the accounts payable record has been
created.

If the status code is not already set to "P" then the user may enter the code
"N" for new, or "R" for received. The "N" status sets the receipt as a new
receipt and does not create any inventory transactions. The "R" status will
confirm the receipt by creating inventory transactions and will then be posted
the next time [RECEIPTS.P1](../RECEIPTS-P1/README.md) procedure is run. Once the status
has been set to "R" and the record has been filed, you may not reset the
status to "N" or make any changes to the receipt.

**Vendor**|  Contains the name of the vendor associated with the purchase
order. This data is loaded from the vendor record and may not be changed.

**Receipt Date**|  Enter the date on which this material was actually
received.

**Pack Slip**|  Enter the packing slip number associated with the materials
received.

**Item**|  Contains the purchase order line item number of the item you are
receiving. This data is preloaded when you enter the purchase order number.

**Receipt Qty**|  Enter the quantity to be received. If this item is either
lot or bin controlled, enter the quantity associated with each lot or bin. If
it is neither then enter the entire receipt quantity for this line. If you did
not receive anything on the associated item then leave this field blank.

**Lot No**|  If the item being received is lot controlled then you may assign
the lot number in this field. If a lot number is not assigned and the part is
lot controlled then the system will assign a number automatically when the
record is filed.

**Vendor Lot No**|  If the vendor has specified a lot number for the items
received you may record the vendor lot number in this field.

**Bin Number**|  Enter the bin number into which this material is being
placed. Entry will only be allowed if the inventory location is set to bin
control.

**LI Qty**|  This is the total receipt quantity entered for the line item. It
is the sum of the lot quantities, if there are multiple entries. It is for
display only and cannot be changed.

**Open Schedule Dates**|  Displays all of the dates for which there is
currently an open quantity of the associated item on the purchase order.

**Open Quantities**|  Displays the quantity open on the associated date.

**Part Number**|  Contains the internal part number of the item being
received. It is displayed to help identify the correct line item and may not
be changed.

**1st line of Description**|  The description of the part being received. This
information is displayed to
assist you in determining the correct line item. It may not be changed.

**Vendor Part Number**|  The number the vendor uses to identify the associated
part number. This information is displayed to assist you in determining the
correct line item. It may not be changed.

**Notes**|  Enter any pertinent line notes for this receipt. These notes will
print on the traveller.

**Revision**|  The revision level ordered of the associated part number. This
data is loaded by the system and may not be changed.

**Buy UM**|  The unit of measure in which the vendor ships the materials. The
data is loaded by the system and may not be changed.

**Factor**|  The factor by which the quantity received is multiplied to obtain
the quantity received in the internal unit of measure. For example, if the
vendor ships you eggs by the dozen, but you stock eggs individually, the
factor would be 12.

**Receiving Loc**|  The location into which the system will record the receipt
of the materials. The on hand balance in this location for the part will
increase by the amount received.

**Stock Location**|  This is the inventory location into which the materials
are to be moved after they complete the inspection process. The movement from
the receiving location into the stock location is done as a separate
transaction.

**WO.ID**|  Contains the work order number the part will be received into if
the receiving location is a work in process location, or the work order into
which the parts are to be moved after being received.

**Close Li**|  If the quantity received is less than the quantity ordered and
you wish to close the line item short, check this box. The order/scheduled
quantity will be adjusted to match the receipt quantity. If, for example, the
order quantity is 100 and you receive in 98, the order quantity will be
changed to 98. If this receipt is reversed via [receipts.e3](../Receipts-e3/README.md),
the order quantity will not revert back to 100. A check mark will default into
this box for you, if the "do not backorder po" field is checked in the
[po.control](../Po-control/README.md) procedure. If this box is not checked the line
item will be backordered.

**Receive All**|  Pressing this button will cause all of the open purchase
order quantities to be defaulted into the quantity fields. At that point,
changes could be made to the receipt quantity.

**Clear all**|  This button can be used to clear all quantities from the
received quantity field.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
