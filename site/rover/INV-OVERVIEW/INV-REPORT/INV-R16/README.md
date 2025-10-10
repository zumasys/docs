##  Summary Inventory Availability Listing (INV.R16)

<PageHeader />

**Form Details**  
[ Form Details ](INV-R16-1/README.md)   

**Purpose**  
The INV.R16 procedure is used to produce a report which shows inventory availability for specified part numbers. The component requirements are combined for all specified assemblies. If you wish to view the requirements by assembly number run procedure [ INV.R4 ](../../../../rover/INV-OVERVIEW/INV-REPORT/INV-R4/README.md) .   
  
The procedure can be used to determine available inventory for either current,
on-hand balances or for projected on-hand balances from the MRP process. The
report can be run for all parts, selected parts, or shortages only.

**Frequency of Use**  
As required.

**Prerequisites**  
If the projected inventory balances are to be used, MRP must have been
processed.

**Data Fields**

**Part** The part number of each component required.  
**Description** The first line of the description for the part number as it
appears on the Parts Master.  
**On.Hand** The total quantity of the part on hand.  
**Proj.Bal** The total quantity of the part which is projected to be on hand
for the selected date.  
**Qty.Req** The quantity required of the associated part number to complete
the number of units specified for the assembly.  
**Qty.Short** The quantity which would not be available if you pulled a kit
for the assembly.  
**Vendor/ Contact/ Phone** The vendor number, contact person and phone number
as found on the purchase order.  
**WO Customer** The customer found in the Sales Order referenced in the WO
record.  
**PO/Li#** The purchase order and line item number(s) for the part number.  
**WO#** Any open work orders for this part will print under the open PO data.  
**Due.Date** The date on which the purchase and/or work order is due.  
**Quantity** The quantity due as found on the purchase and/or work order.  
**PO.Line.Notes** The line item notes as found on the purchase order.  
**WO.Line.Notes** The first line (or 25 chars) of notes as found on the work
order.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />