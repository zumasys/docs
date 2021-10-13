## Shortage Listing (SHORTS.R1)
<PageHeader />

**Form Details**
[Form Details](../SHORTS-R1-1/README.md)

**Purpose**
The SHORTS.R1 procedure is used to create a listing of shortages by part
number. The user may select specific part numbers to print or may elect to
print all part numbers in part number sequence.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Part#** | The number of the part that is short.                       |
| --------- | ----------------------------------------------------------- |
| **Desc**  | The description of the part as defined on the parts master. |
| **Notes** | Any notes that were entered about the shortage in the       |
[SHORTS.E](../SHORTS-E/README.md) procedure.
**WO ID**|  The numbers of the work orders which show a shortage for the part.
**Assembly Number**|  The number of the assembly being built on the work
order.
**Model Number**|  The model number of the assembly being built on the work
order.
**Customer Name**|  The name of the customer who ordered the assemblies.
**SO#**|  The number of the sales order on which the order for the assemblies
was placed.
**Li#**|  The line item number on the sales order for the assembly.
**Due Date**|  The date the items are scheduled to be shipped.
**Qty Short**|  The quantity of the components the are short on the work
order.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
