##  Purchase Order Report by Part Number by Vendor (PO.R12)

<PageHeader />

**Form Details**  
[ Form Details ](PO-R12-1/README.md)   

**Purpose**  
The purpose of PO.R12 is to generate a listing of the total quantity and
dollars that have been ordered by part number and vendor. Since both open and
closed orders are included in this report, the dollars and quantities
displayed on this report represent the amounts ordered and not necessarily
received.  
  
This report may be run for selected vendors, parts and a date range. The
selection date used in this report is the purchase order date.

**Frequency of Use**  
As required.

**Prerequisites**  
Purchase orders must exist.

**Data Fields**

**PO ID** The purchase order id.  
**Po Date** The date the purchase order was entered or created.  
**St** The status of the purchase order. N = new, B = backordered, C = closed.  
**Vendor** The id of the vendor that the purchase order was placed with.  
**Vendor Name** The name of the vendor.  
**LiNo** The line item number.  
**Part Number** The part number of the item on the purchase order.  
**Description** The first line of the description for the associated part
number.  
**Qty Ordered** The total quantity ordered for the line item/part number.  
**Unit Price** The unit price quoted entered for the part number on the line
item.  
**Ext Price** The extended price of the line item is calculated by multiplying
the qty ordered by the unit price.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />