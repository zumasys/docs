## Field Service Order Entry (FSO.E)
<PageHeader />

**Form Details**
[General](../FSO-E-1/README.md)
[Work Performed](../FSO-E-2/README.md)
[Parts Used](../FSO-E-3/README.md)
[Revenue Summary](../FSO-E-4/README.md)
[Project](../FSO-E-5/README.md)
[Change History](../FSO-E-6/README.md)
[Attachments](../FSO-E-7/README.md)

**Purpose**
The FSO.E procedure is used to enter new service orders into the system and to
change existing service orders. The procedure consists of four pages. The
first page contains the general information about the customer and product
being serviced. The second page contains information about the hours, type of
work performed and their charge rates. The third page identifies all of the
materials utilized in the service call and their associated charges. The
fourth page provides a cost and revenue summary for the order.

**Frequency of Use**
As required.

**Prerequisites**
Initialization of the field service control record (FSO.CONTROL), and entry of
the customer and terms records to be referenced. If the orders are for
inventoried parts, the part number must exist on the Parts file and the
inventory locations must exist on the Invloc file. Also optional are the Rep
and Price files. All valid sales tax codes must be entered via the
[STAX.E](../STAX-E/README.md) procedure.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
