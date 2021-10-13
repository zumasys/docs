## Summary Work Order Status Listing (WO.R2)
<PageHeader />

**Form Details**
[Form Details](../WO-R2-1/README.md)

**Purpose**
The WO.R2 procedure is used to print a summary work order status listing. The
user may specify that all assemblies be included or may limit the report to
specific assembly numbers. He may also specify if closed work orders are to
included.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **WO ID**       | The number of the work order.                             |
| --------------- | --------------------------------------------------------- |
| **Part Number** | The part number of the item being built as defined in the |
parts master.
**Description**|  The first line of the description of the part from the parts
master file.
**Model Number**|  The model number of the assembly being built.
**Status**|  Contains the current status of the work order.
**WO Date**|  The date on which the work order was entered into the system.
**Rel Date**|  The date on which the work order is to be released to kitting.
**Req Date**|  The date on which the assemblies are to be completed.
**Customer Name**|  The name of the customer who ordered the assemblies.
**Sales Order**|  The number of the sales order on which the order was posted.
**Line Item**|  The line item number on the sales order which calls out the
assembly.
**Quantity to Build**|  The total number of items to be built on the work
order.
**Quantity Completed**|  The number of assemblies completed.
**Quantity Scrapped**|  The number of assemblies scrapped.
**Quantity Remaining**|  The number of assemblies not yet completed.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
