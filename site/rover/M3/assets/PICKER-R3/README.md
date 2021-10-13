## Work Order Inventory Availability Listing with Order Data (PICKER.R3)
<PageHeader />

**Form Details**
[Form Details](../PICKER-R3-1/README.md)

**Purpose**
The PICKER.R3 procedure is used to produce a report which shows inventory
availability for the work orders specified. The procedure can be used to
determine available inventory for either current, on-hand balances or for
projected on-hand balances from the MRP process. The report can be run to
display shortages only.

**Frequency of Use**
As required.

**Prerequisites**
If the projected inventory balances are to be used, the MRP must have been
processed.

**Data Fields**

| **Li#**|  The line item number on the work order picking list for the
associated part number.
-  
**Part**|  The part number of each component required.
**Description**|  The first line of the description for the part number as it
appears on the Parts Master.
**Qty.Req**|  The quantity required of the associated part number to complete
the number of units specified on the work order.
**On.Hand**|  The total quantity of the part on hand.
**Proj.Bal**|  The total quantity of the part which is projected to be
available for the selected date.
**Qty.Short**|  The quantity which would not be available if you pulled a kit
for the assembly.
**Vendor/ Contact/ Phone**|  The vendor number, contact person and phone
number as found on the purchase order.
**Wo Customer**|  The customer found on the sales order referenced in the work
order.
**PO/Li#**|  The purchase order and line item number(s) for the part number.
**WO#**|  All open work orders will print beneath any open purchase orders.
**Due.Date**|  The date on which the purchase and/or work order is due.
**Quantity**|  The quantity due as found on the purchase and/or work order.
**PO.Line.Notes**|  The line item notes as found on the purchase order.
**WO.Line.Notes**|  The first line (or 25 chars) of notes as found on the work
order.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
