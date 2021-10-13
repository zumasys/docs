## Container Stocking Worksheet (CONTAINER.R2)
<PageHeader />

**Form Details**
[Form Details](../CONTAINER-R2-1/README.md)

**Purpose**
The CONTAINER.R2 procedure is used to create a container stocking worksheet.
The user enters the container number to print.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Container ID** | The container number.                                          |
| ---------------- | -------------------------------------------------------------- |
| **Vendor**       | The number of the vendor on the container.                     |
| **Li#**          | The line item number on the container for the associated item. |
| **Part#**        | The part number on the container for the associated item.      |
| **BOL Qty**      | The line item container quantity from the bill of lading       |
document.
**Recv Qty**|  The actual quantity received for the container line item.
**Bin Qty**|  If the receiving location is bin controlled, then one or more
bin quantities will print.
**Bin Loc**|  If the receiving location is bin controlled, then one or more
bin locations will print.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
