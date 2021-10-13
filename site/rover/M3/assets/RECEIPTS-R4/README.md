## Prints Receipt Traveler for All Line Items (RECEIPTS.R4)
<PageHeader />

**Form Details**
[Form Details](../RECEIPTS-R4-1/README.md)

**Purpose**
The RECEIPTS.R4 procedure creates a receipt traveler that list all line items
received on a particular packing-slip and / or receiving document for a
particular purchase order. Pricing information is included on the traveler.
This traveler can then be forwarded to the Accounts Payable department to
attach to the invoice.

A separate page prints per receipt and the operator specifies which receipts
to print.

**Frequency of Use**
As receipts are entered into the system or as required.

**Prerequisites**
None.

**Data Fields**

| **Receipt/AP Id**|  The Purchase Order Number plus the receipt number. The
receipt number is a sequential number assigned from the purchase order record
to identify the receipt.
-  
**Packing Slip**|  The packing slip number as entered in the
[RECEIPTS.E](../RECEIPTS-E/README.md) procedure.
**Receipt Date**|  The date the receipt was made as entered in the
[RECEIPTS.E](../RECEIPTS-E/README.md) procedure.
**Vendor Number**|  The number of the vendor on the purchase order.
**Vendor Name**|  The name of the purchase order vendor.
**Buyer**|  The name of the buyer as entered on the purchase order.
**Item Number**|  The line item number on the purchase order for the item
received.
**Part Number**|  The internal number of the part received.
**Vendor Part**|  The number used by the vendor to identify the part.
**Description**|  The first two lines of the description of the item received.
**Vendor U/M**|  The unit of measure in which the parts are delivered by the
vendor.
**U/M Factor**|  The number by which the quanity received is to be multiplied
to obtain the number of parts in the internal unit of measure. For example, if
the vendor sells us eggs by the dozen, but we stock eggs individually this
number would be twelve.
**Vendor Qty**|  The quantity received of the item in the vendor's unit of
measure.
**Stocking U/M**|  The internal unit of measure used for stocking the part.
**Stocking Qty**|  The quantity received in terms of the internal unit of
measure. This is the quantity which is applied to inventory.
**Unit Cost**|  The cost the part was received against in
[RECEIPTS.E](../RECEIPTS-E/README.md).
**Price Per**|  If the vendor prices the material based upon some grouping or
packaging requirement. For example, if the price = .395 per 1000 pcs the price
per would be equal to 1000.
**Extended Amount**|  The cost * qty / price

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
