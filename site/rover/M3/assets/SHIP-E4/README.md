## Shipment Approval (SHIP.E4)
<PageHeader />

**Form Details**
[Form Details](../SHIP-E4-1/README.md)

**Purpose**
The [SHIP.E2](../SHIP-E2/README.md) procedure is used to approve a shipment for posting
to Accounts Receivable. This is an option procedure. A flag exists in
[SHIP.CONTROL](../SHIP-CONTROL/README.md) named "Require Approval?" that will require
this option to be used before any posting can occur.

The main purpose of this procedure is to allow the Accounting Department to
review all shipments prior to posting, rather than post directly after the
Shipping Department has flagged is as shipped.

The user has access to all of the same header information as is available in
[SHIP.E2](../SHIP-E2/README.md), but none of the line item or detail screens are
present. Any changes to part number, quantities, bins, etc., must be made via
[SHIP.E2](../SHIP-E2/README.md).

**Frequency of Use**
As required.

**Prerequisites**
Shipments must have been processed through the [SHIP.E2](../SHIP-E2/README.md)
procedure and the status must be "S" (shipped).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
