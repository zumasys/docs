## Un-Released Work Order Listing (WO.R3)
<PageHeader />

**Form Details**
[Form Details](../WO-R3-1/README.md)

**Purpose**
The WO.R3 procedure is used to print a listing of all work orders which have
not been released. The user may set a cut-off date which will limit the work
orders listed to include only those with a release date less than or equal to
the cut-off date. This report may be used as a means of determining which work
orders should be released for kitting.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **WO ID** | The number of the work order.                                   |
| --------- | --------------------------------------------------------------- |
| **Part**  | The part number of the item being built as defined in the parts |
master.
**Description**|  The first line of the description of the part from the parts
master file.
**Rel Date**|  The date on which the work order is to be released to kitting.
**Req Date**|  The date on which the assemblies are to be completed.
**Quantity**|  The total number of items to be built on the work order.
**Customer Name**|  The name of the customer who ordered the assemblies.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
