##  Purchase Order History Listing By Part Number (PO.R6)

<PageHeader />

**Form Details**  
[ Form Details ](PO-R6-1/README.md)   

**Purpose**  
The PO.R6 procedure is used to create the purchase order history report. The
user may specify each part number he would like to see or may specify that all
part numbers are to be included. If all items are selected they will be sorted
by category and part number. The report will list all of the purchase order
lines which contain the part numbers specified. This includes all purchase
orders, open or closed.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**PO ID The purchase order number.**  
**PO Date The date on which the purchase order was placed.**  
**Vendor The number which identifies the vendor for the pur order.**  
**Name The name of the purchase order vendor.**  
**Li# The line item number on the purchase order which references the part
number.**  
**Rev The revision level shown on the associated purchas order for the part
number.**  
**Unit Price The unit price quoted by the vendor for the part n** umber.  
**UM The unit of measure in which the parts will be del by the vendor.**  
**Factor The number by which the quanitities on order are t multiplied to
obtain the number of parts in the in unit of measure. For example, if the
vendor sells eggs by the dozen, but we stock eggs individually number would be
twelve.** o be ternal us  
**Sch Date The dates the vendor acknowledged that the associa quantities of
the item were to be received.**  
**Sch Qty The quantities, acknowledged by the vendor, that w scheduled to be
received on the associated dates.**  
**Rec Date The dates on which receipts and debits were made a the line item.**  
**Rec Qty The quantity received or debited on the associated (Debits appear as
negative numbers).** date.  
**Notes, if present, are included on the report under the vendor name. also
indicates if the item is on hold.**  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />