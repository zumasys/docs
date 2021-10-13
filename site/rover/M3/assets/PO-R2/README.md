## Open Purchase Order Listing by Vendor (PO.R2)
<PageHeader />

**Form Details**
[Form Details](../PO-R2-1/README.md)

**Purpose**
The PO.R2 procedure is used to create open purchase order listings by vendor.
The user may specify each vendor number he would like to see or may specify
that all vendors are to be included. If all vendors are selected they will be
sorted by name. The report will list all of the purchase order lines which
meet the selection criteria and have a balance open. Only the dates and
quantities that are still open are displayed on the report.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **PO ID**       | The purchase order numbers which have open items.         |
| --------------- | --------------------------------------------------------- |
| **Li#**         | The line item numbers on the purchase order.              |
| **Part#**       | The part number of the item on the purchase order.        |
| **Description** | The first line of the description for the associated part |
number.
**Rev**|  The revision level shown on the associated purchase order for the
part number.
**Unit Price**|  The unit price quoted by the vendor for the item.
**UM**|  The unit of measure in which the parts will be delivered by the
vendor.
**Factor**|  The number by which the quanitities on order are to be multiplied
to obtain the number of parts in the internal unit of measure. For example, if
the vendor sells us eggs by the dozen, but we stock eggs individually this
number would be twelve.
**Ack Date**|  The dates, acknowledged by the vendor, that the associated
quantities of the item are to be received.
**Ack Qty**|  The quantities, acknowledged by the vendor, that are scheduled
to be received on the associated dates.
**If the item hold was in**|  is on hold then the word "HOLD" and the date on
which the itiated will be placed under the date and quantity columns.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
