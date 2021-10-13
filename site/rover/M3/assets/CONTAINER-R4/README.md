## Container Receipt Report (CONTAINER.R4)
<PageHeader />

**Form Details**
[Form Details](../CONTAINER-R4-1/README.md)

**Purpose**
The CONTAINER.R4 procedure is used to create a container receipt report for
all containers received within a date range specified by the user or for
specified container numbers entered or for specific status codes checked.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Container**   | The container number.                                    |
| --------------- | -------------------------------------------------------- |
| **Part Number** | The part number for each line item on the container.     |
| **New PO Nbr**  | This will show the PO number only if it was created as a |
result of this container.
**BOL/OTW Qty**|  The bill of lading (on the water) quantity for the part.
**Received Qty**|  The actual quantity received for the part.
**Diff (+/-)**|  The difference between the received quantity and the bill of
lading quantity.
**Reject Qty**|  The quantity rejected for the part.
**Reason**|  The reject reason associated with the reject quantity.
**Reject Cost**|  For information only, the average cost times the reject
quantity.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
