## Inventory Transaction Listing for a Specified Part (IT.R2)
<PageHeader />

**Form Details**
[Form Details](../IT-R2-1/README.md)

**Purpose**
The IT.R2 procedure is used to create an inventory transaction listing for a
specified part number within a date range. The records included in the report
are sorted by transaction date.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Trans#**   | The number of the inventory transaction.                       |
| ------------ | -------------------------------------------------------------- |
| **Quantity** | The total quantity of the part moved by the transaction.       |
| **From.Loc** | The name of the inventory location from which the material was |
taken.
**To.Loc**|  The name of the inventory location to which the material was
moved.
**From.WO**|  The work order from which the material was moved.
**To.WO**|  The work order to which the material was sent.
**Created.By**|  A name which describes the procedure which caused the
transaction to occur. These include [IT.E](../IT-E/README.md), RECEIPTS, PICKER, PHYS,
CYCLE and SHIPMENT.
**Record.ID**|  The ID of the record which initiated the transaction.
**Li#**|  The line item number on the record which initiated the transaction.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
