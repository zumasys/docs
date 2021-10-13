## Purchase Order Receipts for a Vendor (RECEIPTS.R2)
<PageHeader />

**Form Details**
[Form Details](../RECEIPTS-R2-1/README.md)

**Purpose**
The RECEIPTS.R2 procedure is used to create listings of debits against
purchase order receipts. The user specifies the date range to use in
determining which debits are to be included in the listing. The listing is
sorted by debit date with page breaks on debit date.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Debit ID**|  The number of the debit. This number is made up of purchase
order number, followed by a dash (-), followed by the letter "D" and a
sequential number.
-  
**Vendor**|  The number of the vendor on the purchase order and the name of
the vendor.
**Li#**|  The line item number on the purchase order for the associated item.
**Part#**|  The number of the part debited on the associated line item.
**Description**|  The first line of the description of the item debited.
**Rev**|  The revision level shown on the associated purchase order for the
part number.
**Unit Price**|  The unit price on the purchase order for the item.
**UM**|  The unit of measure in which the parts are delivered by the vendor.
**Factor**|  The number by which the quanitities on order are to be multiplied
to obtain the number of parts in the internal unit of measure. For example, if
the vendor sells us eggs by the dozen, but we stock eggs individually this
number would be twelve.
**Quantity**|  The quantity debited of the item.
**Trans#**|  The number of the inventory transaction created as a result of
the debit.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
