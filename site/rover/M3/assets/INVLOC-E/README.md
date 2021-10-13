## Inventory Location Entry (INVLOC.E)
<PageHeader />

**Form Details**
[Form Details](../INVLOC-E-1/README.md)

**Purpose**
The INVLOC.E procedure is used to define the valid inventory locations which
may be used by the system.

The information defined for each location includes the name or ID of the
location, a description of the location, the general ledger account number
assigned to the location, the location type, and flags to indicate if negative
quantities are to be permitted and whether or not the defined location is for
maintaining inventory balances.

It is very important that inventory locations are not deleted from the system
unless they are not being referenced anywhere. You will not be allowed to
delete the inventory location if it is referenced in the inventory (INV) file.
The location will be referenced in the INV file if commitments, allocations,
order quantities, cycle dates or on-hand quantities have been entered against
the location. Before deleting a location, the location should be removed from
the control records and part records.

As an alternative to deleting a location, you can inactivate it. However, many
of the checks that you would make before deleting a location will need to be
made for inactiving a location. You will be able to inactivate a location even
if it is referenced in the INV file but you will no longer be able to make new
transactions to and from that location. Inactivating a location does not
affect existing records. Therefore, if you no longer want any transactions to
occur to and from this location, you will need to ensure that it is not
referenced on any parts records, open purchase orders, pending shipments, open
sales orders, control records, etc.

**Frequency of Use**
Inventory locations are usually assigned as a part of setting the system up
before it is used. This is because many other procedures, specifically
inventory transaction processing, require them to be present. After the
locations are initially defined new location may be added as required.

**Prerequisites**
The general ledger account numbers to be used in defining the inventory
locations must first be entered using [GLCHART.E](../GLCHART-E/README.md).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
