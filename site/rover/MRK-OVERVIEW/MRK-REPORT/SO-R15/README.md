##  Past Due Sales Orders by Customer with WO Data (SO.R15)

<PageHeader />

**Form Details**  
[ Form Details ](SO-R15-1/README.md)   

**Purpose**  
The SO.R15 procedure provides a listing of all past due sales order items by
customer. For each part number listed, if there are any open work orders for
the part, they are listed along with any current quantities at the work
order's operations. You may limit the listing to specific customers and sales
order type codes.  
  
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
**Description** The description of the open order item.  
**Rev** The revision of the part on order.  
**Sch Date** The dates on which the item is scheduled to be shipped.  
**Sch Qty** The quantity to be shipped on the associated schedule date.  
**WO ID** The list of open work orders for the associated part number.  
**Status** The status of the associated work  
**Sch Date** The scheduled completion date of the associated work order.  
**Oper** The operation number on the work order that has a current quantity.  
**Work Center** The work center on the work order that has a current quantity.  
**Oper Qty** The current quantity at the associated operation/work center.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />