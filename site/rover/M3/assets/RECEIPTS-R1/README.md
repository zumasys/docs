## Purchase Order Receipts Listing (RECEIPTS.R1)
<PageHeader />

**Form Details**
[Form Details](../RECEIPTS-R1-1/README.md)

**Purpose**
The RECEIPTS.R1 procedure is used to create listings of purchase order
receipts. The user specifies the date range to use in determining which
receipts are to be included in the listing. The listing is sorted by receipt
date with page breaks on receipt date.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Receipt ID**|  The number of the receipt. This number is made up of
purchase order number, followed by a dash (-), followed by a sequential
number.
-  
**Vendor**|  The number of the vendor on the purchase order and the name of
the vendor.
**Li#**|  The line item number on the purchase order for the associated item.
**Part#**|  The number of the part received on the associated line item.
**Description**|  The first line of the description of the item received.
**Rev**|  The revision level shown on the associated purchase order for the
part number.
**Unit Price**|  The unit price on the purchase order for the item.
**UM**|  The unit of measure in which the parts are delivered by the vendor.
**Factor**|  The number by which the quanitities on order are to be multiplied
to obtain the number of parts in the internal unit of measure. For example, if
the vendor sells us eggs by the dozen, but we stock eggs individually this
number would be twelve.
**Quantity**|  The quantity received of the item.
**Ext Price**|  The extended value of the receipt line item (price x
quantity).
**Days Early**|  The number of days that the item was received ahead of
schedule.
**Quantity Early**|  The portion of the quantity received which exceeds the
scheduled quantity.
**Note: There ma item. T for the which ex quantity for thes**|  y be more then
one set of Days and Quantity Early for each his happens when the quantity
received exceeds the quantity current schedule date. Any portion of the
quantity received ceeds the total of all the open schedules is shown only as a
with no associated days early since there was no due date e items.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
