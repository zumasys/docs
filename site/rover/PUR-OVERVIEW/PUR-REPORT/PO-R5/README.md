##  Purchase Orders On Hold (PO.R5)

<PageHeader />

**Form Details**  
[ Form Details ](PO-R5-1/README.md)   

**Purpose**  
The PO.R5 procedure is used to create the purchase orders on hold listing. All
of the purchase order items which have been placed on hold will be included in
the report. The report will be sorted by category and part number.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**PO ID** The purchase order number.  
**Vend#** The number which identifies the vendor for the purchase order.  
**Vendor Name** The name of the purchase order vendor.  
**Li#** The line item number on the purchase order which is on hold.  
**Part Number** The part number of the item on the purchase order.  
**Description** The first line of the description for the associated part
number.  
**Rev** The revision level shown on the associated purchase order for the part
number.  
**Unit Price** The unit price quoted by the vendor for the part number.  
**UM** The unit of measure in which the parts will be delivered by the vendor.  
**Factor** The number by which the quanitities on order are to be multiplied
to obtain the number of parts in the internal unit of measure. For example, if
the vendor sells us eggs by the dozen, but we stock eggs individually this
number would be twelve.  
**Ack Date** The dates, acknowledged by the vendor, that the associated
quantities of the item are to be received.  
**Ack Qty** The quantities, acknowledged by the vendor, that are scheduled to
be received on the associated dates.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />