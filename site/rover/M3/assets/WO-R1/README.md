## Work Order Traveler Listing (WO.R1)
<PageHeader />

**Form Details**
[Form Details](../WO-R1-1/README.md)

**Purpose**
The WO.R1 procedure is used to print work order travelers. The user specifies
which work orders are to be printed.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Work Order** | The number of the work order.                                 |
| -------------- | ------------------------------------------------------------- |
| **Model**      | The model number of the assembly being built.                 |
| **Assembly**   | The assembly number of the item being built as defined in the |
parts master.
**Desc**|  The first line of the description of the assembly from the parts
master file.
**Revision**|  The revision level of the assembly being built.
**Quantity**|  The quantity of the assembly being built.
**Release**|  The date on which the work order is to be released to kitting.
**Required**|  The date on which the assemblies are to be completed.
**Customer**|  The name of the customer who ordered the assemblies.
**Sales Order**|  The number of the sales order on which the order was posted.
**Line Item**|  The line item number on the sales order which calls out the
assembly.
**Oper**|  The operation numbers assigned to each step in the routing.
**Work Center**|  The name of the work center associated to the operation.
**Description**|  The description of the operation performed at the work
center.
**Start Date**|  The date on which activity is to begin at the operation.
**Setup Hours**|  The hours required for setup at the operation.
**Run Hours**|  The Total hours required to process all of the assemblies
through the work center.
**Crew size**|  The number of people or machines who will be working
concurrently on the assemblies.
**Complete Date**|  The date on which processing for all of the assemblies
should be completed.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
