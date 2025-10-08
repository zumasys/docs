##  Shipment Entry (SHIP.E)

<PageHeader />

##  Line Items

![](./SHIP-E-1.jpg)

**Shipment Number** Shipment numbers are assigned automatically by the system
when the record is filed. If you are creating a new shipment you should leave
this prompt blank. If you want to make a change to an existing shipment you
should enter the full shipment record ID. The ID of a shipment record is made
up of the sales order number followed by a sequential number maintained for
each sales order. For example, the first shipment for sales order 123 would be
123-1, the second 123-2 etc.  
  
**Sales Order Number** Enter the sales order number from which this shipments
will occur. This must be a valid sales order.  
  
**Customer** Contains the name of the customer assigned to the sales order.
The customer name is displayed for information only and may not be changed.  
  
**Status** The contents of this field indicates the current status of the
shipment. One of the following will be displayed.  
New - The items have not been shipped.  
Shipped - The items have been shipped.  
Posted - The shipment has been posted and may  
not be changed.  
  
**Date** Enter the date the shipment actually occurred or enter the date on
which it is planned to occur. The system will default the current date.  
  
**Li#** The line number of the part to be shipped. This does not, necessarily,
have to be in the same sequence as the line items of the sales order.  
  
**SoLi** Enter the line item number on the sales order that identifies the
item you are shipping.  
  
**Part Number** Contains the part number to be shipped, and is loaded from the
sales order for the sales order line number entered. The part number may not
be changed.  
  
**Description** The description is loaded from the sales order for a sales
order line entered. The description is displayed for verification only and may
not be changed.  
  
**Invloc** Enter the inventory location from which the associated part number
is being pulled for shipment. If the line item does not contain a part number
then no entry is required.  
  
**Pull Qty** Enter the quantity to be shipped. If this item is either lot or
bin controlled, enter the quantity associated with each lot or bin. If it is
neither then enter the entire ship quantity for this line.  
  
**Lot No** Enter the lot number begin shipped.  
  
**Bin** Enter the bin number against which you wish to allocate inventory for
this shipment.  
  
**Quantity** Contains the total quantity of the line item being shipped.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />