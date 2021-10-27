##  Past Due Sales Order Listing by Customer (SO.R5)

<PageHeader />

**Form Details**  
[ Form Details ](SO-R5-1/README.md)   

**Purpose**  
The SO.R5 procedure provides a listing of all past due sales order items by
customer. This listing will include shipments in a "N" (new or pending)
status. The report is listed in sales order number sequence. You may limit the
listing to specific customers and sales order type codes.  
  
The determination of what constitutes a past due order is based on the cut-off
date entered. Anything due on or before the cut-off date will appear on the
listing. By setting the cut-off date you can control how much is displayed on
the listing.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**SO ID** The ID of the open sales order record.  
**Type** The user defined sales order type code for the order.  
**Li#** The line item numbers on the sales order.  
**Part#** The part number associated with the line item.  
**Model Number** The model number associated to the part.  
**Description** The description of the open order item.  
**Rev** The revision of the part on order.  
**Unit Price** The unit price for the item.  
**Disc%** The percentage discount to be applied to the unit price on invoices
for the item.  
**Sch Date** The dates on which the item is scheduled to be shipped.  
**Sch Qty** The quantity to be shipped on the associated schedule date.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />