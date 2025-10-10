##  Receipt Traveler (RECEIPTS.R3)

<PageHeader />

**Form Details**  
[ Form Details ](RECEIPTS-R3-1/README.md)   

**Purpose**  
The RECEIPTS.R3 procedure is used to create receipt travelers. Receipt
travelers are used as a means of identifying materials as the are moved
through the receiving cycle. An individual page is created for each line item
received. The intent is that at least one copy for each item would accompany
the materials through the process. Other copies may be sent to other
departments such as Accounts Payable if desired.

**Frequency of Use**  
As receipts are entered into the system or as required.

**Prerequisites**  
None.

**Data Fields**

**PO Number** The number of the purchase order against which the receipt was
made.  
**Receipt Number** A sequential number assigned from the purchase order record
to identify the receipt. The full receipt ID is made up of the PO Number
followed by a dash (-), followed by a sequential number.  
**Packing Slip** The packing slip number as entered in the [ RECEIPTS.E ](../../PUR-ENTRY/RECEIPTS-E/README.md) procedure.   
**Receipt Date** The date the receipt was made as entered in the [ RECEIPTS.E ](../../PUR-ENTRY/RECEIPTS-E/README.md) procedure.   
**Vendor Number** The number of the vendor on the purchase order.  
**Vendor Name** The name of the purchase order vendor.  
**Buyer** The name of the buyer as entered on the purchase order.  
**Item Number** The line item number on the purchase order for the item
received.  
**Part Number** The internal number of the part received.  
**Rev** The revision level shown on the purchase order for the part number.  
**Vendor Part** The number used by the vendor to identify the part.  
**Description** The multi-line description of the item received.  
**Vendor U/M** The unit of measure in which the parts are delivered by the
vendor.  
**U/M Factor** The number by which the quanity received is to be multiplied to
obtain the number of parts in the internal unit of measure. For example, if
the vendor sells us eggs by the dozen, but we stock eggs individually this
number would be twelve.  
**Vendor Qty** The quantity received of the item in the vendor's unit of
measure.  
**Stocking U/M** The internal unit of measure used for stocking the part.  
**Stocking Qty** The quantity received in terms of the internal unit of
measure. This is the quantity which is applied to inventory.  
**Days Early** The number of days that the item was received ahead of
schedule.  
**Quantity Early** The portion of the quantity received which exceeds the
scheduled quantity.  
**Receiving Location** The inventory location into which the items were placed
when then receipt was entered.  
**Stocking Location** The inventory loacation to which the items are to be
moved after they pass inspection.  
**WO ID** The numbers of all of the work orders which show a shortage for the
part received.  
**Qty Short** The quantity of the part which is short on the associated work
order.  
**St** The status of the associated work order. Will be P - Pulled, or S -
Short.  
**Assy Number** The part number of the top assembly on the associated work
order.  
**Model Number** The model number of the assembly on the associated work
order.  
**Rel Date** The date on which the work order was released.  
**Due Date** The date on which the work order is scheduled to be completed.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />