## Inventory Listing by Specification (INV.R8)
<PageHeader />

**Form Details**
[Form Details](../INV-R8-1/README.md)

**Purpose**
The INV.R8 procedure is used to produce an inventory listing for a selected
specification, or list of specifications. All part numbers which contain the
selected specifications will be included on the report. Optionally, the report
may be run including only those parts which have inventory on hand.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Part Number** | The part number.                                            |
| --------------- | ----------------------------------------------------------- |
| **Description** | The part description as read from the Parts file.           |
| **Invloc**      | The inventory location which has an on hand quantity.       |
| **Available**   | The net available quantity for this part and location. This |
figure is calculated by subtracting the committed quantity from the on hand
quantity.
**On Hand**|  The total on hand quantity for this part at the selected
location.
**Committed**|  The total quantity committed to sales orders.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
