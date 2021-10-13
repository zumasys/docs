## Inventory Transaction Entry (IT.E2)
<PageHeader />

**Form Details**
[Form Details](../IT-E2-1/README.md)

**Purpose**
The IT.E2 procedure is used to enter multiple inventory transactions in one
entry which record the movement of materials from one location to another. The
operator enters the part numbers, quantities, and "from" and "to" locations
for each transaction. Alternatively, an inventory requisition number or a
receipt number can be entered to load all part numbers and quantities.

When the operators entry is filed the system creates a record for each
transaction in the Inventory Transaction file (IT) which records the pertinent
information about the transaction. At the same time it updates the inventory
balances in the Inventory file (INV) for the "from" and "to" locations and
inventory register records (INVREG).

If the "Negatives OK" flag in the associated INVLOC record for a given
transaction is set to "N" then the system will not allow the transaction to be
processed if the transaction will result in a negative at the "from" location.

**Frequency of Use**
As required.

**Prerequisites**
Entry of valid inventory locations ([INVLOC.E](../INVLOC-E/README.md)).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
