## Picklist Pull Entry (PICKER.E2)
<PageHeader />

**Form Details**
[Picklist](../PICKER-E2-1/README.md)
[Change History](../PICKER-E2-2/README.md)

**Purpose**
The PICKER.E2 procedure is used to process the picklist after the materials
have been physically removed from stock. The picklist is preloaded with all of
the quantities which should have been pulled. In the event that more than one
bin or lot was used for any single item, multiple quantity lines are available
for each associated bin/lot actually picked. The operator makes changes only
to those items that were not pulled for the amount stated on the picking list.
Shortages are then calculated automatically, but may be set manually by the
user if required.

When the record is filed inventory transactions records (IT) are created for
each component with a pulled quantity greater than zero, and shortage records
(SHORTS) are created for any item with a short quantity. The work order
inventory record (WOINV) is posted for each component, and material dollars
are added to the work order record (WO) whose status is also set to "P"
(pulled). Inventory register records (INVREG) are also created for each
transaction for subsequent posting to the general ledger.

**Frequency of Use**
Each time the materials for a work order are pulled.

**Prerequisites**
Creation of the picklist by setting the work order status to "R" (released) in
[WO.E](../WO-E/README.md), and the actual kitting of the work order.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
