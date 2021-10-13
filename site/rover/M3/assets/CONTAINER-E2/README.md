## Container Receipt Confirmation and Price Update (CONTAINER.E2)
<PageHeader />

**Form Details**
[Header](../CONTAINER-E2-1/README.md)
[Line Items](../CONTAINER-E2-2/README.md)
[Attachments](../CONTAINER-E2-3/README.md)

**Purpose**
The CONTAINER.E2 procedure provides the ability to confirm container receipts
as well as the ability to update purchase order prices for those PO line items
on the container to be updated. The unit price and price per can be updated
from this screen. The affected purchase orders will be updated and PO booking
records will be created as needed.
When the container is physically received, the status should be changed to "R"
and the information should be verified for accuracy. When it is determined
that all information is correct on the container, the status should be changed
to "C" to confirm the receipt. This will create receipt records and cause
inventory transactions to occur. The container receipts will be posted through
the normal receipts posting process, [RECEIPTS.P1](../RECEIPTS-P1/README.md).

Once the receipts records have been created, the container cannot be deleted,
and the receipt records cannot be modified through this process.
[RECEIPTS.E2](../RECEIPTS-E2/README.md) can be used to correct individual receipt
records on the container.

**Frequency of Use**
As required.

**Prerequisites**
The container record to be updated must already exist and must be status "N"
or "R".

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
