##  Inventory Min/Max Listing (INV.R5)

<PageHeader />

**Form Details**  
[ Form Details ](INV-R5-1/README.md)   

**Purpose**  
The INV.R5 procedure is used to produce a listing of the part numbers defined
as Min/Max that are either under the minimum on-hand balance or over the
maximum balance. You may specify which conditions you want the system to check
and display.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part Number** The number that identifies the part being displayed.  
**Description** The description of the associated part number.  
**Min Qty** The minimum acceptable inventory balance as defined in the safety stock field in [ PARTS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E) .   
**Max Qty** The maximum acceptable inventory balance as defined in [ PARTS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E) .   
**Avg Use** The average monthly usage of the part.  
**On Hand** The current on hand balance in inventory.  
**PO ID** The numbers of any open purchase orders on file for the part number.  
**Vendor** The number and name of the vendor associated with the purchase
order.  
**Li#** The line item number on the purchase order containing the part number.  
**Sch Date** The dates on which the item is scheduled for delivery.  
**Sch Qty** The quantity to be delivered on the associated date.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />