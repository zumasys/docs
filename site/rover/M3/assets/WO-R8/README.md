## Work Order Listing by Req Date (WO.R8)
<PageHeader />

**Form Details**
[Form Details](../WO-R8-1/README.md)

**Purpose**
The WO.R8 procedure is used to print a work order status listing by required
date. The user may specify a cutoff date to limit the scope of the report and
also choose whether to include closed orders or not. The default is to show
open orders only.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **WO ID**       | The number of the work order.                                 |
| --------------- | ------------------------------------------------------------- |
| **WO Date**     | The date on which the work order was entered into the system. |
| **Part Number** | The part number of the item being built as defined in the     |
parts master.
**Description**|  The first line of the description of the part from the parts
master file.
**Status**|  Contains the current status of the work order.
**WO Qty**|  The total number of items to be built on the work order.
**Balance Due**|  The current open quantity on the work order .
**SO ID**|  The number of the sales order on which the order was posted.
**Customer Name**|  The name of the customer who ordered the assemblies.
**Req Date**|  The date on which the assemblies are to be completed.
**Location**|  The inventory location to which the assemblies are to be
completed.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
