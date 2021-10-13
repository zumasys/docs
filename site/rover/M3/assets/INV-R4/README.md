## Component Availability with On Order Data (INV.R4)
<PageHeader />

**Form Details**
[Form Details](../INV-R4-1/README.md)

**Purpose**
The INV.R4 procedure is used to produce a report which shows inventory
availability for the part numbers specified. The procedure can be used to
determine available inventory for either current on-hand balances or for
projected on-hand balances from the MRP process. The report can be run for all
parts, selected parts, or shortages only.

**Frequency of Use**
As required.

**Prerequisites**
If the projected inventory balances are to be used, MRP must have been
processed.

**Data Fields**

| **Li#**|  The line item number of the bill of material record for the
associated part number.
-  
**Part**|  The part number of each component required.
**Description**|  The first line of the description for the part number as it
appears on the Parts Master.
**On.Hand**|  The total quantity of the part on hand.
**Proj.Bal**|  The total quantity of the part which is projected to be on hand
for the selected date.
**Qty.Req**|  The quantity required of the associated part number to complete
the number of units specified for the assembly.
**Qty.Short**|  The quantity which would not be available if you pulled a kit
for the assembly.
**Vendor/ Contact/ Phone**|  The vendor number, contact person and phone
number as found on the purchase order.
**WO Customer**|  The customer found in the Sales Order referenced in the WO
record.
**PO/Li#**|  The purchase order and line item number(s) for the part number.
**WO#**|  Any open work orders for this part will print under the open PO
data.
**Due.Date**|  The date on which the purchase and/or work order is due.
**Quantity**|  The quantity due as found on the purchase and/or work order.
**PO.Line.Notes**|  The line item notes as found on the purchase order.
**WO.Line.Notes**|  The first line (or 25 chars) of notes as found on the work
order.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
