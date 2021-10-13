## Purchase Order History Listing by Vendor (PO.R7)
<PageHeader />

**Form Details**
[Form Details](../PO-R7-1/README.md)

**Purpose**
The PO.R7 procedure is used to create the purchase order history report by
vendor. The user may specify each vendor number he would like to see or may
specify that all vendors are to be included. If all vendors are selected they
will be sorted in vendor name order. The report will list all of the purchase
orders on file for the vendor, open or closed.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **PO ID The purchase order number.**                               |
| ------------------------------------------------------------------ | --- |
| **PO Date The date on which the purchase order was placed.**       |
| **Li# The line item number on the purchase order.**                |
| **Part The number of the part ordered.**                           |
| **Description The first line of the description for the line ite** | m.  |
| **Vendor Part The number userd by the vendor to identoify the it** | em. |
**Rev The revision level shown on the associated purchas order for the part
number.**|
**Unit Price The unit price quoted by the vendor for the part n**|  umber.
**UM The unit of measure in which the parts will be del by the vendor.**|
**Factor The number by which the quanitities on order are t multiplied to
obtain the number of parts in the in unit of measure. For example, if the
vendor sells eggs by the dozen, but we stock eggs individually number would be
twelve.**|  o be ternal us
**Sch Date The dates the vendor acknowledged that the associa quantities of
the item were to be received.**|
**Sch Qty The quantities, acknowledged by the vendor, that w scheduled to be
received on the associated dates.**|
**Rec Date The dates on which receipts and debits were made a the line
item.**|
**Rec Qty The quantity received or debited on the associated (Debits appear as
negative numbers).**|  date.
**Notes, if present, are included on the report under the vendor name. also
indicates if the item is on hold.**|

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
