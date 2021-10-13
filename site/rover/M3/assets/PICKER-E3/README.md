## Secondary Picklist Pull Entry Screen (PICKER.E3)
<PageHeader />

**Form Details**
[Form Details](../PICKER-E3-1/README.md)

**Purpose**
The PICKER.E3 provides a method of performing additional picklist processing
after the initial picklist process performed by [PICKER.E2](../PICKER-E2/README.md).
This procedure would normally be used in cases where the quantity for the end
item on the work has been has been increased after the initial picking process
has been performed. The picklist is preloaded with all of the quantities which
have not been pulled. This is determined by comparing the quantity required of
each component with the quantity already pulled or flagged as a shortage. The
operator makes changes only to those items that were not pulled for the amount
stated on the picking list. Shortages are then calculated automatically, but
may be set manually by the user if required. The shortage specified is added
to any existing shortage for the component on the work order, it does not
replace it.

When the record is filed inventory transactions records (IT) are created for
each component with a pulled quantity greater than zero, and shortage records
(SHORTS) are updated or created for any item with a short quantity. The work
order inventory record (WOINV) is posted for each component, and material
dollars are added to the work order record (WO). Inventory register records
(INVREG) are also created for each transaction for subsequent posting to the
general ledger.

**Frequency of Use**
Each time the quantity on the work order is increased after the initial pull
([PICKER.E2](../PICKER-E2/README.md)) and the additional materials for the work order
are pulled.

**Prerequisites**
Work order must have been previously processed through the initial picking
process using [PICKER.E2](../PICKER-E2/README.md).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
