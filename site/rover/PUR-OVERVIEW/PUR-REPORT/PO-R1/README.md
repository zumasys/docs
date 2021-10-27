##  Open Purchase Order Listing by Part Number (PO.R1)

<PageHeader />

**Form Details**  
[ Form Details ](PO-R1-1/README.md)   

**Purpose**  
The PO.R1 procedure is used to create open purchase order listings. The user
may specify each part number he would like to see or may specify that all part
numbers are to be included. If all items are selected they will be sorted by
category and part number. The report will list all of the purchase order lines
which meet the selection criteria and have a balance open. Only the dates and
quantities that are still open are displayed on the report.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part Number** The part number of the item on the purchase order.  
**Description** The first line of the description for the associated part
number.  
**PO ID** The purchase order numbers of the items.  
**Vend#** The number which identifies the vendor for the purchase order.  
**Vendor Name** The name of the purchase order vendor.  
**Li#** The line item number on the purchase order which referenced the part
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
**If the item hold was in** is on hold then the word "HOLD" and the date on
which the itiated will be placed under the date and quantity columns.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />