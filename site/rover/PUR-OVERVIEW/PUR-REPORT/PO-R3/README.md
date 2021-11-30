##  Past Due Purchase Order Listing by Part Number (PO.R3)

<PageHeader />

**Form Details**  
[ Form Details ](PO-R3-1/README.md)   

**Purpose**  
The PO.R3 procedure is used to create past due purchase order listings. The
user may specify each part number he would like to see or may specify that all
part numbers are to be included. If all items are selected they will be sorted
by category and part number. The user must also specify the date to be used in
deterimining when an item is past due. Allowing the user to specify this date,
rather than forcing the use of the current date, provides the ability to
control the level of items on the report. The user may wish to set the date
prior to the current date to limit the list to only the older items, or he may
decide to enter a date beyond the current date so he can begin expediting
items before they become past due. The report will list only those items which
meet the selection criteria, and only the dates and quantities which are past
due on those items.

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
quantities of the item are to be received. Only the dates considered past due
are displayed.  
**Ack Qty** The quantities, acknowledged by the vendor, that are scheduled to
be received on the associated dates. Only the quantities which are considered
past due are displayed.  
**If the item hold was in** is on hold then the word "HOLD" and the date on
which the itiated will be placed under the date and quantity columns.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />