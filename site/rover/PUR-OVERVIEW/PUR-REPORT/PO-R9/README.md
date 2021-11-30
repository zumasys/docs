##  Purchase Order Activity Listing (PO.R9)

<PageHeader />

**Form Details**  
[ Form Details ](PO-R9-1/README.md)   

**Purpose**  
The PO.R9 procedure is used to create the purchase order activity report. The user specifies the date range to be used in selecting which records are to be included in the report. The system selects any record which has been filed with the [ PO.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E) procedure within the date range specified. The primary use for this report is for monitoring the activity of the purchasing department over a specific period of time, usually on a daily basis. 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**PO ID The purchase order number.**  
**Vendor The name and number of the vendor assigned to the purchase order.**  
**Li# The line item number on the purchase order.**  
**Part The number of the part ordered.**  
**Description The first line of the description for the line ite** m.  
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
**Status Will be either "New", "Backordered" or "Closed".**  
**Balance Due The remaining open balance on the associated line** item.  
**Notes, if present, are included on the report under the description. also
indicates if the item is on hold.**  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />